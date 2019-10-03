"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = void 0;

var _bunyan = _interopRequireDefault(require("bunyan"));

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var logger = _bunyan.default.createLogger({
  name: _config.config.appName,
  streams: _config.config.logger.streams.map(function (streamConfig) {
    return streamConfig.stream === 'process.stdout' ? _objectSpread({}, streamConfig, {
      stream: process.stdout
    }) : streamConfig;
  })
});

exports.logger = logger;
//# sourceMappingURL=index.js.map