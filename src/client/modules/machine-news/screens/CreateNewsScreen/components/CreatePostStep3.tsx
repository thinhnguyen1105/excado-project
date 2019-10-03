import React, { Component } from 'react';
import { Row, Col, Icon, Select, Input, Checkbox, Form, Button } from 'antd';
import './CreatePost.less';
import { Formik, FormikContext } from 'formik';
import * as yup from 'yup';
import { validateField, readNumber } from '@client/core';
import { Province } from '@client/services/service-proxies';
import slugify from 'slugify';

interface Props {
  newsType?: string;
  location?: string;
  state?: string;
  price?: number;
  priceType?: string;
  usedHours?: number;
  serialNo?: string;
  provinces: Province[];
  nextStep: () => void;
  backStep: () => void;
  changeData: (payload: {[key: string]: any}) => void;
  t: (key: string) => string;
}
interface State {}
class CreatePostStep3 extends Component<Props, State> {
  convertPriceToText = (value: number) => {
    if (value) {
      if (value <= 1000) {
        return `${this.props.t('create-news:price-limit')}`;
      } else {
        const text = readNumber.doc(value as any) + ` ${this.props.t('create-news:dong')}`;
        return text.charAt(0).toUpperCase() + text.slice(1);
      }
    }

    return '';
  }

  render() {
    const isSeller = ['SELL', 'LEASE'].indexOf(this.props.newsType!) > -1;
    const newsValidate = isSeller ? {
      location: yup.string()
        .required(`${this.props.t('create-news:input-location')}`),
      state: yup.string()
        .required(`${this.props.t('create-news:input-state')}`),
      serialNo: yup.string(),
    } : {
      location: yup.string(),
      state: yup.string(),
      serialNo: yup.string(),
    };
    const NewsValidateSchema = yup.object().shape(newsValidate);

    return (
      <Row>
        <Formik
          initialValues={{
            location: this.props.location,
            state: this.props.state,
            price: this.props.price,
            priceType: this.props.priceType,
            usedHours: this.props.usedHours,
            serialNo: this.props.serialNo,
          }}
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
          onSubmit={(_values, formikBag) => {
            this.props.nextStep();
            formikBag.resetForm({
              location: undefined,
              state: undefined,
              priceType: 'FIXED',
              price: 0,
            });
          }}
        >
          {(context: FormikContext<any>) => (
            <Form>
              <Col xs={{span: 22, offset: 1}} sm={{span: 20, offset: 2}} md={{span: 16, offset: 4}} lg={{span: 12, offset: 6}}>
                <div className='white-box text-center'>
                  <span className='create-post__back-button cursor-pointer' onClick={this.props.backStep}>
                    <Icon type='left' /> {this.props.t(`create-news:back`)}
                  </span>
                  <h3 className='create-post__headline text-bold no-margin'>{this.props.t(`create-news:detail-info`)} (3/5)</h3>
                </div>
                <Row gutter={30} className='flex-wrap'>
                  <Col xs={24} sm={12} style={{margin: '-1px'}}>
                    <div className='big-margin-top'>
                      <Form.Item style={{marginBottom: '0px'}} validateStatus={context.errors.location ? 'error' : undefined} help={context.errors.location}>
                        <h3 className=''>{this.props.t('create-news:location')} {isSeller && (<span className='text-red'>*</span>)}</h3>
                        <Select
                          showSearch={true}
                          filterOption={(inputValue, option) => slugify((option.props.children as any).toLowerCase()).indexOf(slugify(inputValue.toLocaleLowerCase())) === 0}
                          placeholder={this.props.t('create-news:select-location')}
                          value={this.props.location}
                          className='create-post__select-box'
                          onChange={(value) => {
                            context.setFieldValue('location', value);
                            this.props.changeData({location: value});
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
                  <Col xs={24} sm={12} style={{margin: '-1px'}}>
                    <div className='big-margin-top'>
                      <Form.Item style={{marginBottom: '0px'}} validateStatus={context.errors.state ? 'error' : undefined} help={context.errors.state}>
                        <h3 className=''>{this.props.t('create-news:state')} {isSeller && (<span className='text-red'>*</span>)}</h3>
                        <Select
                          placeholder={this.props.t('create-news:select-state')}
                          value={this.props.state} className='create-post__select-box'
                          onChange={(value) => {
                            context.setFieldValue('state', value);
                            this.props.changeData({state: value});
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
                  <Col xs={24} sm={12} style={{margin: '-1px'}}>
                    <div className='big-margin-top'>
                      <h3 className=''>{this.props.t('create-news:machine-serial')}</h3>
                      <Form.Item style={{marginBottom: '0px'}} validateStatus={context.errors.serialNo ? 'error' : undefined} help={context.errors.serialNo}>
                        <Input
                          type='text' value={this.props.serialNo}
                          placeholder={`${this.props.t('create-news:placeholder-machine-serial')}`}
                          onChange={(e) => {
                            context.setFieldValue('serialNo', e.target.value);
                            this.props.changeData({serialNo: e.target.value});
                          }}
                          onBlur={() => validateField({
                            fieldName: 'serialNo',
                            validateSchema: NewsValidateSchema,
                            context,
                          })}
                        ></Input>
                      </Form.Item>
                    </div>
                  </Col>
                  <Col xs={24} sm={12} style={{margin: '-1px'}}>
                    <div className='big-margin-top'>
                      <h3 className=''>{this.props.t('create-news:used-hours')}</h3>
                      <Form.Item style={{marginBottom: '0px'}} validateStatus={context.errors.usedHours ? 'error' : undefined} help={context.errors.usedHours}>
                        <Input
                          type='number' value={this.props.usedHours}
                          placeholder={this.props.t('create-news:placeholder-used-hours')}
                          onChange={(e) => {
                            if (Number(e.target.value) > 0) {
                              context.setFieldError('usedHours', '');
                            }
                            context.setFieldValue('usedHours', e.target.value);
                            this.props.changeData({usedHours: e.target.value});
                          }}
                        ></Input>
                      </Form.Item>
                    </div>
                  </Col>
                  <Col xs={24} style={{margin: '-1px'}}>
                    <div className='big-margin-top'>
                      <h3 className=''>{this.props.t('create-news:price')} {isSeller && (<span className='text-red'>*</span>)}</h3>
                      <div className='vertical-center'>
                        <Checkbox className='create-post__price-checkbox' checked={this.props.priceType === 'NEGOTIATION'}
                          onChange={(e) => {
                            if (e.target.checked) {
                              context.setFieldError('price', '');
                              context.setFieldValue('priceType', 'NEGOTIATION');
                              this.props.changeData({priceType: 'NEGOTIATION'});
                            }
                          }}></Checkbox>
                        <h4 className='no-margin' style={{height: '40px'}}>{this.props.t('create-news:contact-price')}</h4>
                      </div>
                      <div className='vertical-center slight-margin-top'>
                        <Checkbox className='create-post__price-checkbox' checked={this.props.priceType === 'FIXED'}
                          onChange={(e) => {
                            if (e.target.checked) {
                              context.setFieldValue('priceType', 'FIXED');
                              this.props.changeData({priceType: 'FIXED'});
                            }
                          }}
                        ></Checkbox>
                        <Form.Item style={{marginBottom: '0px'}} validateStatus={context.errors.price ? 'error' : undefined} help={context.errors.price}>
                          <Input placeholder={this.props.t('create-news:placeholder-price')} value={this.props.price} addonAfter='VND'
                            disabled={this.props.priceType === 'NEGOTIATION'} type='number'  onChange={(e) => {
                              if (e.target.value) {
                                context.setFieldError('price', '');
                              }
                              context.setFieldValue('price', e.target.value);
                              this.props.changeData({price: e.target.value});
                            }}/>
                          </Form.Item>
                      </div>
                      <h4>{this.convertPriceToText(this.props.price!)}</h4>
                    </div>
                  </Col>
                </Row>

                <Button
                  className='create-post__next-button text-center big-margin-top cursor-pointer'
                  type='primary'
                  onClick={async () => {
                    try {
                      const validateResult = await context.validateForm();
                      if ((validateResult && Object.keys(validateResult).length === 0) || !validateResult) {
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

export default CreatePostStep3;
