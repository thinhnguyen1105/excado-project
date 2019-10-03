import React from 'react';
import './AdminRentalPeriodsScreen.less';
import { withRematch, initStore, ProfileState } from '@client/store';
import { Authorize, AdminSearchbar, PagingButtons } from '@client/components';
import { RentalPeriod } from '@client/services/service-proxies';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getServiceProxy } from '@client/services';
import { message, Menu, Dropdown, Icon, Table } from 'antd';
import * as moment from 'moment';
import RentalPeriodModal from './components/RentalPeriodModal';
import { withNamespaces } from '@client/i18n';

interface Props {}
interface State {
  filters: {};
  data: RentalPeriod[];
  before?: string;
  after?: string;
  first: number;
  sortBy: string;
  loading: {
    table: boolean;
    modal: boolean;
  };
  rentalPeriodModalVisible: boolean;
  selectedRentalPeriod?: RentalPeriod;
}
class AdminRentalPeriods extends React.PureComponent<Props & {profileState: ProfileState; t: (key: string) => string}, State> {
  state: State = {
    filters: {},
    data: [],
    before: undefined,
    after: undefined,
    first: 10,
    sortBy: `min|asc`,
    loading: {
      table: true,
      modal: false,
    },
    rentalPeriodModalVisible: false,
    selectedRentalPeriod: undefined,
  };

  componentDidMount () {
    this.getData();
  }

  openRentalPeriodModal = (selectedRentalPeriod?: RentalPeriod) => {
    this.setState({
      rentalPeriodModalVisible: true,
      selectedRentalPeriod,
    });
  }

  closeRentalPeriodModal = () => {
    this.setState({
      rentalPeriodModalVisible: false,
      selectedRentalPeriod: undefined,
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
      const result = await serviceProxies.getAllRentalPeriods();

      this.setState({
        data: result.data,
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
    //
  }

  getNextPage = async () => {
    //
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
      if (this.state.selectedRentalPeriod && this.state.selectedRentalPeriod._id) {
        await serviceProxies.updateRentalPeriod(this.state.selectedRentalPeriod._id, {
          operation: 'updateDetail',
          payload: {
            min: values.min,
            max: values.max,
          },
        });

        this.setState({
          rentalPeriodModalVisible: false,
          loading: {
            ...this.state.loading,
            modal: false,
          },
          selectedRentalPeriod: undefined,
          data: this.state.data.map((item) => item._id === this.state.selectedRentalPeriod!._id ? {
            ...item,
            min: values.min,
            max: values.max,
          } : item),
        });
        message.success(this.props.t('admin-rental-periods:update-success'));
      } else {
        const result = await serviceProxies.createRentalPeriod({
          min: values.min,
          max: values.max,
        });

        this.setState({
          rentalPeriodModalVisible: false,
          loading: {
            ...this.state.loading,
            modal: false,
          },
          selectedRentalPeriod: undefined,
          data: [
            {_id: (result as any).id, min: values.min, max: values.max, createdAt: new Date().getTime()} as any,
            ...this.state.data,
          ],
        });
        message.success(this.props.t('admin-rental-periods:create-success'));
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

  render () {
    const translate = this.props.t;
    const dateFormat = 'DD/MM/YYYY HH:mm';
    const actionsDropdown = (record: RentalPeriod) => (
      <Menu>
        <Menu.Item>
          <a onClick={() => this.openRentalPeriodModal(record)}>
            {translate('common:edit')}
          </a>
        </Menu.Item>
      </Menu>
    );
    const columns: any[] = [
      {
        title: translate('admin-rental-periods:rental-period'),
        dataIndex: 'rental-period',
        key: 'rental-period',
        render: (_text: string, record: RentalPeriod) => {
          const rentalPeriod = record.max
            ? translate('common:from-to').replace('{from}', record.min.toString()).replace('{to}', record.max.toString()) + ' ' + translate('common:month')
            : translate('common:more-than') + ' ' + record.min + ' ' + translate('common:month');
          return rentalPeriod;
        },
      },
      {
        title: translate('common:created-at'),
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (_text: string, record: RentalPeriod) => moment(new Date(record.createdAt)).format(dateFormat),
      },
      {
        title: translate('common:actions'),
        dataIndex: 'operations',
        key: 'operations',
        render: (_text: string, record: RentalPeriod) => (
          <Dropdown overlay={actionsDropdown(record)} trigger={['click']}>
            <a className='ant-dropdown-link'>
              {translate('common:actions')} <Icon type='down' />
            </a>
          </Dropdown>
        ),
      },
    ];
    return (
      <div className='admin-rental-periods-screen'>
        <AdminSearchbar
          hasCreate={true}
          handleSearch={this.getData}
          value={''}
          showSearch={false}
          handleSearchChange={() => null}
          placeholder={''}
          onCreateClick={() => this.openRentalPeriodModal()}
        />

        <Table
          columns={columns}
          dataSource={this.state.data.sort((a, b) => a.min - b.min)}
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

        {this.state.rentalPeriodModalVisible && (
          <RentalPeriodModal
            rentalPeriodInfo={this.state.selectedRentalPeriod}
            loading={this.state.loading.modal}
            visible={this.state.rentalPeriodModalVisible}
            handleCancel={this.closeRentalPeriodModal}
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

const AdminRentalPeriodsScreen = Authorize(withRematch(initStore, mapState, mapDispatch)(withNamespaces('admin-rental-periods')(AdminRentalPeriods)), [], true, 'admin');

export {
  AdminRentalPeriodsScreen,
};
