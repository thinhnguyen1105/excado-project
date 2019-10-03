import React, { Component, Fragment } from 'react';
import { Row, Col, Button, Icon, Alert } from 'antd';
import './DetailMachine.less';
import { formatMoney, getImageUrl } from '@client/core';
import { News } from '@client/services/service-proxies';
import { FiltersChangePayload, ProfileState } from '@client/store';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import * as moment from 'moment';
import { withNamespaces } from '@client/i18n';

const isClient = typeof window !== 'undefined';
const JSZipUtils = isClient ? require('jszip-utils') as any : undefined as any;
const zip = new JSZip();
let images: any = [];

interface Props {
  newsData: News;
  starStatus?: any;
  profileState: ProfileState;
  handleFiltersChange: (payload: { [key: string]: string | number }) => void;
  changeFollowItemStatus: (starStatus: string, id: string) => void;
  t: (key: string) => string;
}
interface State { }
class DetailMachine extends Component<Props, State> {
  imageGallery: any;
  constructor(props: any) {
    super(props);
    this.imageGallery = React.createRef();
  }
  state = {
    currentImage: '',
  };

  renderItem = (item: any) => {
    return (
      <div className='image-gallery-image' style={{
        background: `url(${item.original})`,
        backgroundSize: item.original.indexOf('large') > -1 || item.original.indexOf('imageshack') > -1 ? 'contain' : 'auto',
        backgroundPosition: 'center',
        position: 'relative',
        width: `100%`,
        height: `400px`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#fff',
      }}>
      </div>
    );
  }

  renderThumbInner = (item: any) => {
    return (
      <div className='image-gallery-thumbnail-inner' style={{
        background: `url(${item.original})`
        , backgroundSize: 'contain', backgroundPosition: 'center', position: 'relative', width: `100%`, height: `80px`, backgroundRepeat: 'no-repeat', backgroundColor: '#fff',
      }}>
      </div>
    );
  }

  renderFullScreenItem = (item: any) => {
    return (
      <div className='image-gallery-image' style={{
        background: `url(${item.original})`
        , backgroundSize: 'contain', backgroundPosition: 'center', position: 'relative', width: `100%`, backgroundRepeat: 'no-repeat', backgroundColor: '#fff', height: '500px',
      }}>
      </div>
    );
  }

  downloadAllImages = () => {
    let count = 0;
    const urls = this.props.newsData.imageUrls.map((value) => {
      if (value.indexOf('.jpg') !== -1 || value.indexOf('.png') !== -1) {
        return value;
      } else {
        return value + `-large.jpg`;
      }
    });
    urls.forEach((url) => {
      JSZipUtils.getBinaryContent(url, (err: any, data: any) => {
        if (err) {
          throw err;
        }
        zip.file(url.replace('static/upload/', ''), data, { binary: true });
        count++;
        if (count === urls.length) {
          zip.generateAsync({ type: 'blob' }).then((content) => {
            saveAs(content, `${this.props.newsData.title}.zip`);
          });
        }
      });
    });
  }

  handleFilterClick = (payload: FiltersChangePayload) => {
    window.location.href = `/tim-kiem?${Object.keys(payload).map((item) => `${item}=${payload[item]}`).join('&')}`;
  }

  render() {
    const translate = this.props.t;
    images = this.props.newsData.imageUrls && this.props.newsData.imageUrls.length > 0 ? this.props.newsData.imageUrls.map((value: any) => {
      return value.indexOf(`imageshack.com`) > 0 ? {
        original: value ? value : this.props.newsData.categoryId.imageUrl,
        thumbnail: value ? value : this.props.newsData.categoryId.imageUrl,
      } : {
        original: getImageUrl(value, 'large') ? getImageUrl(value, 'large') : this.props.newsData.categoryId.imageUrl,
        thumbnail: getImageUrl(value, 'small') ? getImageUrl(value, 'small') : this.props.newsData.categoryId.imageUrl,
      };
    }) : [{ original: this.props.newsData.categoryId.imageUrl, thumbnail: this.props.newsData.categoryId.imageUrl }];
    const isSeller = ['SELL', 'LEASE'].indexOf(this.props.newsData.newsType!) > -1;
    // const weightRange = this.props.newsData.weightRange.max
    //   ? this.props.t('common:from-to').replace('{from}', this.props.newsData.weightRange.min).replace('{to}', this.props.newsData.weightRange.max) + ' ' + this.props.t('common:ton')
    //   : this.props.t('common:more-than') + ' ' + this.props.newsData.weightRange.min + ' ' + this.props.t('common:ton');
    let rentalPeriod = '';
    if (this.props.newsData.rentalPeriod && this.props.newsData.rentalPeriod._id) {
      rentalPeriod = this.props.newsData.rentalPeriod.max
        ? this.props.t('common:from-to').replace('{from}', this.props.newsData.rentalPeriod.min).replace('{to}', this.props.newsData.rentalPeriod.max) + ' ' + this.props.t('common:month')
        : this.props.t('common:more-than') + ' ' + this.props.newsData.rentalPeriod.min + ' ' + this.props.t('common:month');
    }

    return (
      <div>
        <Row className='outline' >
          {this.props.newsData.status === `DELETED` && (
            <Row>
              <Alert
                style={{textAlign: 'center', marginBottom: '20px', color: '#f5222d'}}
                message={this.props.t('common:delete-message')}
                type='error'
              />
            </Row>
          )}
          {this.props.newsData.status === `PENDING` && (
            <Row>
              <Alert
                style={{textAlign: 'center', marginBottom: '20px'}}
                message={this.props.t('common:pending-message')}
                type='warning'
              />
            </Row>
          )}
          {this.props.newsData.status === `REJECTED` && (
            <Row>
              <Alert
                style={{textAlign: 'center', marginBottom: '20px'}}
                message={this.props.t('common:reject-message')}
                type='warning'
              />
            </Row>
          )}
          <Row gutter={25}>
            <Col lg={16} md={16} sm={24} xs={24}>
              <ImageGallery
                ref={this.imageGallery}
                items={images}
                showPlayButton={false}
                showFullscreenButton={true}
                renderItem={this.renderItem.bind(this)}
                renderThumbInner={this.renderThumbInner.bind(this)}
                renderFullscreenButton={(_onClick, isFullscreen) => {
                  return (
                    <a href={`/xem-tat-ca-anh/${this.props.newsData._id}`} target='_blank' title={this.props.newsData.title}>
                      <button
                        type='button'
                        className={
                          `image-gallery-fullscreen-button${isFullscreen ? ' active' : ''}`}
                      />
                    </a>
                  );
                }}
              />
            </Col>

            <Col lg={8} md={8} sm={24} xs={24}>
              <h1 className='post-title'>{this.props.newsData.title}</h1>
              <Row>
                <Col lg={24} md={24} sm={24} xs={24}>
                  <div className='post-price'>
                    {translate('common:price')} {this.props.newsData && this.props.newsData.price ? formatMoney(Number(this.props.newsData.price)) : translate('common:contact')}
                  </div>
                </Col>
                <Col lg={24} md={24} sm={24} xs={24}>
                {this.props.newsData.location ?
                <a className='post-location' href={`/tim-kiem?location=${this.props.newsData.location.slug}`} title={this.props.newsData.location.name}>
                  <div>{this.props.newsData && this.props.newsData.location ? this.props.newsData.location.name : ''}</div>
                  </a> : <Fragment></Fragment>}
                </Col>
                <Col lg={24} md={24} sm={24} xs={24}>
                  <div className='post-created-at'>{translate('common:postTime')}: {moment(new Date(this.props.newsData.createdAt)).format('DD/MM/YYYY HH:mm')}</div>
                </Col>
              </Row>
              <hr className='line-shadow' />
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>{translate('common:type-of-machine')}</div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>
                    {this.props.newsData.categoryId ?
                      <a href={`/tim-kiem?category=${this.props.newsData.categoryId.slug}`} title={this.props.newsData.categoryId.name}>
                        {this.props.newsData.categoryId.name}</a> : <Fragment></Fragment>}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>{translate('common:manufacturer')}</div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>
                    {this.props.newsData.brand ?
                      <a href={`/tim-kiem?brand=${this.props.newsData.brand.slug}`} title={this.props.newsData.brand.name}>
                        {this.props.newsData.brand.name}
                      </a> : <Fragment></Fragment>}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>Model</div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>
                    {this.props.newsData.model ?
                      <a href={`/tim-kiem?keyword=${this.props.newsData.model.name}`} title={this.props.newsData.model.name}>
                        {this.props.newsData.model.name}
                      </a> : <Fragment></Fragment>}

                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>{translate('common:status-of-machine')}</div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>
                    <a href={`/tim-kiem?state=${this.props.newsData.state}`} title={this.props.newsData.state ? translate(`common:${this.props.newsData.state.toLowerCase()}`) : ''}>
                      {this.props.newsData.state ? translate(`common:${this.props.newsData.state.toLowerCase()}`) : ''}
                    </a>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>{isSeller ? translate('common:year-of-manufacturer') : translate('common:rental-period')}</div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>
                    {isSeller ? this.props.newsData.year ? this.props.newsData.year : translate('common:unknown') : rentalPeriod}
                  </div>
                </Col>
              </Row>

              {/* <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>{translate('common:weight-range')}</div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>
                    <a href={`/tim-kiem?maxWeight=${this.props.newsData.weightRange.max}&minWeight=${this.props.newsData.weightRange.min}`} title={weightRange}>
                      {weightRange}
                    </a>
                  </div>
                </Col>
              </Row> */}

              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>{translate('common:active-hours')}</div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>
                    {this.props.newsData.usedHours ? `${this.props.newsData.usedHours} ${translate('common:hour')}` : ''}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>{translate('common:frame-numbers')}</div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>
                    {this.props.newsData.serialNo ? this.props.newsData.serialNo : ''}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <hr className='line-shadow' />

          <Row>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Button onClick={() => this.downloadAllImages()} className='button-download-image' type='primary' icon='download'>{translate('common:download-all-images')}</Button>
              <a href={`/xem-tat-ca-anh/${this.props.newsData._id}`} target='_blank' title={this.props.newsData.title}>
                <Button className='button-download-image' type='primary' icon='eye'>{translate('common:showAllImages')}</Button>
              </a>
            </Col>
            <Col className='view-and-follow' lg={12} md={12} sm={24} xs={24}>
              {this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id !== this.props.newsData.owner._id ?
                <Fragment>
                  <span className='view'>{this.props.starStatus === 'filled' ? translate('common:unfollow') : translate('common:follow')}</span>
                  <a onClick={() => this.props.changeFollowItemStatus(this.props.starStatus, this.props.newsData._id)}><Icon className='icon-star' type='star' theme={this.props.starStatus}></Icon></a>
                </Fragment>
                : null}
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={24} xs={24}>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24} className='view-and-follow-count'>
              <span>{translate('common:counter-follow')}: </span>
            <span> {this.props.newsData.counterFollow ? this.props.newsData.counterFollow : 0}</span>
              <br/>
              <span>{translate('common:counter-view')}: </span>
              <span>{this.props.newsData.counterView ? this.props.newsData.counterView : 0}</span>
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}

export default withNamespaces('common')(DetailMachine);
