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

require("./MachineList.less");

var _i18n = require("../../../../../i18n");

var _reactDeviceDetect = require("react-device-detect");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fragment = React.Fragment;

var MachineList = function MachineList(props) {
  var renderMachineList = props.categories.map(function (category, index) {
    if (!props.seeMoreTotalMachineClicked) {
      if (_reactDeviceDetect.isMobile) {
        if (index < 6) {
          return React.createElement(_col.default, {
            lg: 4,
            md: 8,
            sm: 8,
            xs: 8,
            className: "machine-item",
            key: index,
            style: {
              textAlign: 'center'
            }
          }, React.createElement("a", {
            onClick: function onClick() {
              window.location.href = "/chung-loai-may/".concat(category.slug);
            },
            title: category.name
          }, React.createElement("img", {
            src: category.imageUrl,
            width: "80%"
          }), React.createElement("br", null), React.createElement("span", {
            className: "name-machine"
          }, category.name, " (", category.totalNews, ")")));
        } else {
          return null;
        }
      } else {
        if (index < 12) {
          return React.createElement(_col.default, {
            lg: 4,
            md: 8,
            sm: 8,
            xs: 8,
            className: "machine-item",
            key: index,
            style: {
              textAlign: 'center'
            }
          }, React.createElement("a", {
            onClick: function onClick() {
              window.location.href = "/chung-loai-may/".concat(category.slug);
            },
            title: category.name
          }, React.createElement("img", {
            src: category.imageUrl,
            width: "80%"
          }), React.createElement("br", null), React.createElement("span", {
            className: "name-machine"
          }, category.name, " (", category.totalNews, ")")));
        } else {
          return null;
        }
      }
    } else {
      return React.createElement(_col.default, {
        lg: 4,
        md: 8,
        sm: 8,
        xs: 8,
        className: "machine-item",
        key: index,
        style: {
          textAlign: 'center'
        }
      }, React.createElement("a", {
        onClick: function onClick() {
          window.location.href = "/chung-loai-may/".concat(category.slug);
        },
        title: category.name
      }, React.createElement("img", {
        src: category.imageUrl,
        width: "80%"
      }), React.createElement("br", null), React.createElement("span", {
        className: "name-machine"
      }, category.name, " (", category.totalNews, ")")));
    }
  });
  return React.createElement(Fragment, null, React.createElement(_row.default, {
    className: "machine-list-title"
  }, React.createElement("h3", null, props.t('common:list-of-total-machine')), React.createElement("a", {
    onClick: props.onSeeMoreTotalMachineClick
  }, props.seeMoreTotalMachineClicked ? props.t('common:showLess') : props.t('common:showMore'))), React.createElement(_row.default, {
    gutter: 12,
    type: "flex",
    className: "machine-list"
  }, React.createElement(_col.default, {
    className: "button-pagging",
    lg: 1,
    md: 1,
    sm: 0,
    xs: 0
  }), React.createElement(_col.default, {
    lg: 22,
    md: 22,
    sm: 24,
    xs: 24
  }, renderMachineList), React.createElement(_col.default, {
    className: "button-pagging-right",
    lg: 1,
    md: 1,
    sm: 0,
    xs: 0
  })));
};

var _default = (0, _i18n.withNamespaces)('common')(MachineList);

exports.default = _default;
//# sourceMappingURL=MachineList.js.map