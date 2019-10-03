import { createModel, ModelConfig } from '@rematch/core';
import { MetadataState } from './interface';
import { Model } from '@client/services/service-proxies';

const metadataModel: ModelConfig<MetadataState> = createModel({
  state: {
    loaded: false,
    brands: [],
    categories: [],
    models: [],
    provinces: [],
    weightRanges: [],
    rentalPeriods: [],
    state: [],
    commonKeywords: [],
  },
  reducers: {
    loadMetadataSuccess: (state: MetadataState): MetadataState => {
      return {
        ...state,
      };
    },
    addNewModel: (state: MetadataState, payload: Model): MetadataState => {
      return {
        ...state,
        models: [...state.models, payload],
      };
    },
  },
  effects: {},
});

export default metadataModel;
