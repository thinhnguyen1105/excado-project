import React from 'react';
import './CategoryModal.less';
import { Modal, Form, Input, Upload, Card, Button } from 'antd';
import { Formik, FormikContext } from 'formik';
import { Category } from '@client/services/service-proxies';
import { UploadFile } from 'antd/lib/upload/interface';
import * as yup from 'yup';
import { validateField, getBase64Image } from '@client/core';
import { withNamespaces } from '@client/i18n';
import { getServiceProxy } from '@client/services';

interface Props {
  categoryInfo?: Category;
  loading: boolean;
  visible: boolean;
  handleOk: (values: {[key: string]: any}) => void;
  handleCancel: () => void;
  uploadLogoImage: (file: UploadFile) => void;
  t: (key: string) => string;
}
const CategoryModal = React.memo<Props>((props: Props) => {
  const translate = props.t;

  const CategoryValidateSchema = yup.object().shape({
    name: yup.string()
      .required(translate('admin-categories:pleaseInputCategoryName'))
      .max(50, translate(`admin-categories:categoryNameIsTooLong`)),
    imageUrl: yup.string()
      .required(translate('admin-categories:pleaseUploadCategoryImage')),
  });

  const initialValues = props.categoryInfo && props.categoryInfo._id ? {
    name: props.categoryInfo.name,
    imageUrl: props.categoryInfo.imageUrl,
  } : {
    name: '',
    imageUrl: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={true}
      validationSchema={CategoryValidateSchema}
      onSubmit={async (values, formikBag) => {
        await props.handleOk(values);
        formikBag.resetForm({
          name: '',
          imageUrl: '',
        });
      }}
    >
      {(categoryContext: FormikContext<any>) => (
        <Modal
          title={props.categoryInfo && props.categoryInfo._id ? `${translate('admin-categories:edit-category')}: ${props.categoryInfo.name}` : `${translate('admin-categories:create-category')}`}
          visible={props.visible}
          onOk={categoryContext.handleSubmit}
          onCancel={props.handleCancel}
          okText={translate('common:save')}
          cancelText={translate('common:cancel')}
          confirmLoading={props.loading}
          className='category-modal'
          width={420}
        >
          <Form onSubmit={categoryContext.handleSubmit}>
            <Form.Item
              label={`${translate('admin-categories:category-name')}`}
              validateStatus={categoryContext.errors.name ? 'error' : undefined}
              help={categoryContext.errors.name}
            >
              <Input
                value={categoryContext.values.name}
                onChange={categoryContext.handleChange}
                placeholder={translate('admin-categories:category-name')}
                type='text'
                name='name'
                onBlur={async () => {
                  validateField({
                    fieldName: 'name',
                    validateSchema: CategoryValidateSchema,
                    context: categoryContext,
                  });

                  if (categoryContext.values.name) {
                    const serviceProxy = getServiceProxy();
                    const checkExistedCategoryResult = await serviceProxy.checkExistedCategory(categoryContext.values.name);
                    if ((!props.categoryInfo && checkExistedCategoryResult.existedCategory) || (props.categoryInfo && props.categoryInfo.name !== categoryContext.values.name && checkExistedCategoryResult.existedCategory)) {
                      categoryContext.setFieldError('name', translate('admin-categories:category-already-exist'));
                    }
                  }
                }}
              />
            </Form.Item>

            <Form.Item
              label={`${translate('admin-categories:category-image')}`}
              validateStatus={categoryContext.errors.imageUrl ? 'error' : undefined}
              help={categoryContext.errors.imageUrl}
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
                      height: '179px',
                      width: '179px',
                      margin: '0 auto',
                      backgroundColor: categoryContext.values.imageUrl ? '#ffffff' : '#f2f2f2',
                      backgroundImage: `url(${categoryContext.values.imageUrl ? categoryContext.values.imageUrl : ''})`,
                      backgroundSize: 'auto 100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      color: '#000',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {categoryContext.values.imageUrl ? '' : '180x180 px'}
                  </div>
                }
              >
                <Card.Meta
                  title={
                    <Upload
                      beforeUpload={(file: UploadFile) => {
                        props.uploadLogoImage(file);
                        getBase64Image(file, (result: string) => {
                          categoryContext.setFieldValue('imageUrl', result);
                        });
                        return false;
                      }}
                      showUploadList={false}
                    >
                      <Button icon='upload'>{translate('admin-categories:upload-category-image')}</Button>
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

export default withNamespaces('admin-categories')(CategoryModal);
