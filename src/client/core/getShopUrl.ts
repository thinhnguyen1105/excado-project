import { config } from '@client/config';

export const getShopUrl = (shopDomain: string) => {
  return config.url.shop.replace('shopDomain', shopDomain);
};
