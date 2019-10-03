import React from 'react';
import './AdsenseInfo.less';
import * as yup from 'yup';
import { Adsense } from '@client/services/service-proxies';
import { Formik, FormikContext } from 'formik';
import { Form, Card, Upload, Button, Input } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import { getBase64Image, validateField } from '@client/core';
import { withNamespaces } from '@client/i18n';
import { config } from '@client/config';

interface Props {
  loading: boolean;
  adsenseInfo?: Adsense;
  handleOk: (values: {[key: string]: any}) => void;
  uploadLogoImage: (file: UploadFile) => void;
  t: (key: string) => string;
}
const AdsenseInfo = React.memo<Props>((props: Props) => {
  const BrandValidateSchema = yup.object().shape({
    imageUrl: yup.string()
      .required(props.t('admin-adsense:pleaseUploadImage')),
    hyperlink: yup.string()
      .required(props.t('admin-adsense:pleaseInputHyperlink'))
      .matches(config.regex.url, props.t('admin-adsense:invalidURL')),
  });
  const initialValues = props.adsenseInfo && props.adsenseInfo._id ? {
    imageUrl: props.adsenseInfo.imageUrl,
    hyperlink: props.adsenseInfo.hyperlink,
  } : {
    imageUrl: '',
    hyperlink: '',
  };

  const isTinyAds = [1, 4].indexOf(props.adsenseInfo!.position) > -1;
  const isSmallAds = [5, 6, 7, 8].indexOf(props.adsenseInfo!.position) > -1;

  return (
    <div className='adsense-info'>
      <h2 className='adsense-title'>
        {props.t('admin-adsense:adsense-info')}
      </h2>

      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validateOnChange={true}
        validationSchema={BrandValidateSchema}
        onSubmit={async (values) => {
          await props.handleOk(values);
        }}
      >
        {(context: FormikContext<any>) => (
          <Form onSubmit={context.handleSubmit}>
            <Form.Item
              label={`${props.t('admin-adsense:ads-image')}`}
              validateStatus={context.errors.imageUrl ? 'error' : undefined}
              help={context.errors.imageUrl}
            >
              <Card
                style={{
                  padding: '20px 20px 20px 20px',
                  margin: '0 auto',
                }}
                cover={
                  <div
                    style={{
                      width: '200px',
                      height: isTinyAds ? '60px' : isSmallAds ? '200px' : '400px',
                      backgroundColor: '#f2f2f2',
                      backgroundImage: `url(${context.values.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {context.values.imageUrl ? '' : `${isTinyAds ? '60x200 px' : isSmallAds ? '200x200 px' : '400x200 px'}`}
                  </div>
                }
              >
                <Card.Meta
                  title={
                    <Upload
                      beforeUpload={(file: UploadFile) => {
                        props.uploadLogoImage(file);
                        getBase64Image(file, (result: string) => {
                          context.setFieldValue('imageUrl', result);
                        });
                        return false;
                      }}
                      showUploadList={false}
                    >
                      <Button icon='upload'>{props.t('admin-adsense:upload-ads-image')}</Button>
                    </Upload>
                  }
                />
              </Card>
            </Form.Item>

            <Form.Item
              label={`${props.t('admin-adsense:ads-hyperlink')}`}
              validateStatus={context.errors.hyperlink ? 'error' : undefined}
              help={context.errors.hyperlink}
            >
              <Input
                value={context.values.hyperlink}
                onChange={context.handleChange}
                placeholder={props.t('admin-adsense:ads-hyperlink')}
                type='text'
                name='hyperlink'
                onBlur={() => validateField({
                  fieldName: 'hyperlink',
                  validateSchema: BrandValidateSchema,
                  context,
                })}
              />
            </Form.Item>

            <Form.Item className='button-right'>
              <Button
                className='save-button'
                type='primary'
                htmlType='submit'
                loading={props.loading}
              >
                {props.t('common:save')}
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </div>
  );
});

export default withNamespaces('admin-adsense')(AdsenseInfo);
