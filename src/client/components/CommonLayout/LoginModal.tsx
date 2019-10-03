import * as React from 'react';
import { Modal, Input, Button, Row, Col, message, Tabs, Icon, Form, Select } from 'antd';
import './LoginModal.less';
import { ProfileState, ProfileEffects, ProfileReducers } from '@client/store';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getServiceProxy } from '@client/services';
import { submitLoginForm, validateField } from '@client/core';
import { Formik, FormikContext } from 'formik';
import { ForgotPasswordModal } from './ForgotPasswordModal';
import * as yup from 'yup';
import { withNamespaces } from '@client/i18n';
import { config } from '@client/config';

interface Props {
  profileState: ProfileState;
  profileReducers: ProfileEffects & ProfileReducers;
  t: (key: string) => string;
}
interface State {
  activeTab: 'email' | 'phone';
  phone: {
    countryCode: string;
    phoneNo: string;
  };
  loading: {
    login: boolean;
    getVerifyCode: boolean;
  };
  forgotPassword: boolean;
}
class BaseLoginModal extends React.PureComponent<Props, State> {
  state: State = {
    activeTab: 'phone',
    phone: {
      countryCode: '',
      phoneNo: '',
    },
    loading: {
      login: false,
      getVerifyCode: false,
    },
    forgotPassword: false,
  };

  activeTabChange = ({ activeTab }: { activeTab: 'email' | 'phone' }) => {
    this.setState({
      activeTab,
    });
  }

  login = async (values: any) => {
    this.setState({
      loading: {
        ...this.state.loading,
        login: true,
      },
    });

    try {
      const email = this.state.activeTab === 'phone' ? `${values.countryCode.replace('+', '')}${values.phoneNo}@timmay.vn` : values.email;
      const signInResult = await firebase.auth().signInWithEmailAndPassword(email, values.password);
      if (signInResult.user!.emailVerified) {
        const idToken = await firebase.auth().currentUser!.getIdToken(true);
        const serviceProxy = getServiceProxy();
        serviceProxy.registerUser({idToken});

        message.success(this.props.t('common:loginSuccess'));
        submitLoginForm(idToken);
      } else {
        message.error(this.props.t('common:unverifiedAccount'));
        this.setState({
          loading: {
            ...this.state.loading,
            login: false,
          },
        });
      }
    } catch (error) {
      message.error(this.props.t(error.code));
      this.setState({
        loading: {
          ...this.state.loading,
          login: false,
        },
      });
    }
  }

  loginWithFacebook = async () => {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      const idToken = await firebase.auth().currentUser!.getIdToken(true);
      const serviceProxy = getServiceProxy();
      await serviceProxy.registerUser({
        idToken,
      });

      message.success(this.props.t('common:loginSuccess'));
      submitLoginForm(idToken);
    } catch (error) {
      message.error(this.props.t(`common:${error.code}`));
    }
  }

  loginWithGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      const idToken = await firebase.auth().currentUser!.getIdToken(true);
      const serviceProxy = getServiceProxy();
      await serviceProxy.registerUser({
        idToken,
      });

      message.success(this.props.t('common:loginSuccess'));
      submitLoginForm(idToken);
    } catch (error) {
      message.error(this.props.t(`common:${error.code}`));
    }
  }

  showForgotPasswordModal = () => {
    this.setState({
      forgotPassword: true,
    });
  }

  hideForgotPasswordModal = () => {
    this.setState({
      forgotPassword: false,
    });
  }

  render() {
    const translate = this.props.t;

    const EmailValidateSchema = yup.object().shape({
      email: yup.string()
        .required(translate('common:pleaseInputEmail')),
      password: yup.string()
        .max(100, translate('common:passwordTooLong'))
        .matches(/[^\s]/, translate('common:passwordCantContainSpace'))
        .required(translate('common:pleaseInputPassword')),
    });

    const PhoneNumberValidateSchema = yup.object().shape({
      countryCode: yup.string()
        .required(translate('common:pleaseInputCountryCode')),
      phoneNo: yup.string()
        .matches(config.regex.phone, translate('common:invalidPhoneNo'))
        .required(translate('common:pleaseInputPhoneNo')),
      password: yup.string()
        .required(translate('common:pleaseInputPassword'))
        .max(100, translate('common:passwordTooLong'))
        .matches(/[^\s]/, translate('common:passwordCantContainSpace')),
    });

    return (
      <Modal
        className='login-modal'
        visible={this.props.profileState.modal.login}
        footer={null}
        onCancel={() => this.props.profileReducers.closeModal({ modalName: 'login' })}
        destroyOnClose={true}
      >
        <h2>{translate('common:login')}</h2>
        <hr className='title-underline' />

        <Tabs defaultActiveKey={this.state.activeTab} onChange={(activeTab) => this.activeTabChange({ activeTab } as any)}>
          <Tabs.TabPane tab={<span><Icon type='phone' />{translate('common:sms')}</span>} key='phone'>
            <Formik
              initialValues={{
                countryCode: '+84',
                phoneNo: '',
                password: '',
              }}
              validateOnChange={true}
              validationSchema={PhoneNumberValidateSchema}
              onSubmit={async (values, formikBag: any) => {
                await this.login(values);
                formikBag.resetForm({
                  countryCode: '+84',
                  phoneNo: values.phoneNo,
                  password: '',
                });
              }}
            >
              {(context: FormikContext<any>) => (
                <Form onSubmit={context.handleSubmit}>
                  <Form.Item validateStatus={context.errors.phoneNo || context.errors.countryCode ? 'error' : undefined} help={context.errors.phoneNo || context.errors.countryCode}>
                    <Input
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
                      placeholder={translate('common:phoneNo')}
                      name='phoneNo'
                    />
                  </Form.Item>

                  <Form.Item validateStatus={context.errors.password ? 'error' : undefined} help={context.errors.password}>
                    <Input
                      value={context.values.password}
                      onChange={context.handleChange}
                      onBlur={() => validateField({
                        fieldName: 'password',
                        validateSchema: PhoneNumberValidateSchema,
                        context,
                      })}
                      placeholder={translate('common:password')}
                      type='password'
                      name='password'
                    />
                  </Form.Item>

                  <Form.Item className='button-container'>
                    <Button type='primary' className='login-button' htmlType='submit' loading={this.state.loading.login}>
                      {translate('common:login')}
                    </Button>
                    <br />
                    <Button type='default' className='forgot-password-button' onClick={this.showForgotPasswordModal}>
                      {translate('common:forgotPassword')}
                    </Button>
                  </Form.Item>
                </Form>
              )}
            </Formik>
          </Tabs.TabPane>

          <Tabs.TabPane tab={<span><Icon type='mail' />{translate('common:email')}</span>} key='email'>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validateOnChange={true}
              validationSchema={EmailValidateSchema}
              onSubmit={async (values, formikBag) => {
                await this.login(values);
                formikBag.resetForm({
                  email: values.email,
                  password: '',
                });
              }}
            >
              {(context: FormikContext<any>) => (
                <Form onSubmit={context.handleSubmit}>
                  <Form.Item validateStatus={context.errors.email ? 'error' : undefined} help={context.errors.email}>
                    <Input
                      value={context.values.email}
                      onChange={context.handleChange}
                      onBlur={() => validateField({
                        fieldName: 'email',
                        validateSchema: EmailValidateSchema,
                        context,
                      })}
                      placeholder={translate('common:email')}
                      type='email' name='email'
                    />
                  </Form.Item>

                  <Form.Item validateStatus={context.errors.password ? 'error' : undefined} help={context.errors.password}>
                    <Input
                      value={context.values.password}
                      onChange={context.handleChange}
                      onBlur={() => validateField({
                        fieldName: 'password',
                        validateSchema: EmailValidateSchema,
                        context,
                      })}
                      placeholder={translate('common:password')}
                      type='password'
                      name='password'
                    />
                  </Form.Item>

                  <Form.Item className='button-container'>
                    <Button type='primary' className='login-button' htmlType='submit' loading={this.state.loading.login}>{translate('common:login')}</Button>
                    <br />
                    <Button type='default' className='forgot-password-button' onClick={this.showForgotPasswordModal}>{translate('common:forgotPassword')}</Button>
                  </Form.Item>
                </Form>
              )}
            </Formik>
          </Tabs.TabPane>
        </Tabs>

        <Row>
          <Col lg={10}><hr /></Col>
          <Col lg={4} style={{ textAlign: 'center' }}>
            <span>{translate('common:or')}</span>
          </Col>
          <Col lg={10}><hr /></Col>
        </Row>
        <Row>
          <Button type='primary' className='login-facebook-button' onClick={this.loginWithFacebook}>{translate('common:facebookLogin')}</Button>
          <Button type='primary' className='login-google-button' onClick={this.loginWithGoogle}>{translate('common:googleLogin')}</Button>
        </Row>
        <hr />
        <Row style={{ textAlign: 'center' }}>
          <span style={{ color: '#000' }}>{translate('common:dontHaveAccount')}? </span>
          <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => {
            this.props.profileReducers.closeModal({ modalName: 'login' });
            this.props.profileReducers.openModal({ modalName: 'register' });
          }}>{translate('common:register')}</span>
        </Row>

        <form id='form' method='post' action='/auth/login' style={{display: 'none'}} />
        <ForgotPasswordModal type={this.state.activeTab} visible={this.state.forgotPassword} onCancel={this.hideForgotPasswordModal} />
      </Modal>
    );
  }
}

export const LoginModal = withNamespaces('common')(BaseLoginModal);
