"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var React = _interopRequireWildcard(require("react"));

require("./CityList.less");

var _i18n = require("../../../../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CityList = function CityList(props) {
  var translate = props.t;
  var renderCityList = props.provinces.map(function (value, index) {
    if (!props.seeMoreClicked) {
      if (index < 15) {
        return React.createElement(_col.default, {
          lg: 6,
          md: 8,
          sm: 12,
          xs: 12,
          key: index
        }, React.createElement("a", {
          href: "/tim-kiem?location=".concat(value.slug),
          target: "_blank",
          title: value.name
        }, React.createElement("span", {
          className: "city-item"
        }, value.name, " (", value.totalNews > 9999 ? '9999+' : value.totalNews, ")")));
      } else if (index === 15) {
        return React.createElement(_col.default, {
          lg: 6,
          md: 8,
          sm: 12,
          xs: 12,
          key: index
        }, React.createElement("span", {
          className: "see-more-button",
          onClick: props.onSeeMoreButtonClick
        }, translate('common:showMore')));
      } else {
        return null;
      }
    } else {
      return React.createElement(_col.default, {
        lg: 6,
        md: 8,
        sm: 12,
        xs: 12,
        key: index
      }, React.createElement("a", {
        href: "/tim-kiem?location=".concat(value.slug),
        target: "_blank",
        title: value.name
      }, React.createElement("span", {
        className: "city-item"
      }, value.name, " (", value.totalNews, ")")));
    }
  });
  return React.createElement("div", {
    className: "city-list"
  }, React.createElement("h3", null, translate('common:provinces')), React.createElement(_row.default, null, renderCityList));
};

var _default = (0, _i18n.withNamespaces)('common')(CityList);

exports.default = _default;
//# sourceMappingURL=CityList.js.map