import React from 'react';
import { Authorize } from '@client/components';
import { withRematch, initStore } from '@client/store';
import { withNamespaces } from '@client/i18n';
import './AdminStatisticsScreen.less';
import { NewsStatisticsResult } from '@client/services/service-proxies';
import { Row, Col, DatePicker, Button, Table, message } from 'antd';
import { getServiceProxy } from '@client/services';
import firebase from 'firebase/app';
import 'firebase/auth';
import { utils, writeFile } from 'xlsx';
import * as FileSaver from 'file-saver';
import moment from 'moment';

interface Props {
  t: (key: string) => string;
}
interface State {
  loading: boolean;
  data: NewsStatisticsResult;
  showAll: {
    brands: boolean;
    categories: boolean;
    provinces: boolean;
  };
}
class AdminStatistics extends React.PureComponent<Props, State> {
  state: State = {
    loading: false,
    data: {
      daysOfWeek: [],
      hoursOfDay: [],
      brands: [],
      categories: [],
      provinces: [],
    },
    showAll: {
      brands: false,
      categories: false,
      provinces: false,
    },
  };

  showAll = (key: string) => {
    this.setState({
      showAll: {
        ...this.state.showAll,
        [key]: true,
      },
    });
  }

  getStatisticsInfo = async (dates: any[]) => {
    if (dates.length === 2) {
      try {
        this.setState({
          loading: true,
        });

        const startDate = new Date(moment(new Date(dates[0])).startOf('day').valueOf()).toISOString();
        const endDate = new Date(moment(new Date(dates[1])).endOf('day').valueOf()).toISOString();
        const idToken = await firebase.auth().currentUser!.getIdToken();
        const serviceProxy = getServiceProxy(idToken);
        const statisticsData = await serviceProxy.findNewsStatisticsInfo(startDate, endDate);

        this.setState({
          loading: false,
          data: {
            daysOfWeek: statisticsData.daysOfWeek,
            hoursOfDay: statisticsData.hoursOfDay,
            brands: statisticsData.brands,
            categories: statisticsData.categories,
            provinces: statisticsData.provinces,
          },
        });
      } catch (error) {
        message.error(error.message);
        this.setState({
          loading: false,
        });
      }
    }
  }

  exportExcel = () => {
    try {
      const tables = document.getElementsByTagName('table');
      const workSheets = Array.from(tables).map((item) => utils.table_to_sheet(item));
      const jsonData = workSheets.map((item) => utils.sheet_to_json(item, { header: 1 }));
      let result: any = [];
      result.concat(jsonData[0]);
      jsonData.forEach((item) => {
        result = result.concat(item).concat(['']);
      });
      const worksheet = utils.json_to_sheet(result, { skipHeader: true });
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, worksheet, 'timmay.vn');
      const file = writeFile(workbook, 'statistic-timmay.xlsx');
      FileSaver.saveAs(file, 'statistic-timmay.xlsx');
    } catch (error) {
      //
    }
  }

  render () {
    const translate = this.props.t;

    const dateFormat = 'DD/MM/YYYY';

    const daysOfWeekData = {};
    this.state.data.daysOfWeek.forEach((item) => {
      daysOfWeekData[item._id] = item.totalNews ? item.totalNews : 0;
    });

    const daysOfWeekColumns: any = [
      {
        title: translate('admin-statistics:day'),
        dataIndex: 'totalNews',
        key: 'totalNews',
        render: () => translate('admin-statistics:totalNews'),
      },
      {
        title: translate('admin-statistics:monday'),
        dataIndex: '2',
        key: '2',
        render: (_text: string, record: any) => record['2'] ? record['2'] : 0,
      },
      {
        title: translate('admin-statistics:tuesday'),
        dataIndex: '3',
        key: '3',
        render: (_text: string, record: any) => record['3'] ? record['3'] : 0,
      },
      {
        title: translate('admin-statistics:wednesday'),
        dataIndex: '4',
        key: '4',
        render: (_text: string, record: any) => record['4'] ? record['4'] : 0,
      },
      {
        title: translate('admin-statistics:thursday'),
        dataIndex: '5',
        key: '5',
        render: (_text: string, record: any) => record['5'] ? record['5'] : 0,
      },
      {
        title: translate('admin-statistics:friday'),
        dataIndex: '6',
        key: '6',
        render: (_text: string, record: any) => record['6'] ? record['6'] : 0,
      },
      {
        title: translate('admin-statistics:saturday'),
        dataIndex: '7',
        key: '7',
        render: (_text: string, record: any) => record['7'] ? record['7'] : 0,
      },
      {
        title: translate('admin-statistics:sunday'),
        dataIndex: '1',
        key: '1',
        render: (_text: string, record: any) => record['1'] ? record['1'] : 0,
      },
    ];

    const hoursOfDayColumns = [
      {
        title: translate('admin-statistics:hour'),
        dataIndex: 'totalNews',
        key: 'totalNews',
        render: () => translate('admin-statistics:totalNews'),
      },
      {
        title: `0 - 2`,
        dataIndex: '0',
        key: '0',
        render: (_text: string, record: any) => record['0'] ? record['0'] : 0,
      },
      {
        title: `2 - 4`,
        dataIndex: '2',
        key: '2',
        render: (_text: string, record: any) => record['2'] ? record['2'] : 0,
      },
      {
        title: `4 - 6`,
        dataIndex: '4',
        key: '4',
        render: (_text: string, record: any) => record['4'] ? record['4'] : 0,
      },
      {
        title: `6 - 8`,
        dataIndex: '6',
        key: '6',
        render: (_text: string, record: any) => record['6'] ? record['6'] : 0,
      },
      {
        title: `8 - 10`,
        dataIndex: '8',
        key: '8',
        render: (_text: string, record: any) => record['8'] ? record['8'] : 0,
      },
      {
        title: `10 - 12`,
        dataIndex: '10',
        key: '10',
        render: (_text: string, record: any) => record['10'] ? record['10'] : 0,
      },
      {
        title: `12 - 14`,
        dataIndex: '12',
        key: '12',
        render: (_text: string, record: any) => record['12'] ? record['12'] : 0,
      },
      {
        title: `14 - 16`,
        dataIndex: '14',
        key: '14',
        render: (_text: string, record: any) => record['14'] ? record['14'] : 0,
      },
      {
        title: `16 - 18`,
        dataIndex: '16',
        key: '16',
        render: (_text: string, record: any) => record['16'] ? record['16'] : 0,
      },
      {
        title: `18 - 20`,
        dataIndex: '18',
        key: '18',
        render: (_text: string, record: any) => record['18'] ? record['18'] : 0,
      },
      {
        title: `20 - 22`,
        dataIndex: '20',
        key: '20',
        render: (_text: string, record: any) => record['20'] ? record['20'] : 0,
      },
      {
        title: `22 - 24`,
        dataIndex: '22',
        key: '22',
        render: (_text: string, record: any) => record['22'] ? record['22'] : 0,
      },
    ];

    const hoursOfDayData = {};
    this.state.data.hoursOfDay.forEach((hour) => {
      if (Number(hour._id) % 2 === 0) {
        hoursOfDayData[Number(hour._id)] = Number(hour.totalNews);
      } else {
        hoursOfDayData[Number(hour._id) - 1] ? hoursOfDayData[Number(hour._id) - 1] += Number(hour.totalNews) : hoursOfDayData[Number(hour._id) - 1] = Number(hour.totalNews);
      }
    });

    const brandsColumns = [
      {
        title: translate('admin-statistics:brand'),
        dataIndex: 'name',
        key: 'name',
        sorter: (a: any, b: any) => a.name - b.name,
      },
      {
        title: translate('admin-statistics:totalNews'),
        dataIndex: 'totalNews',
        key: 'totalNews',
        sorter: (a: any, b: any) => a.totalNews - b.totalNews,
      },
    ];

    const categoriesColumns = [
      {
        title: translate('admin-statistics:category'),
        dataIndex: 'name',
        key: 'name',
        sorter: (a: any, b: any) => a.name - b.name,
      },
      {
        title: translate('admin-statistics:totalNews'),
        dataIndex: 'totalNews',
        key: 'totalNews',
        sorter: (a: any, b: any) => a.totalNews - b.totalNews,
      },
    ];

    const locationsColumns = [
      {
        title: translate('admin-statistics:location'),
        dataIndex: 'name',
        key: 'name',
        sorter: (a: any, b: any) => a.name - b.name,
      },
      {
        title: translate('admin-statistics:totalNews'),
        dataIndex: 'totalNews',
        key: 'totalNews',
        sorter: (a: any, b: any) => a.totalNews - b.totalNews,
      },
    ];

    return (
      <div className='admin-statistics-screen'>
        <Row style={{marginBottom: '24px'}}>
          <Col xs={24}>
            <div className='date-picker-container'>
              <DatePicker.RangePicker
                placeholder={[translate('admin-statistics:startDate'), translate('admin-statistics:endDate')]}
                format={dateFormat}
                onCalendarChange={(dates: any) => this.getStatisticsInfo(dates)}
              />
              <Button htmlType='submit' type='primary' icon='download' onClick={this.exportExcel}>
                {translate('admin-statistics:exportToExcel')}
              </Button>
            </div>
          </Col>
        </Row>

        <Table
          bordered={true}
          columns={daysOfWeekColumns}
          dataSource={this.state.data.daysOfWeek.length > 0 ? [daysOfWeekData] : []}
          pagination={false}
          scroll={{x: 1000}}
          style={{marginBottom: '24px'}}
          rowKey={(record: any) => record._id}
          loading={this.state.loading}
        />

        <Table
          bordered={true}
          columns={hoursOfDayColumns}
          dataSource={this.state.data.hoursOfDay.length > 0 ? [hoursOfDayData] : []}
          pagination={false}
          scroll={{x: 1000}}
          style={{marginBottom: '24px'}}
          rowKey={(record: any) => record._id}
          loading={this.state.loading}
        />

        <Row type='flex' gutter={24}>
          <Col xs={24} lg={8}>
            <Table
              bordered={true}
              columns={brandsColumns}
              dataSource={this.state.showAll.brands ? this.state.data.brands.sort((a, b) => b.totalNews - a.totalNews) : this.state.data.brands.sort((a, b) => b.totalNews - a.totalNews).slice(0, 15)}
              pagination={false}
              style={{marginBottom: '24px'}}
              rowKey={(record: any) => record._id}
              loading={this.state.loading}
              footer={() => this.state.data.brands.length > 15 && !this.state.showAll.brands ? <a onClick={() => this.showAll('brands')}>{translate('admin-statistics:showAll')}</a> : null}
            />
          </Col>
          <Col xs={24} lg={8}>
            <Table
              bordered={true}
              columns={categoriesColumns}
              dataSource={this.state.showAll.categories ? this.state.data.categories.sort((a, b) => b.totalNews - a.totalNews) : this.state.data.categories.sort((a, b) => b.totalNews - a.totalNews).slice(0, 15)}
              pagination={false}
              style={{marginBottom: '24px'}}
              rowKey={(record: any) => record._id}
              loading={this.state.loading}
              footer={() => this.state.data.categories.length > 15 && !this.state.showAll.categories ? <a onClick={() => this.showAll('categories')}>{translate('admin-statistics:showAll')}</a> : null}
            />
          </Col>
          <Col xs={24} lg={8}>
            <Table
              bordered={true}
              columns={locationsColumns}
              dataSource={this.state.showAll.provinces ? this.state.data.provinces.sort((a, b) => b.totalNews - a.totalNews) : this.state.data.provinces.sort((a, b) => b.totalNews - a.totalNews).slice(0, 15)}
              pagination={false}
              style={{marginBottom: '24px'}}
              rowKey={(record: any) => record._id}
              loading={this.state.loading}
              footer={() => this.state.data.provinces.length > 15 && !this.state.showAll.provinces ? <a onClick={() => this.showAll('provinces')}>{translate('admin-statistics:showAll')}</a> : null}
            />
          </Col>
        </Row>
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

const AdminStatisticsScreen = Authorize(withRematch(initStore, mapState, mapDispatch)(withNamespaces('admin-statistics')(AdminStatistics)), [], true, 'admin');

export {
  AdminStatisticsScreen,
};
