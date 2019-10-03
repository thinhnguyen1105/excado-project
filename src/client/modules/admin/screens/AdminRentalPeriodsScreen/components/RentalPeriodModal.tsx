import React from 'react';
import './RentalPeriodModal.less';
import { RentalPeriod } from '@client/services/service-proxies';
import * as yup from 'yup';
import { Formik, FormikContext } from 'formik';
import { Modal, Form, InputNumber } from 'antd';
import { validateField } from '@client/core';
import { withNamespaces } from '@client/i18n';

interface Props {
  rentalPeriodInfo?: RentalPeriod;
  loading: boolean;
  visible: boolean;
  handleCancel: () => void;
  handleOk: (values: {[key: string]: any}) => void;
  t: (key: string) => string;
}
const RentalPeriodModal = React.memo<Props>((props: Props) => {
  const translate = props.t;

  const RentalPeriodValidateSchema = yup.object().shape({
    min: yup.number()
      .required(translate('admin-rental-periods:pleaseInputMinRentalPeriod')).min(1, 'admin-rental-periods:min-min-rental-period'),
    max: yup.number(),
  });

  const initialValues = props.rentalPeriodInfo && props.rentalPeriodInfo._id ? {
    min: props.rentalPeriodInfo.min,
    max: props.rentalPeriodInfo.max,
  } : {
    min: 1,
    max: undefined,
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={true}
      validationSchema={RentalPeriodValidateSchema}
      onSubmit={async (values, formikBag) => {
        await props.handleOk(values);
        formikBag.resetForm({
          min: 1,
          max: undefined,
        });
      }}
    >
      {(context: FormikContext<any>) => (
        <Modal
          title={props.rentalPeriodInfo && props.rentalPeriodInfo._id ? `${translate('admin-rental-periods:edit-rental-period')}` : `${translate('admin-rental-periods:create-rental-period')}`}
          visible={props.visible}
          onOk={context.handleSubmit}
          onCancel={props.handleCancel}
          okText={translate('common:save')}
          cancelText={translate('common:cancel')}
          confirmLoading={props.loading}
          className='rental-period-modal'
        >
          <Form layout='inline' onSubmit={context.handleSubmit} style={{display: 'flex', alignItems: 'center'}}>
            {translate('common:from')} &nbsp;
            <Form.Item
              validateStatus={context.errors.min ? 'error' : undefined}
            >
              <InputNumber
                value={context.values.min}
                onChange={(value: number|undefined) => context.setFieldValue('min', value ? value : 0)}
                placeholder={translate('admin-rental-periods:min-rental-period')}
                name='min'
                min={1}
                onBlur={() => validateField({
                  fieldName: 'min',
                  validateSchema: RentalPeriodValidateSchema,
                  context,
                })}
              />
            </Form.Item>
            {translate('common:to')} &nbsp; &nbsp;
            <Form.Item
              validateStatus={context.errors.max ? 'error' : undefined}
            >
              <InputNumber
                value={context.values.max}
                onChange={(value: number|undefined) => context.setFieldValue('max', value ? value : 0)}
                placeholder={translate('admin-rental-periods:max-rental-period')}
                name='max'
                onBlur={() => validateField({
                  fieldName: 'max',
                  validateSchema: RentalPeriodValidateSchema,
                  context,
                })}
              />
            </Form.Item>
            {translate('common:month')}
          </Form>
          <div className='help'>
            {context.errors.min || context.errors.max}
          </div>
        </Modal>
      )}
    </Formik>
  );
});

export default withNamespaces('admin-rental-periods')(RentalPeriodModal);
