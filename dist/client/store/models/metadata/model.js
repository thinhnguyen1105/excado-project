"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@rematch/core");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var metadataModel = (0, _core.createModel)({
  state: {
    loaded: false,
    brands: [],
    categories: [],
    models: [],
    provinces: [],
    weightRanges: [],
    rentalPeriods: [],
    state: [],
    commonKeywords: []
  },
  reducers: {
    loadMetadataSuccess: function loadMetadataSuccess(state) {
      return _objectSpread({}, state);
    },
    addNewModel: function addNewModel(state, payload) {
      return _objectSpread({}, state, {
        models: [].concat(_toConsumableArray(state.models), [payload])
      });
    }
  },
  effects: {}
});
var _default = metadataModel;
exports.default = _default;
//# sourceMappingURL=model.js.map