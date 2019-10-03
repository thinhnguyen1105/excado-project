"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminSearchbar = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

var _react = _interopRequireDefault(require("react"));

var _i18n = require("../../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdminSearchbar = (0, _i18n.withNamespaces)('common')(function (props) {
  var translate = props.t;
  return _react.default.createElement(_row.default, {
    type: "flex",
    style: {
      marginBottom: '24px'
    },
    justify: "space-between"
  }, _react.default.createElement(_col.default, {
    xs: 12,
    xl: 8
  }, props.showSearch && _react.default.createElement(_input.default.Search, {
    enterButton: true,
    placeholder: props.placeholder,
    onChange: function onChange(e) {
      return props.handleSearchChange(e.target.value);
    },
    onSearch: function onSearch(value) {
      return props.handleSearch(value);
    }
  })), _react.default.createElement(_col.default, {
    xs: 12,
    xl: 16,
    style: {
      textAlign: 'right'
    }
  }, props.hasCreate && _react.default.createElement(_button.default, {
    type: "primary",
    onClick: props.onCreateClick
  }, translate('common:create'))));
});
exports.AdminSearchbar = AdminSearchbar;
//# sourceMappingURL=AdminSearchbar.js.map