"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

var _react = _interopRequireWildcard(require("react"));

require("./SearchBar.less");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = _input.default.Search;

var SearchBar = function SearchBar(props) {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Search, {
    placeholder: props.t('common:shop-search-placeholder'),
    enterButton: props.t('common:shop-search-button'),
    className: "store-search-bar",
    value: props.searchKeywords,
    onChange: function onChange(e) {
      return props.handleSearchChange({
        keyword: e.target.value
      });
    },
    onSearch: function onSearch() {
      return props.handleFiltersChange({});
    }
  }));
};

var _default = SearchBar;
exports.default = _default;
//# sourceMappingURL=SearchBar.js.map