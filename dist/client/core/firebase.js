"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeFirebaseApp = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initializeFirebaseApp = function initializeFirebaseApp() {
  if (!_app.default.apps.length) {
    _app.default.initializeApp(_config.config.firebase);
  }

  _app.default.auth().setPersistence(_app.default.auth.Auth.Persistence.LOCAL) // tslint:disable-next-line:no-console
  .catch(function (error) {
    return console.log(error);
  });
};

exports.initializeFirebaseApp = initializeFirebaseApp;
//# sourceMappingURL=firebase.js.map