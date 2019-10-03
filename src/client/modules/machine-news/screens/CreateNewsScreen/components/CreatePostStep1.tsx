import React, { Component } from 'react';
import { Row, Col, Icon, Form, Modal, Input, message, Select, Button } from 'antd';
import './CreatePost.less';
import { newsTypes, initializeFirebaseApp, validateField } from '@client/core';
import { User } from '@client/services/service-proxies';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Formik, FormikContext } from 'formik';
import * as yup from 'yup';
import { getServiceProxy } from '@client/services';
import * as jsCookies from 'js-cookie';
import { config } from '@client/config';

interface Props {
  newsType?: string;
  userProfile?: User;
  changeData: (payload: { [key: string]: any }) => void;
  nextStep: () => void;
  updateUserPhoneNo: (payload: { phoneNo: string }) => void;
  t: (key: string) => string;
}
interface State {
  getCode: boolean;
  loading: boolean;
  error: boolean;
}
class CreatePostStep1 extends Component<Props, State> {
  state: State = {
    getCode: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    initializeFirebaseApp();
    (window as any).recaptchaVerifier = new firebase.auth.RecaptchaVerifier('phoneRecaptcha', {
      'size': 'invisible',
    });
  }

  select = (value: string) => {
    this.props.changeData({ newsType: value });
    this.setState({
      error: false,
    });
    this.props.nextStep();
  }

  nextStep = () => {
    if (this.props.newsType) {
      this.setState({
        error: false,
      });
      this.props.nextStep();
    } else {
      this.setState({
        error: true,
      });
    }
  }

  updatePhoneNo = async (values: { [key: string]: any }) => {
    this.setState({
      loading: true,
    });

    try {
      const idToken = jsCookies.get('token');
      const getCustomTokenResult = await fetch(`/api/auth/get-custom-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idToken,
        }),
      }).then((res) => res.json());

      const result = await (window as any).confirmationResult.confirm(values.verifyCode);
      const serviceProxy = getServiceProxy(idToken);
      await serviceProxy.updateProfile(this.props.userProfile!._id, {
        operation: 'updateDetail',
        payload: {
          phoneNo: result.user.phoneNumber,
        },
      });

      this.props.updateUserPhoneNo({
        phoneNo: result.user.phoneNumber,
      });

      await firebase.auth().signInWithCustomToken(getCustomTokenResult.customToken);

      this.setState({
        loading: false,
      });
      message.success(`${this.props.t('create-news:update-phone-number-successful')}`);
    } catch (error) {
      this.setState({
        loading: false,
      });
      message.error(error.message);
    }
  }

  getCode = async (values: { countryCode: string; phoneNo: string }) => {
    this.setState({
      getCode: true,
    });

    try {
      const fullPhoneNumber = `${values.countryCode}${values.phoneNo}`;
      const appVerifier = (window as any).recaptchaVerifier;
      const confirmationResult = await firebase.auth().signInWithPhoneNumber(fullPhoneNumber, appVerifier);
      (window as any).confirmationResult = confirmationResult;
      message.success(`${this.props.t('create-news:send-code-successful')}`);

      this.setState({
        getCode: false,
      });
    } catch (error) {
      message.error(error.message);
      this.setState({
        getCode: false,
      });
    }
  }

  render() {
    const PhoneNumberValidateSchema = yup.object().shape({
      countryCode: yup.string()
        .required(`${this.props.t('create-news:input-country-code')}`),
      phoneNo: yup.string()
        .matches(config.regex.phone, this.props.t('create-news:invalid-phone-number'))
        .required(`${this.props.t('create-news:input-phone-number')}`),
    });
    const VerifyCodeValidateSchema = yup.object().shape({
      verifyCode: yup.string()
        .required(`${this.props.t('create-news:input-validate-phone')}`),
    });

    return (
      <Row className='create-post-step1'>
        <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }}>
          <div className='white-box text-center'>
            <h3 className='create-post__headline text-bold no-margin'>{this.props.t('create-news:select-type')}</h3>
          </div>
          <div className='slight-margin-top'>
            <h3 className=''>{this.props.t('create-news:news-type')}</h3>
          </div>

          {newsTypes.map((val: any) => {
            return (
              <div
                className='white-box justify-space-between vertical-center cursor-pointer'
                style={{ background: (this.props.newsType === val.value ? '#FFC500' : 'white') }}
                key={val.value}
                onClick={() => this.select(val.value)}
              >
                <h3 className='create-post__headline text-bold no-margin'>{this.props.t(`common:${val.value.toLowerCase()}`)}</h3>
                <Icon type='right' />
              </div>
            );
          })}

          <div>
            {this.state.error && <h4 style={{ color: '#f5222d', marginTop: '15px' }}>{this.props.t('create-news:news-type-required')}</h4>}
          </div>

          <Button
            className='create-post__next-button text-center big-margin-top cursor-pointer'
            type='primary'
            onClick={this.nextStep}
          >
            {this.props.t('create-news:next').toUpperCase()}
          </Button>
        </Col>

        <Modal
          title={this.props.t('create-news:update-phone-number')}
          visible={this.props.userProfile ? !Boolean(this.props.userProfile.phoneNo) : false}
          onOk={this.updatePhoneNo}
          closable={false}
          footer={null}
        >
          <Formik
            initialValues={{
              countryCode: '+84',
              phoneNo: '',
            }}
            validateOnChange={true}
            validationSchema={PhoneNumberValidateSchema}
            onSubmit={async (values) => {
              await this.getCode(values);
            }}
          >
            {(context: FormikContext<any>) => (
              <Form>
                <Form.Item validateStatus={context.errors.phoneNo || context.errors.countryCode ? 'error' : undefined} help={context.errors.phoneNo || context.errors.countryCode}>
                  <Input.Search
                    addonBefore={(
                      <Select style={{ width: 120 }} value={context.values.countryCode} onChange={context.handleChange}>
                        <Select.Option value='+84'>VN (+84)</Select.Option>
                      </Select>
                    )}
                    value={context.values.phoneNo}
                    onChange={context.handleChange}
                    onBlur={() => validateField({
                      fieldName: 'phoneNo',
                      validateSchema: PhoneNumberValidateSchema,
                      context,
                    })}
                    placeholder={this.props.t('create-news:phone-number')}
                    enterButton={<Button type='primary' loading={this.state.getCode}>{this.props.t('create-news:send-code')}</Button>}
                    onSearch={context.handleSubmit as any}
                    name='phoneNo'
                  />
                </Form.Item>
              </Form>
            )}
          </Formik>

          <Formik
            initialValues={{
              verifyCode: '',
            }}
            validateOnChange={true}
            validationSchema={VerifyCodeValidateSchema}
            onSubmit={async (values, formikBag) => {
              await this.updatePhoneNo(values);
              formikBag.resetForm({});
            }}
          >
            {(context: FormikContext<any>) => (
              <Form onSubmit={context.handleSubmit}>
                <Form.Item validateStatus={context.errors.verifyCode ? 'error' : undefined} help={context.errors.verifyCode}>
                  <Input
                    value={context.values.verifyCode}
                    onChange={context.handleChange}
                    onBlur={() => validateField({
                      fieldName: 'verifyCode',
                      validateSchema: VerifyCodeValidateSchema,
                      context,
                    })}
                    placeholder={this.props.t('create-news:verify-code')}
                    name='verifyCode'
                  />
                </Form.Item>
                <Form.Item className='button-container' style={{ textAlign: 'right', marginBottom: '0px' }}>
                  <Button type='primary' className='login-button' htmlType='submit' loading={this.state.loading}>
                    {this.props.t('create-news:update')}
                  </Button>
                </Form.Item>
              </Form>
            )}
          </Formik>
        </Modal>
        <div id='phoneRecaptcha' />
      </Row>
    );
  }
}

export default CreatePostStep1;
