import * as React from 'react';
import { Modal, Input, Button, Row, Col, message, Tabs, Icon, Form, Select } from 'antd';
import './RegisterModal.less';
import { ProfileState, ProfileEffects, ProfileReducers } from '@client/store';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getServiceProxy } from '@client/services';
import { submitLoginForm, validateField } from '@client/core';
import { Formik, FormikContext } from 'formik';
import * as yup from 'yup';
import { withNamespaces } from '@client/i18n';
import { config } from '@client/config';

interface Props {
  profileState: ProfileState;
  profileReducers: ProfileEffects & ProfileReducers;
  t: (key: string) => string;
}
interface State {
  activeTab: 'email'|'phone';
  phone: {
    countryCode: string;
    phoneNo: string;
  };
  loading: {
    register: boolean;
    getVerifyCode: boolean;
  };
}

class BaseRegisterModal extends React.PureComponent<Props, State> {
  state: State = {
    activeTab: 'phone',
    phone: {
      countryCode: '',
      phoneNo: '',
    },
    loading: {
      register: false,
      getVerifyCode: false,
    },
  };

  activeTabChange = ({ activeTab }: {activeTab: 'email'|'phone'}) => {
    this.setState({
      activeTab,
    });
  }

  getCode = async (values: {countryCode: string; phoneNo: string}) => {
    this.setState({
      phone: {
        phoneNo: values.phoneNo,
        countryCode: values.countryCode,
      },
      loading: {
        ...this.state.loading,
        getVerifyCode: true,
      },
    });

    try {
      const fullPhoneNumber = `${values.countryCode}${values.phoneNo}`;
      const serviceProxy = getServiceProxy();
      const phoneNoExistResult = await serviceProxy.checkPhoneNoExist(fullPhoneNumber);
      if (!phoneNoExistResult.phoneNoExist) {
        const appVerifier = (window as any).recaptchaVerifier;
        const confirmationResult = await firebase.auth().signInWithPhoneNumber(fullPhoneNumber, appVerifier);
        (window as any).confirmationResult = confirmationResult;
        message.success(this.props.t('common:sendVerifyCodeSuccess'));
      } else {
        message.error(this.props.t('common:phoneNoHasBeenUsed'));
      }

      this.setState({
        loading: {
          ...this.state.loading,
          getVerifyCode: false,
        },
      });
    } catch (error) {
      message.error(this.props.t(error.code));
    }

    this.setState({
      loading: {
        ...this.state.loading,
        getVerifyCode: false,
      },
    });
  }

  register = async (values: any) => {
    this.setState({
      loading: {
        ...this.state.loading,
        register: true,
      },
    });

    try {
      if (this.state.activeTab === 'email') {
        const newUser = await firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
        newUser.user!.sendEmailVerification();

        // create mongodb record
        const serviceProxy = getServiceProxy();
        const idToken = await firebase.auth().currentUser!.getIdToken(true);
        serviceProxy.registerUser({idToken});

        // redirect
        this.setState({
          loading: {
            ...this.state.loading,
            register: false,
          },
        });
        message.success(this.props.t('common:registerEmailSuccess'), 4);
      } else if (this.state.activeTab === 'phone') {
        const phoneNo = `${this.state.phone.countryCode}${this.state.phone.phoneNo}`;
        await (window as any).confirmationResult.confirm(values.verifyCode);
        await firebase.auth().currentUser!.updateEmail(`${phoneNo.replace('+', '')}@timmay.vn`);
        await firebase.auth().currentUser!.updatePassword(values.password);

        const idToken = await firebase.auth().currentUser!.getIdToken(true);
        const serviceProxy = getServiceProxy();
        await serviceProxy.registerUser({
          idToken,
        });

        this.setState({
          loading: {
            ...this.state.loading,
            register: false,
          },
        });
        message.success(this.props.t('common:registerSuccess'));
      }
    } catch (error) {
      message.error(this.props.t(error.code));
      this.setState({
        loading: {
          ...this.state.loading,
          register: false,
        },
      });
    }
  }

  loginWithFacebook = async () => {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      await firebase.auth().signInWithPopup(provider);

      // create mongodb record
      const serviceProxy = getServiceProxy();
      const idToken = await firebase.auth().currentUser!.getIdToken(true);
      serviceProxy.registerUser({idToken});

      message.success(this.props.t('common:registerSuccess'));
      submitLoginForm(idToken);
    } catch (error) {
      message.error(this.props.t(`common:${error.code}`));
    }
  }

  loginWithGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);

      // create mongodb record
      const serviceProxy = getServiceProxy();
      const idToken = await firebase.auth().currentUser!.getIdToken(true);
      serviceProxy.registerUser({idToken});

      message.success(this.props.t('common:registerSuccess'));
      submitLoginForm(idToken);
    } catch (error) {
      message.error(this.props.t(`common:${error.code}`));
    }
  }

  render() {
    const translate = this.props.t;

    const EmailValidateSchema = yup.object().shape({
      email: yup.string()
        .required(translate('common:pleaseInputEmail')).matches(config.regex.email, translate('common:invalidEmail')),
      password: yup.string()
        .required(translate('common:pleaseInputPassword'))
        .max(100, translate('common:passwordTooLong'))
        .matches(config.regex.password, translate('common:invalidPassword')),
      confirmPassword: yup.string()
        .required(translate('common:pleaseConfirmPassword')),
    });

    const PhoneNumberValidateSchema = yup.object().shape({
      countryCode: yup.string()
        .required(translate('common:pleaseInputCountryCode')),
      phoneNo: yup.string()
        .matches(config.regex.phone, translate('common:invalidPhoneNo'))
        .required(translate('common:pleaseInputPhoneNo')),
    });

    const VerifyCodeValidateSchema = yup.object().shape({
      verifyCode: yup.string()
        .required(translate('common:pleaseInputVerifyCode')),
      password: yup.string()
        .required(translate('common:pleaseInputPassword'))
        .max(100, translate('common:passwordTooLong'))
        .matches(config.regex.password, translate('common:invalidPassword')),
      confirmPassword: yup.string()
        .required(translate('common:pleaseConfirmPassword')),
    });

    return (
      <Modal
        className='register-modal'
        visible={this.props.profileState.modal.register}
        footer={null}
        onCancel={() => this.props.profileReducers.closeModal({modalName: 'register'})}
        destroyOnClose={true}
      >
        <h2>{translate('common:register')}</h2>
        <hr className='title-underline' />

        <Tabs defaultActiveKey={this.state.activeTab} onChange={(activeTab) => this.activeTabChange({ activeTab } as any)}>
          <Tabs.TabPane tab={<span><Icon type='phone' />{translate('common:sms')}</span>} key='phone'>
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
                <Form.Item validateStatus={context.errors.phoneNo || context.errors.countryCode ? 'error' : undefined} help={context.errors.phoneNo || context.errors.countryCode}>
                  <Input.Search
                    addonBefore={(
                      <Select style={{ width: 120 }} value={context.values.countryCode} onChange={context.handleChange}>
                        <Select.Option value='+84'>VN (+84)</Select.Option>
                      </Select>
                    )}
                    value={context.values.phoneNo}
                    onChange={context.handleChange}
                    onBlur={context.handleBlur}
                    placeholder={translate('common:phoneNo')}
                    enterButton={<Button type='primary' loading={this.state.loading.getVerifyCode}>{translate('common:sendCode')}</Button>}
                    onSearch={context.handleSubmit as any}
                    name='phoneNo'
                  />
                </Form.Item>
              )}
            </Formik>

            <Formik
              initialValues={{
                verifyCode: '',
                password: '',
                confirmPassword: '',
              }}
              validateOnChange={true}
              validationSchema={VerifyCodeValidateSchema}
              onSubmit={async (values, formikBag) => {
                await this.register(values);
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
                      placeholder={translate('common:verifyCode')}
                      name='verifyCode'
                    />
                  </Form.Item>

                  <Form.Item validateStatus={context.errors.password ? 'error' : undefined} help={context.errors.password}>
                    <Input
                      value={context.values.password}
                      onChange={context.handleChange}
                      onBlur={() => validateField({
                        fieldName: 'password',
                        validateSchema: VerifyCodeValidateSchema,
                        context,
                      })}
                      placeholder={translate('common:password')}
                      type='password'
                      name='password'
                    />
                  </Form.Item>

                  <Form.Item validateStatus={context.errors.confirmPassword ? 'error' : undefined} help={context.errors.confirmPassword}>
                    <Input
                      value={context.values.confirmPassword}
                      onChange={context.handleChange}
                      onBlur={() => {
                        if (context.values.confirmPassword && context.values.confirmPassword !== context.values.password) {
                          context.setFieldError('confirmPassword', translate('common:confirmPasswordDidntMatch'));
                        } else {
                          validateField({
                            fieldName: 'confirmPassword',
                            validateSchema: VerifyCodeValidateSchema,
                            context,
                          });
                        }
                      }}
                      placeholder={translate('common:confirmPassword')}
                      type='password'
                      name='confirmPassword'
                    />
                  </Form.Item>

                  <Form.Item className='button-container'>
                    <Button type='primary' className='login-button' htmlType='submit' loading={this.state.loading.register}>{translate('common:register')}</Button>
                    <br />
                  </Form.Item>
                </Form>
              )}
            </Formik>
          </Tabs.TabPane>

          <Tabs.TabPane tab={<span><Icon type='mail' />Email</span>} key='email'>
            <Formik
              initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
              }}
              validateOnChange={true}
              validationSchema={EmailValidateSchema}
              validate={(values) => {
                const errors: any = {};
                if (values.password !== values.confirmPassword) {
                  errors.confirmPassword = translate('common:confirmPasswordDidntMatch');
                }
                return errors;
              }}
              onSubmit={async (values, formikBag) => {
                await this.register(values);
                formikBag.resetForm({
                  email: '',
                  password: '',
                  confirmPassword: '',
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

                  <Form.Item validateStatus={context.errors.confirmPassword ? 'error' : undefined} help={context.errors.confirmPassword}>
                    <Input
                      value={context.values.confirmPassword}
                      onChange={context.handleChange}
                      onBlur={() => {
                        if (context.values.confirmPassword && context.values.confirmPassword !== context.values.password) {
                          context.setFieldError('confirmPassword', translate('common:confirmPasswordDidntMatch'));
                        } else {
                          validateField({
                            fieldName: 'confirmPassword',
                            validateSchema: EmailValidateSchema,
                            context,
                          });
                        }
                      }}
                      placeholder={translate('common:confirmPassword')}
                      type='password'
                      name='confirmPassword'
                    />
                  </Form.Item>

                  <Form.Item className='button-container'>
                    <Button type='primary' className='login-button' htmlType='submit' loading={this.state.loading.register}>{translate('common:register')}</Button>
                    <br />
                  </Form.Item>
                </Form>
              )}
            </Formik>
          </Tabs.TabPane>
        </Tabs>

        <Row>
          <Col lg={10}><hr/></Col>
          <Col lg={4} style={{textAlign: 'center'}}>
            <span>{translate('common:or')}</span>
          </Col>
          <Col lg={10}><hr/></Col>
        </Row>
        <Row>
          <Button type='primary' className='login-facebook-button' onClick={this.loginWithFacebook}>{translate('common:registerFacebook')}</Button>
          <Button type='primary' className='login-google-button' onClick={this.loginWithGoogle}>{translate('common:registerGoogle')}</Button>
        </Row>
        <hr />
        <Row style={{textAlign: 'center'}}>
        <span style={{color: '#000'}}>{translate('common:alreadyHaveAccount')}? </span>
        <span style={{color: 'blue', cursor: 'pointer'}} onClick={() => {
          this.props.profileReducers.closeModal({modalName: 'register'});
          this.props.profileReducers.openModal({modalName: 'login'});
        }}>{translate('common:login')}</span>
        </Row>
        <form id='form' method='post' action='/auth/login' style={{display: 'none'}} />
      </Modal>
    );
  }
}

export const RegisterModal = withNamespaces('common')(BaseRegisterModal);
