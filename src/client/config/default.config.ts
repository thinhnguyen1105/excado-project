import { overrideConfig } from './override.config';

export const config = {
  appName: '',
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
  },
  url: {
    main: '',
    api: '',
    shop: '',
  },
  i18n: {
    VN: 'vn',
    EN: 'en',
    defaultLang: 'vn',
  },
  upload: {
    allowImageExt: /\.(gif|jpg|jpeg|tiff|png|JPG|PNG|JPEG|GIF|TIFF)$/,
    allowExcelExt: /\.(csv|xls|xlsm|xlsx|xml|xlsb|xlam)$/,
    shopIntroImageNumber: 10,
  },
  googleMaps: {
    apiKey: `AIzaSyBR6ybAG3UbJUFCq9bctufwXLSXbJiPMpc`,
  },
  cookies: {
    domain: '',
    maxAge: 0,
  },
  regex: {
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
    email: /^[a-z][a-z0-9_\.]{0,40}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
    phone: /^([+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*){8,}$/,
    domain: /^(?=.*[a-z0-9-])[a-z0-9-\d]{3,}$/,
    identityNumber: /^[0-9]*$/,
    url: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
  },
  ...overrideConfig,
};
