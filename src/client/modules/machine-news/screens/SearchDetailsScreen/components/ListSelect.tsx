import * as React from 'react';
import { Row, Col, Select, message, Spin } from 'antd';
import debounce from 'lodash/debounce';
import './ListSelect.less';
import { Category, Brand } from '../../../../../services/service-proxies';
import { PriceRange } from '../../../../../store';
import { formatMoney, priceRanges, newsStates, newsTypes } from '../../../../../core';
import { getServiceProxy } from '@client/services';
import slugify from 'slugify';
import { withNamespaces } from '@client/i18n';
const Option = Select.Option;
const Fragment = React.Fragment;

interface Props {
  categories: Category[];
  brands: Brand[];
  weightRanges: PriceRange[];
  selectedBrand?: string;
  selectedCategory?: string;
  selectedState?: string;
  selectedNewsType?: string;
  selectedPrice?: string;
  selectedWeightRange?: string;
  updateSearchUrl?: (payload: { [key: string]: string | number }) => void;
  handleFiltersChange: (payload: { [key: string]: string | number }) => void;
  updateBrands?: (brands: Brand[]) => void;
  t: (key: string) => string;
}
interface State {
  brands: Brand[];
  loadingBrands: boolean;
}

class BaseListSelect extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.getBrands = debounce(this.getBrands, 500);
  }

  state: State = {
    brands: this.props.brands,
    loadingBrands: false,
  };

  getBrands = async (value: string) => {
    this.setState({
      loadingBrands: true,
    });

    try {
      const serviceProxy = getServiceProxy();
      const brands = await serviceProxy.findBrands(
        value,
        20,
        'slug|asc',
        undefined,
        undefined,
      );

      this.setState({
        loadingBrands: false,
        brands: brands.data,
      });
      if (this.props.updateBrands) {
        this.props.updateBrands(brands.data);
      }
    } catch (error) {
      message.error(error.message);
      this.setState({
        loadingBrands: false,
      });
    }
  }

  render() {
    const translate = this.props.t;

    return (
      <Fragment>
        <Row gutter={16}>
          <Col lg={8} md={8} xs={24} sm={24}>
            <Select className='select-box'
              showSearch={true}
              filterOption={(inputValue, option) => slugify((option.props.children as any).toLowerCase()).indexOf(slugify(inputValue.toLocaleLowerCase())) === 0}
              value={this.props.selectedCategory ? this.props.selectedCategory : translate('common:type-of-machine')}
              onSelect={(value, option) => {
                this.props.handleFiltersChange({
                  category: value,
                });
                if (this.props.updateSearchUrl) {
                  this.props.updateSearchUrl({
                    category: option.props['data-slug'],
                  });
                }
              }}
            >
              <Option data-slug='' value=''>{translate('common:all')}</Option>
              {this.props.categories.map((item) =>
                <Option data-slug={item.slug} value={item._id} key={item._id}>{item.name}</Option>,
              )}
            </Select>

            <Select className='select-box'
              value={this.props.selectedPrice ? this.props.selectedPrice : translate('common:range-of-price')}
              onSelect={(value: any, option) => {
              this.props.handleFiltersChange({
                minPrice: value.split('-')[0],
                maxPrice: value.split('-')[1],
              });
              if (this.props.updateSearchUrl) {
                this.props.updateSearchUrl({
                  minPrice: option.props['data-minprice'],
                  maxPrice: option.props['data-maxprice'],
                });
              }
            }}
            >
              <Option data-minprice={0} data-maxprice={0} value='0-0'>{translate('common:all')}</Option>
              {priceRanges.map((item: any, index: any) =>
                <Option data-minprice={item.min} data-maxprice={item.max} value={`${item.min}-${item.max}`} key={`${index}`} >
                  {`${formatMoney(item.min)} - ${formatMoney(item.max)}`}
                </Option>,
              )}
            </Select>
          </Col>

          <Col lg={8} md={8} xs={24} sm={24}>
            <Select className='select-box'
              value={this.props.selectedWeightRange ? this.props.selectedWeightRange : translate('common:weight-range')}
              onSelect={(value, option) => {
                this.props.handleFiltersChange({
                  weightRange: value,
                });
                if (this.props.updateSearchUrl) {
                  this.props.updateSearchUrl({
                    minWeight: option.props['data-minweight'],
                    maxWeight: option.props['data-maxweight'],
                  });
                }
              }}
            >
              <Option data-minweight={0} data-maxweight={0} value=''>{translate('common:all')}</Option>
              {this.props.weightRanges.sort((a, b) => a.min - b.min).map((item: any, index: any) =>
                <Option data-minweight={item.min} data-maxweight={item.max} value={item._id} key={`${index}`} >
                  {item.max  ? `${item.min} ${translate('common:ton')} - ${item.max} ${translate('common:ton')}` : `${translate('common:more-than')} ${item.min} ${translate('common:ton')}`}
                </Option>,
              )}
            </Select>

            <Select
              value={this.props.selectedBrand ? this.props.selectedBrand : translate('common:manufacturer')}
              className='select-box'
              notFoundContent={this.state.loadingBrands ? <div style={{textAlign: 'center'}}><Spin size='small' /></div> : null}
              showSearch={true}
              filterOption={false}
              onSearch={this.getBrands}
              onSelect={(value, option) => {
                this.props.handleFiltersChange({
                  brand: value,
                });
                if (this.props.updateSearchUrl) {
                  this.props.updateSearchUrl({
                    brand: option.props['data-slug'],
                  });
                }
              }}
            >
              <Option data-slug='' value=''>{translate('common:all')}</Option>
              {this.state.brands.slice(0, 10).map((item) =>
                <Option data-slug={item.slug} value={item._id} key={item._id} >{item.name}</Option>,
              )}
            </Select>
          </Col>

          <Col lg={8} md={8} xs={24} sm={24}>
            <Select
              className='select-box'
              value={this.props.selectedState ? this.props.selectedState : translate('common:status-of-machine')}
              onSelect={(value, option) => {
                this.props.handleFiltersChange({
                  state: value,
                });
                if (this.props.updateSearchUrl) {
                  this.props.updateSearchUrl({
                    state: option.props['data-slug'],
                  });
                }
              }}
            >
              <Option data-slug='' value=''>{translate('common:all')}</Option>
              {newsStates.map((item, index) =>
                <Option data-slug={item.value} value={item.value} key={`${index}`} >{translate(`common:${item.value.toLowerCase()}`)}</Option>,
              )}
            </Select>

            <Select
              className='select-box'
              value={this.props.selectedNewsType ? this.props.selectedNewsType : translate('common:type-of-post')}
              onSelect={(value, option) => {
                this.props.handleFiltersChange({
                  newsType: value,
                });
                if (this.props.updateSearchUrl) {
                  this.props.updateSearchUrl({
                    newsType: option.props['data-slug'],
                  });
                }
              }}
            >
              <Option data-slug={''} value=''>{translate('common:all')}</Option>
              {newsTypes.map((item, index) =>
                <Option data-slug={item.value} value={item.value} key={`${index}`} >{this.props.t(`common:${item.value.toLowerCase()}`)}</Option>,
              )}
            </Select>
          </Col>
        </Row>
      </Fragment >
    );
  }
}

export const ListSelect = withNamespaces('common')(BaseListSelect);
