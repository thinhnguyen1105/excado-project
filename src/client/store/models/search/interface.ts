import { ElasticSearchResult, ElasticSearchItemResult } from '../../../services/service-proxies';

export interface FiltersChangePayload {
  [key: string]: any;
}

export interface SearchFilters {
  keyword?: string;
  state?: string;
  category?: string;
  priceType?: string;
  minPrice?: number;
  maxPrice?: number;
  weightRange?: string;
  newsType?: string;
  owner?: string;
  shop?: string;
  location?: string;
  type?: string;
  brand?: string;
  model?: string;
}

export interface SearchState {
  filters: SearchFilters;
  data: ElasticSearchItemResult[];
  total: number;
  sortBy: string; // default: createdAt|desc
  pageNumber: number;
  pageSize: number;
  statusNewsTypeSearch: string;
  statusTab: string;
  isLoading: boolean;
  isLoadingDataSell: boolean;
  isLoadingDataBuy: boolean;
  isLoadingDataLease: boolean;
  isLoadingDataMostFollow: boolean;
  isLoadingDataNewMachine: boolean;
  suggestions: string[];
  dataTotal: {
    dataSell: DataResult,
    dataBuy: DataResult,
    dataLease: DataResult,
    dataMostFollow: DataResult,
    dataNewMachine: DataResult,
  };
}

export interface DataResult {
  data: any[];
  before?: string;
  after?: string;
}

export interface OnFollowChangeOnSearchDetailScreenSuccess {
  starStatus: string;
  newsId: string;
}

export interface OnFollowChangeOnHomeScreenSuccess {
  starStatus: string;
  newsId: string;
}

export interface SortChangePayload {
  sortBy: string;
}

export interface GetDataSuccessPayload {
  result: ElasticSearchResult;
  newsType: string;
}

export interface SearchReducers {
  updateFilters: (payload: FiltersChangePayload) => void;
  updateSort: (payload: SortChangePayload) => void;
  onFollowChangeOnSearchDetailScreenSuccess: (payload: OnFollowChangeOnSearchDetailScreenSuccess) => void;
  onFollowChangeOnHomeScreenSuccess: (payload: OnFollowChangeOnHomeScreenSuccess) => void;
  onFollowChangeMostFollowNewsSuccess: (payload: OnFollowChangeOnHomeScreenSuccess) => void;
  changeTabsOnHomePage: (payload: string) => void;
  changeStatusNewsTypeSearch: (payload: string) => void;
  getDataInTabsSuccess: (payload: GetDataSuccessPayload) => void;
  getDataNewMachineSuccess: (payload: any) => void;
  getDataBuySuccess: (payload: any) => void;
  getDataRentSuccess: (payload: any) => void;
  getDataMostFollowSuccess: (payload: any) => void;
  activeLoading: (payload: any) => void;
}

export interface SearchEffects {
  handleFiltersChange: () => void;
  handleSortChange: () => void;
  getNextPage: () => void;
  getPrevPage: () => void;
}
