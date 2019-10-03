"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = void 0;

var _core = require("@rematch/core");

var _loading = _interopRequireDefault(require("@rematch/loading"));

var _model = _interopRequireDefault(require("./models/profile/model"));

var _model2 = _interopRequireDefault(require("./models/follow/model"));

var _model3 = _interopRequireDefault(require("./models/search/model"));

var _model4 = _interopRequireDefault(require("./models/metadata/model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// loading plugin
var loadingOptions = {};
var loading = (0, _loading.default)(loadingOptions); // init store

var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _core.init)({
    models: {
      profileModel: _model.default,
      followModel: _model2.default,
      searchModel: _model3.default,
      metadataModel: _model4.default
    },
    redux: {
      initialState: initialState
    },
    plugins: [loading]
  });
};

exports.initStore = initStore;
//# sourceMappingURL=store.js.map