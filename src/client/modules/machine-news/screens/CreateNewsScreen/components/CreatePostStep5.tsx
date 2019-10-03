import React, { Component, Fragment } from 'react';
import { Row, Col, Icon, Select, Input, Checkbox, message, Upload, Form, Modal, Spin, Button } from 'antd';
import axios, { AxiosResponse } from 'axios';
import './CreatePost.less';
import * as uuid from 'uuid';
import _ from 'lodash';
import { Formik, FormikContext } from 'formik';
import * as yup from 'yup';
import { validateField, convertVietnamese, newsTypes, readNumber } from '@client/core';
import { Model, Brand, Category, Province, WeightRange, RentalPeriod } from '@client/services/service-proxies';
import * as jsCookies from 'js-cookie';
import { getServiceProxy } from '@client/services';
import slugify from 'slugify';
import { config } from '@client/config';

interface Props {
  isCreate: boolean;
  fileList: any[];
  imageUrls: { uid: string; url: string }[];
  brand?: string;
  newsType?: string;
  categoryId?: string;
  model?: string;
  weight?: number;
  year?: number;
  location?: string;
  state?: string;
  serialNo?: string;
  usedHours?: number;
  priceType?: string;
  price?: number;
  title?: string;
  description?: string;
  selectedWeightRange?: number;
  selectedRentalPeriod?: number;
  models: Model[];
  brands: Brand[];
  categories: Category[];
  provinces: Province[];
  loading: boolean;
  weightRanges: WeightRange[];
  rentalPeriods: RentalPeriod[];
  submit: () => void;
  backStep: () => void;
  toStep: (step: number) => void;
  changeFileList: (payload: { fileList: any }) => void;
  changeData: (payload: { [key: string]: any }) => void;
  getBrands: (value: string) => void;
  getModels: (payload: { [key: string]: any }) => void;
  addNewModel: (payload: Model) => void;
  t: (key: string) => string;
}
interface State {
  previewVisible: boolean;
  previewImage: string;
  isUploading: boolean;
  models: Model[];
  isLoading: boolean;
  createModel: boolean;
  uploadPercent: string;
  uploadError: string;
}
class CreatePostStep5 extends Component<Props, State> {
  state: State = {
    previewVisible: false,
    previewImage: '',
    isUploading: false,
    models: [],
    isLoading: false,
    createModel: false,
    uploadPercent: '',
    uploadError: '',
  };

  openCreateModel = () => {
    this.setState({
      createModel: true,
    });
  }

  closeCreateModel = () => {
    this.setState({
      createModel: false,
    });
  }

  handleCreateModel = async (payload: { modelName: string }) => {
    this.setState({
      isLoading: true,
    });

    try {
      const idToken = jsCookies.get('token');
      const serviceProxy = getServiceProxy(idToken);
      const result = await serviceProxy.createModel({
        name: payload.modelName,
        slug: slugify(payload.modelName),
        category: this.props.categoryId,
        brand: this.props.brand,
      });

      message.success(`${this.props.t('create-news:create-model-successful')}`);
      this.props.addNewModel({
        _id: (result as any).id,
        name: payload.modelName,
        slug: slugify(payload.modelName),
        category: this.props.categories.filter((item: Category) => item._id === this.props.categoryId)[0],
        brand: this.props.brands.filter((item: Brand) => item._id === this.props.brand)[0],
        totalNews: 0,
        createdAt: new Date().getTime(),
      });
      this.setState({
        isLoading: false,
        createModel: false,
      });
    } catch (error) {
      message.error(error.message);
      this.setState({
        isLoading: false,
      });
    }
  }

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
    if (config.upload.allowImageExt.test(file.name)) {
      this.uploadImage(file);
    }
    return false;
  }

  uploadImage = async (image: any) => {
    const formData = new FormData();
    formData.append('image', image.originFileObj ? image.originFileObj : image);

    try {
      await this.setState({
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
      message.error(`${this.props.t('create-news:error-happen')}`);
      this.setState({
        isUploading: false,
      });
      // tslint:disable-next-line
      console.log(error);
    }
  }

  convertPriceToText = (value: number) => {
    if (value) {
      if (value <= 1000) {
        return `${this.props.t('create-news:price-limit')}`;
      } else {
        const text = readNumber.doc(value as any) + ` ${this.props.t('create-news:dong')}`;
        return text.charAt(0).toUpperCase() + text.slice(1);
      }
    } else return '';
  }

  render() {
    const isSeller = ['SELL', 'LEASE'].indexOf(this.props.newsType!) > -1;

    const YEAR_DATA: number[] = [];
    for (let i = 1900; i < new Date().getFullYear() + 1; i += 1) {
      YEAR_DATA.push(i);
    }
    YEAR_DATA.push(0);

    const uploadButton = (
      <div>
        <Icon type='camera' />
        <div className='ant-upload-text'>{this.props.t('create-news:upload').toUpperCase()}</div>
      </div>
    );

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };

    const ModelValidateSchema = yup.object().shape({
      modelName: yup.string()
        .required(`${this.props.t('create-news:input-model-name')}`),
    });

    const validateSchema = isSeller ? {
      newsType: yup.string()
        .required(`${this.props.t('create-news:input-news-type')}`),
      categoryId: yup.string()
        .required(`${this.props.t('create-news:input-category')}`),
      brand: yup.string()
        .required(`${this.props.t('create-news:input-brand')}`),
      model: yup.string()
        .required(`${this.props.t('create-news:input-model')}`),
      selectedWeightRange: yup.number()
        .required(`${this.props.t('create-news:input-weight-range')}`),
      year: yup.number()
        .required(`${this.props.t('create-news:input-year')}`),
      location: yup.string()
        .required(`${this.props.t('create-news:input-location')}`),
      state: yup.string()
        .required(`${this.props.t('create-news:input-state')}`),
      serialNo: yup.string(),
      title: yup.string()
        .required(`${this.props.t('create-news:title-required')}`),
      description: yup.string()
        .required(`${this.props.t('create-news:input-description')}`),
    } : this.props.newsType === 'RENT' ? {
      newsType: yup.string()
        .required(`${this.props.t('create-news:input-news-type')}`),
      categoryId: yup.string()
        .required(`${this.props.t('create-news:input-category')}`),
      brand: yup.string()
        .required(`${this.props.t('create-news:input-brand')}`),
      model: yup.string()
        .required(`${this.props.t('create-news:input-model')}`),
      selectedWeightRange: yup.number()
        .required(`${this.props.t('create-news:input-weight-range')}`),
      selectedRentalPeriod: yup.number()
        .required(`${this.props.t('create-news:input-time')}`),
      location: yup.string(),
      state: yup.string(),
      serialNo: yup.string(),
      title: yup.string()
        .required(`${this.props.t('create-news:title-required')}`),
      description: yup.string(),
    } : {
      newsType: yup.string()
        .required(`${this.props.t('create-news:input-news-type')}`),
      categoryId: yup.string()
        .required(`${this.props.t('create-news:input-category')}`),
      brand: yup.string()
        .required(`${this.props.t('create-news:input-brand')}`),
      model: yup.string()
        .required(`${this.props.t('create-news:input-model')}`),
      selectedWeightRange: yup.number()
        .required(`${this.props.t('create-news:input-weight-range')}`),
      location: yup.string(),
      state: yup.string(),
      serialNo: yup.string(),
      title: yup.string()
        .required(`${this.props.t('create-news:title-required')}`),
      description: yup.string(),
    };
    const NewsValidateSchema = yup.object().shape(validateSchema as any);

    const initialValues = isSeller ? {
      newsType: this.props.newsType ? newsTypes.filter((val: any) => val.value === this.props.newsType)[0].label : undefined,
      categoryId: this.props.categoryId,
      brand: this.props.brand,
      model: this.props.model,
      selectedWeightRange: this.props.selectedWeightRange,
      year: this.props.year,
      location: this.props.location,
      state: this.props.state,
      serialNo: this.props.serialNo,
      usedHours: this.props.usedHours,
      priceType: this.props.priceType,
      price: this.props.price,
      title: this.props.title,
      description: this.props.description,
    } : this.props.newsType === 'RENT' ? {
      newsType: this.props.newsType ? newsTypes.filter((val: any) => val.value === this.props.newsType)[0].label : undefined,
      categoryId: this.props.categoryId,
      brand: this.props.brand,
      model: this.props.model,
      selectedWeightRange: this.props.selectedWeightRange,
      selectedRentalPeriod: this.props.selectedRentalPeriod,
      location: this.props.location,
      state: this.props.state,
      serialNo: this.props.serialNo,
      usedHours: this.props.usedHours,
      priceType: this.props.priceType,
      price: this.props.price,
      title: this.props.title,
      description: this.props.description,
    } : {
      newsType: this.props.newsType ? newsTypes.filter((val: any) => val.value === this.props.newsType)[0].label : undefined,
      categoryId: this.props.categoryId,
      brand: this.props.brand,
      model: this.props.model,
      selectedWeightRange: this.props.selectedWeightRange,
      location: this.props.location,
      state: this.props.state,
      serialNo: this.props.serialNo,
      usedHours: this.props.usedHours,
      priceType: this.props.priceType,
      price: this.props.price,
      title: this.props.title,
      description: this.props.description,
    };

    return (
      <Row>
        <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }}>
          <Formik
            initialValues={initialValues}
            validateOnChange={true}
            validationSchema={NewsValidateSchema}
            validate={(values) => {
              const errors: any = {};
              if (values.priceType === 'FIXED' && isSeller) {
                if (!values.price) {
                  errors.price = `${this.props.t('create-news:input-price')}`;
                }
              }
              return errors;
            }}
            onSubmit={async (_values, formikBag) => {
              await this.props.submit();
              formikBag.resetForm({});
            }}
          >
            {(context: FormikContext<any>) => (
              <Form>
                <div className='white-box text-center'>
                  <span className='create-post__back-button cursor-pointer' onClick={this.props.backStep}>
                    <Icon type='left' /> {this.props.t(`create-news:back`)}
                  </span>
                  <h3 className='create-post__headline text-bold no-margin'>{this.props.t('create-news:check-news-title')}</h3>
                </div>

                {/* Loại tin cần đăng */}
                <h2 className='create-post__session-headline'>{this.props.t('create-news:news-type')}</h2>
                <Row gutter={30}>
                  <Col xs={24}>
                    <div className='white-box justify-space-between vertical-center big-margin-top cursor-pointer' onClick={() => this.props.toStep(1)}>
                      <Form.Item style={{ marginBottom: '0px' }} validateStatus={context.errors.newsType ? 'error' : undefined} help={context.errors.newsType}>
                        <Input
                          className='hidden-input bold-input'
                          value={context.values.newsType}
                          onChange={context.handleChange}
                          onBlur={() => validateField({
                            fieldName: 'newsType',
                            validateSchema: NewsValidateSchema,
                            context,
                          })}
                          placeholder={`${this.props.t('create-news:input-news-type')}`}
                          type='text' name='newsType'
                        />
                      </Form.Item>
                      <Icon type='right' />
                    </div>
                  </Col>
                </Row>

                {/* Thông tin cơ bản */}
                <h2 className='create-post__session-headline'>{this.props.t('create-news:basic-infomation')}</h2>
                <Row gutter={30} className='flex-wrap'>
                  <Col xs={24} sm={12} lg={8} style={{ margin: '-1px' }}>
                    <div className='big-margin-top'>
                      <h3 className=''>{this.props.t('create-news:category')} <span className='text-red'>*</span></h3>
                      <Form.Item style={{ marginBottom: '0px' }} validateStatus={context.errors.categoryId ? 'error' : undefined} help={context.errors.categoryId}>
                        <Select
                          showSearch={true}
                          filterOption={(inputValue, option) => slugify((option.props.children as any).toLowerCase()).indexOf(slugify(inputValue.toLocaleLowerCase())) === 0}
                          placeholder={this.props.t('create-news:select-category')}
                          value={this.props.categoryId}
                          className='create-post__select-box'
                          onChange={(value) => {
                            context.setFieldValue('model', undefined);
                            context.setFieldValue('categoryId', value);
                            this.props.changeData({ categoryId: value, model: undefined });
                            this.props.getModels({ categoryId: value });
                          }}
                          onBlur={() => validateField({
                            fieldName: 'categoryId',
                            validateSchema: NewsValidateSchema,
                            context,
                          })}
                        >
                          {this.props.categories.map((val: any) => {
                            return <Select.Option value={val._id} key={val._id}>{val.name}</Select.Option>;
                          })}
                        </Select>
                      </Form.Item>
                    </div>
                  </Col>

                  <Col xs={24} sm={12} lg={8} style={{ margin: '-1px' }}>
                    <div className='big-margin-top'>
                      <h3 className=''>{this.props.t('create-news:brand')} <span className='text-red'>*</span></h3>
                      <Form.Item style={{ marginBottom: '0px' }} validateStatus={context.errors.brand ? 'error' : undefined} help={context.errors.brand}>
                        <Select
                          value={this.props.brand}
                          className='create-post__select-box'
                          notFoundContent={this.props.loading ? <div style={{ textAlign: 'center' }}><Spin size='small' /></div> : null}
                          showSearch={true}
                          filterOption={false}
                          placeholder={this.props.t('create-news:select-brand')}
                          onSearch={this.props.getBrands}
                          onSelect={(value) => {
                            context.setFieldValue('brand', value);
                            context.setFieldValue('model', undefined);
                            this.props.changeData({ brand: value, model: undefined });
                            this.props.getModels({ categoryId: value });
                          }}
                          onBlur={() => validateField({
                            fieldName: 'brand',
                            validateSchema: NewsValidateSchema,
                            context,
                          })}
                        >
                          {this.props.brands.map((val: any) => {
                            return <Select.Option value={val._id} key={val._id}>{val.name}</Select.Option>;
                          })}
                        </Select>
                      </Form.Item>
                    </div>
                  </Col>

                  <Col xs={24} sm={12} lg={8} style={{ margin: '-1px' }}>
                    <div className='big-margin-top'>
                      <h3 className=''>{this.props.t('create-news:model')} <span className='text-red'>*</span></h3>
                      <Form.Item style={{ marginBottom: '0px' }} validateStatus={context.errors.model ? 'error' : undefined} help={context.errors.model}>
                        <Select
                          value={this.props.model}
                          className='create-post__select-box'
                          notFoundContent={this.props.loading ? <div style={{ textAlign: 'center' }}><Spin size='small' /></div> : null}
                          showSearch={true}
                          filterOption={false}
                          placeholder={this.props.t('create-news:select-model')}
                          onSearch={(value) => this.props.getModels({ search: value })}
                          onSelect={(value) => {
                            context.setFieldValue('model', value);
                            this.props.changeData({ model: value });
                          }}
                          onBlur={() => validateField({
                            fieldName: 'model',
                            validateSchema: NewsValidateSchema,
                            context,
                          })}
                        >
                          {this.props.brand && this.props.categoryId
                            ? this.props.models.map((val: any) => (<Select.Option value={val._id} key={val._id}>{val.name}</Select.Option>))
                            : this.props.brand ? <Select.Option value={0} key={'nokey'} disabled>{this.props.t('create-news:no-model')}</Select.Option>
                              : <Select.Option value={0} key={'nokey'} disabled>{this.props.t('create-news:input-category-brand')}</Select.Option>}
                          {(this.props.brand && this.props.categoryId) && (
                            <Select.Option disabled key={'create-model'} style={{ textAlign: 'center' }}>
                              <Button type='primary' onClick={this.openCreateModel}>+ {this.props.t('create-news:add-new-model')}</Button>
                            </Select.Option>
                          )}
                        </Select>
                      </Form.Item>
                      {this.state.createModel && (
                        <Formik
                          initialValues={{
                            modelName: '',
                          }}
                          validateOnChange={true}
                          validationSchema={ModelValidateSchema}
                          onSubmit={(values, formikBag) => {
                            this.handleCreateModel(values);
                            formikBag.resetForm({});
                          }}
                        >
                          {(context2: FormikContext<any>) => (
                            <Modal
                              title={this.props.t('create-news:add-new-model')}
                              visible={this.state.createModel}
                              onOk={context2.handleSubmit}
                              onCancel={this.closeCreateModel}
                              okText={this.props.t('create-news:save')}
                              cancelText={this.props.t('create-news:cancel')}
                              confirmLoading={this.state.isLoading}
                            >
                              <Form layout='horizontal'>
                                <Form.Item label={this.props.t('create-news:category-label')} {...formItemLayout} style={{ marginBottom: '0px' }}>
                                  <strong>{this.props.categories.filter((item: Category) => item._id === this.props.categoryId)[0].name}</strong>
                                </Form.Item>
                                <Form.Item {...formItemLayout} label={this.props.t('create-news:brand-label')} style={{ marginBottom: '0px' }}>
                                  <strong>{this.props.brands.filter(((item: Category) => item._id === this.props.brand) as any)[0].name}</strong>
                                </Form.Item>
                                <Form.Item {...formItemLayout} label={this.props.t('create-news:model-label')} validateStatus={context2.errors.modelName ? 'error' : undefined} help={context2.errors.modelName}>
                                  <Input
                                    value={context2.values.modelName}
                                    onChange={context2.handleChange}
                                    onBlur={async () => {
                                      validateField({
                                        fieldName: 'modelName',
                                        validateSchema: ModelValidateSchema,
                                        context: context2,
                                      });

                                      if (context2.values.modelName) {
                                        const serviceProxy = getServiceProxy();
                                        const checkExistedModel = await serviceProxy.checkExistedModel(context2.values.modelName, context.values.brand, context.values.categoryId);
                                        if (checkExistedModel.existedModel) {
                                          context2.setFieldError('modelName', this.props.t('create-news:model-already-exist'));
                                        }
                                      }
                                    }}
                                    placeholder={this.props.t('create-news:model-name')}
                                    name='modelName'
                                  />
                                </Form.Item>
                              </Form>
                            </Modal>
                          )}
                        </Formik>
                      )}
                    </div>
                  </Col>

                  <Col xs={24} sm={12} lg={8} style={{ margin: '-1px' }}>
                    <div className='big-margin-top'>
                      <h3 className=''>{this.props.t('create-news:weight-range')} <span className='text-red'>*</span></h3>
                      <Form.Item style={{ marginBottom: '0px' }} validateStatus={context.errors.selectedWeightRange ? 'error' : undefined} help={context.errors.selectedWeightRange}>
                        <Select
                          placeholder={this.props.t('create-news:weight-range')}
                          value={this.props.selectedWeightRange}
                          className='create-post__select-box'
                          onChange={(value) => {
                            context.setFieldValue('selectedWeightRange', value);
                            this.props.changeData({ selectedWeightRange: value });
                          }}
                          onBlur={() => validateField({
                            fieldName: 'selectedWeightRange',
                            validateSchema: NewsValidateSchema,
                            context,
                          })}
                        >
                          {this.props.weightRanges.sort((a, b) => a.min - b.min).map((item: any) => {
                            return <Select.Option value={item._id} key={item._id}>{item.max ? `${this.props.t('create-news:from')} ${item.min} ${this.props.t('create-news:to')} ${item.max} ${this.props.t('create-news:ton')}`
                              : `${this.props.t('create-news:more-than')} ${item.min} ${this.props.t('create-news:ton')}`}</Select.Option>;
                          })}
                        </Select>
                      </Form.Item>
                    </div>
                  </Col>

                  <Col xs={24} sm={12} lg={8} style={{ margin: '-1px' }}>
                    {isSeller ? (
                      <div className='big-margin-top'>
                        <h3 className=''>{this.props.t('create-news:year')} <span className='text-red'>*</span></h3>
                        <Form.Item style={{ marginBottom: '0px' }} validateStatus={context.errors.year ? 'error' : undefined} help={context.errors.year}>
                          <Select
                            showSearch={true}
                            filterOption={(inputValue, option) => convertVietnamese((option.props.children as any).toString()).indexOf(inputValue) === 0}
                            placeholder={this.props.t('create-news:select-year')}
                            value={this.props.year}
                            className='create-post__select-box'
                            onChange={(value) => {
                              context.setFieldValue('year', value);
                              this.props.changeData({ year: value });
                            }}
                            onBlur={() => validateField({
                              fieldName: 'year',
                              validateSchema: NewsValidateSchema,
                              context,
                            })}
                          >
                            {YEAR_DATA.reverse().map((item: any) => {
                              return <Select.Option value={item} key={item}>{item > 0 ? item : `${this.props.t('create-news:unknown')}`}</Select.Option>;
                            })}
                          </Select>
                        </Form.Item>
                      </div>
                    ) : this.props.newsType === 'RENT' ? (
                      <div className='big-margin-top'>
                        <h3 className=''>{this.props.t('create-news:time')} <span className='text-red'>*</span></h3>
                        <Form.Item style={{ marginBottom: '0px' }} validateStatus={context.errors.selectedRentalPeriod ? 'error' : undefined} help={context.errors.selectedRentalPeriod}>
                          <Select
                            placeholder={this.props.t('create-news:time')}
                            value={this.props.selectedRentalPeriod}
                            className='create-post__select-box'
                            onChange={(value) => {
                              context.setFieldValue('selectedRentalPeriod', value);
                              this.props.changeData({ selectedRentalPeriod: value });
                            }}
                            onBlur={() => validateField({
                              fieldName: 'selectedRentalPeriod',
                              validateSchema: NewsValidateSchema,
                              context,
                            })}
                          >
                            {this.props.rentalPeriods.sort((a, b) => a.min - b.min).map((item: any) => {
                              return <Select.Option value={item._id} key={item.min}>{item.max ? `${this.props.t('create-news:from')} ${item.min} ${this.props.t('create-news:to')} ${item.max} ${this.props.t('create-news:month')}`
                                : `${this.props.t('create-news:more-than')} ${item.min} ${this.props.t('create-news:month')}`}</Select.Option>;
                            })}
                          </Select>
                        </Form.Item>
                      </div>
                    ) : null}
                  </Col>
                </Row>

                {/* Thông tin chi tiết */}
                <h2 className='create-post__session-headline'>{this.props.t('create-news:detail-infomation')}</h2>
                <Row gutter={30} className='flex-wrap'>
                  <Col xs={24} sm={12} style={{ margin: '-1px' }}>
                    <div className='big-margin-top'>
                      <h3 className=''>{this.props.t('create-news:location')} {isSeller && (<span className='text-red'>*</span>)}</h3>
                      <Form.Item style={{ marginBottom: '0px' }} validateStatus={context.errors.location ? 'error' : undefined} help={context.errors.location}>
                        <Select placeholder={this.props.t('create-news:select-location')} value={this.props.location} className='create-post__select-box'
                          onChange={(value) => {
                            context.setFieldValue('location', value);
                            this.props.changeData({ location: value });
                          }}
                          onBlur={() => validateField({
                            fieldName: 'location',
                            validateSchema: NewsValidateSchema,
                            context,
                          })}
                        >
                          {
                            this.props.provinces.map((val: any) => {
                              return <Select.Option value={val._id} key={val._id}>{val.name}</Select.Option>;
                            })
                          }
                        </Select>
                      </Form.Item>
                    </div>
                  </Col>

                  <Col xs={24} sm={12} style={{ margin: '-1px' }}>
                    <div className='big-margin-top'>
                      <h3 className=''>{this.props.t('create-news:state')} {isSeller && (<span className='text-red'>*</span>)}</h3>
                      <Form.Item style={{ marginBottom: '0px' }} validateStatus={context.errors.state ? 'error' : undefined} help={context.errors.state}>
                        <Select placeholder={this.props.t('create-news:select-state')} value={this.props.state} className='create-post__select-box'
                          onChange={(value) => {
                            context.setFieldValue('state', value);
                            this.props.changeData({ state: value });
                          }}
                          onBlur={() => validateField({
                            fieldName: 'state',
                            validateSchema: NewsValidateSchema,
                            context,
                          })}
                        >
                          <Select.Option value={'NEW'}>{this.props.t('create-news:state-new')}</Select.Option>
                          <Select.Option value={'USED'}>{this.props.t('create-news:state-used')}</Select.Option>
                          <Select.Option value={'LIQUIDATE'}>{this.props.t('create-news:state-liquidate')}</Select.Option>
                        </Select>
                      </Form.Item>
                    </div>
                  </Col>

                  <Col xs={24} sm={12} style={{ margin: '-1px' }}>
                    <div className='big-margin-top'>
                      <h3 className=''>{this.props.t('create-news:machine-serial')}</h3>
                      <Form.Item style={{ marginBottom: '0px' }} validateStatus={context.errors.serialNo ? 'error' : undefined} help={context.errors.serialNo}>
                        <Input type='text' value={this.props.serialNo} placeholder={this.props.t('create-news:placeholder-machine-serial')}
                          onChange={(e) => {
                            context.setFieldValue('serialNo', e.target.value);
                            this.props.changeData({ serialNo: e.target.value });
                          }}
                          onBlur={() => validateField({
                            fieldName: 'serialNo',
                            validateSchema: NewsValidateSchema,
                            context,
                          })}
                        >
                        </Input>
                      </Form.Item>
                    </div>
                  </Col>

                  <Col xs={24} sm={12} style={{ margin: '-1px' }}>
                    <div className='big-margin-top'>
                      <h3 className=''>{this.props.t('create-news:used-hours')}</h3>
                      <Form.Item style={{ marginBottom: '0px' }} validateStatus={context.errors.usedHours ? 'error' : undefined} help={context.errors.usedHours}>
                        <Input type='number' value={this.props.usedHours} placeholder={this.props.t('create-news:placeholder-used-hourrs')}
                          onChange={(e) => {
                            if (Number(e.target.value) > 0) {
                              context.setFieldError('usedHours', '');
                            }
                            context.setFieldValue('usedHours', e.target.value);
                            this.props.changeData({ usedHours: e.target.value });
                          }}
                        ></Input>
                      </Form.Item>
                    </div>
                  </Col>

                  <Col xs={24}>
                    <div className='big-margin-top'>
                      <h3 className=''>{this.props.t('create-news:price')} <span className='text-red'>*</span></h3>
                      <div className='vertical-center'>
                        <Checkbox className='create-post__price-checkbox' checked={this.props.priceType === 'NEGOTIATION'}
                          onChange={(e) => {
                            if (e.target.checked) {
                              context.setFieldError('price', '');
                              context.setFieldValue('priceType', 'NEGOTIATION');
                              this.props.changeData({ priceType: 'NEGOTIATION' });
                            }
                          }}></Checkbox>
                        <h4 className='no-margin' style={{height: '40px'}}>{this.props.t('create-news:contact-price')}</h4>
                      </div>
                      <div className='vertical-center slight-margin-top'>
                        <Checkbox className='create-post__price-checkbox' style={{height: '40px'}} checked={this.props.priceType === 'FIXED'}
                          onChange={(e) => {
                            if (e.target.checked) {
                              context.setFieldValue('priceType', 'FIXED');
                              this.props.changeData({ priceType: 'FIXED' });
                            }
                          }}
                        ></Checkbox>
                        <Form.Item style={{ marginBottom: '0px' }} validateStatus={context.errors.price ? 'error' : undefined} help={context.errors.price}>
                          <Input placeholder={this.props.t('create-news:placeholder-price')} addonAfter='VND' value={this.props.price}
                            disabled={this.props.priceType === 'NEGOTIATION'} type='number' onChange={(e) => {
                              if (e.target.value) {
                                context.setFieldError('price', '');
                              }
                              context.setFieldValue('price', e.target.value);
                              this.props.changeData({ price: e.target.value });
                            }}
                          />
                        </Form.Item>
                      </div>
                      <h4>{this.convertPriceToText(this.props.price!)}</h4>
                    </div>
                  </Col>
                </Row>

                {/* Thông tin mô tả */}
                <h2 className='create-post__session-headline'>{this.props.t('create-news:description-title')}</h2>
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
                        {this.props.t('create-news:choose-image')} {isSeller && <span className='text-red'>*</span>}
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
                              className='create-post__no-border-textarea-box' value={this.props.description}
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
                            />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>

                {!this.state.isUploading && (
                  <Button
                    className='create-post__next-button text-center big-margin-top cursor-pointer'
                    loading={this.props.loading}
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
                            this.props.submit();
                          }
                        }
                      } catch (error) {
                        // tslint:disable-next-line:no-console
                        console.log(error);
                      }
                    }}
                  >
                    {this.props.isCreate ? `${this.props.t('create-news:create-post')}` : `${this.props.t('create-news:save-post')}`}
                  </Button>
                )}
              </Form>
            )}
          </Formik>
          <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt='example' style={{ width: '100%' }} src={this.state.previewImage} />
          </Modal>
        </Col>
      </Row>
    );
  }
}

export default CreatePostStep5;
