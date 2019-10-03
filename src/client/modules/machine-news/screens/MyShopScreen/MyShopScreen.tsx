import React from 'react';
import CommonLayout from '@client/layouts/Page/CommonLayout';
import { Brand, Shop, Category, WeightRange, ShopPackage } from '@client/services/service-proxies';
import { ProfileState, ProfileEffects, ProfileReducers, FollowReducers, FollowEffects } from '@client/store';
import UserTitle from '../DashboardScreen/components/UserTitle';
import { withNamespaces } from '@client/i18n';
import { Tabs, message, Button, Modal } from 'antd';
import ShopInfo from './components/ShopInfo';
import { UploadFile } from 'antd/lib/upload/interface';
import { getBase64Image, initializeFirebaseApp } from '@client/core';
import './MyShopScreen.less';
import { config } from '@client/config';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getServiceProxy } from '@client/services';
import ShopNews from './components/ShopNews';
import { isMobile } from 'react-device-detect';
import Head from 'next/head';
import ExtendShopStep1 from './components/ExtendShopStep1';
import ExtendShopStep2 from './components/ExtendShopStep2';
import * as jsCookie from 'js-cookie';

interface Props {
  shopInfo: Shop;
  searchKeyword: string;
  categories: Category[];
  brands: Brand[];
  weightRanges: WeightRange[];
  profileState: ProfileState;
  profileReducers: ProfileEffects & ProfileReducers;
  followReducers: FollowReducers & FollowEffects;
  updateFilters: (payload: { [key: string]: string | number }) => void;
  t: (key: string) => string;
}
interface State {
  activeKey: 'SHOP_INFO' | 'SHOP_NEWS';
  shopInfo: Shop;
  loading: boolean;
  introImageList: {
    file: UploadFile;
    base64Url: string;
  }[];
  logoImageList: {
    file: UploadFile;
    base64Url: string;
  }[];
  shopPackages: ShopPackage[];
  extendShopStep: number;
  selectedpackage?: ShopPackage;
  loadingExtendShop: boolean;
}
const SHOP_INFO = 'SHOP_INFO';
const SHOP_NEWS = 'SHOP_NEWS';
class MyShopScreen extends React.PureComponent<Props, State> {
  state: State = {
    activeKey: 'SHOP_INFO',
    shopInfo: this.props.shopInfo,
    introImageList: [],
    logoImageList: [],
    loading: false,
    shopPackages: [],
    extendShopStep: 0,
    selectedpackage: undefined,
    loadingExtendShop: false,
  };

  componentDidMount () {
    this.getShopPackages();
  }

  getShopPackages = async () => {
    try {
      const idToken = jsCookie.get(`token`);
      const serviceProxy = getServiceProxy(idToken);
      const shopPackageResult = await serviceProxy.getShopPackages();

      this.setState({
        shopPackages: shopPackageResult.data,
      });
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    }
  }

  addIntroImage = (file: UploadFile) => {
    getBase64Image(file, (base64Url: string) => {
      this.setState({
        introImageList: [...this.state.introImageList, { file, base64Url }],
      });
    });
  }

  removeIntroImage = (file: UploadFile) => {
    let index = this.state.introImageList.map((item) => item.file).indexOf(file);
    if (index > -1) {
      const newFileList = this.state.introImageList.slice();
      newFileList.splice(index, 1);

      this.setState({
        introImageList: newFileList,
      });
    } else {
      index = this.state.shopInfo.introImages.indexOf(file.url as any);
      const newFileList = this.props.shopInfo.introImages.slice();
      newFileList.splice(index, 1);
      this.setState({
        shopInfo: {
          ...this.state.shopInfo,
          introImages: newFileList,
        },
      });
    }
  }

  changeLogoImage = (file: UploadFile) => {
    getBase64Image(file, (base64Url: string) => {
      this.setState({
        logoImageList: [{ file, base64Url }],
      });
    });
  };

  updateShop = async (values: Partial<Shop>) => {
    this.setState({
      loading: true,
    });

    try {
      // upload intro images
      let introImageResult: any;
      if (this.state.introImageList.length > 0) {
        const introImageFormData = new FormData();
        this.state.introImageList.forEach((item) => {
          introImageFormData.append('introImage', item.file as any);
        });

        introImageResult = await fetch(`${config.url.api}/upload-image/shop-intro-images`, {
          method: 'POST',
          body: introImageFormData,
        }).then((res) => res.json());
      }

      // upload logo image
      let logoImageResult: any;
      if (this.state.logoImageList.length > 0) {
        const logoImageFormData = new FormData();
        this.state.logoImageList.forEach((item) => {
          logoImageFormData.append('logoImage', item.file as any);
        });

        logoImageResult = await fetch(`${config.url.api}/upload-image/shop-logo-image`, {
          method: 'POST',
          body: logoImageFormData,
        }).then((res) => res.json());
      }

      // create shop
      initializeFirebaseApp();
      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = getServiceProxy(idToken);
      await serviceProxy.updateShop(this.props.shopInfo._id, {
        operation: 'updateDetail',
        payload: {
          ...values,
          introImages: introImageResult ? [...introImageResult.introImages, ...this.state.shopInfo.introImages] : this.state.shopInfo.introImages,
          logoImage: logoImageResult ? logoImageResult.logoImage : this.state.shopInfo.logoImage,
        },
      });

      this.setState({
        shopInfo: {
          ...values,
          introImages: introImageResult ? [...introImageResult.introImages, ...this.state.shopInfo.introImages] : this.state.shopInfo.introImages,
          logoImage: logoImageResult ? logoImageResult.logoImage : this.state.shopInfo.logoImage,
        } as any,
        logoImageList: [],
        introImageList: [],
        loading: false,
      });
      message.success(this.props.t(`my-shop:update-info-success`));
    } catch (error) {
      this.setState({
        loading: false,
      });
      message.error(error.message || JSON.parse(error.response).message);
    }
  }

  closeExtendShopModal = () => {
    this.setState({
      extendShopStep: 0,
    });
  }

  openExtendShopModal = () => {
    this.setState({
      extendShopStep: 1,
    });
  }

  selectedPackageChange = (newPackage: ShopPackage) => {
    this.setState({
      selectedpackage: newPackage,
    });
  }

  handleExtendShop = async () => {
    try {
      if (!this.state.selectedpackage) {
        message.error(this.props.t('my-shop:please-select-package'));
      } else {
        this.setState({
          loadingExtendShop: true,
        });

        const idToken = await firebase.auth().currentUser!.getIdToken();
        const serviceProxy = getServiceProxy(idToken);
        await serviceProxy.createShopExtendRequest({
          shop: this.state.shopInfo._id,
          package: this.state.selectedpackage!._id,
        });

        this.setState({
          loadingExtendShop: false,
          extendShopStep: 2,
        });
      }
    } catch (error) {
      message.error(error.message);
      this.setState({
        loadingExtendShop: false,
      });
    }
  }

  render() {
    const translate = this.props.t;

    return (
      <div className='my-shop-screen'>
        <Head>
          <title>{`Cửa hàng của tôi | timmay.vn`}</title>
          <meta property='fb:app_id' content={config.facebookAppId} />
          <meta property='description' content={this.props.shopInfo.description} />
          <meta property='og:url' content={`timmay.vn`} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={`Cửa hàng của tôi | timmay.vn`} />
          <meta property='og:description' content={this.props.shopInfo.description} />
          <meta property='og:image:url' content={this.props.shopInfo.introImages.length > 0 ? this.props.shopInfo.introImages[0] : '/static/images/logo-timmay.png'} />
          <meta property='og:image:width' content='800' />
          <meta property='og:image:height' content='600' />
        </Head>

        <CommonLayout
          updateFilters={this.props.updateFilters}
          topBrands={[]}
          searchKeyword={this.props.searchKeyword}
          hasSideBar={false}
          hasMenuItems={false}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
        >
          <UserTitle title={translate('my-shop:my-shop')} />

          <div className='my-shop-container'>
            <Tabs activeKey={this.state.activeKey} onChange={(activeKey: any) => activeKey ? this.setState({ activeKey }) : ''}>
              <Tabs.TabPane tab={translate('my-shop:shop-info')} key={SHOP_INFO}>
                <ShopInfo
                  loading={this.state.loading}
                  introImageList={[...this.state.shopInfo.introImages, ...this.state.introImageList] as any}
                  logoImageList={this.state.logoImageList.length > 0 ? this.state.logoImageList : this.state.shopInfo.logoImage as any}
                  shopInfo={this.props.shopInfo}
                  updateShop={this.updateShop}
                  removeIntroImage={this.removeIntroImage}
                  changeLogoImage={this.changeLogoImage}
                  addIntroImage={this.addIntroImage}
                  openExtendModal={this.openExtendShopModal}
                />
              </Tabs.TabPane>

              <Tabs.TabPane tab={translate('my-shop:shop-news')} key={SHOP_NEWS}>
                <ShopNews
                  shopInfo={this.props.shopInfo}
                  categories={this.props.categories}
                  brands={this.props.brands}
                  weightRanges={this.props.weightRanges}
                  profileState={this.props.profileState}
                  profileReducers={this.props.profileReducers}
                  followReducers={this.props.followReducers}
                />
              </Tabs.TabPane>

              <Tabs.TabPane
                key={undefined}
                tab={
                  <div>
                    {!isMobile
                      ? <a href={`/dang-tin?shop=${this.props.shopInfo._id}`}>
                        <Button type='primary' icon='plus'>{translate('my-shop:create-shop-news')}</Button>
                      </a>
                      : <div></div>}
                  </div>
                }
              />
            </Tabs>
            {isMobile
              ? <a href={`/dang-tin?shop=${this.props.shopInfo._id}`}>
                <Button className='button-create-shop-news-mobile' type='primary' icon='plus'>{translate('my-shop:create-shop-news')}</Button>
              </a>
              : <div></div>}
          </div>
        </CommonLayout>

        <Modal
          width={678}
          title={translate('my-shop:select-your-package')}
          visible={this.state.extendShopStep > 0}
          okText={translate('my-shop:confirm')}
          cancelText={this.state.extendShopStep === 2 ? translate(`my-shop:close`) : translate(`my-shop:cancel`)}
          okButtonProps={this.state.extendShopStep === 2 ? {style: {display: 'none'}} : {}}
          onOk={this.handleExtendShop}
          onCancel={this.closeExtendShopModal}
          className='extend-shop'
          confirmLoading={this.state.loadingExtendShop}
        >
          <Tabs activeKey={String(this.state.extendShopStep)}>
            <Tabs.TabPane tab={translate('my-shop:shop-info')} key='1'>
              <ExtendShopStep1
                t={this.props.t}
                selectedPackage={this.state.selectedpackage}
                selectPackageChange={this.selectedPackageChange}
                shopPackages={this.state.shopPackages}
              />
            </Tabs.TabPane>

            <Tabs.TabPane tab={translate('my-shop:shop-info')} key='2'>
              <ExtendShopStep2 t={this.props.t} />
            </Tabs.TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  }
}

export default withNamespaces('my-shop')(MyShopScreen);
