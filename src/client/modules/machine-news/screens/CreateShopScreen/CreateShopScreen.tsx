import * as React from 'react';
import { Tabs, message } from 'antd';
import {
  ProfileState,
  ProfileEffects,
  ProfileReducers,
  SelectOption,
} from '@client/store';
import CommonLayout from '@client/layouts/Page/CommonLayout';
import CreateShopStep1 from './components/CreateShopStep1';
import CreateShopStep2 from './components/CreateShopStep2';
import CreateShopStep3 from './components/CreateShopStep3';
import CreateShopStep4 from './components/CreateShopStep4';
import CreateShopStep5 from './components/CreateShopStep5';
import CreateShopTitle from './components/CreateShopTitle';
import { Brand, Shop } from '../../../../services/service-proxies';
import { getServiceProxy } from '../../../../services';
import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeFirebaseApp, getBase64Image, storePackages, paymentMethods } from '../../../../core';
import './CreateShopScreen.less';
import { UploadFile } from 'antd/lib/upload/interface';
import { config } from '@client/config';
import { withNamespaces } from '@client/i18n';
const TabPane = Tabs.TabPane;

interface Props {
  topBrands: Brand[];
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  updateFilters: (payload: { [key: string]: string | number }) => void;
  t: (key: string) => string;
}
interface State {
  currentStep: number;
  selectedPackage?: { label: string; value: number; price: number };
  selectedPaymentMethod?: SelectOption;
  shopInfo?: Shop;
  introImageList: {
    file: UploadFile;
    base64Url: string;
  }[];
  logoImageList: {
    file: UploadFile;
    base64Url: string;
  }[];
  loading: {
    createShop: boolean;
  };
}

class CreateShopScreen extends React.PureComponent<Props, State> {
  state: State = {
    currentStep: 1,
    selectedPackage: undefined,
    selectedPaymentMethod: undefined,
    shopInfo: undefined,
    introImageList: [],
    logoImageList: [],
    loading: {
      createShop: false,
    },
  };

  nextStep = () => {
    this.setState({
      currentStep: this.state.currentStep + 1,
    });
  }

  backStep = () => {
    this.setState({
      currentStep: this.state.currentStep - 1,
    });
  }

  handleShopInfoChange = (payload: { [key: string]: any }) => {
    this.setState({
      shopInfo: {
        ...this.state.shopInfo,
        ...payload,
      } as any,
    });
  }

  createShop = async () => {
    this.setState({
      loading: {
        ...this.state.loading,
        createShop: true,
      },
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
      const result = await serviceProxy.createShop({
        ...this.state.shopInfo,
        owner: this.props.profileState.authUser!.id,
        expiryDate: new Date().getTime() + this.state.selectedPackage!.value,
        introImages: introImageResult ? introImageResult.introImages : [],
        logoImage: logoImageResult ? logoImageResult.logoImage : '',
      });

      this.setState({
        shopInfo: {
          ...this.state.shopInfo,
          id: result._id,
        } as any,
        currentStep: this.state.currentStep + 1,
        loading: {
          ...this.state.loading,
          createShop: false,
        },
      });
      this.props.profileReducers.updateProfileInfo({ shopDomain: this.state.shopInfo!.domain });
    } catch (error) {
      this.setState({
        loading: {
          ...this.state.loading,
          createShop: false,
        },
      });
      message.error(JSON.parse(error.response).message || error.message);
    }
  }

  selectPackageChange = (payload: { package: number }) => {
    this.setState({
      selectedPackage: storePackages.filter((item) => item.value === payload.package)[0],
    });
  }

  paymentMethodChange = (payload: { paymentMethod: string }) => {
    this.setState({
      selectedPaymentMethod: paymentMethods.filter((item) => item.value === payload.paymentMethod)[0],
    });
  }

  addIntroImage = (file: UploadFile) => {
    getBase64Image(file, (base64Url: string) => {
      this.setState({
        introImageList: [...this.state.introImageList, { file, base64Url }],
      });
    });
  }

  removeIntroImage = (file: UploadFile) => {
    const index = this.state.introImageList.map((item) => item.file).indexOf(file);
    const newFileList = this.state.introImageList.slice();
    newFileList.splice(index, 1);

    this.setState({
      introImageList: newFileList,
    });
  }

  changeLogoImage = (file: UploadFile) => {
    getBase64Image(file, (base64Url: string) => {
      this.setState({
        logoImageList: [{ file, base64Url }],
      });
    });
  };

  render() {
    return (
      <div className='create-shop-screen'>
        <CommonLayout
          updateFilters={this.props.updateFilters}
          topBrands={this.props.topBrands}
          searchKeyword={this.props.searchKeyword}
          hasSideBar={true}
          hasMenuItems={true}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
        >
          <CreateShopTitle
            currentStep={this.state.currentStep}
            backStep={this.backStep}
          />

          <Tabs activeKey={String(this.state.currentStep)}>
            <TabPane tab='Step 1' key='1'>
              <CreateShopStep1 nextStep={this.nextStep} t={this.props.t} />
            </TabPane>

            <TabPane tab='Step 2' key='2'>
              <CreateShopStep2
                t={this.props.t}
                selectedPackage={this.state.selectedPackage}
                selectPackageChange={this.selectPackageChange}
                currentStep={this.state.currentStep}
                nextStep={this.nextStep}
                backStep={this.backStep}
              />
            </TabPane>

            <TabPane tab='Step 3' key='3'>
              <CreateShopStep3
                nextStep={this.nextStep}
                handleShopInfoChange={this.handleShopInfoChange}
                introImageList={this.state.introImageList}
                logoImageList={this.state.logoImageList}
                changeLogoImage={this.changeLogoImage}
                addIntroImage={this.addIntroImage}
                removeIntroImage={this.removeIntroImage}
              />
            </TabPane>

            <TabPane tab='Step 4' key='4'>
              <CreateShopStep4
                isCreating={this.state.loading.createShop}
                nextStep={this.nextStep}
                selectedPackage={this.state.selectedPackage!}
                selectedPaymentMethod={this.state.selectedPaymentMethod}
                paymentMethodChange={this.paymentMethodChange}
                createShop={this.createShop}
                logoImageList={this.state.logoImageList}
              />
            </TabPane>

            <TabPane tab='Step 5' key='5'>
              <CreateShopStep5 t={this.props.t} />
            </TabPane>
          </Tabs>
        </CommonLayout>
      </div>
    );
  }
}

export default withNamespaces('create-shop')(CreateShopScreen);
