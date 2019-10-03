import { SearchFilters } from '@client/store';

export const generateSearchUrl = (filters: SearchFilters & {minWeight?: number; maxWeight?: number}) => {
  const filterValues: any = {};

  if (filters.keyword) {
    filterValues.keyword = filters.keyword;
  }
  if (Number(filters.minPrice)) {
    filterValues.minPrice = Number(filters.minPrice);
  }
  if (Number(filters.maxPrice)) {
    filterValues.maxPrice = Number(filters.maxPrice);
  }
  if (Number(filters.minWeight)) {
    filterValues.minWeight = Number(filters.minWeight);
  }
  if (Number(filters.maxWeight)) {
    filterValues.maxWeight = Number(filters.maxWeight);
  }
  if (filters.state) {
    filterValues.state = filters.state;
  }
  if (filters.newsType) {
    filterValues.newsType = filters.newsType;
  }
  if (filters.category) {
    filterValues.category = filters.category;
  }
  if (filters.brand) {
    filterValues.brand = filters.brand;
  }
  if (filters.model) {
    filterValues.model = filters.model;
  }
  if (filters.location) {
    filterValues.location = filters.location;
  }

  return Object.keys(filterValues).sort().map((item) => `${item}=${filterValues[item]}`).join('&');
};
