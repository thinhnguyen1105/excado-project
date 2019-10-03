import React from 'react';
import { ProfileState, withRematch, initStore } from '@client/store';
import { Authorize } from '@client/components';
import { withNamespaces } from '@client/i18n';
import './AdminUploadExcelScreen.less';
import { Upload, Icon, Spin, message, Table, Tag, Row, Col, Button } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import { config } from '@client/config';
import { News } from '@client/services/service-proxies';
import * as moment from 'moment';
import { newsTypes } from '@client/core';
import firebase from 'firebase/app';
import 'firebase/auth';

interface Props {
  t: (key: string) => string;
}
interface State {
  loading: boolean;
  data: News[];
  error: {status: number; message: string; row: number}[];
  excelFile?: UploadFile;
}
class AdminUploadExcel extends React.PureComponent<Props & {profileState: ProfileState}, State> {
  state: State = {
    loading: false,
    data: [],
    error: [],
    excelFile: undefined,
  };

  uploadExcelFile = async (file: UploadFile) => {
    if (config.upload.allowExcelExt.test(file.name)) {
      try {
        this.setState({
          loading: true,
          data: [],
        });

        let uploadExcelFileResult: any;
        const excelFormData = new FormData();
        excelFormData.append('newsExcel', file as any);

        const idToken = await firebase.auth().currentUser!.getIdToken();
        uploadExcelFileResult = await fetch(`${config.url.api}/uploads/news-excel`, {
          method: 'POST',
          headers: {
            authorization: idToken,
          },
          body: excelFormData,
        }).then((res) => res.json());

        if (uploadExcelFileResult.data) {
          this.setState({
            loading: false,
            data: uploadExcelFileResult.data,
            error: uploadExcelFileResult.error,
          });
          message.success(
            `${this.props.t('admin-upload-excel:upload-success')}`,
          );
        } else {
          this.setState({
            loading: false,
            data: [],
          });
          message.error(uploadExcelFileResult.message);
        }
      } catch (error) {
        this.setState({
          loading: false,
          data: [],
        });
      }
    }
  }

  beforeUploadExcelFile = async (file: UploadFile) => {
    this.uploadExcelFile(file);
    return false;
  }

  render () {
    const translate = this.props.t;
    const dateFormat = 'DD/MM/YYYY HH:mm';
    const columns: any[] = [
      {
        title: translate('admin-upload-excel:title'),
        dataIndex: 'title',
        key: 'title',
        render: (_text: string, record: News) => <a href={`${config.url.main}/bai-dang/${record._id}`}>{record.title}</a>,
      },
      {
        title: translate('admin-upload-excel:news-type'),
        dataIndex: 'newsType',
        key: 'newsType',
        render: (_text: string, record: News) => (
          <Tag color='volcano'>{newsTypes.filter((item) => item.value === record.newsType)[0].label}</Tag>
        ),
      },
      {
        title: translate('admin-upload-excel:category'),
        dataIndex: 'categoryId',
        key: 'categoryId',
        render: (_text: string, record: News) => record.categoryId.name,
      },
      {
        title: translate('admin-upload-excel:weight-range'),
        dataIndex: 'weightRange',
        key: 'weightRange',
        render: (_text: string, record: News) => {
          const weightRange = record.weightRange.max
          ? this.props.t('common:from-to').replace('{from}', record.weightRange.min).replace('{to}', record.weightRange.max) + ' ' + this.props.t('common:ton')
          : this.props.t('common:more-than') + ' ' + record.weightRange.min + ' ' + this.props.t('common:ton');

          return weightRange;
        },
      },
      {
        title: translate('common:created-at'),
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (_text: string, record: News) => moment(new Date(record.createdAt)).format(dateFormat),
      },
    ];
    const errorColumns = [
      {
        title: translate('admin-upload-excel:error-message'),
        dataIndex: 'message',
        key: 'message',
        render: (text: string) => translate(`admin-upload-excel:${text}`),
      },
      {
        title: translate('admin-upload-excel:row'),
        dataIndex: 'row',
        key: 'row',
      },
    ];
    return (
      <div className='admin-upload-excel-screen'>
        <Row>
          <Col xs={24} style={{textAlign: 'right', marginBottom: '12px'}}>
            <a href={`${config.url.api}/downloads/excel-template`} target='_blank'>
              <Button type='primary'>{translate('admin-upload-excel:download-template')}</Button>
            </a>
          </Col>
        </Row>

        <Upload.Dragger beforeUpload={this.beforeUploadExcelFile} showUploadList={false}>
          <Spin spinning={this.state.loading}>
            <p className='ant-upload-drag-icon'>
              <Icon type='inbox' />
            </p>
            <p className='ant-upload-text'>{translate('admin-upload-excel:instruction')}</p>
          </Spin>
        </Upload.Dragger>

        {this.state.error.length > 0 && (
          <div style={{marginTop: '24px'}}>
            <h1>{translate('admin-upload-excel:failed')}</h1>
            <Table
              columns={errorColumns}
              dataSource={this.state.error}
              loading={this.state.loading}
              pagination={false}
              scroll={{x: 1000}}
              style={{marginBottom: '24px'}}
              rowKey={(record: any) => record._id}
            />
          </div>
        )}

        {this.state.data.length > 0 && (
          <div style={{marginTop: '24px'}}>
            <h1>{translate('admin-upload-excel:success')}</h1>
            <Table
              columns={columns}
              dataSource={this.state.data}
              loading={this.state.loading}
              pagination={false}
              scroll={{x: 1000}}
              style={{marginBottom: '24px'}}
              rowKey={(record: any) => record._id}
            />
          </div>
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

const AdminUploadExcelScreen = Authorize(withRematch(initStore, mapState, mapDispatch)(withNamespaces('admin-upload-excel')(AdminUploadExcel)), [], true, 'admin');

export {
  AdminUploadExcelScreen,
};
