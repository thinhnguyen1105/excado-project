import React, { Component } from 'react';
import { Modal, Row, Col, Select } from 'antd';
import './NavLocation.less';
import { Province } from '@client/services/service-proxies';
import { SortChangePayload } from '@client/store';
import { withNamespaces } from '@client/i18n';
import { NavLocationAndFilterMobile } from '../components/NavLocationAndFilterMobile';

interface Props {
  loading: {
    handleSortChange: boolean;
    handleFiltersChange: boolean;
    getNextPage: boolean;
    getPrevPage: boolean;
  };
  provinces: Province[];
  selectedProvince?: string;
  sortBy: string;
  handleFiltersChange: (payload: { [key: string]: string | number }) => void;
  handleSortChange: (payload: SortChangePayload) => void;
  openModalFilter: () => void;
  updateSearchUrl?: (payload: { [key: string]: string | number }) => void;
  t: (key: string) => string;
}
interface State {
  provinceModalVisible: boolean;
}
const Option = Select.Option;
class NavLocation extends Component<Props, State> {
  state: State = {
    provinceModalVisible: false,
  };

  openProvinceModal = () => {
    this.setState({
      provinceModalVisible: true,
    });
  }

  closeProvinceModal = () => {
    this.setState({
      provinceModalVisible: false,
    });
  }

  render() {
    const translate = this.props.t;

    const totalNewsCount = this.props.provinces.reduce((accumulator, currentValue) => accumulator + Number(currentValue.totalNews), 0);
    let selectedProvinceInfo: Province = {} as any;
    if (this.props.selectedProvince) {
      selectedProvinceInfo = this.props.provinces.filter((item) => this.props.selectedProvince === item._id)[0];
    }

    return (
      <div>
        <Row>
          <Col xs={24} xl={0}>
            <NavLocationAndFilterMobile
              openModalFilter={this.props.openModalFilter}
              selectedProvinceInfo={selectedProvinceInfo}
              openModalSelectLocation={this.openProvinceModal}
              updateSearchUrl={this.props.updateSearchUrl}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={0} xl={24}>
            <Row className='nav-location'>
              <a onClick={this.openProvinceModal} style={{color: '#000'}}>{translate('common:select-location')}: &nbsp;</a>
              {selectedProvinceInfo && selectedProvinceInfo.name ? (
                <a className='location'style={{color: '#000'}}>{selectedProvinceInfo.name} ({selectedProvinceInfo.totalNews})</a>
              ) : (
                <a className='location'style={{color: '#000'}}>
                  {translate('common:nationwide')} ({totalNewsCount})
                </a>
              )}
              <a className='sort'>
                <Select
                  style={{ width: '220px' }}
                  defaultValue={this.props.sortBy}
                  onChange={(value) => this.props.handleSortChange({ sortBy: value })}
                >
                  <Option value='elasticsearchCreatedAt|desc'>{translate('common:newest-post')}</Option>
                  <Option value='year|asc'>{translate('common:year-asc')}</Option>
                  <Option value='year|desc'>{translate('common:year-desc')}</Option>
                  <Option value='price|asc'>{translate('common:price-from-low-to-high')}</Option>
                  <Option value='price|desc'>{translate('common:price-from-high-to-low')}</Option>
                </Select>
              </a>
            </Row>
          </Col>
        </Row>

        <Modal
          title={translate('common:select-location')}
          visible={this.state.provinceModalVisible}
          onCancel={this.closeProvinceModal}
          width={800}
          confirmLoading={this.props.loading.handleFiltersChange}
          okButtonProps={{
            style: {display: `none`},
          }}
        >
          <Row>
            <Col lg={6}>
              <a style={{ color: this.props.selectedProvince ? '#000000' : '#FFC500', display: 'inline-block', margin: '4px' }} onClick={() => {
                this.props.handleFiltersChange({
                  location: '',
                });
                this.setState({
                  provinceModalVisible: false,
                });
              }}>
                <span className='city-item'>{translate('common:nationwide')} ({totalNewsCount})</span>
              </a>
            </Col>
            {this.props.provinces.map((item) => (
              <Col lg={6} key={item._id}>
                <a style={{ color: this.props.selectedProvince === item._id ? '#FFC500' : '#000000', display: 'inline-block', margin: '4px' }} onClick={() => {
                  this.props.handleFiltersChange({
                    location: item._id,
                  });
                  if (this.props.updateSearchUrl) {
                    this.props.updateSearchUrl({
                      location: item.slug,
                    });
                  }
                  this.setState({
                    provinceModalVisible: false,
                  });
                }}>
                  <span className='city-item'>{item.name} ({item.totalNews})</span>
                </a>
              </Col>
            ))}
          </Row>
        </Modal>
      </div>
    );
  }
}

export default withNamespaces('common')(NavLocation);
