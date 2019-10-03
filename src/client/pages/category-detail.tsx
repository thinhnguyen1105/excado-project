import React from 'react';
import { withRematch, initStore, ProfileState, ProfileReducers, ProfileEffects } from '../store';
import { withNamespaces } from '../i18n';
import { NextContext } from 'next';
import { Category, Brand } from '../services/service-proxies';
import CategoryDetailScreen from '../modules/machine-news/screens/CategoryDetailScreen/CategoryDetailScreen';
import { getServiceProxy } from '../services';
import startCase from 'lodash/startCase';

interface Props {
  categoryName: string;
  topBrands: Brand[];
  categoryDetail: Category;
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  updateFilters: (payload: {[key: string]: string|number}) => void;
}
interface State {}
class CategoryDetail extends React.PureComponent<Props, State> {
  static async getInitialProps(context: NextContext) {
    const categorySlug = context.asPath.split('/')[context.asPath.split('/').length - 1];
    const serviceProxy = getServiceProxy();
    const [categoryDetail, topBrands] = await Promise.all([
      serviceProxy.findCategoryDetail(categorySlug),
      serviceProxy.findTopBrands(),
    ]);

    return {
      namespacesRequired: ['common', 'brand-detail'],
      categoryDetail,
      topBrands: topBrands.data,
      categoryName: startCase(categorySlug),
    };
  }

  render () {
    return (
      <CategoryDetailScreen
        categoryName={this.props.categoryName}
        categoryDetail={this.props.categoryDetail}
        topBrands={this.props.topBrands}
        searchKeyword={this.props.searchKeyword}
        profileState={this.props.profileState}
        profileReducers={this.props.profileReducers}
        updateFilters={this.props.updateFilters}
      />
    );
  }
}

const mapState = (rootState: any) => {
  return {
    profileState: rootState.profileModel,
    searchKeyword: rootState.searchModel.filters.keyword,
    commonKeywords: rootState.metadataModel.commonKeywords,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    profileReducers: rootReducer.profileModel,
    updateFilters: rootReducer.searchModel.updateFilters,
  };
};
export default withRematch(initStore, mapState, mapDispatch)(withNamespaces('category-detail')(CategoryDetail));
