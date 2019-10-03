import React from 'react';
import './AdminBrandsScreen.less';
import { Authorize, AdminSearchbar, PagingButtons } from '@client/components';
import { withRematch, initStore, ProfileState } from '@client/store';
import { Brand } from '@client/services/service-proxies';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getServiceProxy } from '@client/services';
import { message, Menu, Dropdown, Icon, Table, Popconfirm } from 'antd';
import { withNamespaces } from '@client/i18n';
import * as moment from 'moment';
import BrandModal from './components/BrandModal';
import { UploadFile } from 'antd/lib/upload/interface';
import { config } from '@client/config';
import slugify from 'slugify';

interface Props {}
interface State {
  filters: {
    search?: string;
  };
  data: Brand[];
  before?: string;
  after?: string;
  first: number;
  sortBy: string;
  loading: {
    table: boolean;
    modal: boolean;
  };
  brandModalVisible: boolean;
  logoImage?: UploadFile;
  selectedBrand?: Brand;
}
class AdminBrands extends React.PureComponent<Props & {profileState: ProfileState; t: (key: string) => string}, State> {
  state: State = {
    filters: {
      search: undefined,
    },
    data: [],
    before: undefined,
    after: undefined,
    first: 10,
    sortBy: `slug|asc`,
    loading: {
      table: true,
      modal: false,
    },
    brandModalVisible: false,
    logoImage: undefined,
    selectedBrand: undefined,
  };

  componentDidMount () {
    this.getData();
  }

  openBrandModal = (selectedBrand?: Brand) => {
    this.setState({
      brandModalVisible: true,
      selectedBrand,
    });
  }

  closeBrandModal = () => {
    this.setState({
      brandModalVisible: false,
      selectedBrand: undefined,
    });
  }

  handleSearchChange = (value: string) => {
    this.setState({
      filters: {
        ...this.state.filters,
        search: value,
      },
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
      const result = await serviceProxies.findBrands(
        this.state.filters.search,
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
      const result = await serviceProxies.findBrands(
        this.state.filters.search,
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
      const result = await serviceProxies.findBrands(
        this.state.filters.search,
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
          logoImageFormData.append('brandLogoImage', this.state.logoImage as any);

          const logoImageResult = await fetch(`${config.url.api}/upload-image/brand-logo-image`, {
            method: 'POST',
            body: logoImageFormData,
          }).then((res) => res.json());

          logoImageUrl = logoImageResult.logoImage;
        } else {
          message.error(this.props.t('admin-brands:allow-image-type'));
        }
      }

      const idToken: any = await firebase.auth().currentUser!.getIdToken();
      const serviceProxies = getServiceProxy(idToken);
      if (this.state.selectedBrand && this.state.selectedBrand._id) {
        await serviceProxies.updateBrand(this.state.selectedBrand._id, {
          operation: 'updateDetail',
          payload: {
            name: values.name,
            logoImage: logoImageUrl ? logoImageUrl : this.state.selectedBrand.logoImage,
          },
        });

        this.setState({
          brandModalVisible: false,
          loading: {
            ...this.state.loading,
            modal: false,
          },
          selectedBrand: undefined,
          data: this.state.data.map((item) => item._id === this.state.selectedBrand!._id ? {
            ...item,
            ...values,
            logoImage: logoImageUrl ? logoImageUrl : this.state.selectedBrand!.logoImage,
          } : item),
        });
        message.success(this.props.t('admin-brands:update-success'));
      } else {
        const result = await serviceProxies.createBrand({
          name: values.name,
          logoImage: logoImageUrl,
        });

        this.setState({
          brandModalVisible: false,
          loading: {
            ...this.state.loading,
            modal: false,
          },
          selectedBrand: undefined,
          data: [{_id: (result as any).id, name: values.name, logoImage: logoImageUrl, slug: slugify(values.name), createdAt: new Date().getTime()} as any, ...this.state.data],
        });
        message.success(this.props.t('admin-brands:create-success'));
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

  deleteBrand = async (brand: Brand) => {
    try {
      this.setState({
        loading: {
          ...this.state.loading,
          table: true,
        },
      });

      // check if any news with this models
      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = getServiceProxy(idToken);
      const searchNewsResult = await serviceProxy.searchElasticsearch(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        brand._id,
        undefined,
        10,
        'elasticsearchCreatedAt|desc',
        undefined,
        undefined,
      );
      if (searchNewsResult.data && searchNewsResult.data.length > 0) {
        message.error(this.props.t('admin-brands:brandHaveNews'));
        this.setState({
          loading: {
            ...this.state.loading,
            table: false,
          },
        });
      } else {
        // delete
        await serviceProxy.deleteBrandById(brand._id);
        this.setState({
          data: this.state.data.filter((item) => item._id !== brand._id),
          loading: {
            ...this.state.loading,
            table: false,
          },
        });
        message.success(this.props.t('admin-brands:deleteBrandSuccess'));
      }
    } catch (error) {
      this.setState({
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
      message.error(error.message);
    }
  };

  render () {
    const translate = this.props.t;
    const dateFormat = 'DD/MM/YYYY HH:mm';
    const actionsDropdown = (record: Brand) => (
      <Menu>
        <Menu.Item>
          <Popconfirm
            title={translate('admin-brands:areYouSureToDelete')}
            onConfirm={() => this.deleteBrand(record)}
            okText={translate('admin-brands:yes')}
            cancelText={translate('admin-brands:no')}
          >
            <a>
              {translate('common:delete')}
            </a>
          </Popconfirm>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => this.openBrandModal(record)}>
            {translate('admin-brands:edit')}
          </a>
        </Menu.Item>
      </Menu>
    );
    const columns: any[] = [
      {
        title: translate('admin-brands:brand-name'),
        dataIndex: 'name',
        key: 'name',
        render: (_text: string, record: Brand) => (
          <a href={`/danh-sach-hang/${record.slug}`} target='_blank'>{record.name}</a>
        ),
      },
      {
        title: translate('common:created-at'),
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (_text: string, record: Brand) => moment(new Date(record.createdAt)).format(dateFormat),
      },
      {
        title: translate('common:actions'),
        dataIndex: 'operations',
        key: 'operations',
        render: (_text: string, record: Brand) => (
          <Dropdown overlay={actionsDropdown(record)} trigger={['click']}>
            <a className='ant-dropdown-link'>
              {translate('common:actions')} <Icon type='down' />
            </a>
          </Dropdown>
        ),
      },
    ];

    return (
      <div className='admin-brands-screen'>
        <AdminSearchbar
          hasCreate={true}
          handleSearch={this.getData}
          value={this.state.filters.search}
          showSearch={true}
          handleSearchChange={this.handleSearchChange}
          placeholder={translate('admin-brands:search-brands')}
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

        {this.state.brandModalVisible && (
          <BrandModal
            brandInfo={this.state.selectedBrand}
            loading={this.state.loading.modal}
            visible={this.state.brandModalVisible}
            handleCancel={this.closeBrandModal}
            handleOk={this.handleSubmit}
            uploadLogoImage={this.uploadLogoImage}
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

const AdminBrandsScreen = Authorize(withRematch(initStore, mapState, mapDispatch)(withNamespaces('admin-brands')(AdminBrands)), [], true, 'admin');

export {
  AdminBrandsScreen,
};
