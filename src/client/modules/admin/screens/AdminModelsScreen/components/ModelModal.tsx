import React from 'react';
import './ModelModal.less';
import { Model, Brand, Category } from '@client/services/service-proxies';
import { Formik, FormikContext } from 'formik';
import * as yup from 'yup';
import { Modal, Form, Input, Select, Spin } from 'antd';
import { validateField } from '@client/core';
import slugify from 'slugify';
import { withNamespaces } from '@client/i18n';
import { getServiceProxy } from '@client/services';

interface Props {
  modelInfo?: Model;
  brands: Brand[];
  categories: Category[];
  loading: boolean;
  loadingBrands: boolean;
  visible: boolean;
  handleOk: (values: {[key: string]: any}) => void;
  handleCancel: () => void;
  getBrands: (value: string) => void;
  t: (key: string) => string;
}
const ModelModal = React.memo<Props>((props: Props) => {
  const translate = props.t;

  const formItemLayout = {
    labelCol: { span: 6},
    wrapperCol: { span: 18},
  };

  const initialValues = props.modelInfo && props.modelInfo._id ? {
    name: props.modelInfo.name,
    brand: props.modelInfo.brand._id,
    category: props.modelInfo.category._id,
  } : {
    name: '',
    brand: '',
    category: '',
  };

  const ModelValidateSchema = yup.object().shape({
    name: yup.string()
      .required(translate('admin-models:pleaseInputModelName')),
    brand: yup.string()
      .required(translate('admin-models:pleaseSelectBrand')),
    category: yup.string()
      .required(translate('admin-models:pleaseSelectCategory')),
  });

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={true}
      validationSchema={ModelValidateSchema}
      onSubmit={async () => {
        //
      }}
    >
      {(modelContext: FormikContext<any>) => (
        <Modal
          title={props.modelInfo && props.modelInfo._id ? `${translate('admin-models:edit-model')}: ${props.modelInfo.name}` : `${translate('admin-models:create-model')}`}
          visible={props.visible}
          onOk={async () => {
            if (modelContext.values.name && modelContext.values.brand && modelContext.values.category) {
              const serviceProxy = getServiceProxy();
              const checkExistedModel = await serviceProxy.checkExistedModel(modelContext.values.name, modelContext.values.brand, modelContext.values.category);
              if ((!props.modelInfo && checkExistedModel.existedModel) || (props.modelInfo && props.modelInfo.name !== modelContext.values.name && checkExistedModel.existedModel)) {
                modelContext.setFieldError('name', translate('admin-models:model-already-exist'));
              } else {
                await props.handleOk(modelContext.values);
                modelContext.resetForm({
                  name: '',
                  brand: '',
                  category: '',
                });
              }
            }
          }}
          onCancel={props.handleCancel}
          okText={translate('common:save')}
          cancelText={translate('common:cancel')}
          confirmLoading={props.loading}
          className='model-modal'
        >
          <Form onSubmit={modelContext.handleSubmit}>
            {props.modelInfo && props.modelInfo._id ? (
              <Form.Item label={`${translate('admin-models:brand-name')}`} {...formItemLayout} style={{marginBottom: '0px'}}>
                <strong>{props.modelInfo.brand.name}</strong>
              </Form.Item>
            ) : (
              <Form.Item
                label={`${translate('admin-models:brand-name')}`}
                style={{marginBottom: '0px'}}
                validateStatus={modelContext.errors.brand ? 'error' : undefined}
                help={modelContext.errors.brand}
                {...formItemLayout}
              >
                <Select
                  value={modelContext.values.brand ? modelContext.values.brand : undefined}
                  notFoundContent={props.loadingBrands ? <div style={{textAlign: 'center'}}><Spin size='small' /></div> : null}
                  showSearch={true}
                  filterOption={false}
                  placeholder={translate('admin-models:select-brand')}
                  onSearch={props.getBrands}
                  onSelect={(value) => {
                    modelContext.setFieldValue('brand', value);
                  }}
                  onBlur={async () => {
                    validateField({
                      fieldName: 'brand',
                      validateSchema: ModelValidateSchema,
                      context: modelContext,
                    });

                    if (modelContext.values.name && modelContext.values.brand && modelContext.values.category) {
                      const serviceProxy = getServiceProxy();
                      const checkExistedModel = await serviceProxy.checkExistedModel(modelContext.values.name, modelContext.values.brand, modelContext.values.category);
                      if ((!props.modelInfo && checkExistedModel.existedModel) || (props.modelInfo && props.modelInfo.name !== modelContext.values.name && checkExistedModel.existedModel)) {
                        modelContext.setFieldError('name', translate('admin-models:model-already-exist'));
                      }
                    }
                  }}
                >
                  {props.brands.map((val: any) => {
                    return <Select.Option value={val._id} key={val._id}>{val.name}</Select.Option>;
                  })}
                </Select>
              </Form.Item>
            )}

            {props.modelInfo && props.modelInfo._id ? (
              <Form.Item label={`${translate('admin-models:category-name')}`} {...formItemLayout} style={{marginBottom: '0px'}}>
                <strong>{props.modelInfo.category.name}</strong>
              </Form.Item>
            ) : (
              <Form.Item
                style={{marginBottom: '0px'}}
                validateStatus={modelContext.errors.category ? 'error' : undefined}
                help={modelContext.errors.category}
                label={`${translate('admin-models:category-name')}`}
                {...formItemLayout}
              >
                <Select
                  showSearch={true}
                  filterOption={(inputValue, option) => slugify((option.props.children as any).toLowerCase()).indexOf(slugify(inputValue.toLocaleLowerCase())) === 0}
                  placeholder={translate('admin-models:select-category')}
                  value={modelContext.values.category ? modelContext.values.category : undefined}
                  onChange={(value) => {
                    modelContext.setFieldValue('category', value);
                  }}
                  onBlur={async () => {
                    validateField({
                      fieldName: 'category',
                      validateSchema: ModelValidateSchema,
                      context: modelContext,
                    });

                    if (modelContext.values.name && modelContext.values.brand && modelContext.values.category) {
                      const serviceProxy = getServiceProxy();
                      const checkExistedModel = await serviceProxy.checkExistedModel(modelContext.values.name, modelContext.values.brand, modelContext.values.category);
                      if ((!props.modelInfo && checkExistedModel.existedModel) || (props.modelInfo && props.modelInfo.name !== modelContext.values.name && checkExistedModel.existedModel)) {
                        modelContext.setFieldError('name', translate('admin-models:model-already-exist'));
                      }
                    }
                  }}
                >
                  {props.categories.map((val: any) => {
                    return <Select.Option value={val._id} key={val._id}>{val.name}</Select.Option>;
                  })}
                </Select>
              </Form.Item>
            )}

            <Form.Item
              label={`${translate('admin-models:model-name')}`}
              validateStatus={modelContext.errors.name ? 'error' : undefined}
              help={modelContext.errors.name}
              {...formItemLayout}
            >
              <Input
                value={modelContext.values.name}
                onChange={modelContext.handleChange}
                placeholder={translate('admin-models:model-name')}
                type='text'
                name='name'
                onBlur={async () => {
                  validateField({
                    fieldName: 'name',
                    validateSchema: ModelValidateSchema,
                    context: modelContext,
                  });

                  if (modelContext.values.name && modelContext.values.brand && modelContext.values.category) {
                    const serviceProxy = getServiceProxy();
                    const checkExistedModel = await serviceProxy.checkExistedModel(modelContext.values.name, modelContext.values.brand, modelContext.values.category);
                    if ((!props.modelInfo && checkExistedModel.existedModel) || (props.modelInfo && props.modelInfo.name !== modelContext.values.name && checkExistedModel.existedModel)) {
                      modelContext.setFieldError('name', translate('admin-models:model-already-exist'));
                    }
                  }
                }}
              />
            </Form.Item>
          </Form>
        </Modal>
      )}
    </Formik>
  );
});

export default withNamespaces('admin-models')(ModelModal);
