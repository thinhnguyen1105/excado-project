import React from 'react';
import './WeightRangeModal.less';
import * as yup from 'yup';
import { WeightRange } from '@client/services/service-proxies';
import { Formik, FormikContext } from 'formik';
import { Modal, Form, InputNumber } from 'antd';
import { validateField } from '@client/core';
import { withNamespaces } from '@client/i18n';

interface Props {
  weightRangeInfo?: WeightRange;
  loading: boolean;
  visible: boolean;
  handleCancel: () => void;
  handleOk: (values: {[key: string]: any}) => void;
  t: (key: string) => string;
}
const WeightRangeModal = React.memo<Props>((props: Props) => {
  const translate = props.t;

  const WeightRangeValidateSchema = yup.object().shape({
    min: yup.number()
      .required(translate('admin-weight-ranges:pleaseInputMinWeight')).min(1, 'admin-weight-ranges:min-min-weight'),
    max: yup.number(),
  });

  const initialValues = props.weightRangeInfo && props.weightRangeInfo._id ? {
    min: props.weightRangeInfo.min,
    max: props.weightRangeInfo.max,
  } : {
    min: 1,
    max: undefined,
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={true}
      validationSchema={WeightRangeValidateSchema}
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
          title={props.weightRangeInfo && props.weightRangeInfo._id ? `${translate('admin-weight-ranges:edit-weight-range')}` : `${translate('admin-weight-ranges:create-weight-range')}`}
          visible={props.visible}
          onOk={context.handleSubmit}
          onCancel={props.handleCancel}
          okText={translate('common:save')}
          cancelText={translate('common:cancel')}
          confirmLoading={props.loading}
          className='weight-range-modal'
        >
          <Form layout='inline' onSubmit={context.handleSubmit} style={{display: 'flex', alignItems: 'center'}}>
            {translate('common:from')} &nbsp;
            <Form.Item
              validateStatus={context.errors.min ? 'error' : undefined}
            >
              <InputNumber
                value={context.values.min}
                onChange={(value: number|undefined) => context.setFieldValue('min', value ? value : 0)}
                placeholder={translate('admin-weight-ranges:min-weight')}
                name='min'
                min={1}
                onBlur={() => validateField({
                  fieldName: 'min',
                  validateSchema: WeightRangeValidateSchema,
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
                placeholder={translate('admin-weight-ranges:max-weight')}
                name='max'
                onBlur={() => validateField({
                  fieldName: 'max',
                  validateSchema: WeightRangeValidateSchema,
                  context,
                })}
              />
            </Form.Item>
            {translate('common:ton')}
          </Form>
          <div className='help'>
            {context.errors.min || context.errors.max}
          </div>
        </Modal>
      )}
    </Formik>
  );
});

export default withNamespaces('admin-weight-ranges')(WeightRangeModal);
