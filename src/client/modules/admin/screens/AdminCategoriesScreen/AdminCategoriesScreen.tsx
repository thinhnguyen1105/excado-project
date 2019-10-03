import React from 'react';
import './AdminCategoriesScreen.less';
import { Authorize, AdminSearchbar, PagingButtons } from '@client/components';
import { withRematch, initStore } from '@client/store';
import { Category } from '@client/services/service-proxies';
import { UploadFile } from 'antd/lib/upload/interface';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getServiceProxy } from '@client/services';
import { message, Menu, Dropdown, Icon, Table, Popconfirm } from 'antd';
import * as moment from 'moment';
import CategoryModal from './components/CategoryModal';
import { config } from '@client/config';
import slugify from 'slugify';
import { withNamespaces } from '@client/i18n';

interface Props {
  t: (key: string) => string;
}
interface State {
  filters: {
    search?: string;
  };
  data: Category[];
  before?: string;
  after?: string;
  first: number;
  sortBy: string;
  loading: {
    table: boolean;
    modal: boolean;
  };
  categoryModalVisible: boolean;
  imageUrl?: UploadFile;
  selectedCategory?: Category;
}
class AdminCategories extends React.PureComponent<Props, State> {
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
    categoryModalVisible: false,
    imageUrl: undefined,
    selectedCategory: undefined,
  };

  componentDidMount () {
    this.getData();
  }

  openCategoryModal = (selectedCategory?: Category) => {
    this.setState({
      categoryModalVisible: true,
      selectedCategory,
    });
  }

  closeBrandModal = () => {
    this.setState({
      categoryModalVisible: false,
      selectedCategory: undefined,
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
      const result = await serviceProxies.findCategories();

      this.setState({
        data: this.state.filters.search ? result.data.filter((item) => slugify(item.name.toLocaleLowerCase()).indexOf(slugify(this.state.filters.search!.toLocaleLowerCase())) > -1) : result.data,
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
    //
  }

  getPrevPage = async () => {
    //
  }

  handleSearchChange = (value: string) => {
    this.setState({
      filters: {
        ...this.state.filters,
        search: value,
      },
    });
  }

  handleSubmit = async (values: {[key: string]: any}) => {
    this.setState({
      loading: {
        ...this.state.loading,
        modal: true,
      },
    });

    try {
      let imageUrl = '';
      if (this.state.imageUrl) {
        if (config.upload.allowImageExt.test(this.state.imageUrl.name)) {
          const categoryImageFormData = new FormData();
          categoryImageFormData.append('categoryImage', this.state.imageUrl as any);

          const categoryImageResult = await fetch(`${config.url.api}/upload-image/category-image`, {
            method: 'POST',
            body: categoryImageFormData,
          }).then((res) => res.json());

          imageUrl = categoryImageResult.categoryImage;
        } else {
          message.error(this.props.t('admin-categories:allow-image-type'));
        }
      }

      const idToken: any = await firebase.auth().currentUser!.getIdToken();
      const serviceProxies = getServiceProxy(idToken);
      if (this.state.selectedCategory && this.state.selectedCategory._id) {
        await serviceProxies.updateCategory(this.state.selectedCategory._id, {
          operation: 'updateDetail',
          payload: {
            name: values.name,
            imageUrl: imageUrl ? imageUrl : this.state.selectedCategory.imageUrl,
          },
        });

        this.setState({
          categoryModalVisible: false,
          loading: {
            ...this.state.loading,
            modal: false,
          },
          selectedCategory: undefined,
          data: this.state.data.map((item) => item._id === this.state.selectedCategory!._id ? {
            ...item,
            ...values,
            imageUrl: imageUrl ? imageUrl : this.state.selectedCategory!.imageUrl,
          } : item),
        });
        message.success(this.props.t('admin-categories:update-success'));
      } else {
        const result = await serviceProxies.createCategory({
          name: values.name,
          imageUrl,
        });

        this.setState({
          categoryModalVisible: false,
          loading: {
            ...this.state.loading,
            modal: false,
          },
          selectedCategory: undefined,
          data: [{_id: (result as any).id, name: values.name, imageUrl, slug: slugify(values.name), createdAt: new Date().getTime()} as any, ...this.state.data],
        });
        message.success(this.props.t('admin-categories:create-success'));
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
      imageUrl: file,
    });
  }

  deleteCategory = async (category: Category) => {
    try {
      this.setState({
        loading: {
          ...this.state.loading,
          table: true,
        },
      });

      // check if any news with this category
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
        category._id,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        10,
        'elasticsearchCreatedAt|desc',
        undefined,
        undefined,
      );
      if (searchNewsResult.data && searchNewsResult.data.length > 0) {
        message.error(this.props.t('admin-categories:categoryHaveNews'));
        this.setState({
          loading: {
            ...this.state.loading,
            table: false,
          },
        });
      } else {
        // delete
        await serviceProxy.deleteCategoryById(category._id);
        this.setState({
          data: this.state.data.filter((item) => item._id !== category._id),
          loading: {
            ...this.state.loading,
            table: false,
          },
        });
        message.success(this.props.t('admin-categories:deleteCategorySuccess'));
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
    const actionsDropdown = (record: Category) => (
      <Menu>
        <Menu.Item>
          <Popconfirm
            title={translate('admin-categories:areYouSureToDelete')}
            onConfirm={() => this.deleteCategory(record)}
            okText={translate('admin-categories:yes')}
            cancelText={translate('admin-categories:no')}
          >
            <a>
              {translate('common:delete')}
            </a>
          </Popconfirm>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => this.openCategoryModal(record)}>
            {translate('admin-categories:edit')}
          </a>
        </Menu.Item>
      </Menu>
    );
    const columns: any[] = [
      {
        title: translate('admin-categories:category-name'),
        dataIndex: 'name',
        key: 'name',
        render: (_text: string, record: Category) => (
          <a href={`/chung-loai-may/${record.slug}`} target='_blank'>{record.name}</a>
        ),
      },
      {
        title: translate('common:created-at'),
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (_text: string, record: Category) => moment(new Date(record.createdAt)).format(dateFormat),
      },
      {
        title: translate('admin-categories:category-image'),
        dataIndex: 'imageUrl',
        key: 'imageUrl',
        render: (_text: string, record: Category) => <img style={{height: '32px', width: 'auto'}} src={`${record.imageUrl}`} alt={`${record.name}`} />,
      },
      {
        title: translate('common:actions'),
        dataIndex: 'operations',
        key: 'operations',
        render: (_text: string, record: Category) => (
          <Dropdown overlay={actionsDropdown(record)} trigger={['click']}>
            <a className='ant-dropdown-link'>
              {translate('common:actions')} <Icon type='down' />
            </a>
          </Dropdown>
        ),
      },
    ];

    return (
      <div className='admin-categories-screen'>
        <AdminSearchbar
          hasCreate={true}
          handleSearch={this.getData}
          value={this.state.filters.search}
          showSearch={true}
          handleSearchChange={this.handleSearchChange}
          placeholder={translate('admin-categories:search-categories')}
          onCreateClick={() => this.openCategoryModal()}
        />

        <Table
          columns={columns}
          dataSource={this.state.data.sort((a, b) => (a.slug as any) - (b.slug as any))}
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

        {this.state.categoryModalVisible && (
          <CategoryModal
            categoryInfo={this.state.selectedCategory}
            loading={this.state.loading.modal}
            visible={this.state.categoryModalVisible}
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

const AdminCategoriesScreen = Authorize(withRematch(initStore, mapState, mapDispatch)(withNamespaces('admin-categories')(AdminCategories)), [], true, 'admin');

export {
  AdminCategoriesScreen,
};
