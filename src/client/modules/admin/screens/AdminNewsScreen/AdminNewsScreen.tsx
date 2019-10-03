import React from 'react';
import { Authorize, AdminSearchbar, PagingButtons } from '@client/components';
import { withRematch, initStore } from '@client/store';
import { withNamespaces } from '@client/i18n';
import { ElasticSearchItemResult } from '@client/services/service-proxies';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getServiceProxy } from '@client/services';
import { message, Menu, Dropdown, Icon, Table } from 'antd';
import { getShopUrl, newsTypes } from '@client/core';
import moment from 'moment';
import './AdminNewsScreen.less';

interface Props {
  t: (key: string) => string;
}
interface State {
  filters: {
    search?: string;
  };
  data: ElasticSearchItemResult[];
  before?: string;
  after?: string;
  first: number;
  sortBy: string;
  loading: {
    table: boolean;
    modal: boolean;
  };
  selectedNews?: ElasticSearchItemResult;
}
class AdminNews extends React.PureComponent<Props, State> {
  state: State = {
    filters: {
      search: undefined,
    },
    data: [],
    before: undefined,
    after: undefined,
    first: 10,
    sortBy: `elasticsearchCreatedAt|asc`,
    loading: {
      table: true,
      modal: false,
    },
    selectedNews: undefined,
  };

  componentDidMount () {
    this.getData();
  }

  getData = async () => {
    this.setState({
      loading: {
        ...this.state.loading,
        table: true,
      },
    });

    try {
      const idToken: string = await firebase.auth().currentUser!.getIdToken();
      const serviceProxies = getServiceProxy(idToken);
      const pendingNewsResult = await serviceProxies.findPendingNews(
        this.state.filters.search,
        this.state.first,
        this.state.sortBy,
        undefined,
        undefined,
      );

      this.setState({
        data: pendingNewsResult.data,
        before: pendingNewsResult.before,
        after: pendingNewsResult.after,
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
      const idToken: string = await firebase.auth().currentUser!.getIdToken();
      const serviceProxies = getServiceProxy(idToken);
      const pendingNewsResult = await serviceProxies.findPendingNews(
        this.state.filters.search,
        this.state.first,
        this.state.sortBy,
        undefined,
        this.state.after,
      );

      this.setState({
        data: pendingNewsResult.data,
        before: pendingNewsResult.before,
        after: pendingNewsResult.after,
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
      const idToken: string = await firebase.auth().currentUser!.getIdToken();
      const serviceProxies = getServiceProxy(idToken);
      const pendingNewsResult = await serviceProxies.findPendingNews(
        this.state.filters.search,
        this.state.first,
        this.state.sortBy,
        this.state.before,
        undefined,
      );

      this.setState({
        data: pendingNewsResult.data,
        before: pendingNewsResult.before,
        after: pendingNewsResult.after,
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

  approveNews = async (record: ElasticSearchItemResult) => {
    try {
      this.setState({
        ...this.state,
        loading: {
          ...this.state.loading,
          table: true,
        },
      });

      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = await getServiceProxy(idToken);
      await serviceProxy.updateNews(record._id, {
        operation: `approveNews`,
        payload: {},
      });

      this.setState({
        ...this.state,
        data: this.state.data.filter((item) => item._id !== record._id),
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
      message.success(this.props.t('admin-news:approveSuccess'));
    } catch (error) {
      this.setState({
        ...this.state,
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
      message.error(error.message);
    }
  }

  rejectNews = async (record: ElasticSearchItemResult) => {
    try {
      this.setState({
        ...this.state,
        loading: {
          ...this.state.loading,
          table: true,
        },
      });

      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = await getServiceProxy(idToken);
      await serviceProxy.updateNews(record._id, {
        operation: `rejectNews`,
        payload: {},
      });

      this.setState({
        ...this.state,
        data: this.state.data.filter((item) => item._id !== record._id),
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
      message.success(this.props.t('admin-news:rejectSuccess'));
    } catch (error) {
      this.setState({
        ...this.state,
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
      message.error(error.message);
    }
  }

  handleSearchChange = (value: string) => {
    this.setState({
      filters: {
        ...this.state.filters,
        search: value,
      },
    });
  }

  render () {
    const translate = this.props.t;
    const dateFormat = 'DD/MM/YYYY HH:mm';
    const actionsDropdown = (record: ElasticSearchItemResult) => (
      <Menu>
        <Menu.Item>
          <a onClick={() => this.approveNews(record)}>
            {translate('admin-news:accept')}
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => this.rejectNews(record)}>
            {translate('admin-news:reject')}
          </a>
        </Menu.Item>
      </Menu>
    );
    const columns: any[] = [
      {
        title: translate('admin-news:newsTitle'),
        dataIndex: 'title',
        key: 'title',
        render: (_text: string, record: ElasticSearchItemResult) => (
          <a
            href={record.shop ? `${getShopUrl(record.shop.domain)}/bai-dang-cua-hang/${record._id}` : `/bai-dang/${record._id}`}
            target='_blank'
            style={{color: '#000'}}
          >
            {record.title}
          </a>
        ),
      },
      {
        title: translate('common:createdBy'),
        dataIndex: 'owner',
        key: 'owner',
        render: (_text: string, record: ElasticSearchItemResult) => {
          const displayName = record.owner.fullName || record.owner.email || record.owner.phoneNo;
          return (
            <a href={`/nguoi-dung/${record.owner._id}`} target='_blank' style={{color: '#000'}}>
              {displayName}
            </a>
          );
        },
      },
      {
        title: translate('admin-news:newsType'),
        dataIndex: 'newsType',
        key: 'newsType',
        render: (_text: string, record: ElasticSearchItemResult) => {
          const newsTypesLabel = newsTypes.filter((val: any) => val.value === record.newsType)[0].label;
          return newsTypesLabel;
        },
      },
      {
        title: translate('admin-news:category'),
        dataIndex: 'categoryId',
        key: 'categoryId',
        render: (_text: string, record: ElasticSearchItemResult) => record.categoryId.name,
      },
      {
        title: translate('common:createdAt'),
        dataIndex: 'resolvedAt',
        key: 'resolvedAt',
        render: (_text: string, record: ElasticSearchItemResult) => moment(new Date(record.createdAt)).format(dateFormat),
      },
      {
        title: translate('common:actions'),
        dataIndex: 'operations',
        key: 'operations',
        render: (_text: string, record: ElasticSearchItemResult) => (
          <Dropdown overlay={actionsDropdown(record)} trigger={['click']}>
            <a className='ant-dropdown-link'>
              {translate('common:actions')} <Icon type='down' />
            </a>
          </Dropdown>
        ),
      },
    ];

    return (
      <div className='admin-news-screen'>
        <AdminSearchbar
          handleSearch={this.getData}
          value={this.state.filters.search}
          showSearch={true}
          handleSearchChange={this.handleSearchChange}
          placeholder={translate('admin-news:searchNews')}
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

const AdminNewsScreen = Authorize(withRematch(initStore, mapState, mapDispatch)(withNamespaces('admin-news')(AdminNews)), [], true, 'admin');

export {
  AdminNewsScreen,
};
