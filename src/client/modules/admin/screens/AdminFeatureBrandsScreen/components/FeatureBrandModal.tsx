import React from 'react';
import './FeatureBrandModal.less';
import { FeatureBrand, Brand } from '@client/services/service-proxies';
import { UploadFile } from 'antd/lib/upload/interface';
import * as yup from 'yup';
import { Formik, FormikContext } from 'formik';
import { Modal, Form, Select, Spin, Input, Card, Upload, Button } from 'antd';
import { validateField, getBase64Image } from '@client/core';
import { withNamespaces } from '@client/i18n';

interface Props {
  featureBrandInfo?: FeatureBrand;
  loading: boolean;
  visible: boolean;
  loadingBrands: boolean;
  brands: Brand[];
  handleOk: (values: {[key: string]: any}) => void;
  handleCancel: () => void;
  uploadLogoImage: (file: UploadFile) => void;
  getBrands: (value: string) => void;
  t: (key: string) => string;
}
const FeatureBrandModal = React.memo<Props>((props: Props) => {
  const translate = props.t;
  const FeatureBrandValidateSchema = yup.object().shape({
    brand: yup.string()
      .required(translate('admin-feature-brands:pleaseSelectBrand')),
    hyperlink: yup.string()
      .required(translate('admin-feature-brands:pleaseInputHyperlink')),
    logoImage: yup.string()
      .required(translate('admin-feature-brands:pleaseUploadBrandLogo')),
    order: yup.number()
      .required(translate('admin-feature-brands:pleaseSelectOrder')),
  });
  const initialValues = props.featureBrandInfo && props.featureBrandInfo._id ? {
    brand: props.featureBrandInfo.brand._id,
    hyperlink: props.featureBrandInfo.hyperlink,
    logoImage: props.featureBrandInfo.logoImage,
    order: props.featureBrandInfo.order,
  } : {
    brand: '',
    hyperlink: '',
    logoImage: '',
    order: 1,
  };
  const orderOptions = [1, 2, 3, 4, 5, 6];

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={true}
      validationSchema={FeatureBrandValidateSchema}
      onSubmit={async (values, formikBag) => {
        await props.handleOk(values);
        formikBag.resetForm({
          brand: '',
          hyperlink: '',
          logoImage: '',
          order: 1,
        });
      }}
    >
      {(context: FormikContext<any>) => (
        <Modal
          title={props.featureBrandInfo && props.featureBrandInfo._id ? `${translate('admin-feature-brands:edit-feature-brand')}: ${props.featureBrandInfo.brand.name}` : `${translate('admin-feature-brands:create-feature-brand')}`}
          visible={props.visible}
          onOk={context.handleSubmit}
          onCancel={props.handleCancel}
          okText={translate('common:save')}
          cancelText={translate('common:cancel')}
          confirmLoading={props.loading}
          className='feature-brand-modal'
          width={420}
        >
          <Form onSubmit={context.handleSubmit}>
            <Form.Item
              label={`${translate('admin-feature-brands:brand-name')}`}
              style={{marginBottom: '0px'}}
              validateStatus={context.errors.brand ? 'error' : undefined}
              help={context.errors.brand}
            >
              <Select
                value={context.values.brand ? context.values.brand : undefined}
                notFoundContent={props.loadingBrands ? <div style={{textAlign: 'center'}}><Spin size='small' /></div> : null}
                showSearch={true}
                filterOption={false}
                placeholder={translate('admin-feature-brands:select-brand')}
                onSearch={props.getBrands}
                onSelect={(value) => {
                  context.setFieldValue('brand', value);
                }}
                onBlur={() => validateField({
                  fieldName: 'brand',
                  validateSchema: FeatureBrandValidateSchema,
                  context,
                })}
              >
                {props.brands.map((val: any) => {
                  return <Select.Option value={val._id} key={val._id}>{val.name}</Select.Option>;
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label={`${translate('admin-feature-brands:hyperlink')}`}
              validateStatus={context.errors.hyperlink ? 'error' : undefined}
              help={context.errors.hyperlink}
            >
              <Input
                value={context.values.hyperlink}
                onChange={context.handleChange}
                placeholder={translate('admin-feature-brands:hyperlink')}
                type='text'
                name='hyperlink'
                onBlur={() => validateField({
                  fieldName: 'hyperlink',
                  validateSchema: FeatureBrandValidateSchema,
                  context,
                })}
              />
            </Form.Item>

            <Form.Item
              label={`${translate('admin-feature-brands:order')}`}
              style={{marginBottom: '0px'}}
              validateStatus={context.errors.order ? 'error' : undefined}
              help={context.errors.order}
            >
              <Select
                value={context.values.order ? context.values.order : undefined}
                placeholder={translate('admin-feature-brands:order')}
                onSelect={(value) => {
                  context.setFieldValue('order', value);
                }}
                onBlur={() => validateField({
                  fieldName: 'order',
                  validateSchema: FeatureBrandValidateSchema,
                  context,
                })}
              >
                {orderOptions.map((val) => {
                  return <Select.Option value={val} key={val}>#{val}</Select.Option>;
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label={`${translate('admin-feature-brands:brand-logo')}`}
              validateStatus={context.errors.logoImage ? 'error' : undefined}
              help={context.errors.logoImage}
            >
              <Card
                style={{
                  padding: '20px 20px 0px 20px',
                  margin: '0 auto',
                }}
                cover={
                  <div
                    className='image-promote'
                    style={{
                      height: '60px',
                      backgroundColor: context.values.logoImage ? '#ffffff' : '#f2f2f2',
                      backgroundImage: `url(${context.values.logoImage ? context.values.logoImage : ''})`,
                      backgroundSize: 'auto 100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      color: '#000',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {context.values.logoImage ? '' : '60x200 px'}
                  </div>
                }
              >
                <Card.Meta
                  title={
                    <Upload
                      beforeUpload={(file: UploadFile) => {
                        props.uploadLogoImage(file);
                        getBase64Image(file, (result: string) => {
                          context.setFieldValue('logoImage', result);
                        });
                        return false;
                      }}
                      showUploadList={false}
                    >
                      <Button icon='upload'>{translate('admin-feature-brands:upload-brand-logo')}</Button>
                    </Upload>
                  }
                />
              </Card>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </Formik>
  );
});

export default withNamespaces('admin-feature-brands')(FeatureBrandModal);
