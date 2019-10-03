import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import profileModel from './models/profile/model';
import followModel from './models/follow/model';
import searchModel from './models/search/model';
import metadataModel from './models/metadata/model';

// loading plugin
const loadingOptions = {};
const loading = createLoadingPlugin(loadingOptions);

// init store
export const initStore = (initialState = {}) => {
  return init({
    models: {
      profileModel,
      followModel,
      searchModel,
      metadataModel,
    },
    redux: {
      initialState,
    },
    plugins: [loading],
  });
};
