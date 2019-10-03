import React from 'react';
import { Authorize } from '@client/components';
import { withRematch, initStore } from '@client/store';
import { withNamespaces } from '@client/i18n';
import './AdminShopsScreen.less';
import { Shop, ShopExtendRequest } from '@client/services/service-proxies';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getServiceProxy } from '@client/services';
import { message, Menu, Tag, Dropdown, Icon, Row, Col, Input, Button, Table, Tabs } from 'antd';
import moment, { Moment } from 'moment';
import { getShopUrl } from '@client/core';

interface Props {
  t: (key: string) => string;
}
interface State {
  filters: {
    search?: string;
  };
  data: Shop[];
  before?: string;
  after?: string;
  first: number;
  sortBy: string;
  loading: {
    table: boolean;
    modal: boolean;
  };
  expiryDateModalVisible: boolean;
  selectedShop?: Shop;
  newExpiryDate?: Moment;
  activeTab: 'shop'|'extendRequest';
  extendRequest: {
    filters: {
      search?: string;
      state?: string;
    };
    data: ShopExtendRequest[];
    before?: string;
    after?: string;
    first: number;
    sortBy: string;
    loading: {
      table: boolean;
    };
    selectedExtendRequest?: ShopExtendRequest;
  };
}
class AdminShops extends React.PureComponent<Props, State> {
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
    expiryDateModalVisible: false,
    selectedShop: undefined,
    newExpiryDate: undefined,
    activeTab: 'shop',
    extendRequest: {
      filters: {
        search: undefined,
        state: undefined,
      },
      data: [],
      before: undefined,
      after: undefined,
      first: 10,
      sortBy: 'createdAt|desc',
      loading: {
        table: false,
      },
      selectedExtendRequest: undefined,
    },
  };

  componentDidMount () {
    this.getData();
    this.getShopExtendRequestData();
  }

  openExpiryDateModal = (selectedShop: Shop) => {
    this.setState({
      expiryDateModalVisible: true,
      selectedShop,
    });
  }

  closeExpiryDateModal = () => {
    this.setState({
      expiryDateModalVisible: false,
      selectedShop: undefined,
      newExpiryDate: undefined,
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
      const result = await serviceProxies.findShops(
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

  getShopExtendRequestData = async () => {
    this.setState({
      extendRequest: {
        ...this.state.extendRequest,
        loading: {
          ...this.state.extendRequest.loading,
          table: true,
        },
      },
    });

    try {
      const idToken: any = await firebase.auth().currentUser!.getIdToken();
      const serviceProxies = getServiceProxy(idToken);
      const result = await serviceProxies.getShopExtendRequests(
        this.state.extendRequest.filters.search,
        this.state.extendRequest.filters.state,
        this.state.extendRequest.first,
        this.state.extendRequest.sortBy,
        undefined,
        undefined,
      );

      this.setState({
        extendRequest: {
          ...this.state.extendRequest,
          data: result.data,
          before: result.before,
          after: result.after,
          loading: {
            ...this.state.extendRequest.loading,
            table: false,
          },
        },
      });
    } catch (error) {
      message.error(error.message);
      this.setState({
        extendRequest: {
          ...this.state.extendRequest,
          loading: {
            ...this.state.extendRequest.loading,
            table: false,
          },
        },
      });
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

  handleExtendRequestSearchChange = (value: string) => {
    this.setState({
      extendRequest: {
        ...this.state.extendRequest,
        filters: {
          ...this.state.filters,
          search: value,
        },
      },
    });
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
      const result = await serviceProxies.findShops(
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

  getExtendRequestPrevPage = async () => {
    this.setState({
      extendRequest: {
        ...this.state.extendRequest,
        loading: {
          ...this.state.extendRequest.loading,
          table: true,
        },
      },
    });

    try {
      const idToken: any = await firebase.auth().currentUser!.getIdToken();
      const serviceProxies = getServiceProxy(idToken);
      const result = await serviceProxies.getShopExtendRequests(
        this.state.extendRequest.filters.search,
        this.state.extendRequest.filters.state,
        this.state.extendRequest.first,
        this.state.extendRequest.sortBy,
        this.state.extendRequest.before,
        undefined,
      );

      this.setState({
        extendRequest: {
          ...this.state.extendRequest,
          data: result.data,
          before: result.before,
          after: result.after,
          loading: {
            ...this.state.extendRequest.loading,
            table: false,
          },
        },
      });
    } catch (error) {
      message.error(error.message);
      this.setState({
        extendRequest: {
          ...this.state.extendRequest,
          loading: {
            ...this.state.extendRequest.loading,
            table: false,
          },
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
      const result = await serviceProxies.findShops(
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

  getExtendRequestNextPage = async () => {
    this.setState({
      extendRequest: {
        ...this.state.extendRequest,
        loading: {
          ...this.state.extendRequest.loading,
          table: true,
        },
      },
    });

    try {
      const idToken: any = await firebase.auth().currentUser!.getIdToken();
      const serviceProxies = getServiceProxy(idToken);
      const result = await serviceProxies.getShopExtendRequests(
        this.state.extendRequest.filters.search,
        this.state.extendRequest.filters.state,
        this.state.extendRequest.first,
        this.state.extendRequest.sortBy,
        undefined,
        this.state.extendRequest.after,
      );

      this.setState({
        extendRequest: {
          ...this.state.extendRequest,
          data: result.data,
          before: result.before,
          after: result.after,
          loading: {
            ...this.state.extendRequest.loading,
            table: false,
          },
        },
      });
    } catch (error) {
      message.error(error.message);
      this.setState({
        extendRequest: {
          ...this.state.extendRequest,
          loading: {
            ...this.state.extendRequest.loading,
            table: false,
          },
        },
      });
    }
  }

  activateShop = async (shopId: string) => {
    this.setState({
      loading: {
        ...this.state.loading,
        table: true,
      },
    });

    try {
      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = getServiceProxy(idToken);
      await serviceProxy.updateShop(shopId, {operation: 'activate'});

      this.setState({
        data: this.state.data.map((item) => {
          return item._id === shopId ? {...item, isActive: true} : item;
        }),
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
      message.success(this.props.t('admin-shops:activateShopSuccess'));
    } catch (error) {
      message.error(error.response);
      this.setState({
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
    }
  }

  deactivateShop = async (shopId: string) => {
    this.setState({
      loading: {
        ...this.state.loading,
        table: true,
      },
    });

    try {
      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = getServiceProxy(idToken);
      await serviceProxy.updateShop(shopId, {operation: 'deactivate'});

      this.setState({
        data: this.state.data.map((item) => {
          return item._id === shopId ? {...item, isActive: false} : item;
        }),
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
      message.success(this.props.t('admin-shops:deactivateShopSuccess'));
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

  extendExpiryDate = async () => {
    try {
      this.setState({
        loading: {
          ...this.state.loading,
          modal: true,
        },
      });

      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = getServiceProxy(idToken);
      await serviceProxy.updateShop(this.state.selectedShop!._id, {
        operation: 'updateDetail',
        payload: {
          ...this.state.selectedShop,
          expiryDate: this.state.newExpiryDate!.valueOf(),
        },
      });

      this.setState({
        data: this.state.data.map((item) => {
          return item._id === this.state.selectedShop!._id ? {...item, expiryDate: this.state.newExpiryDate!.valueOf()} : item;
        }),
        loading: {
          ...this.state.loading,
          modal: false,
        },
        selectedShop: undefined,
        newExpiryDate: undefined,
        expiryDateModalVisible: false,
      });
      message.success(this.props.t('admin-shops:extendShopSuccess'));
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

  onExpiryDateChange = async (date: Moment) => {
    this.setState({
      newExpiryDate: date,
    });
  }

  handleTabChange = async (activeTab: 'shop'|'extendRequest') => {
    this.setState({
      activeTab,
    });
  }

  extendShop = async (extendRequest: ShopExtendRequest) => {
    try {
      this.setState({
        extendRequest: {
          ...this.state.extendRequest,
          loading: {
            ...this.state.extendRequest.loading,
            table: true,
          },
        },
      });

      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = getServiceProxy(idToken);
      await serviceProxy.updateShopExtendRequest({
        operation: 'extendShop',
      }, extendRequest._id);

      const newExpiryDate = (extendRequest.shop as any).expiryDate <= new Date().getTime() ? new Date().getTime() + (extendRequest.package as any).monthDuration * 30 * 86400 * 1000 : (extendRequest.shop as any).expiryDate + (extendRequest.package as any).monthDuration * 30 * 86400 * 1000;
      this.setState({
        data: this.state.data.map((item) => item._id === extendRequest.shop._id ? {...item, expiryDate: newExpiryDate} : item),
        extendRequest: {
          ...this.state.extendRequest,
          data: this.state.extendRequest.data.map((item) => item._id === extendRequest._id ? {...item, state: 'FINISHED'} : item),
          loading: {
            ...this.state.extendRequest.loading,
            table: false,
          },
        },
      });
      message.success(this.props.t('admin-shops:extend-success'));
    } catch (error) {
      message.error(error.message);
      this.setState({
        extendRequest: {
          ...this.state.extendRequest,
          loading: {
            ...this.state.extendRequest.loading,
            table: false,
          },
        },
      });
    }
  }

  render () {
    const translate = this.props.t;
    const dateFormat = 'DD/MM/YYYY HH:mm';
    const actionsDropdown = (record: Shop) => (
      <Menu>
        {/* <Menu.Item>
          <a onClick={() => this.openExpiryDateModal(record)}>
            {translate('admin-shops:extend')}
          </a>
        </Menu.Item> */}
        {!record.isActive && (
          <Menu.Item>
            <a onClick={() => this.activateShop(record._id)}>{translate('admin-shops:active')}</a>
          </Menu.Item>
        )}
        {record.isActive && (
          <Menu.Item>
            <a onClick={() => this.deactivateShop(record._id)}>{translate('admin-shops:deactivate')}</a>
          </Menu.Item>
        )}
      </Menu>
    );
    const extendRequestActionsDropdown = (record: ShopExtendRequest) => (
      <Menu>
        {record.state === 'PENDING' && (
          <Menu.Item>
            <a onClick={() => this.extendShop(record)}>
              {translate('admin-shops:confirm-and-extend')}
            </a>
          </Menu.Item>
        )}
      </Menu>
    );
    const columns: any[] = [
      {
        title: translate('admin-shops:shopName'),
        dataIndex: 'name',
        key: 'name',
        render: (_text: string, record: Shop) => <a style={{color: '#000'}} href={getShopUrl(record.domain)} target='_blank' title={record.name}>{record.name}</a>,
      },
      {
        title: translate('admin-shops:createdAt'),
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (_text: string, record: Shop) => moment(new Date(record.createdAt)).format(dateFormat),
      },
      {
        title: translate('admin-shops:registerAccount'),
        dataIndex: 'owner',
        key: 'owner',
        render: (_text: string, record: Shop) => {
          const displayName = record.owner.fullName || record.owner.email || record.owner.phone;
          return (
            <a href={`/nguoi-dung/${record.owner._id}`} target='_blank' style={{color: '#000'}}>
              {displayName}
            </a>
          );
        },
      },
      {
        title: translate('admin-shops:selectedPackage'),
        dataIndex: 'purchasedPackages',
        key: 'purchasedPackages',
        render: (_text: string, record: Shop) => {
          const purchasesPackage = record.purchasedPackages[record.purchasedPackages.length - 1];
          return (
            <div><strong>{purchasesPackage ? purchasesPackage : 1} {this.props.t(purchasesPackage ? `admin-shops:months` : `admin-shops:month`)}</strong></div>
          );
        },
      },
      {
        title: translate('admin-shops:expiryDate'),
        dataIndex: 'expiryDate',
        key: 'expiryDate',
        render: (_text: string, record: Shop) => new Date(record.expiryDate).getTime() < new Date().getTime()
          ? <div style={{color: '#f81d22'}}>{moment(new Date(record.expiryDate)).format(dateFormat)}</div>
          : moment(new Date(record.expiryDate)).format(dateFormat),
      },
      {
        title: translate('admin-shops:status'),
        dataIndex: 'isActive',
        key: 'isActive',
        render: (_text: string, record: Shop) => <Tag key={record._id} color={record.isActive ? 'green' : 'red'}>{record.isActive ? 'Active' : 'In-Active'}</Tag>,
      },
      {
        title: translate('common:actions'),
        dataIndex: 'operations',
        key: 'operations',
        render: (_text: string, record: Shop) => (
          <Dropdown overlay={actionsDropdown(record)} trigger={['click']}>
            <a className='ant-dropdown-link'>
              {translate('common:actions')} <Icon type='down' />
            </a>
          </Dropdown>
        ),
      },
    ];
    const extendRequestColumns = [
      {
        title: translate('admin-shops:shopName'),
        dataIndex: 'shopName',
        key: 'shopName',
      },
      {
        title: translate('admin-shops:requestedAt'),
        dataIndex: 'requestedAt',
        key: 'requestedAt',
        render: (_text: string, record: ShopExtendRequest) => moment(new Date(record.requestedAt)).format(dateFormat),
      },
      {
        title: translate('admin-shops:registerAccount'),
        dataIndex: 'requestedBy',
        key: 'requestedBy',
        render: (_text: string, record: ShopExtendRequest) => {
          const displayName = record.requestedBy.fullName || record.requestedBy.email || record.requestedBy.phone;
          return (
            <a href={`/nguoi-dung/${record.requestedBy._id}`} target='_blank' style={{color: '#000'}}>
              {displayName}
            </a>
          );
        },
      },
      {
        title: translate('admin-shops:selectedPackage'),
        dataIndex: 'package',
        key: 'package',
        render: (_text: string, record: ShopExtendRequest) => {
          return (
            <div><strong>{record.package.monthDuration} {this.props.t(`admin-shops:months`)}</strong></div>
          );
        },
      },
      {
        title: translate('admin-shops:status'),
        dataIndex: 'state',
        key: 'state',
        render: (_text: string, record: ShopExtendRequest) => <Tag key={record._id} color={record.state === 'PENDING' ? 'red' : 'green'}>{record.state === 'PENDING' ? translate(`admin-shops:pendingRequest`) : translate(`admin-shops:finishRequest`)}</Tag>,
      },
      {
        title: translate('common:actions'),
        dataIndex: 'operations',
        key: 'operations',
        render: (_text: string, record: ShopExtendRequest) => (
          <Dropdown overlay={extendRequestActionsDropdown(record)} trigger={['click']}>
            <a className='ant-dropdown-link'>
              {translate('common:actions')} <Icon type='down' />
            </a>
          </Dropdown>
        ),
      },
    ];

    return (
      <div className='admin-shops-screen'>
        <Row type='flex' style={{marginBottom: '24px'}} justify='space-between'>
          <Col xs={12} xl={8}>
            <Input.Search
              value={this.state.activeTab === 'shop' ? this.state.filters.search : this.state.extendRequest.filters.search}
              enterButton={true}
              placeholder={translate('admin-shops:searchShop')}
              onSearch={this.state.activeTab === 'shop' ? this.getData : this.getShopExtendRequestData}
              onChange={this.state.activeTab === 'shop' ? (e: any) => this.handleSearchChange(e.target.value) : (e: any) => this.handleExtendRequestSearchChange(e.target.value)}
            />
          </Col>
          <Col xs={10} style={{display: 'flex', justifyContent: 'flex-end'}}>
            {/* <Button type='primary' onClick={() => this.openUserModal()}>{translate('admin-users:Create')}</Button> */}
          </Col>
        </Row>

        <Tabs defaultActiveKey={this.state.activeTab} onChange={this.handleTabChange as any}>
          <Tabs.TabPane tab={this.props.t(`admin-shops:shops`)} key='shop'>
            <Row type='flex'>
              <Col xs={24}>
                <Table
                  columns={columns}
                  dataSource={this.state.data}
                  loading={this.state.loading.table}
                  pagination={false}
                  scroll={{x: 1000}}
                  style={{marginBottom: '24px'}}
                  rowKey={(record: any) => record._id}
                />
                <div className='pagination' style={{display: 'flex', justifyContent: 'flex-end'}}>
                  {this.state.before && (
                    <Button onClick={this.getPrevPage}><Icon type='left' /> {translate('admin-users:Prev')}</Button>
                  )}
                  {this.state.after && (
                    <Button onClick={this.getNextPage}>{translate('admin-users:Next')} <Icon type='right' /></Button>
                  )}
                </div>
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab={this.props.t(`admin-shops:extendRequests`)} key='extendRequest'>
            <Table
              columns={extendRequestColumns}
              dataSource={this.state.extendRequest.data}
              loading={this.state.extendRequest.loading.table}
              pagination={false}
              scroll={{x: 1000}}
              style={{marginBottom: '24px'}}
              rowKey={(record: any) => record._id}
            />
            <div className='pagination' style={{display: 'flex', justifyContent: 'flex-end'}}>
              {this.state.extendRequest.before && (
                <Button onClick={this.getExtendRequestPrevPage}><Icon type='left' /> {translate('admin-users:Prev')}</Button>
              )}
              {this.state.extendRequest.after && (
                <Button onClick={this.getExtendRequestNextPage}>{translate('admin-users:Next')} <Icon type='right' /></Button>
              )}
            </div>
          </Tabs.TabPane>
        </Tabs>

        {/* {this.state.expiryDateModalVisible && (
          <Modal
            title={translate('admin-shops:extend')}
            visible={this.state.expiryDateModalVisible}
            onOk={this.extendExpiryDate}
            onCancel={this.closeExpiryDateModal}
            confirmLoading={this.state.loading.modal}
          >
            {translate('admin-shops:expiryDate')}: &nbsp;
            <DatePicker
              onChange={this.onExpiryDateChange}
              format={`DD/MM/YYYY`}
              value={this.state.newExpiryDate ? this.state.newExpiryDate : moment(new Date(this.state.selectedShop!.expiryDate))}
            />
          </Modal>
        )} */}
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

const AdminShopsScreen = Authorize(withRematch(initStore, mapState, mapDispatch)(withNamespaces('admin-shops')(AdminShops)), [], true, 'admin');

export {
  AdminShopsScreen,
};
