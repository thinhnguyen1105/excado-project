import { createModel, ModelConfig } from '@rematch/core';
import { SearchState, FiltersChangePayload, OnFollowChangeOnSearchDetailScreenSuccess, OnFollowChangeOnHomeScreenSuccess, SortChangePayload, GetDataSuccessPayload } from './interface';
import { getServiceProxy } from '../../../services';
import { ElasticSearchOffsetResult } from '../../../services/service-proxies';
import firebase from 'firebase/app';
import 'firebase/auth';

const searchModel: ModelConfig<SearchState> = createModel({
  state: {
    filters: {
      keyword: undefined,
      state: undefined,
      priceType: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      minWeight: undefined,
      maxWeight: undefined,
      newsType: undefined,
      owner: undefined,
      shop: undefined,
      location: undefined,
      type: undefined,
      brand: undefined,
      model: undefined,
      category: undefined,
    },
    data: [],
    total: 0,
    sortBy: `elasticsearchCreatedAt|desc`,
    pageNumber: 1,
    pageSize: 16,
    statusNewsTypeSearch: 'SELL',
    statusTab: '1',
    isLoading: false,
    isLoadingDataSell: false,
    isLoadingDataBuy: false,
    isLoadingDataLease: false,
    isLoadingDataMostFollow: false,
    isLoadingDataNewMachine: false,
    suggestions: [],
    dataTotal: {
      dataSell: {
        data: [],
        after: undefined,
        before: undefined,
      },
      dataBuy: {
        data: [],
        before: undefined,
        after: undefined,
      },
      dataLease: {
        data: [],
        before: undefined,
        after: undefined,
      },
      dataMostFollow: {
        data: [],
        before: undefined,
        after: undefined,
      },
      dataNewMachine: {
        data: [],
        before: undefined,
        after: undefined,
      },
    },
  },
  reducers: {
    onFollowChangeOnSearchDetailScreenSuccess: (state: SearchState, payload: OnFollowChangeOnSearchDetailScreenSuccess): SearchState => {
      if (payload.starStatus === 'filled') {
        return {
          ...state,
          data: state.data.map((value) => {
            if (value._id === payload.newsId) {
              return {
                ...value,
                isFollowing: false,
              };
            } else {
              return value;
            }
          }),
        };
      } else {
        return {
          ...state,
          data: state.data.map((value) => {
            if (value._id === payload.newsId) {
              return {
                ...value,
                isFollowing: true,
              };
            } else {
              return value;
            }
          }),
        };
      }
    },
    onFollowChangeMostFollowNewsSuccess: (state: SearchState, payload: OnFollowChangeOnHomeScreenSuccess): SearchState => {
      if (payload.starStatus === 'filled') {
        return {
          ...state,
          dataTotal: {
            ...state.dataTotal,
            dataMostFollow: {
              ...state.dataTotal.dataMostFollow,
              data: state.dataTotal.dataMostFollow.data.map((value: any) => {
                if (value._id === payload.newsId) {
                  return {
                    ...value,
                    isFollowing: false,
                  };
                } else {
                  return value;
                }
              }),
            },
          },
        };
      } else {
        return {
          ...state,
          dataTotal: {
            ...state.dataTotal,
            dataMostFollow: {
              ...state.dataTotal.dataMostFollow,
              data: state.dataTotal.dataMostFollow.data.map((value: any) => {
                if (value._id === payload.newsId) {
                  return {
                    ...value,
                    isFollowing: true,
                  };
                } else {
                  return value;
                }
              }),
            },
          },
        };
      }
    },
    onFollowChangeOnHomeScreenSuccess: (state: SearchState, payload: OnFollowChangeOnHomeScreenSuccess): SearchState => {
      if (payload.starStatus === 'filled') {
        switch (state.statusTab) {
          case '1':
            return {
              ...state,
              dataTotal: {
                ...state.dataTotal,
                dataSell: {
                  ...state.dataTotal.dataSell,
                  data: state.dataTotal.dataSell.data.map((value: any) => {
                    if (value._id === payload.newsId) {
                      return {
                        ...value,
                        isFollowing: false,
                      };
                    } else {
                      return value;
                    }
                  }),
                },
              },
            };
          case '2':
            return {
              ...state,
              dataTotal: {
                ...state.dataTotal,
                dataBuy: {
                  ...state.dataTotal.dataBuy,
                  data: state.dataTotal.dataBuy.data.map((value: any) => {
                    if (value._id === payload.newsId) {
                      return {
                        ...value,
                        isFollowing: false,
                      };
                    } else {
                      return value;
                    }
                  }),
                },
              },
            };
          case '3':
            return {
              ...state,
              dataTotal: {
                ...state.dataTotal,
                dataLease: {
                  ...state.dataTotal.dataLease,
                  data: state.dataTotal.dataLease.data.map((value: any) => {
                    if (value._id === payload.newsId) {
                      return {
                        ...value,
                        isFollowing: false,
                      };
                    } else {
                      return value;
                    }
                  }),
                },
              },
            };
          default:
            return {
              ...state,
            };
        }
      } else {
        switch (state.statusTab) {
          case '1':
            return {
              ...state,
              dataTotal: {
                ...state.dataTotal,
                dataSell: {
                  ...state.dataTotal.dataSell,
                  data: state.dataTotal.dataSell.data.map((value: any) => {
                    if (value._id === payload.newsId) {
                      return {
                        ...value,
                        isFollowing: true,
                      };
                    } else {
                      return value;
                    }
                  }),
                },
              },
            };
          case '2':
            return {
              ...state,
              dataTotal: {
                ...state.dataTotal,
                dataBuy: {
                  ...state.dataTotal.dataBuy,
                  data: state.dataTotal.dataBuy.data.map((value: any) => {
                    if (value._id === payload.newsId) {
                      return {
                        ...value,
                        isFollowing: true,
                      };
                    } else {
                      return value;
                    }
                  }),
                },
              },
            };
          case '3':
            return {
              ...state,
              dataTotal: {
                ...state.dataTotal,
                dataLease: {
                  ...state.dataTotal.dataLease,
                  data: state.dataTotal.dataLease.data.map((value: any) => {
                    if (value._id === payload.newsId) {
                      return {
                        ...value,
                        isFollowing: true,
                      };
                    } else {
                      return value;
                    }
                  }),
                },
              },
            };
          default:
            return {
              ...state,
            };
        }
      }
    },
    activeLoading: (state: SearchState, payload: any): SearchState => {
      return {
        ...state,
        ...payload,
      };
    },
    updateFilters: (state: SearchState, payload: FiltersChangePayload): SearchState => {
      return {
        ...state,
        pageNumber: 1,
        pageSize: 16,
        filters: {
          ...state.filters,
          ...payload,
        },
      };
    },
    changeTabsOnHomePage: (state: SearchState, payload: string): SearchState => {
      return {
        ...state,
        statusTab: payload,
      };
    },
    changeStatusNewsTypeSearch: (state: SearchState, payload: string): SearchState => {
      return {
        ...state,
        statusNewsTypeSearch: payload,
      };
    },
    updateSort: (state: SearchState, payload: SortChangePayload): SearchState => {
      return {
        ...state,
        sortBy: payload.sortBy,
        pageNumber: 1,
        pageSize: 16,
      };
    },
    getDataSuccess: (state: SearchState, payload: ElasticSearchOffsetResult) => {
      return {
        ...state,
        data: payload.data,
        total: payload.total,
        isLoading: false,
      };
    },
    getDataInTabsSuccess: (state: SearchState, payload: GetDataSuccessPayload): SearchState => {
      switch (payload.newsType) {
        case 'SELL':
          return {
            ...state,
            dataTotal: {
              ...state.dataTotal,
              dataSell: payload.result,
            },
            isLoadingDataSell: false,
          };
          break;
        case 'BUY':
          return {
            ...state,
            dataTotal: {
              ...state.dataTotal,
              dataBuy: payload.result,
            },
            isLoadingDataBuy: false,
          };
          break;
        case 'LEASE':
          return {
            ...state,
            dataTotal: {
              ...state.dataTotal,
              dataLease: payload.result,
            },
            isLoadingDataLease: false,
          };
          break;
        default:
          return {
            ...state,
          };
      }
    },
    getDataMostFollowSuccess: (state: SearchState, payload: any) => {
      return {
        ...state,
        dataTotal: {
          ...state.dataTotal,
          dataMostFollow: payload,
        },
        isLoadingDataMostFollow: false,
      };
    },
    getDataNewMachineSuccess: (state: SearchState, payload: any) => {
      return {
        ...state,
        dataTotal: {
          ...state.dataTotal,
          dataNewMachine: payload,
        },
        isLoadingDataNewMachine: false,
      };
    },
    handleGetData: (state: SearchState, payload: {pageNumber: number; pageSize: number}) => {
      return {
        ...state,
        ...payload,
      };
    },
    searchSuggestionsSuccess: (state: SearchState, payload: {suggestions: string[]}) => {
      return {
        ...state,
        suggestions: payload.suggestions,
      };
    },
  },
  effects: {
    async searchSuggestions(payload: {keyword: string}, _rootState: any): Promise<void> {
      try {
        if (payload.keyword) {
          const idToken = firebase.auth().currentUser ? await firebase.auth().currentUser!.getIdToken() : '';
          const serviceProxy = getServiceProxy(idToken);
          const suggestionsResult = await serviceProxy.searchSuggestions(payload.keyword);

          this.searchSuggestionsSuccess(suggestionsResult);
        } else {
          this.searchSuggestionsSuccess({suggestions: []});
        }
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
      }
    },
    async handleFiltersChange(payload: FiltersChangePayload, rootState: any): Promise<void> {
      try {
        const searchState = rootState.searchModel;
        const newFilters = {
          keyword: payload.keyword || searchState.filters.keyword,
          state: typeof payload.state === 'string' ? payload.state : searchState.filters.state,
          priceType: typeof payload.priceType === 'string' ? payload.priceType : searchState.filters.priceType,
          minPrice: typeof payload.minPrice === 'string' || typeof payload.minPrice === 'number' ? Number(payload.minPrice) > 0 ? Number(payload.minPrice) : undefined : searchState.filters.minPrice,
          maxPrice: typeof payload.maxPrice === 'string' || typeof payload.maxPrice === 'number' ? Number(payload.maxPrice) > 0 ? Number(payload.maxPrice) : undefined : searchState.filters.maxPrice,
          weightRange: typeof payload.weightRange === 'string' ? payload.weightRange : searchState.filters.weightRange,
          newsType: typeof payload.newsType === 'string' ? payload.newsType : searchState.filters.newsType,
          category: typeof payload.category === 'string' ? payload.category : searchState.filters.category,
          searchState: payload.owner || searchState.filters.owner,
          shop: payload.shop || searchState.filters.shop,
          location: typeof payload.location === 'string' ? payload.location : searchState.filters.location,
          type: typeof payload.type === 'string' ? payload.type : searchState.filters.type,
          brand: typeof payload.brand === 'string' ? payload.brand : searchState.filters.brand,
          model: typeof payload.model === 'string' ? payload.model : searchState.filters.model,
        };
        this.updateFilters(newFilters);
        const serviceProxy = getServiceProxy();

        const result = await serviceProxy.searchElasticsearchOffsetPaging(
          payload.keyword || searchState.filters.keyword,
          typeof payload.state === 'string' ? payload.state : searchState.filters.state,
          typeof payload.state === 'string' ? payload.priceType : searchState.filters.priceType,
          typeof payload.minPrice === 'string' || typeof payload.minPrice === 'number' ? Number(payload.minPrice) > 0 ? Number(payload.minPrice) : undefined : searchState.filters.minPrice,
          typeof payload.maxPrice === 'string' || typeof payload.maxPrice === 'number' ? Number(payload.maxPrice) > 0 ? Number(payload.maxPrice) : undefined : searchState.filters.maxPrice,
          typeof payload.weightRange === 'string' ? payload.weightRange : searchState.filters.weightRange,
          undefined,
          typeof payload.newsType === 'string' ? payload.newsType : searchState.filters.newsType,
          typeof payload.category === 'string' ? payload.category : searchState.filters.category,
          payload.owner || searchState.filters.owner,
          payload.shop || searchState.filters.shop,
          typeof payload.location === 'string' ? payload.location : searchState.filters.location,
          typeof payload.type === 'string' ? payload.type : searchState.filters.type,
          typeof payload.brand === 'string' ? payload.brand : searchState.filters.brand,
          typeof payload.model === 'string' ? payload.model : searchState.filters.model,
          searchState.sortBy,
          1,
          16,
        );
        this.getDataSuccess(result);
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
      }
    },
    async handleSortChange(payload: SortChangePayload, rootState: any): Promise<void> {
      try {
        this.updateSort(payload);

        const searchState = rootState.searchModel;
        const serviceProxy = getServiceProxy();
        const result = await serviceProxy.searchElasticsearchOffsetPaging(
          searchState.filters.keyword,
          searchState.filters.state,
          searchState.filters.priceType,
          searchState.filters.minPrice,
          searchState.filters.maxPrice,
          searchState.filters.weightRange,
          undefined,
          searchState.filters.newsType,
          searchState.filters.category,
          searchState.filters.owner,
          searchState.filters.shop,
          searchState.filters.location,
          searchState.filters.type,
          searchState.filters.brand,
          searchState.filters.model,
          payload.sortBy,
          1,
          16,
        );
        this.getDataSuccess(result);
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
        // message.error(JSON.parse(error.response).message);
      }
    },
    async getData(payload: {pageNumber: number; pageSize: number}, rootState: any): Promise<void> {
      try {
        this.handleGetData(payload);

        const searchState = rootState.searchModel;
        const serviceProxy = getServiceProxy();
        const result = await serviceProxy.searchElasticsearchOffsetPaging(
          searchState.filters.keyword,
          searchState.filters.state,
          searchState.filters.priceType,
          searchState.filters.minPrice,
          searchState.filters.maxPrice,
          searchState.filters.weightRange,
          undefined,
          searchState.filters.newsType,
          searchState.filters.category,
          searchState.filters.owner,
          searchState.filters.shop,
          searchState.filters.location,
          searchState.filters.type,
          searchState.filters.brand,
          searchState.filters.model,
          searchState.sortBy,
          payload.pageNumber,
          payload.pageSize,
        );

        this.getDataSuccess(result);
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
        // message.error(JSON.parse(error.response).message);
      }
    },
    async getNextPage(_payload, rootState: any): Promise<void> {
      try {
        const searchState = rootState.searchModel;
        const serviceProxy = getServiceProxy();
        const result = await serviceProxy.searchElasticsearchOffsetPaging(
          searchState.filters.keyword,
          searchState.filters.state,
          searchState.filters.priceType,
          searchState.filters.minPrice,
          searchState.filters.maxPrice,
          searchState.filters.weightRange,
          undefined,
          searchState.filters.newsType,
          searchState.filters.category,
          searchState.filters.owner,
          searchState.filters.shop,
          searchState.filters.location,
          searchState.filters.type,
          searchState.filters.brand,
          searchState.filters.model,
          searchState.sortBy,
          searchState.pageNumber,
          searchState.pageSize,
        );

        this.getDataSuccess(result);
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
        // message.error(JSON.parse(error.response).message);
      }
    },
    async getPrevPage(_payload, rootState: any): Promise<void> {
      try {
        const searchState = rootState.searchModel;
        const serviceProxy = getServiceProxy();
        const result = await serviceProxy.searchElasticsearchOffsetPaging(
          searchState.filters.keyword,
          searchState.filters.state,
          searchState.filters.priceType,
          searchState.filters.minPrice,
          searchState.filters.maxPrice,
          searchState.filters.weightRange,
          undefined,
          searchState.filters.newsType,
          searchState.filters.category,
          searchState.filters.owner,
          searchState.filters.shop,
          searchState.filters.location,
          searchState.filters.type,
          searchState.filters.brand,
          searchState.filters.model,
          searchState.sortBy,
          searchState.pageNumber,
          searchState.pageSize,
        );
        this.getDataSuccess(result);
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
        // message.error(JSON.parse(error.response).message);
      }
    },
  },
});

export default searchModel;
