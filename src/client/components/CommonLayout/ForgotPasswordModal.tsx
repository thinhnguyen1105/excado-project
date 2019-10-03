import React from 'react';
import { Modal, Form, Input, Icon, message, Select, Button } from 'antd';
import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeFirebaseApp, validateField } from '@client/core';
import * as yup from 'yup';
import { withNamespaces } from '@client/i18n';
import { config } from '@client/config';
import { Formik, FormikContext } from 'formik';
import { getServiceProxy } from '@client/services';
import './ForgotPasswordModal.less';

interface Props {
  type: 'phone'|'email';
  visible: boolean;
  onCancel: () => void;
  t: (key: string) => string;
}
interface State {
  loading: boolean;
  gettingCode: boolean;
  phone: {
    phoneNo: string;
    countryCode: string;
  };
}
class BaseForgotPasswordModal extends React.PureComponent<Props, State> {
  state: State = {
    loading: false,
    gettingCode: false,
    phone: {
      phoneNo: '',
      countryCode: '',
    },
  };

  getCode = async (values: {countryCode: string; phoneNo: string}) => {
    this.setState({
      phone: {
        phoneNo: values.phoneNo,
        countryCode: values.countryCode,
      },
      gettingCode: true,
    });

    try {
      const fullPhoneNumber = `${values.countryCode}${values.phoneNo}`;
      const serviceProxy = getServiceProxy();
      const phoneNoExistResult = await serviceProxy.checkPhoneNoExist(fullPhoneNumber);
      if (phoneNoExistResult.phoneNoExist) {
        const appVerifier = (window as any).recaptchaVerifier;
        const confirmationResult = await firebase.auth().signInWithPhoneNumber(fullPhoneNumber, appVerifier);
        (window as any).confirmationResult = confirmationResult;
        message.success(this.props.t('common:sendVerifyCodeSuccess'));
        this.setState({
          gettingCode: false,
        });
      } else {
        this.setState({
          gettingCode: false,
        });
        message.error(this.props.t('common:notFoundPhoneNo'));
      }
    } catch (error) {
      message.error(this.props.t(error.code));
      this.setState({
        gettingCode: false,
      });
    }
  }

  handleOk = async (values: {[key: string]: any}) => {
    try {
      if (this.props.type === 'email') {
        initializeFirebaseApp();
        firebase.auth().sendPasswordResetEmail(values.email);
        message.success(this.props.t('common:send-reset-password-email-success'));
        this.props.onCancel();
      } else {
        if (await (window as any).confirmationResult) {
          this.setState({
            loading: true,
          });

          await (window as any).confirmationResult.confirm(values.verifyCode);
          const idToken = await firebase.auth().currentUser!.getIdToken();
          await fetch(`${config.url.api}/auth/update-password`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              idToken,
              newPassword: values.password,
            }),
          });
          firebase.auth().signOut();

          message.success(this.props.t('common:update-password-success'));
          this.setState({
            loading: false,
          });
          this.props.onCancel();
        } else {
          message.error(this.props.t('common:invalid-verify-code'));
        }
      }
    } catch (error) {
      message.error(this.props.t(`common:${error.code || error.message}`));
      this.setState({
        loading: false,
      });
    }
  };

  render () {
    const translate = this.props.t;

    const ForgotEmailPasswordValidateSchema = yup.object().shape({
      email: yup.string()
        .required(translate('common:pleaseInputVerifyCode'))
        .matches(config.regex.email, translate('common:invalidEmail')),
    });

    const PhoneNumberValidateSchema = yup.object().shape({
      countryCode: yup.string()
        .required(translate('common:pleaseInputCountryCode')),
      phoneNo: yup.string()
        .matches(config.regex.phone, translate('common:invalidPhoneNo'))
        .required(translate('common:pleaseInputPhoneNo')),
    });

    const ForgotPhonePasswordValidateSchema = yup.object().shape({
      verifyCode: yup.string()
        .required(translate('common:pleaseInputVerifyCode')),
      password: yup.string()
        .required(translate('common:pleaseInputPassword'))
        .max(100, translate('common:passwordTooLong'))
        .matches(config.regex.password, translate('common:invalidPassword')),
      confirmPassword: yup.string()
        .required(translate('common:pleaseConfirmPassword')),
    });

    if (this.props.type === 'email') {
      return (
        <Formik
          initialValues={{
            email: '',
          }}
          enableReinitialize={true}
          validationSchema={ForgotEmailPasswordValidateSchema}
          onSubmit={async (values, formikBag) => {
            await this.handleOk(values);
            formikBag.resetForm({
              email: '',
            });
          }}
        >
          {(context: FormikContext<{email: string}>) => (
            <Modal
              title={translate('common:forgotPassword')}
              visible={this.props.visible}
              onOk={context.handleSubmit}
              onCancel={this.props.onCancel}
              confirmLoading={this.state.loading}
              okText={translate('common:send-reset-password-email')}
              cancelText={translate('common:cancel')}
            >
              <Form onSubmit={context.handleSubmit}>
                <Form.Item
                  label={translate('common:your-email')}
                  validateStatus={context.errors.email ? 'error' : undefined}
                  help={context.errors.email}
                >
                  <Input
                    value={context.values.email}
                    onChange={context.handleChange}
                    onBlur={() => validateField({
                      fieldName: 'email',
                      validateSchema: ForgotEmailPasswordValidateSchema,
                      context,
                    })}
                    name='email'
                    prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder={translate('common:your-email')}
                  />
                </Form.Item>
              </Form>
            </Modal>
          )}
        </Formik>
      );
    } else {
      return (
        <Modal
          className='reset-password-modal'
          visible={this.props.visible}
          footer={null}
          onCancel={this.props.onCancel}
          destroyOnClose={true}
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
            {(context: FormikContext<{
              countryCode: string;
              phoneNo: string;
            }>) => (
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
                  enterButton={<Button type='primary' loading={this.state.gettingCode}>{translate('common:sendCode')}</Button>}
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
            validationSchema={ForgotPhonePasswordValidateSchema}
            onSubmit={async (values, formikBag) => {
              await this.handleOk(values);
              formikBag.resetForm({
                verifyCode: '',
                password: '',
                confirmPassword: '',
              });
            }}
          >
            {(context: FormikContext<{
              verifyCode: string;
              password: string;
              confirmPassword: string;
            }>) => (
              <Form onSubmit={context.handleSubmit}>
                <Form.Item validateStatus={context.errors.verifyCode ? 'error' : undefined} help={context.errors.verifyCode}>
                  <Input
                    value={context.values.verifyCode}
                    onChange={context.handleChange}
                    onBlur={() => validateField({
                      fieldName: 'verifyCode',
                      validateSchema: ForgotPhonePasswordValidateSchema,
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
                      validateSchema: ForgotPhonePasswordValidateSchema,
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
                          validateSchema: ForgotPhonePasswordValidateSchema,
                          context,
                        });
                      }
                    }}
                    placeholder={translate('common:confirmPassword')}
                    type='password'
                    name='confirmPassword'
                  />
                </Form.Item>

                <Form.Item className='button-container' style={{textAlign: 'right'}}>
                  <Button type='primary' className='login-button' htmlType='submit' loading={this.state.loading}>{translate('common:update-password')}</Button>
                  <br />
                </Form.Item>
              </Form>
            )}
          </Formik>
        </Modal>
      );
    }
  }
}

export const ForgotPasswordModal = withNamespaces('common')(BaseForgotPasswordModal);
