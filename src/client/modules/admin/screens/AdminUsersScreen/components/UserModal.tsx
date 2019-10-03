import React from 'react';
import './UserModal.less';
import { Modal, Form, Row, Col, Input, Icon, Checkbox } from 'antd';
import * as yup from 'yup';
import { FormikContext, Formik } from 'formik';
import { validateField } from '../../../../../core';
import { Role } from '@client/services/service-proxies';
import { getServiceProxy } from '@client/services';
import { withNamespaces } from '@client/i18n';
import { config } from '@client/config';

interface Props {
  title: string;
  visible: boolean;
  rolesData?: Role[];
  handleSubmit: (values: any, formikBag: any) => void;
  closeModal: () => void;
  initialValue?: {
    familyName?: string;
    givenName?: string;
    email?: string;
    roles?: any[];
  };
  loading: boolean;
  t: (key: string) => string;
}
const UserModal = React.memo<Props>((props: Props) => {
  const translate = props.t;

  const createValidationSchema = yup.object().shape({
    familyName: yup.string().min(2, translate('admin-users:Too short')).max(50, translate('admin-users:Too long')).required(translate('admin-users:Family name is required')),
    givenName: yup.string().min(2, translate('admin-users:Too short')).max(50, translate('admin-users:Too long')).required(translate('admin-users:Given name is required')),
    email: yup.string().min(2, translate('admin-users:Too short')).email(translate('admin-users:Invalid email')).required(translate('admin-users:Email is required')),
    password: yup.string()
      .matches(config.regex.password, translate('admin-users:Password must be minimum 6 characters, at least 1 upper letter, 1 number and 1 special character'))
      .required(translate('admin-users:Password is required')),
    confirmPassword: yup.string().required(translate('admin-users:Please confirm your password')),
    roles: yup.array(),
  });

  const editValidationSchema = yup.object().shape({
    familyName: yup.string().min(2, translate('admin-users:Too short')).max(50, translate('admin-users:Too long')).required(translate('admin-users:Family name is required')),
    givenName: yup.string().min(2, translate('admin-users:Too short')).max(50, translate('admin-users:Too long')).required(translate('admin-users:Given name is required')),
    email: yup.string().min(2, translate('admin-users:Too short')).email(translate('admin-users:Invalid email')).required(translate('admin-users:Email is required')),
    roles: yup.array(),
  });

  const initialValue = props.initialValue && (props.initialValue as any)._id ? props.initialValue : {
    familyName: '',
    givenName: '',
    password: '',
    confirmPassword: '',
    email: '',
    roles: [],
  };

  return (
      <Formik
        initialValues={initialValue}
        validationSchema={props.initialValue && (props.initialValue as any)._id ? editValidationSchema : createValidationSchema}
        onSubmit={async (values, formikBag: any) => props.handleSubmit(values, formikBag)}
        validateOnChange={true}
      >
        {(context: FormikContext<any>) => (
          <Modal
            title={props.title}
            visible={props.visible}
            onOk={(e) => props.handleSubmit(e, context)}
            onCancel={props.closeModal}
            okButtonProps={{
              onClick: () => context.handleSubmit(),
            }}
            confirmLoading={props.loading}
            okText={translate('admin-users:Save')}
            cancelText={translate('admin-users:Cancel')}
          >
          <Form>
            <Row type='flex' gutter={12}>
              <Col xs={12}>
                <Form.Item validateStatus={context.errors.familyName ? 'error' : undefined} help={context.errors.familyName}>
                  <Input
                    value={context.values.familyName}
                    onChange={context.handleChange}
                    onBlur={() => validateField({
                      fieldName: 'familyName',
                      validateSchema: props.initialValue && (props.initialValue as any)._id ? editValidationSchema : createValidationSchema,
                      context,
                    })}
                    prefix={<Icon type='user' />}
                    placeholder={translate('admin-users:Family name')}
                    name='familyName'
                  />
                </Form.Item>
              </Col>
              <Col xs={12}>
                <Form.Item validateStatus={context.errors.givenName ? 'error' : undefined} help={context.errors.givenName}>
                  <Input
                    value={context.values.givenName}
                    onChange={context.handleChange}
                    onBlur={() => validateField({
                      fieldName: 'givenName',
                      validateSchema: props.initialValue && (props.initialValue as any)._id ? editValidationSchema : createValidationSchema,
                      context,
                    })}
                    prefix={<Icon type='user' />}
                    placeholder={translate('admin-users:Given name')}
                    name='givenName'
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item validateStatus={context.errors.email ? 'error' : undefined} help={context.errors.email}>
              <Input
                value={context.values.email}
                onChange={context.handleChange}
                onBlur={async () => {
                  validateField({
                    fieldName: 'email',
                    validateSchema: props.initialValue && (props.initialValue as any)._id ? editValidationSchema : createValidationSchema,
                    context,
                  });

                  if (context.values.email) {
                    const serviceProxies = getServiceProxy();
                    const result = await serviceProxies.checkEmailExist(context.values.email);
                    if (result.emailExist) {
                      context.setFieldError('email', translate('admin-users:Email has been used'));
                    } else {
                      context.setFieldError('email', '');
                    }
                  }
                }}
                prefix={<Icon type='mail' />}
                placeholder='Email'
                name='email'
              />
            </Form.Item>

            <Form.Item validateStatus={context.errors.password ? 'error' : undefined} help={context.errors.password}>
              <Input
                value={context.values.password}
                onChange={context.handleChange}
                onBlur={() => validateField({
                  fieldName: 'password',
                  validateSchema: props.initialValue && (props.initialValue as any)._id ? editValidationSchema : createValidationSchema,
                  context,
                })}
                prefix={<Icon type='lock' />}
                placeholder={translate('admin-users:Password')}
                name='password'
                type='password'
              />
            </Form.Item>

            <Form.Item validateStatus={context.errors.confirmPassword ? 'error' : undefined} help={context.errors.confirmPassword}>
              <Input
                value={context.values.confirmPassword}
                onChange={context.handleChange}
                onBlur={() => {
                  validateField({
                    fieldName: 'confirmPassword',
                    validateSchema: props.initialValue && (props.initialValue as any)._id ? editValidationSchema : createValidationSchema,
                    context,
                  });

                  if (context.values.confirmPassword) {
                    if (context.values.confirmPassword !== context.values.password) {
                      context.setFieldError('confirmPassword', translate('admin-users:Confirm password didnt match'));
                    } else {
                      context.setFieldError('confirmPassword', '');
                    }
                  }
                }}
                prefix={<Icon type='lock' />}
                placeholder={translate('admin-users:Confirm password')}
                name='confirmPassword'
                type='password'
              />
            </Form.Item>

            <Form.Item label='Roles' validateStatus={context.errors.roles && context.errors.roles.length ? 'error' : undefined} help={context.errors.roles}>
              <Checkbox.Group
                value={context.values.roles}
                options={props.rolesData ? props.rolesData.map((item) => item.name) : []}
                onChange={(checkValue) => {
                  const selectedRoles: string[] = [];
                  props.rolesData!.forEach((item) => {
                    if (checkValue.indexOf(item.name) > -1) {
                      selectedRoles.push(item.name);
                    }
                  });
                  context.setFieldValue('roles', selectedRoles);
                  context.setFieldError('roles', selectedRoles.length > 0 ? '' : translate('admin-users:Roles is required'));
                }}
              />
            </Form.Item>
          </Form>
          </Modal>
        )}
      </Formik>
  );
});

export default withNamespaces('admin-users')(UserModal);
