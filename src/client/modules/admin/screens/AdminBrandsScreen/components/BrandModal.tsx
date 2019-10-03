import React from 'react';
import './BrandModal.less';
import { Brand } from '@client/services/service-proxies';
import { Modal, Form, Input, Upload, Card, Button } from 'antd';
import { Formik, FormikContext } from 'formik';
import * as yup from 'yup';
import { validateField, getBase64Image } from '@client/core';
import { UploadFile } from 'antd/lib/upload/interface';
import { withNamespaces } from '@client/i18n';
import { getServiceProxy } from '@client/services';

interface Props {
  brandInfo?: Brand;
  loading: boolean;
  visible: boolean;
  handleOk: (values: {[key: string]: any}) => void;
  handleCancel: () => void;
  uploadLogoImage: (file: UploadFile) => void;
  t: (key: string) => string;
}
const BrandModal = React.memo<Props>((props: Props) => {
  const translate = props.t;

  const BrandValidateSchema = yup.object().shape({
    name: yup.string()
      .required(translate('admin-brands:pleaseInputBrandName'))
      .max(50, translate(`admin-brands:brandNameTooLong`)),
    logoImage: yup.string()
      .required(translate('admin-brands:pleaseUploadBrandLogo')),
  });

  const initialValues = props.brandInfo && props.brandInfo._id ? {
    name: props.brandInfo.name,
    logoImage: props.brandInfo.logoImage,
  } : {
    name: '',
    logoImage: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={true}
      validationSchema={BrandValidateSchema}
      onSubmit={async (values, formikBag) => {
        await props.handleOk(values);
        formikBag.resetForm({
          name: '',
          logoImage: '',
        });
      }}
    >
      {(brandContext: FormikContext<any>) => (
        <Modal
          title={props.brandInfo && props.brandInfo._id ? `${translate('admin-brands:edit-brand')}: ${props.brandInfo.name}` : `${translate('admin-brands:create-brand')}`}
          visible={props.visible}
          onOk={brandContext.handleSubmit}
          onCancel={props.handleCancel}
          okText={translate('common:save')}
          cancelText={translate('common:cancel')}
          confirmLoading={props.loading}
          className='brand-modal'
          width={420}
        >
          <Form onSubmit={brandContext.handleSubmit}>
            <Form.Item
              label={`${translate('admin-brands:brand-name')}`}
              validateStatus={brandContext.errors.name ? 'error' : undefined}
              help={brandContext.errors.name}
            >
              <Input
                value={brandContext.values.name}
                onChange={brandContext.handleChange}
                placeholder={translate('admin-brands:brand-name')}
                type='text'
                name='name'
                onBlur={async () => {
                  validateField({
                    fieldName: 'name',
                    validateSchema: BrandValidateSchema,
                    context: brandContext,
                  });

                  if (brandContext.values.name) {
                    const serviceProxy = getServiceProxy();
                    const checkExistedBrandResult = await serviceProxy.checkExistedBrand(brandContext.values.name);
                    if ((!props.brandInfo && checkExistedBrandResult.existedBrand) || (props.brandInfo && props.brandInfo.name !== brandContext.values.name && checkExistedBrandResult.existedBrand)) {
                      brandContext.setFieldError('name', translate('admin-brands:brand-already-exist'));
                    }
                  }
                }}
              />
            </Form.Item>

            <Form.Item
              label={`${translate('admin-brands:brand-logo')}`}
              validateStatus={brandContext.errors.logoImage ? 'error' : undefined}
              help={brandContext.errors.logoImage}
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
                      backgroundColor: brandContext.values.logoImage ? '#ffffff' : '#f2f2f2',
                      backgroundImage: `url(${brandContext.values.logoImage ? brandContext.values.logoImage : ''})`,
                      backgroundSize: 'auto 100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      color: '#000',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {brandContext.values.logoImage ? '' : '60x200 px'}
                  </div>
                }
              >
                <Card.Meta
                  title={
                    <Upload
                      beforeUpload={(file: UploadFile) => {
                        props.uploadLogoImage(file);
                        getBase64Image(file, (result: string) => {
                          brandContext.setFieldValue('logoImage', result);
                        });
                        return false;
                      }}
                      showUploadList={false}
                    >
                      <Button icon='upload'>{translate('admin-brands:upload-brand-logo')}</Button>
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

export default withNamespaces('admin-brands')(BrandModal);
