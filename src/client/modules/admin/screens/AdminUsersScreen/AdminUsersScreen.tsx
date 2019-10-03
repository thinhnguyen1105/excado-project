import React from 'react';
import { User, Role } from '@client/services/service-proxies';
import './AdminUsersScreen.less';
import { Table, Tag, Dropdown, Icon, Menu, Col, Row, Input, Button, message } from 'antd';
import moment from 'moment';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getServiceProxy } from '@client/services';
import UserModal from './components/UserModal';
import { Authorize } from '@client/components';
import { withRematch, initStore } from '@client/store';
import { withNamespaces } from '@client/i18n';

interface State {
  search: string;
  roles: Role[];
  data: User[];
  before: any;
  after: any;
  sortBy: string;
  pageSize: number;
  loading: {
    table: boolean;
    modal: boolean;
  };
  modal: {
    create?: any;
    update?: User;
  };
  rolesData?: Role[];
}
interface Props {
  t: (key: string) => string;
}
class AdminUsers extends React.PureComponent<Props, State> {
  state: State = {
    search: '',
    roles: [],
    data: [],
    before: undefined,
    after: undefined,
    sortBy: 'createdAt|desc',
    pageSize: 10,
    loading: {
      table: false,
      modal: false,
    },
    modal: {
      create: false,
    },
    rolesData: undefined,
  };

  async componentDidMount () {
    this.handleSearch('');
  }

  handleSearch = async (value: string) => {
    this.setState({
      loading: {
        ...this.state.loading,
        table: true,
      },
    });

    try {
      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = getServiceProxy(idToken);
      const result = await serviceProxy.findUsers(
        value,
        this.state.roles.map((item) => item._id),
        this.state.pageSize,
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
      message.error(error.response);
      this.setState({
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
    }
  }

  activateUser = async (userId: string) => {
    this.setState({
      loading: {
        ...this.state.loading,
        table: true,
      },
    });

    try {
      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = getServiceProxy(idToken);
      await serviceProxy.updateUser(userId, {operation: 'activate'});

      this.setState({
        data: this.state.data.map((item) => {
          return item._id === userId ? {...item, isActive: true} : item;
        }),
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
      message.success(this.props.t('admin-users:Activate user success'));
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

  deactivateUser = async (userId: string) => {
    this.setState({
      loading: {
        ...this.state.loading,
        table: true,
      },
    });

    try {
      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = getServiceProxy(idToken);
      await serviceProxy.updateUser(userId, {operation: 'deactivate'});

      this.setState({
        loading: {
          ...this.state.loading,
          table: false,
        },
        data: this.state.data.map((item) => {
          return item._id === userId ? {...item, isActive: false} : item;
        }),
      });
      message.success(this.props.t('admin-users:Deactivate user success'));
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

  openUserModal = async (user?: any) => {
    try {
      let rolesData: any = this.state.rolesData;
      if (!rolesData) {
        const idToken = await firebase.auth().currentUser!.getIdToken();
        const serviceProxy = getServiceProxy(idToken);
        const result = await serviceProxy.getAllRoles();
        rolesData = result.roles;
      }

      this.setState({
        modal: {
          ...this.state.modal,
          create: user ? undefined : {},
          update: user ? user : undefined,
        },
        rolesData,
      });
    } catch (error) {
      message.error(error.message);
    }
  }

  closeUserModal = () => {
    this.setState({
      modal: {
        ...this.state.modal,
        create: undefined,
        update: undefined,
      },
    });
  }

  handleSubmit = async (values: any, formikBag: any) => {
    this.setState({
      loading: {
        ...this.state.loading,
        modal: true,
      },
    });

    try {
      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = getServiceProxy(idToken);
      let result: any;
      if (this.state.modal.create) {
        const selectedRoles: any = [];
        this.state.rolesData!.forEach((item) => {
          if (values.roles.indexOf(item.name) > -1) {
            selectedRoles.push(item._id);
          }
        });
        result = await serviceProxy.createUser({
          ...values,
          roles: selectedRoles,
        });
      } else {
        const selectedRoles: any = [];
        this.state.rolesData!.forEach((item) => {
          if (values.roles.indexOf(item.name) > -1) {
            selectedRoles.push(item._id);
          }
        });

        const newInfo = {
          ...this.state.modal.update,
          ...values,
          fullName: [values.familyName, values.givenName].join(' '),
          roles: selectedRoles,
        };

        await serviceProxy.updateUser(this.state.modal.update!._id, {
          operation: 'updateDetail',
          payload: newInfo,
        });
      }

      message.success(this.state.modal.create ? this.props.t('admin-users:Create user success') : this.props.t('admin-users:Update user success'));
      this.setState({
        data: this.state.modal.create ? [
          {
            ...result,
            ...values,
            _id: result.id,
            fullName: [values.familyName, values.givenName].join(' '),
            loginDetail: {provider: 'email', email: values.email},
            roles: this.state.rolesData!.filter((item) => values.roles.indexOf(item.name) > -1),
            isActive: true,
            createdAt: new Date().getTime(),
          },
          ...this.state.data,
        ] : this.state.data.map((item) => {
          if (item._id === this.state.modal.update!._id) {
            return {
              ...this.state.modal.update,
              ...values,
              fullName: [values.familyName, values.givenName].join(' '),
              roles: this.state.rolesData!.filter((ite) => values.roles.indexOf(ite.name) > -1),
            };
          } else {
            return item;
          }
        }),
        loading: {
          ...this.state.loading,
          modal: false,
        },
        modal: {
          ...this.state.modal,
          create: undefined,
          update: undefined,
        },
      });
      formikBag.resetForm({});
    } catch (error) {
      message.error(JSON.parse(error.response).message);
      this.setState({
        loading: {
          ...this.state.loading,
          modal: false,
        },
      });
    }
  }

  loadPrevisousPage = async () => {
    this.setState({
      loading: {
        ...this.state.loading,
        table: true,
      },
    });

    try {
      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = getServiceProxy(idToken);
      const result = await serviceProxy.findUsers(
        this.state.search,
        this.state.roles.map((item) => item._id),
        this.state.pageSize,
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
      message.error(error.response);
      this.setState({
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
    }
  }

  loadNextPage = async () => {
    this.setState({
      loading: {
        ...this.state.loading,
        table: true,
      },
    });

    try {
      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = getServiceProxy(idToken);
      const result = await serviceProxy.findUsers(
        this.state.search,
        this.state.roles.map((item) => item._id),
        this.state.pageSize,
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
      message.error(error.response);
      this.setState({
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
    }
  }

  render () {
    const translate = this.props.t;
    const actionsDropdown = (user: User) => (
      <Menu>
        <Menu.Item>
          <a rel='noopener noreferrer' onClick={() => this.openUserModal(user)}>{translate('admin-users:Edit')}</a>
        </Menu.Item>
        <Menu.Item>
          <a rel='noopener noreferrer' onClick={() => this.activateUser(user._id)}>{translate('admin-users:Activate')}</a>
        </Menu.Item>
        <Menu.Item>
          <a rel='noopener noreferrer' onClick={() => this.deactivateUser(user._id)}>{translate('admin-users:Deactivate')}</a>
        </Menu.Item>
      </Menu>
    );

    const userColumns = [{
      title: translate('admin-users:Name'),
      key: 'fullName',
      dataIndex: 'fullName',
    }, {
      title: translate('admin-users:Account'),
      key: 'email',
      dataIndex: 'email',
      render: (_text: any, record: User) => {
        switch (record.loginDetail.provider) {
          case 'phone':
            return record.loginDetail.phoneNo;
          case 'facebook':
            return record.loginDetail.email;
          case 'google':
            return record.loginDetail.email;
          case 'email':
            return record.loginDetail.email;
        }
      },
    }, {
      title: translate('admin-users:Sign in method'),
      key: 'loginDetail',
      dataIndex: 'loginDetail',
      render: (_text: any, record: User) => record.loginDetail ? <Tag color='cyan'>{record.loginDetail.provider}</Tag> : '',
    }, {
      title: translate('admin-users:Roles'),
      key: 'roles',
      dataIndex: 'roles',
      render: (_text: any, record: User) => (
        <div>
          {record.roles.map((item, index) => <Tag key={index} color='magenta'>{(item as any).name}</Tag>)}
        </div>
      ),
    }, {
      title: translate('admin-users:Status'),
      key: 'isActive',
      dataIndex: 'isActive',
      render: (_text: any, record: User) => <Tag key={record._id} color={record.isActive ? 'green' : 'red'}>{record.isActive ? 'Active' : 'In-Active'}</Tag>,
    }, {
      title: translate('admin-users:Created At'),
      key: 'createdAt',
      dataIndex: 'createdAt',
      render: (_text: any, record: User) => moment(new Date(record.createdAt)).format('DD/MM/YYYY HH:mm'),
    }, {
      title: translate('admin-users:Actions'),
      key: 'actions',
      dataIndex: 'actions',
      render: (_text: any, record: User) => (
        <Dropdown overlay={actionsDropdown(record)} trigger={['click']}>
          <a className='ant-dropdown-link'>
            {translate('admin-users:Actions')} <Icon type='down' />
          </a>
        </Dropdown>
      ),
    }];

    return (
      <div className='users-container'>
        <Row type='flex' style={{marginBottom: '24px'}} justify='space-between'>
          <Col xs={12} xl={8}>
            <Input.Search
              enterButton={true}
              placeholder={translate('admin-users:Search name/email/phone')}
              onSearch={this.handleSearch}
            />
          </Col>
          <Col xs={10} style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button type='primary' onClick={() => this.openUserModal()}>{translate('admin-users:Create')}</Button>
          </Col>
        </Row>
        <Row type='flex'>
          <Col xs={24}>
            <Table
              bordered={true}
              columns={userColumns}
              dataSource={this.state.data}
              loading={this.state.loading.table}
              pagination={false}
              scroll={{x: 1000}}
              style={{marginBottom: '24px'}}
              rowKey={(record: any) => record._id}
            />
            <div className='pagination' style={{display: 'flex', justifyContent: 'flex-end'}}>
              {this.state.before && (
                <Button onClick={this.loadPrevisousPage}><Icon type='left' /> {translate('admin-users:Prev')}</Button>
              )}
              {this.state.after && (
                <Button onClick={this.loadNextPage}>{translate('admin-users:Next')} <Icon type='right' /></Button>
              )}
            </div>
          </Col>
        </Row>

        {(this.state.modal.create || this.state.modal.update) && (
          <UserModal
            title={this.state.modal.update ? translate('admin-users:Update user') : translate('admin-users:Create user')}
            visible={Boolean(this.state.modal.update) || Boolean(this.state.modal.create)}
            handleSubmit={this.handleSubmit}
            closeModal={this.closeUserModal}
            initialValue={this.state.modal.update ? {
              ...this.state.modal.update,
              roles: this.state.modal.update.roles.map((item: any) => item.name),
            } : this.state.modal.create}
            rolesData={this.state.rolesData}
            loading={this.state.loading.modal}
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

const AdminUsersScreen = Authorize(withRematch(initStore, mapState, mapDispatch)(withNamespaces('admin-users')(AdminUsers)), [], true, 'admin');

export {
  AdminUsersScreen,
};
