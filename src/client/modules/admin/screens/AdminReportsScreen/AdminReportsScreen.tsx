import React from 'react';
import { AdminSearchbar, PagingButtons, Authorize } from '@client/components';
import './AdminReportsScreen.less';
import { withNamespaces } from '@client/i18n';
import { Table, message, Tag, Menu, Dropdown, Icon, Modal, Form, Input } from 'antd';
import { Report, ReportState } from '@client/services/service-proxies';
import * as jsCookie from 'js-cookie';
import { getServiceProxy } from '@client/services';
import { getShopUrl, reportReasons, reportResults, validateField } from '@client/core';
import * as moment from 'moment';
import { withRematch, initStore, ProfileState } from '@client/store';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Formik, FormikContext } from 'formik';
import * as yup from 'yup';

interface Props {}
interface State {
  filters: {
    search?: string;
    reason?: string;
    state?: ReportState;
  };
  data: Report[];
  before?: string;
  after?: string;
  first: number;
  sortBy: string;
  loading: {
    modal: boolean;
    table: boolean;
  };
  notiModalVisible: boolean;
  selectedReport?: Report;
}
class AdminReports extends React.PureComponent<Props & {profileState: ProfileState; t: (key: string) => string}, State> {
  state: State = {
    filters: {
      search: undefined,
      reason: undefined,
      state: undefined,
    },
    data: [],
    before: undefined,
    after: undefined,
    first: 10,
    sortBy: `createdAt|desc`,
    loading: {
      modal: false,
      table: true,
    },
    notiModalVisible: false,
    selectedReport: undefined,
  };

  componentDidMount () {
    this.getData();
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
      const result = await serviceProxies.findReports(
        this.state.filters.search,
        this.state.filters.state as any,
        this.state.filters.reason as any,
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
      const result = await serviceProxies.findReports(
        this.state.filters.search,
        this.state.filters.state as any,
        this.state.filters.reason as any,
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
      const idToken = jsCookie.get('token');
      const serviceProxies = getServiceProxy(idToken);
      const result = await serviceProxies.findReports(
        this.state.filters.search,
        this.state.filters.state as any,
        this.state.filters.reason as any,
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

  resolveReport = async (payload: {reportId: string; resolvedResult: string}) => {
    this.setState({
      loading: {
        ...this.state.loading,
        table: true,
      },
    });

    try {
      const idToken = jsCookie.get('token');
      const serviceProxies = getServiceProxy(idToken);
      await Promise.all([
        serviceProxies.updateReport(
          payload.reportId,
          {
            operation: 'resolveReport',
            payload: {
              resolvedResult: payload.resolvedResult,
            },
          },
        ),
      ]);

      this.setState({
        data: this.state.data.map((item) => {
          if (item._id === payload.reportId) {
            return {
              ...item,
              state: 'RESOLVED',
              resolvedResult: payload.resolvedResult,
              resolvedAt: new Date().getTime(),
              resolvedBy: this.props.profileState.authUser!.id,
            } as any;
          } else {
            return item;
          }
        }),
        loading: {
          ...this.state.loading,
          table: false,
        },
      });
      message.success(this.props.t('admin-reports:resolve-report-success'));
    } catch (error) {
      message.error(error.message);
    }
  }

  openNotificationModal = (selectedReport: Report) => {
    this.setState({
      notiModalVisible: true,
      selectedReport,
    });
  }

  closeNotificationModal = () => {
    this.setState({
      notiModalVisible: false,
      selectedReport: undefined,
    });
  }

  sendNotification = async (values: {description: string}) => {
    if (this.state.selectedReport) {
      try {
        this.setState({
          loading: {
            ...this.state.loading,
            modal: true,
          },
        });

        const idToken = await firebase.auth().currentUser!.getIdToken();
        const serviceProxy = getServiceProxy(idToken);
        await Promise.all([
          serviceProxy.updateReport(
            this.state.selectedReport._id,
            {
              operation: 'resolveReport',
              payload: {
                resolvedResult: `NOTIFY`,
                description: values.description,
              },
            },
          ),
        ]);

        message.success(this.props.t(`admin-reports:send-noti-success`));
        this.setState({
          notiModalVisible: false,
          loading: {
            ...this.state.loading,
            modal: false,
          },
          data: this.state.data.map((item) => {
            if (item._id === this.state.selectedReport!._id) {
              return {
                ...item,
                state: 'RESOLVED',
                resolvedResult: 'NOTIFY',
                resolvedAt: new Date().getTime(),
                resolvedBy: this.props.profileState.authUser!.id,
              } as any;
            } else {
              return item;
            }
          }),
        });
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
  }

  render() {
    const translate = this.props.t;
    const dateFormat = 'DD/MM/YYYY HH:mm';
    const actionsDropdown = (record: Report) => {
      if (!record.resolvedResult) {
        return (
          <Menu>
            <Menu.Item>
              <a onClick={() => this.resolveReport({reportId: record._id, resolvedResult: reportResults.SKIP})}>
                {translate('admin-reports:skip')}
              </a>
            </Menu.Item>
            <Menu.Item>
              <a onClick={() => this.resolveReport({reportId: record._id, resolvedResult: reportResults.DELETE})}>
                {translate('admin-reports:delete')}
              </a>
            </Menu.Item>
            <Menu.Item>
              <a onClick={() => this.openNotificationModal(record)}>
                {translate('admin-reports:send-notification')}
              </a>
            </Menu.Item>
          </Menu>
        );
      }

      return <div />;
    };
    const columns: any[] = [
      {
        title: translate('admin-reports:news-title'),
        dataIndex: 'newsTitle',
        key: 'newsTitle',
        render: (_text: string, record: Report) => (
          <a
            href={record.news.shop ? `${getShopUrl(record.news.shop.domain)}/bai-dang-cua-hang/${record.news._id}` : `/bai-dang/${record.news._id}`}
            target='_blank'
            style={{color: '#000'}}
          >
            {record.news.title}
          </a>
        ),
      },
      {
        title: translate('admin-reports:createdBy'),
        dataIndex: 'createdBy',
        key: 'createdBy',
        render: (_text: string, record: Report) => (
          record.reports.slice(0, 1).map((report, index) => {
            const displayName = report.createdBy.fullName || report.createdBy.email || report.createdBy.phoneNo;
            return (
              <a href={`/nguoi-dung/${report.createdBy._id}`} target='_blank' key={index} style={{color: '#000'}}>
                {displayName}
              </a>
            );
          })
        ),
      },
      {
        title: translate('admin-reports:report-reasons'),
        dataIndex: 'reportReasons',
        key: 'reportReasons',
        render: (_text: string, record: Report) => (
          record.reports.slice(0, 3).map((report, index) => <Tag key={index} color='red'>{reportReasons.filter((item) => item.value === report.reason)[0].label}</Tag>)
        ),
      },
      {
        title: translate('admin-reports:report-description'),
        dataIndex: 'description',
        key: 'description',
        render: (_text: string, record: Report) => (
          record.reports.slice(0, 1).map((report, index) => (
            <div key={index} style={{wordBreak: 'break-word', whiteSpace: 'pre-line'}}>
              {report.description}
            </div>
          ))
        ),
      },
      {
        title: translate('admin-reports:createdAt'),
        dataIndex: 'resolvedAt',
        key: 'resolvedAt',
        render: (_text: string, record: Report) => record.reports.slice(0, 1).map((report) => moment(new Date(report.createdAt)).format(dateFormat)),
      },
      {
        title: translate('admin-reports:report-state'),
        dataIndex: 'reportState',
        key: 'reportState',
        render: (_text: string, record: Report) => (
          <Tag color={record.state === 'PENDING' ? 'red' : 'blue'}>{record.state === 'PENDING' ? translate('admin-reports:pending-report') : translate('admin-reports:resolved-report')}</Tag>
        ),
      },
      {
        title: translate('admin-reports:resolved-result'),
        dataIndex: 'resolvedResult',
        key: 'resolvedResult',
        render: (_text: string, record: Report) => record.resolvedResult && record.resolvedResult === 'DELETE' ? (
          <Tag color={'red'}>
            {translate('admin-reports:delete')}
          </Tag>
        ) : record.resolvedResult && record.resolvedResult === 'NOTIFY' ? (
          <Tag color={'yellow'}>
            {translate('admin-reports:notify')}
          </Tag>
        ) : record.resolvedResult && record.resolvedResult === 'SKIP' ? (
          <Tag color={'blue'}>
            {translate('admin-reports:skip')}
          </Tag>
        ) : '',
      },
      // {
      //   title: translate('admin-reports:resolved-at'),
      //   dataIndex: 'resolvedAt',
      //   key: 'resolvedAt',
      //   render: (_text: string, record: Report) => record.resolvedAt ? moment(new Date(record.resolvedAt)).format(dateFormat) : '',
      // },
      {
        title: translate('common:actions'),
        dataIndex: 'operations',
        key: 'operations',
        render: (_text: string, record: Report) => (
          <Dropdown overlay={actionsDropdown(record)} trigger={['click']}>
            <a className='ant-dropdown-link'>
              {translate('common:actions')} <Icon type='down' />
            </a>
          </Dropdown>
        ),
      },
    ];

    const NotificationValidateSchema = yup.object().shape({
      description: yup.string()
        .required(translate('common:please-describe-more-details'))
        .min(5, translate('common:describe-too-short'))
        .max(500, translate('common:describe-too-long')),
    });

    return (
      <div className='admin-reports-screen'>
        <AdminSearchbar
          handleSearch={this.getData}
          value={this.state.filters.search}
          showSearch={true}
          handleSearchChange={this.handleSearchChange}
          placeholder={translate('admin-reports:search-reports')}
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

        <Formik
          initialValues={{
            description: '',
          }}
          validateOnChange={true}
          validationSchema={NotificationValidateSchema}
          onSubmit={async (values, formikBag) => {
            await this.sendNotification(values);
            formikBag.resetForm({
              description: '',
            });
          }}
        >
          {(context: FormikContext<{description: string}>) => (
            <Modal
              title={translate('admin-reports:send-notification')}
              visible={this.state.notiModalVisible}
              onOk={context.handleSubmit}
              onCancel={this.closeNotificationModal}
              confirmLoading={this.state.loading.modal}
              okText={translate('admin-reports:send-noti')}
              cancelText={translate('admin-reports:cancel')}
            >
              <Form>
                <Form.Item validateStatus={context.errors.description ? 'error' : undefined} help={context.errors.description}>
                  <Input.TextArea
                    value={context.values.description}
                    onChange={context.handleChange}
                    onBlur={() => validateField({
                      fieldName: 'description',
                      validateSchema: NotificationValidateSchema,
                      context,
                    })}
                    autosize={{ minRows: 5 }}
                    placeholder={translate('admin-reports:please-input-noti-content')}
                    name='description'
                  />
                </Form.Item>
              </Form>
            </Modal>
          )}
        </Formik>
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

const AdminReportsScreen = Authorize(withRematch(initStore, mapState, mapDispatch)(withNamespaces('admin-reports')(AdminReports)), [], true, 'admin');

export {
  AdminReportsScreen,
};
