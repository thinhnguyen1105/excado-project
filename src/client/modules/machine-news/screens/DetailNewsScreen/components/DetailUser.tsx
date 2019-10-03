import React, { Component } from 'react';
import { Row, Col, Avatar, Button, Icon, Modal, Input, Form, message } from 'antd';
import './DetailUser.less';
import * as moment from 'moment';
import { News } from '@client/services/service-proxies';
import { ProfileState, SelectOption, ProfileReducers, ProfileEffects } from '@client/store';
import { Formik, FormikContext } from 'formik';
import * as yup from 'yup';
import { validateField, reportReasons, getShopUrl } from '@client/core';
import { getServiceProxy } from '@client/services';
import { withNamespaces } from '@client/i18n';
import firebase from 'firebase/app';
import 'firebase/auth';
import Router from 'next/router';
const Fragment = React.Fragment;

interface Props {
  newsData: News;
  starUserStatus: any;
  starShopStatus: any;
  isShopDomain: boolean;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  changeFollowUserStatus: (starStatus: any, id: string) => void;
  changeFollowShopStatus: (starStatus: any, id: string) => void;
  t: (key: string) => string;
}
interface State {
  reportModalVisible: boolean;
  isReporting: boolean;
  reportInfo: {
    news: string;
    reason: string;
    description: string;
    email: string;
    phoneNo: string;
  } | {};
}
class DetailUser extends Component<Props, State> {
  state: State = {
    reportModalVisible: false,
    isReporting: false,
    reportInfo: {},
  };

  handleReportClick = async (reportOption: SelectOption) => {
    if (!this.props.profileState.authUser || !this.props.profileState.authUser.id) {
      message.warning(this.props.t(`common:please-login-to-report`));
      this.props.profileReducers.openModal({modalName: `login`});
    } else {
      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = getServiceProxy(idToken);
      const userInfo = await serviceProxy.findProfile();

      if (userInfo && userInfo.email && userInfo.phoneNo) {
        this.setState({
          reportModalVisible: true,
          reportInfo: {
            ...this.state.reportInfo,
            news: this.props.newsData._id,
            reason: reportOption.value,
          },
        });
      } else {
        message.warning(this.props.t(`common:please-update-report-info`), 8);
        Router.push(`/thong-tin-ca-nhan`);
      }
    }
  }

  cancelReport = () => {
    this.setState({
      reportModalVisible: false,
      reportInfo: {},
    });
  }

  createReport = async (values: { description: string; email: string; phoneNo: string }) => {
    this.setState({
      isReporting: true,
    });

    try {
      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = getServiceProxy(idToken);
      await serviceProxy.createReport({
        ...this.state.reportInfo,
        ...values,
      });

      this.setState({
        isReporting: false,
        reportModalVisible: false,
        reportInfo: {},
      });
      message.success(this.props.t('common:report-success'));
    } catch (error) {
      message.error(error.message);
      this.setState({
        isReporting: false,
      });
    }
  }

  render() {
    const translate = this.props.t;
    const ReportValidateSchema = yup.object().shape({
      description: yup.string()
        .required(translate('common:please-describe-more-details'))
        .min(10, translate('common:describe-too-short'))
        .max(500, translate('common:describe-too-long')),
    });
    const shopUrl = this.props.newsData.shop ? getShopUrl(this.props.newsData.shop.domain) : '#';
    return (
      <Row className='outline'>
        {this.props.newsData.shop && this.props.newsData.shop._id && this.props.isShopDomain ?
          <Fragment>
            <Row className='shop-info'>
              <a href={`${shopUrl}`} title={this.props.newsData.shop.name} className='link-to-user'>
                <Col className='avatar' lg={3} md={3} sm={6} xs={6}>
                  <Avatar size={64} icon='user'></Avatar>
                </Col>
              </a>
              <Col lg={6} md={6} sm={18} xs={18} className='shop-info-text'>
                <a href={`${shopUrl}`} className='link-to-user' title={this.props.newsData.shop.name}>
                  <div><strong>{this.props.newsData.shop.name}</strong></div>
                  <div>{translate('common:date-join')} {moment(new Date(this.props.newsData.shop.createdAt)).format('DD/MM/YYYY')}</div>
                </a>
                {this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id !== this.props.newsData.owner._id ?
                  <div><a onClick={() => this.props.changeFollowShopStatus(this.props.starShopStatus, this.props.newsData.shop._id)}>
                    <Icon className='icon-star' type='star' theme={this.props.starShopStatus} />
                    {this.props.starShopStatus !== 'filled' ? translate('common:follow-shop') : translate('common:unfollow-shop')}</a></div>
                  : null}
              </Col>
              <Col lg={5} md={5} xs={0} sm={0}></Col>
              <Col lg={10} md={10} sm={24} xs={24}>
                <div className='call-button'>
                  <a href={this.props.newsData.shop && this.props.newsData.shop.phone ? `tel:${this.props.newsData.shop.phone}` : ``} style={{ marginBottom: '40px' }}>
                    <Button className='button-call' type='primary' icon='phone'>
                      {this.props.newsData.shop && this.props.newsData.shop.phone ? `${this.props.newsData.shop.phone}` : translate('common:phone-number-not-registered')}</Button>
                  </a>
                </div>
              </Col>
            </Row>
          </Fragment> :
          <Row className='detail-user-info'>
            <a href={`/nguoi-dung/${this.props.newsData.owner._id}`} title={this.props.newsData.owner.fullName ? this.props.newsData.owner.fullName :
              this.props.newsData.owner.email ? this.props.newsData.owner.email : this.props.newsData.owner.phoneNo} className='link-to-user'>
              <Col className='avatar' lg={3} md={3} sm={6} xs={6}>
                <Avatar size={64} icon='user'></Avatar>
              </Col>
            </a>
            <Col lg={6} md={6} sm={18} xs={18} className='user-info-text'>
              <a href={`/nguoi-dung/${this.props.newsData.owner._id}`} title={this.props.newsData.owner.fullName ? this.props.newsData.owner.fullName :
                this.props.newsData.owner.email ? this.props.newsData.owner.email : this.props.newsData.owner.phoneNo} className='link-to-user'>
                <div><strong>{this.props.newsData.owner.fullName ? this.props.newsData.owner.fullName :
                  this.props.newsData.owner.email ? this.props.newsData.owner.email : this.props.newsData.owner.phoneNo}</strong></div>
                <div>{translate('common:joinDate')}: {moment(new Date(this.props.newsData.owner.createdAt)).format('DD/MM/YYYY')}</div>
              </a>
              {this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id !== this.props.newsData.owner._id ?
                <div><a onClick={() => this.props.changeFollowUserStatus(this.props.starUserStatus, this.props.newsData.owner._id)}>
                  <Icon className='icon-star' type='star' theme={this.props.starUserStatus} />
                  {this.props.starUserStatus !== 'filled' ? translate('common:follow-seller') : translate('common:unfollow-seller')}</a></div>
                : null}
            </Col>
            <Col lg={5} md={5} xs={0} sm={0}></Col>
            <Col lg={10} md={10} sm={24} xs={24}>
              <div className='call-button'>
                <a href={this.props.newsData.owner.phoneNo
                  ? `tel:${this.props.newsData.owner.phoneNo}` : ``}>
                  <Button className='button-call' type='primary' icon='phone'>
                    {this.props.newsData.owner.phoneNo
                      ? `${this.props.newsData.owner.phoneNo}` : translate('common:phone-number-not-registered')}</Button>
                </a>
              </div>
            </Col>
          </Row>}

        <hr className='line-shadow' />
        <Row>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <h3 style={{ display: 'inline-block' }}>{translate('common:describe-product')}</h3>
            {(this.props.profileState.authUser && this.props.profileState.authUser.id === this.props.newsData.owner._id) && (
              <a href={`/sua-tin/${this.props.newsData._id}`}>
                <Button type='primary' icon='edit'>{translate('common:edit-this-news')}</Button>
              </a>
            )}
          </div>
          <p className='description'>{this.props.newsData.description}</p>
        </Row>
        <hr className='line-shadow' />
        <p className='notification'><em>{translate('common:note-report')}</em></p>
        <Row>
          <Col xs={24} className='report-button'>
            {reportReasons.map((item: any) => (
              <Button className='button-report' key={item.value} onClick={() => this.handleReportClick(item)}>
                {translate(`common:${item.value.toLowerCase()}`)}
              </Button>
            ))}
          </Col>
        </Row>

        <Formik
          initialValues={{
            description: '',
          }}
          validateOnChange={true}
          validationSchema={ReportValidateSchema}
          onSubmit={async (values, formikBag) => {
            await this.createReport(values);
            formikBag.resetForm({
              description: '',
            });
          }}
        >
          {(context: FormikContext<any>) => (
            <Modal
              title={translate('common:report-post')}
              visible={this.state.reportModalVisible}
              onOk={context.handleSubmit}
              onCancel={this.cancelReport}
              confirmLoading={this.state.isReporting}
              okText={translate('common:send-report')}
              cancelText={translate('common:cancel')}
            >
              <Form>
                <Form.Item validateStatus={context.errors.description ? 'error' : undefined} help={context.errors.description}>
                  <Input.TextArea
                    value={context.values.description}
                    onChange={context.handleChange}
                    onBlur={() => validateField({
                      fieldName: 'description',
                      validateSchema: ReportValidateSchema,
                      context,
                    })}
                    autosize={{ minRows: 5 }}
                    placeholder={translate('common:please-describe-more-details')}
                    name='description'
                  />
                </Form.Item>
              </Form>
            </Modal>
          )}
        </Formik>
      </Row >
    );
  }
}

export default withNamespaces('common')(DetailUser);
