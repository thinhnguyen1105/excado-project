import React, { Component, Fragment } from 'react';
import { Row, Col, Icon, Upload, message, Modal, Input, Form, Spin, Button } from 'antd';
import axios, { AxiosResponse } from 'axios';
import * as uuid from 'uuid';
import _ from 'lodash';
import './CreatePost.less';
import { Formik, FormikContext } from 'formik';
import * as yup from 'yup';
import { validateField } from '@client/core';
import { config } from '@client/config';

interface Props {
  newsType?: string;
  imageUrls: {
    uid: string;
    url: string;
  }[];
  title?: string;
  description?: string;
  fileList: any[];
  submit: () => void;
  backStep: () => void;
  nextStep: () => void;
  changeFileList: (payload: { fileList: any }) => void;
  changeData: (payload: { [key: string]: any }) => void;
  t: (key: string) => string;
}
interface State {
  previewVisible: boolean;
  previewImage: string;
  isUploading: boolean;
  uploadPercent: string;
  uploadError: string;
}
class CreatePostStep4 extends Component<Props, State> {
  state: State = {
    previewVisible: false,
    previewImage: '',
    isUploading: false,
    uploadPercent: '',
    uploadError: '',
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = (file: any) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = (obj: any) => {
    const filterFileList = obj.fileList.filter((val: any) => {
      return config.upload.allowImageExt.test(val.name);
    });
    if (filterFileList.length > 15) {
      this.setState({
        uploadError: this.props.t('create-news:upload-image-limit'),
      });
    } else {
      this.props.changeFileList({ fileList: filterFileList });
      this.setState({
        uploadError: '',
      });
      if (filterFileList.length < obj.fileList.length) {
        message.error(`${this.props.t('create-news:upload-image-error')}`);
      }
    }
  };

  beforeUpload = (file: any) => {
    let allowedUpload = true;
    if (!config.upload.allowImageExt.test(file.name)) {
      allowedUpload = false;
    }
    if (allowedUpload) {
      this.uploadImage(file);
    }
    return false;
  }

  uploadImage = async (image: any) => {
    const formData = new FormData();
    formData.append('image', image.originFileObj ? image.originFileObj : image);

    try {
      this.setState({
        isUploading: true,
      });

      const result: AxiosResponse = await axios({
        method: 'post',
        url: `${config.url.api}/upload-image`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          this.setState({
            uploadPercent: (progressEvent.loaded / progressEvent.total * 100).toFixed(2),
          });
        },
      });

      this.props.changeData({
        imageUrls: [...this.props.imageUrls, {
          uid: image.uid,
          url: result.data,
        }],
      });
      this.setState({
        isUploading: false,
      });
    } catch (error) {
      message.error(`${this.props.t('common:error-happen')}`);
      this.setState({
        isUploading: false,
      });
    }
  }

  render() {
    const isSeller = ['SELL', 'LEASE'].indexOf(this.props.newsType!) > -1;
    const validateSchema = isSeller ? {
      description: yup.string()
        .required(`${this.props.t('create-news:input-description')}`)
        .min(20, `${this.props.t('create-news:input-description-limit')}`),
      } : {
        description: yup.string(),
      };
    const NewsValidateSchema = yup.object().shape(validateSchema);
    const uploadButton = (
      <div>
        <Icon type='camera' />
        <div className='ant-upload-text'>{this.props.t('create-news:upload')}</div>
      </div>
    );

    return (
      <Row>
        <Formik
          initialValues={{
            description: this.props.description,
          }}
          validateOnChange={true}
          validationSchema={NewsValidateSchema}
          onSubmit={async (_values, formikBag) => {
            await this.props.submit();
            formikBag.resetForm({
              description: undefined,
            });
          }}
        >
          {(context: FormikContext<any>) => (
            <Form>
              <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }}>
                <div className='white-box text-center'>
                  <span className='create-post__back-button cursor-pointer' onClick={this.props.backStep}>
                    <Icon type='left' /> {this.props.t(`create-news:back`)}
                  </span>
                  <h3 className='create-post__headline text-bold no-margin'>{this.props.t('create-news:input-title')}</h3>
                </div>
                <Row gutter={30}>
                  <Col xs={24}>
                    <div className='big-margin-top'>
                      <div className='big-margin-top'>
                        <h3 className=''>{this.props.t('create-news:title')}</h3>
                        <div className='white-box'>
                          <Form.Item style={{ marginBottom: '0px' }}>
                            {this.props.title}
                          </Form.Item>
                        </div>
                      </div>

                      <h3 className='' style={{ marginTop: '15px' }}>
                        {this.props.t('create-news:choose-image')} {isSeller && (<span className='text-red'>*</span>)}
                      </h3>
                      <div className='white-box'>
                        <Spin spinning={this.state.isUploading} tip={`${this.state.uploadPercent}% ...`}>
                        <Form.Item style={{ marginBottom: '0px' }} validateStatus={this.state.uploadError ? 'error' : undefined} help={this.state.uploadError}>
                          <Upload
                            beforeUpload={this.beforeUpload as any}
                            listType='picture-card'
                            multiple={true}
                            fileList={this.props.fileList.map((val: any) => {
                              if (val.uid) {
                                return val;
                              } else {
                                const deepCloneValue = JSON.parse(JSON.stringify(val));
                                deepCloneValue.uid = uuid.v4();
                                return deepCloneValue;
                              }
                            })}
                            onPreview={this.handlePreview}
                            onChange={_.debounce(this.handleChange, 300)}
                          >
                            {uploadButton}
                          </Upload>
                        </Form.Item>
                        </Spin>
                      </div>

                      <div className='big-margin-top'>
                        <h3 className=''>{this.props.t('create-news:description-title')} {isSeller && (<Fragment><span>({this.props.t('create-news:limit-character')})</span><span className='text-red'>*</span></Fragment>)}</h3>
                        <div className='white-box'>
                          <Form.Item style={{ marginBottom: '0px' }} validateStatus={context.errors.description ? 'error' : undefined} help={context.errors.description}>
                            <Input.TextArea
                              className='create-post__no-border-textarea-box'
                              value={this.props.description}
                              onChange={(e) => {
                                context.setFieldValue('description', e.target.value);
                                this.props.changeData({ description: e.target.value });
                              }}
                              onBlur={() => validateField({
                                fieldName: 'description',
                                validateSchema: NewsValidateSchema,
                                context,
                              })}
                              autosize={{ minRows: 5 }}
                            >
                            </Input.TextArea>
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>

                {!this.state.isUploading && (
                  <Button
                    className='create-post__next-button text-center big-margin-top cursor-pointer'
                    type='primary'
                    onClick={async () => {
                      try {
                        const validateResult = await context.validateForm();
                        if (isSeller && !this.props.imageUrls.length) {
                          this.setState({
                            uploadError: this.props.t('create-news:image-limit'),
                          });
                        } else {
                          this.setState({
                            uploadError: '',
                          });

                          if ((validateResult && !Object.keys(validateResult).length) || !validateResult) {
                            if (!isSeller || (this.props.imageUrls && this.props.imageUrls.length)) {
                              this.props.nextStep();
                            }
                          }
                        }
                      } catch (error) {
                        // tslint:disable-next-line:no-console
                        console.log(error);
                      }
                    }}
                  >
                      {this.props.t('create-news:next').toUpperCase()}
                  </Button>
                )}
                <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                  <img alt='example' style={{ width: '100%' }} src={this.state.previewImage} />
                </Modal>
              </Col>
            </Form>
          )}
        </Formik>
      </Row>
    );
  }
}

export default CreatePostStep4;
