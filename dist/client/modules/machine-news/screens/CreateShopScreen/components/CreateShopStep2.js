"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireDefault(require("react"));

require("./CreateShopStep2.less");

var _core = require("../../../../../core");

var _reactDeviceDetect = require("react-device-detect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateShopStep2 = function CreateShopStep2(props) {
  var translate = props.t;

  var handleOk = function handleOk() {
    if (props.selectedPackage && props.selectedPackage.value) {
      props.nextStep();
    } else {
      _message2.default.error(translate('create-shop:please-select-your-shop-package-to-continue'));
    }
  };

  return _react.default.createElement("div", {
    className: "step-2"
  }, _react.default.createElement(_modal.default, {
    width: 678,
    className: "select-category",
    title: translate('create-shop:select-your-package'),
    visible: props.currentStep === 2,
    okText: translate('create-shop:next'),
    onOk: handleOk,
    onCancel: props.backStep
  }, _react.default.createElement("div", null, !_reactDeviceDetect.isMobile ? _react.default.createElement("div", null, _core.storePackages.map(function (item) {
    return _react.default.createElement(_row.default, {
      key: item.value,
      style: {
        height: 100,
        display: 'flex',
        alignItems: 'center',
        margin: '0px 60px 20px 60px',
        padding: 20,
        border: '1px solid'
      },
      className: "align-items",
      gutter: 20
    }, _react.default.createElement("img", {
      className: "image-tag",
      src: item.imageUrl
    }), _react.default.createElement(_col.default, {
      style: {
        display: 'flex',
        justifyContent: 'center'
      },
      className: "check-box",
      lg: 4,
      md: 4,
      xs: 24,
      sm: 24
    }, _react.default.createElement(_checkbox.default, {
      checked: props.selectedPackage ? item.value === props.selectedPackage.value : false,
      value: item.value,
      onChange: function onChange(e) {
        return props.selectPackageChange({
          package: e.target.value
        });
      }
    })), _react.default.createElement(_col.default, {
      lg: 20,
      md: 20,
      xs: 24,
      sm: 24
    }, _react.default.createElement("div", null, _react.default.createElement("strong", null, item.label), " s\u1EED d\u1EE5ng"), _react.default.createElement("div", null, _react.default.createElement("em", {
      style: {
        color: 'red',
        fontWeight: 'bold'
      }
    }, translate('create-shop:free')), " ", _react.default.createElement("em", null, _react.default.createElement("del", null, (0, _core.formatMoney)(item.price))))));
  })) : _react.default.createElement("div", null, _core.storePackages.map(function (item) {
    return _react.default.createElement("a", {
      onClick: function onClick() {
        return props.selectPackageChange({
          package: item.value
        });
      }
    }, _react.default.createElement(_row.default, {
      key: item.value,
      style: {
        height: 100,
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,
        padding: 20,
        border: '1px solid black'
      },
      className: "align-items",
      gutter: 20
    }, _react.default.createElement(_col.default, {
      style: {
        display: 'flex',
        justifyContent: 'center'
      },
      className: "check-box",
      lg: 4,
      md: 4,
      xs: 4,
      sm: 4
    }, _react.default.createElement(_checkbox.default, {
      checked: props.selectedPackage ? item.value === props.selectedPackage.value : false,
      value: item.value,
      onChange: function onChange(e) {
        return props.selectPackageChange({
          package: e.target.value
        });
      }
    })), _react.default.createElement(_col.default, {
      lg: 20,
      md: 20,
      xs: 20,
      sm: 20
    }, _react.default.createElement("div", {
      style: {
        color: 'black'
      }
    }, _react.default.createElement("strong", null, item.label), " s\u1EED d\u1EE5ng"), _react.default.createElement("div", null, _react.default.createElement("em", {
      style: {
        color: 'red',
        fontWeight: 'bold'
      }
    }, translate('create-shop:free')), " ", _react.default.createElement("em", null, _react.default.createElement("del", {
      style: {
        color: 'black'
      }
    }, (0, _core.formatMoney)(item.price)))))));
  })))));
};

var _default = CreateShopStep2;
exports.default = _default;
//# sourceMappingURL=CreateShopStep2.js.map