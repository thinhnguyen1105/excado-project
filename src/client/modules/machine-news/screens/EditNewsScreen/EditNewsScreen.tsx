import React, { Component } from 'react';
import { ProfileState, ProfileReducers, ProfileEffects } from '@client/store';
import { Header } from '@client/components';
import { CommonKeyword, Province, Brand, Category, News, Model, WeightRange, RentalPeriod } from '@client/services/service-proxies';
import './EditNewsScreen.less';
import { message } from 'antd';
import { Router } from '@client/routes';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getServiceProxy } from '@client/services';
import debounce from 'lodash/debounce';
import CreatePostStep1 from '../CreateNewsScreen/components/CreatePostStep1';
import CreatePostStep2 from '../CreateNewsScreen/components/CreatePostStep2';
import CreatePostStep3 from '../CreateNewsScreen/components/CreatePostStep3';
import CreatePostStep4 from '../CreateNewsScreen/components/CreatePostStep4';
import CreatePostStep5 from '../CreateNewsScreen/components/CreatePostStep5';
import { withNamespaces } from '@client/i18n';
import Head from 'next/head';
import { config } from '@client/config';
import { getImageUrl } from '@client/core';

interface Props {
  commonKeywords: CommonKeyword[];
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  provinces: Province[];
  brands: Brand[];
  categories: Category[];
  weightRanges: WeightRange[];
  rentalPeriods: RentalPeriod[];
  data: News;
  updateFilters: (payload: {[key: string]: string|number}) => void;
  t: (key: string) => string;
}
interface State {
  step: number;
  loading: boolean;
  fileList: any;
  models: Model[];
  brands: Brand[];

  _id?: string;
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
class EditNewsScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.getBrands = debounce(this.getBrands, 500);
    this.getModels = debounce(this.getModels, 500);
  }

  state: State = {
    step: 5,
    fileList: this.props.data ? this.props.data.imageUrls.map((item: any, index: number) => ({
      uid: item,
      name: `${index}.jpg`,
      status: 'done',
      url: getImageUrl(item, 'small'),
    })) : [],
    loading: false,
    models: [],
    brands: this.props.brands,

    _id: this.props.data._id,
    newsType: this.props.data.newsType,
    categoryId: this.props.data.categoryId._id,
    brand: this.props.data.brand ? this.props.data.brand._id : undefined,
    model: this.props.data.model ? this.props.data.model._id : undefined,
    weight: this.props.data.weight,
    year: this.props.data.year,
    location: this.props.data.location ? this.props.data.location._id : undefined,
    state: this.props.data.state,
    usedHours: this.props.data.usedHours,
    serialNo: this.props.data.serialNo,
    imageUrls: this.props.data.imageUrls.map((item: any) => ({
      uid: item,
      url: item,
    })),
    price: this.props.data.price,
    priceType: this.props.data.priceType,
    title: this.props.data.title,
    description: this.props.data.description,
    selectedWeightRange: this.props.data.weightRange ? this.props.data.weightRange._id : undefined,
    selectedRentalPeriod: this.props.data.rentalPeriod ? this.props.data.rentalPeriod._id : undefined,
  };

  addNewModel = (payload: Model) => {
    this.setState({
      models: [...this.state.models, payload],
    });
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

  getModels = async (payload: { [key: string]: any }) => {
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

  fetchModelsSuccess = (payload: any) => {
    this.setState({
      models: payload,
    });
  }

  submit = async () => {
    this.setState({
      loading: true,
    });

    try {
      const isSeller = ['SELL', 'LEASE'].indexOf(this.state.newsType!) > -1;
      // tslint:disable-next-line:no-console
      console.log(this.state);
      if (!isSeller || this.state.imageUrls.length) {
        const data = {
          ...this.state,
          weightRange: this.state.selectedWeightRange,
          rentalPeriod: isSeller ? undefined : this.state.selectedRentalPeriod,
          fileList: [],
          owner: this.props.profileState ? this.props.profileState.authUser ? this.props.profileState.authUser.id : '' : '',
          status: 'PUBLIC',
        };
        const idToken = await firebase.auth().currentUser!.getIdToken();
        const serviceProxy = await getServiceProxy(idToken);
        await serviceProxy.updateNews(this.state._id!, {
          operation: 'updatePending',
          payload: data,
        });
        message.success(this.props.t(`create-news:edit-news-success`));
        Router.push('/quan-li-tin-dang');
      } else {
        message.error(this.props.t(`create-news:image-require`));
      }
      this.setState({
        loading: false,
      });
    } catch (err) {
      message.error(err.message);
      this.setState({
        loading: false,
      });
    }
  }

  calculateScreen = () => {
    switch (this.state.step) {
      case 1:
        return <CreatePostStep1
          nextStep={this.nextStep}
          newsType={this.state.newsType}
          changeData={this.changeData}
          updateUserPhoneNo={() => null}
          t={this.props.t}
        ></CreatePostStep1>;
      case 2:
        return <CreatePostStep2
          newsType={this.state.newsType}
          selectedRentalPeriod={this.state.selectedRentalPeriod}
          selectedWeightRange={this.state.selectedWeightRange}
          weightRanges={this.props.weightRanges}
          rentalPeriods={this.props.rentalPeriods}
          nextStep={this.nextStep}
          backStep={this.backStep}
          changeData={this.changeData}
          brands={this.props.data.brand ? [...this.state.brands, this.props.data.brand] : this.state.brands}
          models={this.props.data.model ? [...this.state.models, this.props.data.model] : this.state.models}
          categories={this.props.categories}
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
          provinces={this.props.provinces}
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
          isCreate={false}
          selectedRentalPeriod={this.state.selectedRentalPeriod}
          selectedWeightRange={this.state.selectedWeightRange}
          weightRanges={this.props.weightRanges}
          rentalPeriods={this.props.rentalPeriods}
          backStep={this.backStep}
          brands={this.props.data.brand ? [...this.state.brands, this.props.data.brand] : this.state.brands}
          models={this.props.data.model ? [...this.state.models, this.props.data.model] : this.state.models}
          categories={this.props.categories}
          provinces={this.props.provinces}
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
          nextStep={this.nextStep}
          newsType={this.state.newsType}
          changeData={this.changeData}
          updateUserPhoneNo={() => null}
          t={this.props.t}
        ></CreatePostStep1>;
    }
  }

  nextStep = () => {
    this.setState({
      step: this.state.step !== 5 ? this.state.step + 1 : 5,
    });
  }

  backStep = () => {
    this.setState({
      step: this.state.step === 1 ? 1 : this.state.step - 1,
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>{`Chỉnh sửa tin đăng | timmay.vn`}</title>
          <meta property='fb:app_id' content={config.facebookAppId} />
          <meta property='og:url' content={`timmay.vn`} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={`Chỉnh sửa tin đăng | timmay.vn`} />
          <meta property='og:image:url' content={'/static/images/logo-timmay.png'} />
          <meta property='og:image:width' content='800' />
          <meta property='og:image:height' content='600' />
        </Head>
        <Header
          commonKeywords={this.props.commonKeywords}
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

export default withNamespaces('create-news')(EditNewsScreen);
