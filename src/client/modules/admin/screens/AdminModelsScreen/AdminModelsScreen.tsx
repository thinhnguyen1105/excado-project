import React from 'react';
import './AdminModelsScreen.less';
import { Authorize, AdminSearchbar, PagingButtons } from '@client/components';
import { withRematch, initStore } from '@client/store';
import { Model, Brand, Category } from '@client/services/service-proxies';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getServiceProxy } from '@client/services';
import { message, Menu, Dropdown, Icon, Table, Popconfirm } from 'antd';
import * as moment from 'moment';
import ModelModal from './components/ModelModal';
import debounce from 'lodash/debounce';
import slugify from 'slugify';
import { withNamespaces } from '@client/i18n';

interface Props {
  t: (key: string) => string;
}
interface State {
  filters: {
    search?: string;
  };
  data: Model[];
  before?: string;
  after?: string;
  first: number;
  sortBy: string;
  loading: {
    table: boolean;
    modal: boolean;
    brands: boolean;
  };
  modelModalVisible: boolean;
  selectedModel?: Model;
  brands: Brand[];
  categories: Category[];
}
class AdminModels extends React.PureComponent<Props, State> {
  constructor(props: Props) {
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
    sortBy: `slug|asc`,
    loading: {
      table: true,
      modal: false,
      brands: false,
    },
    modelModalVisible: false,
    selectedModel: undefined,
    brands: [],
    categories: [],
  };

  componentDidMount () {
    this.getData();
    this.getBrands('');
    this.getCategories();
  }

  getCategories = async () => {
    const idToken: any = await firebase.auth().currentUser!.getIdToken();
    const serviceProxy = getServiceProxy(idToken);
    const [categories] = await Promise.all([
      serviceProxy.findCategories(),
    ]);

    this.setState({
      categories: categories.data,
    });
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

  openModelModal = (selectedModel?: Model) => {
    this.setState({
      modelModalVisible: true,
      selectedModel,
    });
  }

  closeBrandModal = () => {
    this.setState({
      modelModalVisible: false,
      selectedModel: undefined,
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
      const result = await serviceProxies.findModels(
        this.state.filters.search,
        undefined,
        undefined,
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
      const result = await serviceProxies.findModels(
        this.state.filters.search,
        undefined,
        undefined,
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
      const result = await serviceProxies.findModels(
        this.state.filters.search,
        undefined,
        undefined,
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

  handleSubmit = async (values: {[key: string]: any}) => {
    this.setState({
      loading: {
        ...this.state.loading,
        modal: true,
      },
    });

    try {
      const idToken: any = await firebase.auth().currentUser!.getIdToken();
      const serviceProxies = getServiceProxy(idToken);

      if (this.state.selectedModel && this.state.selectedModel._id) {
        await serviceProxies.updateModel(this.state.selectedModel._id, {
          operation: 'updateDetail',
          payload: {
            name: values.name,
          },
        });

        this.setState({
          modelModalVisible: false,
          loading: {
            ...this.state.loading,
            modal: false,
          },
          selectedModel: undefined,
          data: this.state.data.map((item) => item._id === this.state.selectedModel!._id ? {
            ...item,
            name: values.name,
          } : item),
        });
        message.success(this.props.t('admin-models:update-success'));
      } else {
        const result = await serviceProxies.createModel({
          name: values.name,
          brand: values.brand,
          category: values.category,
        });

        this.setState({
          modelModalVisible: false,
          loading: {
            ...this.state.loading,
            modal: false,
          },
          selectedModel: undefined,
          data: [
            {
              _id: (result as any).id,
              name: values.name,
              slug: slugify(values.name),
              brand: this.state.brands.filter((item) => item._id === values.brand)[0],
              category: this.state.categories.filter((item) => item._id === values.category)[0],
              createdAt: new Date().getTime(),
            } as any,
            ...this.state.data,
          ],
        });
        message.success(this.props.t('admin-models:create-success'));
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

  deleteModel = async (record: Model) => {
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
        undefined,
        record._id,
        10,
        'elasticsearchCreatedAt|desc',
        undefined,
        undefined,
      );
      if (searchNewsResult.data && searchNewsResult.data.length > 0) {
        message.error(this.props.t('admin-models:modelHaveNews'));
        this.setState({
          loading: {
            ...this.state.loading,
            table: false,
          },
        });
      } else {
        // delete
        await serviceProxy.deleteModelById(record._id);
        this.setState({
          data: this.state.data.filter((item) => item._id !== record._id),
          loading: {
            ...this.state.loading,
            table: false,
          },
        });
        message.success(this.props.t('admin-models:deleteModelSuccess'));
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
    const actionsDropdown = (record: Model) => (
      <Menu>
        <Menu.Item>
          <Popconfirm
            title={translate('admin-models:areYouSureToDelete')}
            onConfirm={() => this.deleteModel(record)}
            okText={translate('admin-models:yes')}
            cancelText={translate('admin-models:no')}
          >
            <a>
              {translate('common:delete')}
            </a>
          </Popconfirm>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => this.openModelModal(record)}>
            {translate('common:edit')}
          </a>
        </Menu.Item>
      </Menu>
    );
    const columns: any[] = [
      {
        title: translate('admin-models:model-name'),
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: translate('admin-models:brand'),
        dataIndex: 'brand',
        key: 'brand',
        render: (_text: string, record: Model) => record.brand.name,
      },
      {
        title: translate('common:category'),
        dataIndex: 'category',
        key: 'category',
        render: (_text: string, record: Model) => record.category.name,
      },
      {
        title: translate('common:created-at'),
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (_text: string, record: Model) => moment(new Date(record.createdAt)).format(dateFormat),
      },
      {
        title: translate('common:actions'),
        dataIndex: 'operations',
        key: 'operations',
        render: (_text: string, record: Model) => (
          <Dropdown overlay={actionsDropdown(record)} trigger={['click']}>
            <a className='ant-dropdown-link'>
              {translate('common:actions')} <Icon type='down' />
            </a>
          </Dropdown>
        ),
      },
    ];

    return (
      <div className='admin-models-screen'>
        <AdminSearchbar
          hasCreate={true}
          handleSearch={this.getData}
          value={this.state.filters.search}
          showSearch={true}
          handleSearchChange={this.handleSearchChange}
          placeholder={translate('admin-models:search-models')}
          onCreateClick={() => this.openModelModal()}
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

        {this.state.modelModalVisible && (
          <ModelModal
            brands={this.state.brands}
            categories={this.state.categories}
            loadingBrands={this.state.loading.brands}
            getBrands={this.getBrands}
            modelInfo={this.state.selectedModel}
            loading={this.state.loading.modal}
            visible={this.state.modelModalVisible}
            handleCancel={this.closeBrandModal}
            handleOk={this.handleSubmit}
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

const AdminModelsScreen = Authorize(withRematch(initStore, mapState, mapDispatch)(withNamespaces('admin-models')(AdminModels)), [], true, 'admin');

export {
  AdminModelsScreen,
};
