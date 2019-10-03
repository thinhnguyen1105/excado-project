import React from 'react';
import './AdminWeightRangesScreen.less';
import { ProfileState, initStore, withRematch } from '@client/store';
import { Authorize, AdminSearchbar, PagingButtons } from '@client/components';
import { WeightRange } from '@client/services/service-proxies';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getServiceProxy } from '@client/services';
import { message, Menu, Dropdown, Icon, Table } from 'antd';
import { withNamespaces } from '@client/i18n';
import * as moment from 'moment';
import WeightRangeModal from './components/WeightRangeModal';

interface Props {}
interface State {
  filters: {};
  data: WeightRange[];
  before?: string;
  after?: string;
  first: number;
  sortBy: string;
  loading: {
    table: boolean;
    modal: boolean;
  };
  weightRangeModalVisible: boolean;
  selectedWeightRange?: WeightRange;
}
class AdminWeightRanges extends React.PureComponent<Props & {profileState: ProfileState; t: (key: string) => string}, State> {
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
    weightRangeModalVisible: false,
    selectedWeightRange: undefined,
  };

  componentDidMount () {
    this.getData();
  }

  openWeightRangeModal = (selectedWeightRange?: WeightRange) => {
    this.setState({
      weightRangeModalVisible: true,
      selectedWeightRange,
    });
  }

  closeWeightRangeModal = () => {
    this.setState({
      weightRangeModalVisible: false,
      selectedWeightRange: undefined,
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
      const result = await serviceProxies.getAllWeightRanges();

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
      if (this.state.selectedWeightRange && this.state.selectedWeightRange._id) {
        await serviceProxies.updateWeightRange(this.state.selectedWeightRange._id, {
          operation: 'updateDetail',
          payload: {
            min: values.min,
            max: values.max,
          },
        });

        this.setState({
          weightRangeModalVisible: false,
          loading: {
            ...this.state.loading,
            modal: false,
          },
          selectedWeightRange: undefined,
          data: this.state.data.map((item) => item._id === this.state.selectedWeightRange!._id ? {
            ...item,
            min: values.min,
            max: values.max,
          } : item),
        });
        message.success(this.props.t('admin-weight-ranges:update-success'));
      } else {
        const result = await serviceProxies.createWeightRange({
          min: values.min,
          max: values.max,
        });

        this.setState({
          weightRangeModalVisible: false,
          loading: {
            ...this.state.loading,
            modal: false,
          },
          selectedWeightRange: undefined,
          data: [
            {_id: (result as any).id, min: values.min, max: values.max, createdAt: new Date().getTime()} as any,
            ...this.state.data,
          ],
        });
        message.success(this.props.t('admin-weight-ranges:create-success'));
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
    const actionsDropdown = (record: WeightRange) => (
      <Menu>
        <Menu.Item>
          <a onClick={() => this.openWeightRangeModal(record)}>
            {translate('common:edit')}
          </a>
        </Menu.Item>
      </Menu>
    );
    const columns: any[] = [
      {
        title: translate('admin-weight-ranges:weight-range'),
        dataIndex: 'weight-range',
        key: 'weight-range',
        render: (_text: string, record: WeightRange) => {
          const weightRange = record.max
          ? translate('common:from-to').replace('{from}', record.min.toString()).replace('{to}', record.max.toString()) + ' ' + translate('common:ton')
          : translate('common:more-than') + ' ' + record.min + ' ' + translate('common:ton');
          return weightRange;
        },
      },
      {
        title: translate('common:created-at'),
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (_text: string, record: WeightRange) => moment(new Date(record.createdAt)).format(dateFormat),
      },
      {
        title: translate('common:actions'),
        dataIndex: 'operations',
        key: 'operations',
        render: (_text: string, record: WeightRange) => (
          <Dropdown overlay={actionsDropdown(record)} trigger={['click']}>
            <a className='ant-dropdown-link'>
              {translate('common:actions')} <Icon type='down' />
            </a>
          </Dropdown>
        ),
      },
    ];
    return (
      <div className='admin-weight-ranges-screen'>
        <AdminSearchbar
          hasCreate={true}
          handleSearch={this.getData}
          value={''}
          showSearch={false}
          handleSearchChange={() => null}
          placeholder={''}
          onCreateClick={() => this.openWeightRangeModal()}
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

        {this.state.weightRangeModalVisible && (
          <WeightRangeModal
            weightRangeInfo={this.state.selectedWeightRange}
            loading={this.state.loading.modal}
            visible={this.state.weightRangeModalVisible}
            handleCancel={this.closeWeightRangeModal}
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

const AdminWeightRangesScreen = Authorize(withRematch(initStore, mapState, mapDispatch)(withNamespaces('admin-weight-ranges')(AdminWeightRanges)), [], true, 'admin');

export {
  AdminWeightRangesScreen,
};
