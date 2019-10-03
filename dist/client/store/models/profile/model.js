"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@rematch/core");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var profileModel = (0, _core.createModel)({
  state: {
    modal: {
      login: false,
      register: false
    },
    authUser: null
  },
  reducers: {
    openModal: function openModal(state, payload) {
      return _objectSpread({}, state, {
        modal: _objectSpread({}, state.modal, _defineProperty({}, payload.modalName, true))
      });
    },
    closeModal: function closeModal(state, payload) {
      return _objectSpread({}, state, {
        modal: _objectSpread({}, state.modal, _defineProperty({}, payload.modalName, false))
      });
    },
    changeModal: function changeModal(state) {
      return _objectSpread({}, state, {
        modal: {
          login: !state.modal.login,
          register: !state.modal.register
        }
      });
    },
    updateProfileInfo: function updateProfileInfo(state, payload) {
      return _objectSpread({}, state, {
        authUser: _objectSpread({}, state.authUser, payload)
      });
    }
  },
  effects: {}
});
var _default = profileModel;
exports.default = _default;
//# sourceMappingURL=model.js.map