import React, { Component } from 'react';
import { Row, Col, Icon, Select, Form, Input, Modal, message, Spin, Divider, Button } from 'antd';
import './CreatePost.less';
import { getServiceProxy } from '../../../../../services';
import { Formik, FormikContext } from 'formik';
import * as yup from 'yup';
import { validateField, convertVietnamese } from '@client/core';
import { Category, Brand, Model } from '@client/services/service-proxies';
import * as jsCookies from 'js-cookie';
import slugify from 'slugify';
import { PriceRange } from '@client/store';

interface Props {
  loading: boolean;
  selectedWeightRange?: number;
  selectedRentalPeriod?: number;
  newsType?: string;
  weightRanges: PriceRange[];
  rentalPeriods: PriceRange[];
  models: Model[];
  brands: Brand[];
  categories: Category[];
  categoryId?: string;
  brand?: string;
  model?: string;
  weight?: number;
  year?: number;
  getBrands: (value: string) => void;
  getModels: (payload: { [key: string]: any }) => void;
  changeData: (payload: { [key: string]: any }) => void;
  addNewModel: (payload: Model) => void;
  nextStep: () => void;
  backStep: () => void;
  t: (key: string) => string;
}
interface State {
  isLoading: boolean;
  createModel: boolean;
}
class CreatePostStep2 extends Component<Props, State> {
  state: State = {
    isLoading: false,
    createModel: false,
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

  render() {
    const YEAR_DATA: number[] = [];
    for (let i = 1900; i < new Date().getFullYear() + 1; i += 1) {
      YEAR_DATA.push(i);
    }
    YEAR_DATA.push(0);
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const isSeller = ['SELL', 'LEASE'].indexOf(this.props.newsType!) > -1;

    const newsValidate = isSeller ? {
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
    } : this.props.newsType === 'RENT' ? {
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
    } : {
      categoryId: yup.string()
        .required(`${this.props.t('create-news:input-category')}`),
      brand: yup.string()
        .required(`${this.props.t('create-news:input-brand')}`),
      model: yup.string()
        .required(`${this.props.t('create-news:input-model')}`),
      selectedWeightRange: yup.number()
        .required(`${this.props.t('create-news:input-weight-range')}`),
    };
    const NewsValidateSchema = yup.object().shape(newsValidate as any);
    const ModelValidateSchema = yup.object().shape({
      modelName: yup.string()
        .required(`${this.props.t('create-news:input-model-name')}`),
    });
    const initialValues = isSeller ? {
      categoryId: this.props.categoryId,
      brand: this.props.brand,
      model: this.props.model,
      selectedWeightRange: this.props.selectedWeightRange,
      year: this.props.year,
    } : this.props.newsType === 'RENT' ? {
      categoryId: this.props.categoryId,
      brand: this.props.brand,
      model: this.props.model,
      selectedWeightRange: this.props.selectedWeightRange,
      selectedRentalPeriod: this.props.selectedRentalPeriod,
    } : {
      categoryId: this.props.categoryId,
      brand: this.props.brand,
      model: this.props.model,
      selectedWeightRange: this.props.selectedWeightRange,
    };

    return (
      <Row className='create-post-step-2'>
        <Formik
          initialValues={initialValues}
          validationSchema={NewsValidateSchema}
          onSubmit={(_values, formikBag) => {
            this.props.nextStep();
            formikBag.resetForm({});
          }}
        >
          {(context: FormikContext<any>) => (
            <Form>
              <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }}>
                <div className='white-box text-center'>
                  <span className='create-post__back-button cursor-pointer' onClick={this.props.backStep}>
                    <Icon type='left' /> {this.props.t(`create-news:back`)}
                  </span>
                  <h3 className='create-post__headline text-bold no-margin'>{this.props.t(`create-news:basic-info`)} (2/5)</h3>
                </div>

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
                            this.props.getModels({ categoryId: value, brand: this.props.brand });
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
                            this.props.getModels({ brand: value, categoryId: this.props.categoryId });
                          }}
                          onBlur={() => validateField({
                            fieldName: 'brand',
                            validateSchema: NewsValidateSchema,
                            context,
                          })}
                          dropdownRender={(menu) => (
                            <div>
                              {menu}
                              <Divider style={{ margin: '2px 0' }} />
                              <div style={{ padding: '4px', fontSize: '12px', textAlign: 'center' }}>
                                {this.props.t('create-news:display')} {this.props.brands.length} {this.props.t('create-news:of-total')} 2000
                              </div>
                            </div>
                          )}
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
                          dropdownRender={(menu) => (
                            <div>
                              {menu}
                              {this.props.models.length > 0 && (
                                <Divider style={{ margin: '2px 0' }} />
                              )}
                              {this.props.models.length > 0 && (
                                <div style={{ padding: '4px', fontSize: '12px', textAlign: 'center' }}>
                                  {this.props.t('create-news:display')} {this.props.models.length} {this.props.t('create-news:of-total')} 8000
                                </div>
                              )}
                            </div>
                          )}
                        >
                          {this.props.brand && this.props.categoryId
                            ? this.props.models.map((val: any) => (<Select.Option value={val._id} key={val._id}>{val.name}</Select.Option>))
                            : this.props.brand ? <Select.Option value={0} key={'nokey'} disabled>{this.props.t('create-news:no-model')}</Select.Option>
                              : <Select.Option value={0} key={'nokey'} disabled>{this.props.t('create-news:input-category-brand')}</Select.Option>}
                          {(this.props.brand && this.props.categoryId) && (
                            <Select.Option disabled key={'create-model'} style={{textAlign: 'center'}}>
                              <Button type='primary' onClick={this.openCreateModel}>+ {this.props.t('create-news:add-model')}</Button>
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
                          onSubmit={() => {
                            //
                          }}
                        >
                          {(context2: FormikContext<any>) => (
                            <Modal
                              title={this.props.t('create-news:add-new-model')}
                              visible={this.state.createModel}
                              onOk={async () => {
                                if (context2.values.modelName) {
                                  const serviceProxy = getServiceProxy();
                                  const checkExistedModel = await serviceProxy.checkExistedModel(context2.values.modelName, context.values.brand, context.values.categoryId);
                                  if (checkExistedModel.existedModel) {
                                    context2.setFieldError('modelName', this.props.t('create-news:model-already-exist'));
                                  } else {
                                    const validateResult = await context2.validateForm();
                                    if ((validateResult && !Object.keys(validateResult).length) || !validateResult) {
                                      this.handleCreateModel(context2.values);
                                      context2.resetForm({});
                                    }
                                  }
                                }
                              }}
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
                              return <Select.Option key={item} value={item}>{item > 0 ? item : this.props.t(`create-news:unknown`)}</Select.Option>;
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
                              return <Select.Option value={item._id} key={item._id}>{item.max ? `${this.props.t('create-news:from')} ${item.min} ${this.props.t('create-news:to')} ${item.max} ${this.props.t('create-news:month')}`
                               : `${this.props.t('create-news:more-than')} ${item.min} ${this.props.t('create-news:month')}`}</Select.Option>;
                            })}
                          </Select>
                        </Form.Item>
                      </div>
                    ) : null}
                  </Col>
                </Row>

                <div className='note'>
                  <div><i>{this.props.t('create-news:weight-range-note')}</i></div>
                </div>

                <Button
                  className='create-post__next-button text-center big-margin-top cursor-pointer'
                  type='primary'
                  onClick={async () => {
                    try {
                      const validateResult = await context.validateForm();
                      if ((validateResult && !Object.keys(validateResult).length) || !validateResult) {
                        this.props.nextStep();
                      }
                    } catch (error) {
                      // tslint:disable-next-line:no-console
                      console.log(error);
                    }
                  }}
                >
                    {this.props.t('create-news:next').toUpperCase()}
                </Button>
              </Col>
            </Form>
          )}
        </Formik>
      </Row>
    );
  }
}

export default CreatePostStep2;
