import { appMenuConfigs, authMenuConfigs, statisticsMenuConfigs } from '@client/modules/admin/menuConfigs';

export const getMenuConfigs = () => {
  return [
    authMenuConfigs,
    appMenuConfigs,
    statisticsMenuConfigs,
  ];
};
