"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var React = _interopRequireWildcard(require("react"));

require("./CreateShopStep1.less");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateShopStep1 = function CreateShopStep1(props) {
  var translate = props.t;
  return React.createElement("div", {
    className: "step-1"
  }, React.createElement(_row.default, {
    className: "intro"
  }, React.createElement(_col.default, {
    lg: 1
  }), React.createElement(_col.default, {
    lg: 6,
    className: "intro-item"
  }, React.createElement("img", {
    src: "/static/images/shop-icon-1.png",
    width: "90px",
    style: {
      marginBottom: '15px'
    }
  }), React.createElement("h3", null, translate('create-shop:own'), React.createElement("br", null), translate('create-shop:your-domain')), React.createElement("span", null, translate('create-shop:own-your-domain-description'))), React.createElement(_col.default, {
    lg: 1
  }), React.createElement(_col.default, {
    lg: 1
  }), React.createElement(_col.default, {
    lg: 6,
    className: "intro-item"
  }, React.createElement("img", {
    src: "/static/images/shop-icon-2.png",
    width: "90px",
    style: {
      marginBottom: '15px'
    }
  }), React.createElement("h3", null, translate('create-shop:customer-care')), React.createElement("span", null, translate('create-shop:customer-care-description'))), React.createElement(_col.default, {
    lg: 1
  }), React.createElement(_col.default, {
    lg: 1
  }), React.createElement(_col.default, {
    lg: 6,
    className: "intro-item"
  }, React.createElement("img", {
    src: "/static/images/shop-icon-3.png",
    width: "90px",
    style: {
      marginBottom: '15px'
    }
  }), React.createElement("h3", null, translate('create-shop:details')), React.createElement("br", null), React.createElement("span", null, translate('create-shop:details-description')), React.createElement("span", {
    className: "icon-Youtube"
  })), React.createElement(_col.default, {
    lg: 1
  })), React.createElement(_row.default, null, React.createElement(_button.default, {
    onClick: props.nextStep,
    type: "primary",
    className: "next-button",
    size: "large"
  }, translate('create-shop:next'))));
};

var _default = CreateShopStep1;
exports.default = _default;
//# sourceMappingURL=CreateShopStep1.js.map