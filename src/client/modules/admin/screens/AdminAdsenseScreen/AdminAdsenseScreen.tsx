import React from 'react';
import './AdminAdsenseScreen.less';
import { Authorize } from '@client/components';
import { withRematch, initStore } from '@client/store';
import { Row, Col, message, Spin } from 'antd';
import AdsensePositions from './components/AdsensePositions';
import AdsenseInfo from './components/AdsenseInfo';
import { UploadFile } from 'antd/lib/upload/interface';
import { Adsense } from '@client/services/service-proxies';
import { config } from '@client/config';
import { getServiceProxy } from '@client/services';
import firebase from 'firebase/app';
import 'firebase/auth';
import { withNamespaces } from '@client/i18n';

interface Props {
  t: (key: string) => string;
}
interface State {
  data: Adsense[];
  before?: string;
  after?: string;
  first: number;
  sortBy: string;
  loading: {
    form: boolean;
    data: boolean;
  };
  logoImage?: UploadFile;
  selectedAdsense?: Adsense;
}
class AdminAdsense extends React.PureComponent<Props, State> {
  state: State = {
    data: [],
    before: undefined,
    after: undefined,
    first: 10,
    sortBy: 'position|asc',
    loading: {
      form: false,
      data: false,
    },
    logoImage: undefined,
    selectedAdsense: {
      position: 1,
    } as any,
  };

  componentDidMount () {
    this.getData();
  }

  getData = async () => {
    this.setState({
      loading: {
        ...this.state.loading,
        data: true,
      },
    });

    try {
      const idToken: any = await firebase.auth().currentUser!.getIdToken();
      const serviceProxies = getServiceProxy(idToken);
      const result = await serviceProxies.getAdsense(
        this.state.first,
        this.state.sortBy,
        undefined,
        undefined,
      );

      this.setState({
        data: result.data,
        loading: {
          ...this.state.loading,
          data: false,
        },
        selectedAdsense: result.data[0] ? result.data[0] : {
          position: 1,
        } as any,
      });
    } catch (error) {
      message.error(error.message);
      this.setState({
        loading: {
          ...this.state.loading,
          data: false,
        },
      });
    }
  }

  handleOk = async (values: {[key: string]: any}) => {
    this.setState({
      loading: {
        ...this.state.loading,
        form: true,
      },
    });

    try {
      // uploadimage
      let imageUrl = '';
      if (this.state.logoImage) {
        if (config.upload.allowImageExt.test(this.state.logoImage.name)) {
          const logoImageFormData = new FormData();
          logoImageFormData.append('adsenseImage', this.state.logoImage as any);
          logoImageFormData.append('adsensePosition', String(this.state.selectedAdsense!.position));

          const logoImageResult = await fetch(`${config.url.api}/upload-image/adsense-image`, {
            method: 'POST',
            body: logoImageFormData,
          }).then((res) => res.json());

          imageUrl = logoImageResult.adsenseImage;
        } else {
          message.error(this.props.t('admin-adsense:allow-image-type'));
        }
      }

      // create/update
      const idToken: any = await firebase.auth().currentUser!.getIdToken();
      const serviceProxies = getServiceProxy(idToken);
      if (this.state.selectedAdsense && this.state.selectedAdsense._id) {
        // update
        await serviceProxies.updateAdsense(this.state.selectedAdsense._id, {
          operation: 'updateDetail',
          payload: {
            name: values.name,
            hyperlink: values.hyperlink,
            imageUrl: imageUrl ? imageUrl : this.state.selectedAdsense.imageUrl,
          },
        });

        this.setState({
          loading: {
            ...this.state.loading,
            form: false,
          },
          selectedAdsense: {
            ...this.state.selectedAdsense,
            ...values,
            imageUrl: imageUrl ? imageUrl : this.state.selectedAdsense.imageUrl,
          },
          data: this.state.data.map((item) => item._id === this.state.selectedAdsense!._id ? {
            ...item,
            ...values,
            imageUrl: imageUrl ? imageUrl : this.state.selectedAdsense!.imageUrl,
          } : item),
        });
        message.success(this.props.t('admin-adsense:update-success'));
      } else {
        // create
        const result = await serviceProxies.createAdsense({
          name: values.name,
          hyperlink: values.hyperlink,
          position: this.state.selectedAdsense!.position,
          imageUrl,
        });

        this.setState({
          loading: {
            ...this.state.loading,
            form: false,
          },
          selectedAdsense: {
            _id: (result as any).id,
            ...values,
            position: this.state.selectedAdsense!.position,
            imageUrl,
          } as any,
          data: [
            {
              _id: (result as any).id,
              ...values,
              position: this.state.selectedAdsense!.position,
              imageUrl,
              createdAt: new Date().getTime(),
          } as any,
            ...this.state.data,
          ],
        });
        message.success(this.props.t('admin-adsense:update-success'));
      }
    } catch (error) {
      message.error(error.message);
      this.setState({
        loading: {
          ...this.state.loading,
          form: false,
        },
      });
    }
  }

  uploadLogoImage = async (file: UploadFile) => {
    this.setState({
      logoImage: file,
    });
  }

  selectedAdsChange = (position: number) => {
    const selectedAds = this.state.data.filter((item) => item.position === position)[0];
    this.setState({
      selectedAdsense: selectedAds && selectedAds._id ? selectedAds : {
        position,
      } as any,
    });
  }

  render () {
    return (
      <div className='admin-adsense-screen'>
        <Spin spinning={this.state.loading.data}>
          <Row gutter={36}>
            <Col xs={8}>
              <AdsensePositions
                adsenseInfo={this.state.selectedAdsense as any}
                selectedAdsChange={this.selectedAdsChange}
              />
            </Col>
            <Col xs={16}>
              <AdsenseInfo
                adsenseInfo={this.state.selectedAdsense as any}
                loading={this.state.loading.form}
                handleOk={this.handleOk}
                uploadLogoImage={this.uploadLogoImage}
              />
            </Col>
          </Row>
        </Spin>
      </div>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    profileState: rootState.profileModel,
  };
};

const mapDispatch = (_rootReducer: any) => {
  return {};
};

const AdminAdsenseScreen = Authorize(withRematch(initStore, mapState, mapDispatch)(withNamespaces('admin-adsense')(AdminAdsense)), [], true, 'admin');

export {
  AdminAdsenseScreen,
};
