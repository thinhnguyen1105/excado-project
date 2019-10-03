"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

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

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

require("./UserModal.less");

var yup = _interopRequireWildcard(require("yup"));

var _formik = require("formik");

var _core = require("../../../../../core");

var _services = require("../../../../../services");

var _i18n = require("../../../../../i18n");

var _config = require("../../../../../config");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var UserModal = function UserModal(props) {
  var translate = props.t;
  var createValidationSchema = yup.object().shape({
    familyName: yup.string().min(2, translate('admin-users:Too short')).max(50, translate('admin-users:Too long')).required(translate('admin-users:Family name is required')),
    givenName: yup.string().min(2, translate('admin-users:Too short')).max(50, translate('admin-users:Too long')).required(translate('admin-users:Given name is required')),
    email: yup.string().min(2, translate('admin-users:Too short')).email(translate('admin-users:Invalid email')).required(translate('admin-users:Email is required')),
    password: yup.string().matches(_config.config.regex.password, translate('admin-users:Password must be minimum 6 characters, at least 1 upper letter, 1 number and 1 special character')).required(translate('admin-users:Password is required')),
    confirmPassword: yup.string().required(translate('admin-users:Please confirm your password')),
    roles: yup.array()
  });
  var editValidationSchema = yup.object().shape({
    familyName: yup.string().min(2, translate('admin-users:Too short')).max(50, translate('admin-users:Too long')).required(translate('admin-users:Family name is required')),
    givenName: yup.string().min(2, translate('admin-users:Too short')).max(50, translate('admin-users:Too long')).required(translate('admin-users:Given name is required')),
    email: yup.string().min(2, translate('admin-users:Too short')).email(translate('admin-users:Invalid email')).required(translate('admin-users:Email is required')),
    roles: yup.array()
  });
  var initialValue = props.initialValue && props.initialValue._id ? props.initialValue : {
    familyName: '',
    givenName: '',
    password: '',
    confirmPassword: '',
    email: '',
    roles: []
  };
  return _react.default.createElement(_formik.Formik, {
    initialValues: initialValue,
    validationSchema: props.initialValue && props.initialValue._id ? editValidationSchema : createValidationSchema,
    onSubmit:
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(values, formikBag) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", props.handleSubmit(values, formikBag));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(),
    validateOnChange: false
  }, function (context) {
    return _react.default.createElement(_modal.default, {
      title: props.title,
      visible: props.visible,
      onOk: function onOk(e) {
        return props.handleSubmit(e, context);
      },
      onCancel: props.closeModal,
      okButtonProps: {
        onClick: function onClick() {
          return context.handleSubmit();
        }
      },
      confirmLoading: props.loading,
      okText: translate('admin-users:Save'),
      cancelText: translate('admin-users:Cancel')
    }, _react.default.createElement(_form.default, null, _react.default.createElement(_row.default, {
      type: "flex",
      gutter: 12
    }, _react.default.createElement(_col.default, {
      xs: 12
    }, _react.default.createElement(_form.default.Item, {
      validateStatus: context.errors.familyName ? 'error' : undefined,
      help: context.errors.familyName
    }, _react.default.createElement(_input.default, {
      value: context.values.familyName,
      onChange: context.handleChange,
      onBlur: function onBlur() {
        return (0, _core.validateField)({
          fieldName: 'familyName',
          validateSchema: props.initialValue && props.initialValue._id ? editValidationSchema : createValidationSchema,
          context: context
        });
      },
      prefix: _react.default.createElement(_icon.default, {
        type: "user"
      }),
      placeholder: translate('admin-users:Family name'),
      name: "familyName"
    }))), _react.default.createElement(_col.default, {
      xs: 12
    }, _react.default.createElement(_form.default.Item, {
      validateStatus: context.errors.givenName ? 'error' : undefined,
      help: context.errors.givenName
    }, _react.default.createElement(_input.default, {
      value: context.values.givenName,
      onChange: context.handleChange,
      onBlur: function onBlur() {
        return (0, _core.validateField)({
          fieldName: 'givenName',
          validateSchema: props.initialValue && props.initialValue._id ? editValidationSchema : createValidationSchema,
          context: context
        });
      },
      prefix: _react.default.createElement(_icon.default, {
        type: "user"
      }),
      placeholder: translate('admin-users:Given name'),
      name: "givenName"
    })))), _react.default.createElement(_form.default.Item, {
      validateStatus: context.errors.email ? 'error' : undefined,
      help: context.errors.email
    }, _react.default.createElement(_input.default, {
      value: context.values.email,
      onChange: context.handleChange,
      onBlur:
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var serviceProxies, result;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                (0, _core.validateField)({
                  fieldName: 'email',
                  validateSchema: props.initialValue && props.initialValue._id ? editValidationSchema : createValidationSchema,
                  context: context
                });

                if (!context.values.email) {
                  _context2.next = 7;
                  break;
                }

                serviceProxies = (0, _services.getServiceProxy)();
                _context2.next = 5;
                return serviceProxies.checkEmailExist(context.values.email);

              case 5:
                result = _context2.sent;

                if (result.emailExist) {
                  context.setFieldError('email', translate('admin-users:Email has been used'));
                } else {
                  context.setFieldError('email', '');
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })),
      prefix: _react.default.createElement(_icon.default, {
        type: "mail"
      }),
      placeholder: "Email",
      name: "email"
    })), _react.default.createElement(_form.default.Item, {
      validateStatus: context.errors.password ? 'error' : undefined,
      help: context.errors.password
    }, _react.default.createElement(_input.default, {
      value: context.values.password,
      onChange: context.handleChange,
      onBlur: function onBlur() {
        return (0, _core.validateField)({
          fieldName: 'password',
          validateSchema: props.initialValue && props.initialValue._id ? editValidationSchema : createValidationSchema,
          context: context
        });
      },
      prefix: _react.default.createElement(_icon.default, {
        type: "lock"
      }),
      placeholder: translate('admin-users:Password'),
      name: "password",
      type: "password"
    })), _react.default.createElement(_form.default.Item, {
      validateStatus: context.errors.confirmPassword ? 'error' : undefined,
      help: context.errors.confirmPassword
    }, _react.default.createElement(_input.default, {
      value: context.values.confirmPassword,
      onChange: context.handleChange,
      onBlur: function onBlur() {
        (0, _core.validateField)({
          fieldName: 'confirmPassword',
          validateSchema: props.initialValue && props.initialValue._id ? editValidationSchema : createValidationSchema,
          context: context
        });

        if (context.values.confirmPassword) {
          if (context.values.confirmPassword !== context.values.password) {
            context.setFieldError('confirmPassword', translate('admin-users:Confirm password didnt match'));
          } else {
            context.setFieldError('confirmPassword', '');
          }
        }
      },
      prefix: _react.default.createElement(_icon.default, {
        type: "lock"
      }),
      placeholder: translate('admin-users:Confirm password'),
      name: "confirmPassword",
      type: "password"
    })), _react.default.createElement(_form.default.Item, {
      label: "Roles",
      validateStatus: context.errors.roles && context.errors.roles.length ? 'error' : undefined,
      help: context.errors.roles
    }, _react.default.createElement(_checkbox.default.Group, {
      value: context.values.roles,
      options: props.rolesData ? props.rolesData.map(function (item) {
        return item.name;
      }) : [],
      onChange: function onChange(checkValue) {
        var selectedRoles = [];
        props.rolesData.forEach(function (item) {
          if (checkValue.indexOf(item.name) > -1) {
            selectedRoles.push(item.name);
          }
        });
        context.setFieldValue('roles', selectedRoles);
        context.setFieldError('roles', selectedRoles.length > 0 ? '' : translate('admin-users:Roles is required'));
      }
    }))));
  });
};

var _default = (0, _i18n.withNamespaces)('admin-users')(UserModal);

exports.default = _default;
//# sourceMappingURL=UserModal.js.map