"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = void 0;

require("antd/lib/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/tabs/style");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

var _react = _interopRequireDefault(require("react"));

require("./LoginForm.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginForm = function LoginForm(props) {
  var prefixSelector = props.getFieldDecorator('phoneId', {
    rules: [{
      required: true,
      message: 'Please input your password!'
    }],
    validateFirst: true,
    validateTrigger: 'onBlur',
    initialValue: '+84'
  })(_react.default.createElement(_select.default, {
    style: {
      width: 120,
      fontSize: '13px'
    }
  }, _react.default.createElement(_select.default.Option, {
    value: "+84"
  }, "VN (+84)")));
  return _react.default.createElement("div", {
    className: "login-form"
  }, _react.default.createElement(_tabs.default, {
    defaultActiveKey: props.activeTab,
    onChange: function onChange(activeTab) {
      return props.loginTabChange({
        activeTab: activeTab
      });
    }
  }, _react.default.createElement(_tabs.default.TabPane, {
    tab: _react.default.createElement("span", null, _react.default.createElement(_icon.default, {
      type: "mail"
    }), "Email"),
    key: "email"
  }, _react.default.createElement(_form.default.Item, null, props.getFieldDecorator('email', {
    rules: [{
      required: true,
      message: 'Please input your email!'
    }],
    validateFirst: true,
    validateTrigger: 'onBlur'
  })(_react.default.createElement(_input.default, {
    prefix: _react.default.createElement(_icon.default, {
      type: "mail"
    }),
    placeholder: "Email",
    size: "large",
    type: "email",
    name: "email"
  }))), _react.default.createElement(_form.default.Item, null, props.getFieldDecorator('password', {
    rules: [{
      required: true,
      message: 'Please input your password!'
    }],
    validateFirst: true,
    validateTrigger: 'onBlur'
  })(_react.default.createElement(_input.default, {
    prefix: _react.default.createElement(_icon.default, {
      type: "lock"
    }),
    placeholder: "Password",
    size: "large",
    type: "password",
    name: "password"
  })))), _react.default.createElement(_tabs.default.TabPane, {
    tab: _react.default.createElement("span", null, _react.default.createElement(_icon.default, {
      type: "phone"
    }), "SMS"),
    key: "phone"
  }, _react.default.createElement(_form.default.Item, null, props.getFieldDecorator('phoneNumber', {
    rules: [{
      required: true,
      message: 'Please input your phone number!'
    }],
    validateFirst: true,
    validateTrigger: 'onBlur'
  })(_react.default.createElement(_input.default.Search, {
    addonBefore: prefixSelector,
    placeholder: "Phone number",
    size: "large",
    enterButton: _react.default.createElement(_button.default, {
      type: "primary",
      loading: props.isSendingVerificationCode,
      style: {
        fontSize: '13px'
      }
    }, "Send code"),
    onSearch: props.getVerificationCode,
    name: "phoneNumber"
  }))), _react.default.createElement(_form.default.Item, null, props.getFieldDecorator('verificationCode', {
    rules: [{
      required: true,
      message: 'Please input your verify code!'
    }],
    validateFirst: true,
    validateTrigger: 'onBlur'
  })(_react.default.createElement(_input.default, {
    placeholder: "Verification code",
    size: "large"
  }))))), _react.default.createElement(_form.default.Item, {
    className: "button-container"
  }, props.getFieldDecorator('rememberMe')(_react.default.createElement(_checkbox.default, null, "Remember me")), _react.default.createElement(_button.default, {
    type: "primary",
    loading: props.isLogin,
    onClick: function onClick() {
      return props.handleSubmit(props.activeTab);
    }
  }, "Log in")));
};

exports.LoginForm = LoginForm;
//# sourceMappingURL=LoginForm.js.map