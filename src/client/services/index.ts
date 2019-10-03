import 'firebase/auth';
import { ServiceProxy } from './service-proxies';
import { config } from '@client/config';
import fetch from 'isomorphic-fetch';

const getAuthHttp = (idToken: string) => {
  return {
    fetch: (url: any, option: any): Promise<Response> => {
      option.headers.Authorization = `${idToken}`;
      option.headers['Access-Control-Allow-Origin'] = '*';
      option.credentials = 'include';
      return fetch(url, option);
    },
  };
};

const getServiceProxy = (idToken = ''): ServiceProxy => {
  const httpOption = getAuthHttp(idToken);
  return new ServiceProxy(
    config.url.api,
    httpOption,
  );
};

export {
  getServiceProxy,
};
