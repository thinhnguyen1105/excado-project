"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withNamespaces = exports.changeLanguage = exports.appWithTranslation = exports.i18n = void 0;

var _nextI18next = _interopRequireDefault(require("next-i18next"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var i18n = new _nextI18next.default({
  defaultLanguage: _config.config.i18n.defaultLang,
  otherLanguages: [_config.config.i18n.EN],
  localePath: "".concat(process.env.NODE_ENV !== 'production' ? 'src' : 'dist', "/client/static/locales"),
  detection: {
    cookieDomain: _config.config.cookies.domain
  }
});
exports.i18n = i18n;
var appWithTranslation = i18n.appWithTranslation;
exports.appWithTranslation = appWithTranslation;

var changeLanguage = function changeLanguage(lang) {
  i18n.i18n.changeLanguage(lang);
};

exports.changeLanguage = changeLanguage;
var withNamespaces = i18n.withNamespaces;
exports.withNamespaces = withNamespaces;
//# sourceMappingURL=i18n.js.map