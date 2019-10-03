"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterForm = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireDefault(require("react"));

require("./RegisterForm.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RegisterForm = function RegisterForm(props) {
  return _react.default.createElement("div", {
    className: "register-form"
  }, _react.default.createElement(_row.default, {
    type: "flex",
    gutter: 24
  }, _react.default.createElement(_col.default, {
    xs: 12
  }, _react.default.createElement(_form.default.Item, {
    validateStatus: props.error.firstName ? 'error' : undefined,
    help: props.error.firstName
  }, _react.default.createElement(_input.default, {
    value: props.values.firstName,
    onChange: props.handleChange,
    prefix: _react.default.createElement(_icon.default, {
      type: "user"
    }),
    placeholder: "First name",
    size: "large",
    name: "firstName"
  }))), _react.default.createElement(_col.default, {
    xs: 12
  }, _react.default.createElement(_form.default.Item, {
    validateStatus: props.error.lastName ? 'error' : undefined,
    help: props.error.lastName
  }, _react.default.createElement(_input.default, {
    value: props.values.lastName,
    onChange: props.handleChange,
    prefix: _react.default.createElement(_icon.default, {
      type: "user"
    }),
    placeholder: "Last name",
    size: "large",
    name: "lastName"
  })))), _react.default.createElement(_form.default.Item, {
    validateStatus: props.error.email ? 'error' : undefined,
    help: props.error.email
  }, _react.default.createElement(_input.default, {
    value: props.values.email,
    onChange: props.handleChange,
    prefix: _react.default.createElement(_icon.default, {
      type: "mail"
    }),
    placeholder: "Email",
    size: "large",
    type: "email",
    name: "email"
  })), _react.default.createElement(_form.default.Item, {
    validateStatus: props.error.password ? 'error' : undefined,
    help: props.error.password
  }, _react.default.createElement(_input.default, {
    value: props.values.password,
    onChange: props.handleChange,
    prefix: _react.default.createElement(_icon.default, {
      type: "lock"
    }),
    placeholder: "Password",
    size: "large",
    type: "password",
    name: "password"
  })), _react.default.createElement(_form.default.Item, {
    validateStatus: props.error.confirmPassword ? 'error' : undefined,
    help: props.error.confirmPassword
  }, _react.default.createElement(_input.default, {
    value: props.values.confirmPassword,
    onChange: props.handleChange,
    prefix: _react.default.createElement(_icon.default, {
      type: "lock"
    }),
    placeholder: "Confirm password",
    size: "large",
    type: "password",
    name: "confirmPassword"
  })), _react.default.createElement(_form.default.Item, {
    className: "button-container"
  }, _react.default.createElement("span", null, "I agree with term & conditions"), _react.default.createElement(_button.default, {
    type: "primary",
    onClick: props.handleSubmit,
    loading: props.isRegister
  }, "Register")));
};

exports.RegisterForm = RegisterForm;
//# sourceMappingURL=RegisterForm.js.map