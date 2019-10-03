import React from 'react';
import './AdminFeatureBrandsScreen.less';
import { Authorize, AdminSearchbar, PagingButtons } from '@client/components';
import { initStore, withRematch, ProfileState } from '@client/store';
import { FeatureBrand, Brand } from '@client/services/service-proxies';
import { UploadFile } from 'antd/lib/upload/interface';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getServiceProxy } from '@client/services';
import { message, Menu, Tag, Dropdown, Icon, Table } from 'antd';
import * as moment from 'moment';
import FeatureBrandModal from './components/FeatureBrandModal';
import debounce from 'lodash/debounce';
import { config } from '@client/config';
import { withNamespaces } from '@client/i18n';

interface Props {}
interface State {
  filters: {};
  data: FeatureBrand[];
  before?: string;
  after?: string;
  first: number;
  sortBy: string;
  loading: {
    table: boolean;
    modal: boolean;
    brands: boolean;
  };
  featureBrandModalVisible: boolean;
  logoImage?: UploadFile;
  selectedFeatureBrand?: FeatureBrand;
  brands: Brand[];
}
class AdminFeatureBrands extends React.PureComponent<Props & {profileState: ProfileState; t: (key: string) => string}, State> {
  constructor(props: Props & {profileState: ProfileState; t: (key: string) => string}) {
    super(props);
    this.getBrands = debounce(this.getBrands, 500);
  }

  state: State = {
    filters: {
      search: undefined,
    },
    data: [],
    before: undefined,
    after: undefined,
    first: 10,
    sortBy: `order|asc`,
    loading: {
      table: true,
      modal: false,
      brands: false,
    },
    featureBrandModalVisible: false,
    logoImage: undefined,
    selectedFeatureBrand: undefined,
    brands: [],
  };

  componentDidMount () {
    this.getData();
    this.getBrands('');
  }

  getBrands = async (value: string) => {
    this.setState({
      loading: {
        ...this.state.loading,
        brands: true,
      },
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
        loading: {
          ...this.state.loading,
          brands: true,
        },
        brands: brands.data,
      });
    } catch (error) {
      message.error(error.message);
      this.setState({
        loading: {
          ...this.state.loading,
          brands: false,
        },
      });
    }
  }

  openBrandModal = (selectedFeatureBrand?: FeatureBrand) => {
    this.setState({
      featureBrandModalVisible: true,
      selectedFeatureBrand,
    });
  }

  closeBrandModal = () => {
    this.setState({
      featureBrandModalVisible: false,
      selectedFeatureBrand: undefined,
    });
  }

  getData = async () => {
    this.setState({
      loading: {
        ...this.state.loading,
        table: true,
      },
    });

    try {
      const idToken: any = await firebase.auth().currentUser!.getIdToken();
      const serviceProxies = getServiceProxy(idToken);
      const result = await serviceProxies.getFeatureBrands(
        this.state.first,
        this.state.sortBy,
        undefined,
        undefined,
      );

      this.setState({
        data: result.data,
        before: result.before,
        after: result.after,
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
    } catch (error) {
      message.error(error.message);
      this.setState({
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
    }
  }

  getPrevPage = async () => {
    this.setState({
      loading: {
        ...this.state.loading,
        table: true,
      },
    });

    try {
      const idToken: any = await firebase.auth().currentUser!.getIdToken();
      const serviceProxies = getServiceProxy(idToken);
      const result = await serviceProxies.getFeatureBrands(
        this.state.first,
        this.state.sortBy,
        this.state.before,
        undefined,
      );

      this.setState({
        data: result.data,
        before: result.before,
        after: result.after,
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
    } catch (error) {
      message.error(error.message);
      this.setState({
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
    }
  }

  getNextPage = async () => {
    this.setState({
      loading: {
        ...this.state.loading,
        table: true,
      },
    });

    try {
      const idToken: any = await firebase.auth().currentUser!.getIdToken();
      const serviceProxies = getServiceProxy(idToken);
      const result = await serviceProxies.getFeatureBrands(
        this.state.first,
        this.state.sortBy,
        undefined,
        this.state.after,
      );

      this.setState({
        data: result.data,
        before: result.before,
        after: result.after,
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
    } catch (error) {
      message.error(error.message);
      this.setState({
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
    }
  }

  handleSubmit = async (values: {[key: string]: any}) => {
    this.setState({
      loading: {
        ...this.state.loading,
        modal: true,
      },
    });

    try {
      let logoImageUrl = '';
      if (this.state.logoImage) {
        if (config.upload.allowImageExt.test(this.state.logoImage.name)) {
          const logoImageFormData = new FormData();
          logoImageFormData.append('featureBrandLogoImage', this.state.logoImage as any);

          const logoImageResult = await fetch(`${config.url.api}/upload-image/feature-brand-logo-image`, {
            method: 'POST',
            body: logoImageFormData,
          }).then((res) => res.json());

          logoImageUrl = logoImageResult.logoImage;
        } else {
          message.error(this.props.t('admin-feature-brands:allow-image-type'));
        }
      }

      const idToken: any = await firebase.auth().currentUser!.getIdToken();
      const serviceProxies = getServiceProxy(idToken);
      if (this.state.selectedFeatureBrand && this.state.selectedFeatureBrand._id) {
        await serviceProxies.updateFeatureBrand(this.state.selectedFeatureBrand._id, {
          operation: 'updateDetail',
          payload: {
            brand: values.brand,
            logoImage: logoImageUrl ? logoImageUrl : this.state.selectedFeatureBrand.logoImage,
            hyperlink: values.hyperlink,
            order: values.order,
          },
        });

        this.setState({
          featureBrandModalVisible: false,
          loading: {
            ...this.state.loading,
            modal: false,
          },
          selectedFeatureBrand: undefined,
          data: this.state.data.map((item) => item._id === this.state.selectedFeatureBrand!._id ? {
            ...item,
            ...values,
            brand: values.brand === this.state.selectedFeatureBrand!.brand._id ? this.state.selectedFeatureBrand!.brand : this.state.brands.filter((ite) => ite._id === values.brand)[0],
            logoImage: logoImageUrl ? logoImageUrl : this.state.selectedFeatureBrand!.logoImage,
          } : item),
        });
        message.success(this.props.t('admin-feature-brands:update-success'));
      } else {
        const result = await serviceProxies.createFeatureBrand({
          logoImage: logoImageUrl,
          brand: values.brand,
          hyperlink: values.hyperlink,
          order: values.order,
        });

        this.setState({
          featureBrandModalVisible: false,
          loading: {
            ...this.state.loading,
            modal: false,
          },
          selectedFeatureBrand: undefined,
          data: [
            {
              _id: (result as any).id,
              brand: this.state.brands.filter((item) => item._id === values.brand)[0],
              logoImage: logoImageUrl,
              hyperlink: values.hyperlink,
              order: values.order,
              createdAt: new Date().getTime(),
            } as any,
            ...this.state.data,
          ],
        });
        message.success(this.props.t('admin-feature-brands:create-success'));
      }
    } catch (error) {
      message.error(error.message);
      this.setState({
        loading: {
          ...this.state.loading,
          modal: false,
        },
      });
    }
  }

  uploadLogoImage = async (file: UploadFile) => {
    this.setState({
      logoImage: file,
    });
  }

  render () {
    const translate = this.props.t;
    const dateFormat = 'DD/MM/YYYY HH:mm';
    const actionsDropdown = (record: FeatureBrand) => (
      <Menu>
        <Menu.Item>
          <a onClick={() => this.openBrandModal(record)}>
            {translate('common:edit')}
          </a>
        </Menu.Item>
      </Menu>
    );
    const columns: any[] = [
      {
        title: translate('admin-feature-brands:brand-name'),
        dataIndex: 'name',
        key: 'name',
        render: (_text: string, record: FeatureBrand) => (
          <a href={record.hyperlink} target='_blank'>{record.brand.name}</a>
        ),
      },
      {
        title: translate('admin-feature-brands:order'),
        dataIndex: 'order',
        key: 'order',
        render: (_text: string, record: FeatureBrand) => <Tag color='volcano'>#{record.order}</Tag>,
      },
      {
        title: translate('admin-feature-brands:logo-image'),
        dataIndex: 'logoImage',
        key: 'logoImage',
        render: (_text: string, record: FeatureBrand) => <img style={{height: '32px', width: 'auto'}} src={`${record.logoImage}`} alt={`${record.brand.name}`} />,
      },
      {
        title: translate('common:created-at'),
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (_text: string, record: FeatureBrand) => moment(new Date(record.createdAt)).format(dateFormat),
      },
      {
        title: translate('common:actions'),
        dataIndex: 'operations',
        key: 'operations',
        render: (_text: string, record: FeatureBrand) => (
          <Dropdown overlay={actionsDropdown(record)} trigger={['click']}>
            <a className='ant-dropdown-link'>
              {translate('common:actions')} <Icon type='down' />
            </a>
          </Dropdown>
        ),
      },
    ];
    return (
      <div className='admin-feature-brands-screen'>
        <AdminSearchbar
          hasCreate={true}
          handleSearch={this.getData}
          value={''}
          showSearch={true}
          handleSearchChange={() => null}
          placeholder={translate('admin-feature-brands:search-brands')}
          onCreateClick={() => this.openBrandModal()}
        />

        <Table
          columns={columns}
          dataSource={this.state.data}
          loading={this.state.loading.table}
          pagination={false}
          scroll={{x: 1000}}
          style={{marginBottom: '24px'}}
          rowKey={(record: any) => record._id}
        />

        <PagingButtons
          before={this.state.before}
          after={this.state.after}
          getNextPage={this.getNextPage}
          getPrevPage={this.getPrevPage}
        />

        {this.state.featureBrandModalVisible && (
          <FeatureBrandModal
            loadingBrands={this.state.loading.brands}
            featureBrandInfo={this.state.selectedFeatureBrand}
            loading={this.state.loading.modal}
            visible={this.state.featureBrandModalVisible}
            handleCancel={this.closeBrandModal}
            handleOk={this.handleSubmit}
            uploadLogoImage={this.uploadLogoImage}
            brands={this.state.selectedFeatureBrand && this.state.selectedFeatureBrand._id ? [this.state.selectedFeatureBrand.brand, ...this.state.brands] : this.state.brands}
            getBrands={this.getBrands}
          />
        )}
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

const AdminFeatureBrandsScreen = Authorize(withRematch(initStore, mapState, mapDispatch)(withNamespaces('admin-feature-brands')(AdminFeatureBrands)), [], true, 'admin');

export {
  AdminFeatureBrandsScreen,
};
