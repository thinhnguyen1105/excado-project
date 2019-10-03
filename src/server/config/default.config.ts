import { overrideConfig } from './override.config';

export const config = {
  appName: '',
  web: {},
  database: {},
  logger: {},
  storage: {},
  firebase: {
    serviceAccount: {
      'type': 'service_account',
      'project_id': '',
      'private_key_id': '',
      'private_key': '',
      'client_email': '',
      'client_id': '',
      'auth_uri': '',
      'token_uri': '',
      'auth_provider_x509_cert_url': '',
      'client_x509_cert_url': '',
    },
    databaseURL: '',
  },
  elasticsearch: {
    host: '',
  },
  upload: {
    allowImageExt: /\.(gif|jpg|jpeg|tiff|png|JPG|PNG|JPEG|GIF|TIFF)$/,
    allowExcelExt: /\.(csv|xls|xlsm|xlsx|xml|xlsb|xlam)$/,
    shopIntroImageNumber: 10,
  },
  regex: {
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
    email: /^[a-z][a-z0-9_\.]{0,40}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
    phone: /^([+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*){8,}$/,
    identityNumber: /^[0-9]*$/,
    url: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
  },
  cache: {
    ttl: 30 * 60, // seconds
    checkperiod: 30 * 60, // seconds
  },
  ...overrideConfig,
};
