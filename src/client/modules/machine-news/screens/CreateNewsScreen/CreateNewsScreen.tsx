import React, { Component } from 'react';
import { ProfileState, ProfileReducers, ProfileEffects } from '@client/store';
import { Header } from '@client/components';
import { CommonKeyword, Model, Province, Brand, Category, WeightRange, RentalPeriod, User } from '@client/services/service-proxies';
import querystring from 'query-string';
import { getServiceProxy } from '@client/services';
import { message } from 'antd';
import CreatePostStep1 from './components/CreatePostStep1';
import CreatePostStep2 from './components/CreatePostStep2';
import CreatePostStep3 from './components/CreatePostStep3';
import CreatePostStep4 from './components/CreatePostStep4';
import CreatePostStep5 from './components/CreatePostStep5';
import './components/CreatePost.less';
import debounce from 'lodash/debounce';
import { withNamespaces } from '@client/i18n';
import * as jsCookies from 'js-cookie';
import Router from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';

interface Props {
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  addNewModel: (payload: Model) => void;
  updateFilters: (payload: {[key: string]: string|number}) => void;
  t: (key: string) => string;
}
interface State {
  userProfile: User;
  step: number;
  loading: boolean;
  fileList: any;
  models: Model[];
  brands: Brand[];
  commonKeywords: CommonKeyword[];
  categories: Category[];
  provinces: Province[];
  weightRanges: WeightRange[];
  rentalPeriods: RentalPeriod[];

  newsType?: string;
  categoryId?: string;
  brand?: string;
  model?: string;
  weight?: number;
  year?: number;
  location?: string;
  state?: string;
  usedHours?: number;
  serialNo?: string;
  price?: number;
  priceType?: string;
  title?: string;
  description?: string;
  shop?: string;
  selectedWeightRange?: number;
  selectedRentalPeriod?: number;
  imageUrls?: any;
}
class CreateNewsScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.getBrands = debounce(this.getBrands, 500);
    this.getModels = debounce(this.getModels, 500);
  }

  state: State = {
    userProfile: undefined as any,
    step: 1,
    fileList: [],
    loading: false,
    models: [],
    brands: [],
    commonKeywords: [],
    categories: [],
    provinces: [],
    weightRanges: [],
    rentalPeriods: [],

    newsType: undefined,
    categoryId: undefined,
    brand: undefined,
    model: undefined,
    weight: undefined,
    year: undefined,
    location: undefined,
    state: undefined,
    usedHours: 0,
    serialNo: undefined,
    imageUrls: [],
    price: 0,
    priceType: 'FIXED',
    title: undefined,
    description: undefined,
    shop: undefined,
    selectedWeightRange: undefined,
    selectedRentalPeriod: undefined,
  };

  componentDidMount () {
    this.getCommonKeywords();
    this.getUserProfile();
    this.getBrands('');
    this.getCategories();
    this.getProvinces();
    this.getWeightRanges();
    this.getRentalPeriods();

    const query = querystring.parse(window.location.search);
    if (query.shop) {
      this.setState({
        shop: query.shop as any,
      });
    }
  }

  getUserProfile = async () => {
    try {
      const idToken = jsCookies.get('token');
      const serviceProxy = getServiceProxy(idToken);
      const userProfile = await serviceProxy.findProfile();
      this.setState({
        userProfile,
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  getWeightRanges = async () => {
    try {
      const serviceProxy = getServiceProxy();
      const weightRanges = await serviceProxy.getAllWeightRanges();
      this.setState({
        weightRanges: weightRanges.data,
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  getRentalPeriods = async () => {
    try {
      const serviceProxy = getServiceProxy();
      const rentalPeriods = await serviceProxy.getAllRentalPeriods();
      this.setState({
        rentalPeriods: rentalPeriods.data,
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  getCommonKeywords = async () => {
    try {
      const serviceProxy = getServiceProxy();
      const commonKeywords = await serviceProxy.getCommonKeywords(20, 'count|desc', undefined, undefined);
      this.setState({
        commonKeywords: commonKeywords.data,
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  getCategories = async () => {
    try {
      const serviceProxy = getServiceProxy();
      const categories = await serviceProxy.findCategories();
      this.setState({
        categories: categories.data,
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  getProvinces = async () => {
    try {
      const serviceProxy = getServiceProxy();
      const provinces = await serviceProxy.findProvinces();
      this.setState({
        provinces: provinces.data,
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  getBrands = async (value: string) => {
    this.setState({
      loading: true,
    });

    try {
      const serviceProxy = getServiceProxy();
      const brands = await serviceProxy.findBrands(
        value,
        20,
        'slug|asc',
        undefined,
        undefined,
      );

      this.setState({
        loading: false,
        brands: brands.data,
      });
    } catch (error) {
      message.error(error.message);
      this.setState({
        loading: false,
      });
    }
  }

  getModels = async (payload: {[key: string]: any}) => {
    let allowed = false;
    if (payload.search) {
      allowed = true;
    } else if ((payload.categoryId || this.state.categoryId) && (payload.brand || this.state.brand)) {
      allowed = true;
    }

    if (allowed) {
      this.setState({
        loading: true,
      });

      try {
        const serviceProxy = getServiceProxy();
        const models = await serviceProxy.findModels(
          payload.search,
          payload.brand || this.state.brand,
          payload.categoryId || this.state.categoryId,
          20,
          'slug|asc',
          undefined,
          undefined,
        );

        this.setState({
          loading: false,
          models: models.data,
        });
      } catch (error) {
        message.error(error.message);
        this.setState({
          loading: false,
        });
      }
    }
  }

  changeFileList = (payload: any) => {
    this.setState({
      fileList: payload.fileList,
      imageUrls: this.state.imageUrls.filter((val: any) => payload.fileList.map((item: any) => item.uid).indexOf(val.uid) >= 0),
    });
  }

  toStep = (step: number) => {
    this.setState({
      step,
    });
  }

  changeData = (option: any) => {
    this.setState(option);
  }

  submit = async () => {
    if (!this.state.loading) {
      const imageUrls = this.state.imageUrls.sort((a: any, b: any) => {
        if (a.uid < b.uid) {
          return -1;
        } else if (a.uid > b.uid) {
          return 1;
        }
        return 0;
      });

      this.setState({
        loading: true,
      });

      try {
        const isSeller = ['SELL', 'LEASE'].indexOf(this.state.newsType!) > -1;
        const data = {
          ...this.state,
          imageUrls,
          weightRange: this.state.selectedWeightRange,
          rentalPeriod: isSeller ? undefined : this.state.selectedRentalPeriod,
          fileList: [],
          owner: this.props.profileState.authUser && this.props.profileState.authUser.id ? this.props.profileState.authUser.id : '',
          status: 'PUBLIC',
        };
        const idToken = await firebase.auth().currentUser!.getIdToken();
        const serviceProxy = await getServiceProxy(idToken);
        await serviceProxy.createNews(data);
        message.success(`${this.props.t('create-news:create-successful')}`);
        Router.push('/quan-li-tin-dang');
      } catch (err) {
        message.error(err.response || `${this.props.t('common:error-happen')}`);
        this.setState({
          loading: false,
        });
      }
    }
  }

  nextStep = () => {
    let title = this.state.title;
    if (this.state.step === 3 || this.state.step === 4) {
      const newsType = this.state.newsType;
      const selectedBrand = this.state.brands.filter((item) => item._id === this.state.brand)[0];
      const selectedModel = this.state.models.filter((item: Model) => item._id === this.state.model)[0];

      switch (newsType) {
        case 'SELL':
          title = `${this.state.year ? this.state.year : ''} ${selectedBrand.name.toUpperCase()} ${selectedModel.name} ${this.state.serialNo ? this.state.serialNo : ''}`;
          break;
        case 'LEASE':
          title = `${this.state.year ? this.state.year : ''} ${selectedBrand.name.toUpperCase()} ${selectedModel.name} ${this.state.serialNo ? this.state.serialNo : ''}`;
          break;
        case 'BUY':
          title = `Tìm mua ${selectedBrand.name.toUpperCase()} ${selectedModel.name}`;
          break;
        case 'RENT':
          title = `Tìm thuê ${selectedBrand.name.toUpperCase()} ${selectedModel.name}`;
          break;
        default:
          break;
      }
    }

    this.setState({
      step: this.state.step !== 5 ? this.state.step + 1 : 5,
      title,
    });
  }

  backStep = () => {
    this.setState({
      step: this.state.step === 1 ? 1 : this.state.step - 1,
    });
  }

  addNewModel = (payload: Model) => {
    const newModels = [...this.state.models, payload].sort((a, b) => {
      if (a.slug < b.slug) {
        return -1;
      } else if (a.slug > b.slug) {
        return 1;
      }
      return 0;
    });
    this.setState({
      models: newModels,
    });
  }

  updateUserPhoneNo = (payload: {phoneNo: string}) => {
    this.setState({
      userProfile: {
        ...this.state.userProfile,
        phoneNo: payload.phoneNo,
      },
    });
  }

  calculateScreen = () => {
    switch (this.state.step) {
      case 1:
        return <CreatePostStep1
          userProfile={this.state.userProfile}
          nextStep={this.nextStep}
          newsType={this.state.newsType}
          changeData={this.changeData}
          updateUserPhoneNo={this.updateUserPhoneNo}
          t={this.props.t}
        ></CreatePostStep1>;
      case 2:
        return <CreatePostStep2
          newsType={this.state.newsType}
          selectedRentalPeriod={this.state.selectedRentalPeriod}
          selectedWeightRange={this.state.selectedWeightRange}
          weightRanges={this.state.weightRanges}
          rentalPeriods={this.state.rentalPeriods}
          nextStep={this.nextStep}
          backStep={this.backStep}
          changeData={this.changeData}
          brands={this.state.brands}
          models={this.state.models}
          categories={this.state.categories}
          categoryId={this.state.categoryId}
          brand={this.state.brand}
          model={this.state.model}
          weight={this.state.weight}
          year={this.state.year}
          addNewModel={this.addNewModel}
          loading={this.state.loading}
          getBrands={this.getBrands}
          getModels={this.getModels}
          t={this.props.t}
        ></CreatePostStep2>;
      case 3:
        return <CreatePostStep3
          newsType={this.state.newsType}
          nextStep={this.nextStep}
          backStep={this.backStep}
          changeData={this.changeData}
          provinces={this.state.provinces}
          location={this.state.location}
          state={this.state.state}
          usedHours={this.state.usedHours}
          serialNo={this.state.serialNo}
          price={this.state.price}
          priceType={this.state.priceType}
          t={this.props.t}
        ></CreatePostStep3>;
      case 4:
        return <CreatePostStep4
          newsType={this.state.newsType}
          nextStep={this.nextStep}
          backStep={this.backStep}
          fileList={this.state.fileList}
          imageUrls={this.state.imageUrls}
          title={this.state.title}
          description={this.state.description}
          changeData={this.changeData}
          changeFileList={this.changeFileList}
          submit={this.submit}
          t={this.props.t}
        ></CreatePostStep4>;
      case 5:
        return <CreatePostStep5
          isCreate={true}
          selectedRentalPeriod={this.state.selectedRentalPeriod}
          selectedWeightRange={this.state.selectedWeightRange}
          weightRanges={this.state.weightRanges}
          rentalPeriods={this.state.rentalPeriods}
          backStep={this.backStep}
          brands={this.state.brands}
          categories={this.state.categories}
          provinces={this.state.provinces}
          models={this.state.models}
          fileList={this.state.fileList}
          newsType={this.state.newsType}
          imageUrls={this.state.imageUrls}
          categoryId={this.state.categoryId}
          brand={this.state.brand}
          model={this.state.model}
          weight={this.state.weight}
          year={this.state.year}
          location={this.state.location}
          state={this.state.state}
          usedHours={this.state.usedHours}
          serialNo={this.state.serialNo}
          price={this.state.price}
          priceType={this.state.priceType}
          title={this.state.title}
          description={this.state.description}
          changeFileList={this.changeFileList}
          changeData={this.changeData}
          toStep={this.toStep}
          submit={this.submit}
          loading={this.state.loading}
          getModels={this.getModels}
          getBrands={this.getBrands}
          addNewModel={this.addNewModel}
          t={this.props.t}
        ></CreatePostStep5>;
      default:
        return <CreatePostStep1
          userProfile={this.state.userProfile}
          nextStep={this.nextStep}
          newsType={this.state.newsType}
          changeData={this.changeData}
          updateUserPhoneNo={this.updateUserPhoneNo}
          t={this.props.t}
        ></CreatePostStep1>;
    }
  }

  render() {
    return (
      <div>
        <Header
          commonKeywords={this.state.commonKeywords}
          updateFilters={this.props.updateFilters}
          searchKeyword={this.props.searchKeyword}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
        />

        <div className='create-post create-post__container'>
          {this.calculateScreen()}
        </div>
      </div>
    );
  }
}

export default withNamespaces('create-news')(CreateNewsScreen);
