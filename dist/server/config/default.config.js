"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _override = require("./override.config");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var config = _objectSpread({
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
      'client_x509_cert_url': ''
    },
    databaseURL: ''
  },
  elasticsearch: {
    host: 'localhost:9200'
  },
  upload: {
    allowImageExt: /\.(gif|jpg|jpeg|tiff|png|JPG|PNG|JPEG|GIF|TIFF)$/,
    allowExcelExt: /\.(csv|xls|xlsm|xlsx|xml|xlsb|xlam)$/,
    shopIntroImageNumber: 10
  },
  regex: {
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
    email: /^[a-z][a-z0-9_\.]{5,40}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
    phone: /^([+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*){8,}$/
  },
  cache: {
    ttl: 30 * 60,
    // seconds
    checkperiod: 30 * 60 // seconds

  }
}, _override.overrideConfig);

exports.config = config;
//# sourceMappingURL=default.config.js.map