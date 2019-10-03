import { MetadataState } from '@client/store';

export const generateFilters = (query: any, metadataState: MetadataState) => {
  const availableFilters: any = {};

  if (query.keyword) {
    availableFilters.keyword = query.keyword;
  }
  if (query.minPrice) {
    availableFilters.minPrice = query.minPrice;
  }
  if (query.maxPrice) {
    availableFilters.maxPrice = query.maxPrice;
  }
  if (query.minWeight) {
    availableFilters.weightRange = metadataState.weightRanges.filter((item: any) => item.min === Number(query.minWeight))[0]._id;
  }
  if (query.state) {
    availableFilters.state = query.state;
  }
  if (query.newsType) {
    availableFilters.newsType = query.newsType;
  }
  if (query.category) {
    availableFilters.category = metadataState.categories.filter((item: any) => item.slug === query.category)[0]._id;
  }
  if (query.brand) {
    availableFilters.brand = metadataState.brands.filter((item: any) => item.slug === query.brand)[0]._id;
  }
  if (query.location) {
    availableFilters.location = metadataState.provinces.filter((item: any) => item.slug === query.location)[0]._id;
  }

  return availableFilters;
};
