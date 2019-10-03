"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/table/style");

var _table = _interopRequireDefault(require("antd/lib/table"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

var _react = _interopRequireDefault(require("react"));

var _reactDeviceDetect = require("react-device-detect");

var _config = require("../../../../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Option = _select.default.Option;
var FormItem = _form.default.Item;

var EditableContext = _react.default.createContext({});

var EditableRow = function EditableRow(_ref) {
  var form = _ref.form,
      index = _ref.index,
      props = _objectWithoutProperties(_ref, ["form", "index"]);

  return _react.default.createElement(EditableContext.Provider, {
    value: form
  }, _react.default.createElement("tr", props));
};

var EditableFormRow = _form.default.create()(EditableRow);

var EditableCell =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditableCell, _React$Component);

  function EditableCell() {
    _classCallCheck(this, EditableCell);

    return _possibleConstructorReturn(this, _getPrototypeOf(EditableCell).apply(this, arguments));
  }

  _createClass(EditableCell, [{
    key: "render",
    // tslint:disable:trailing-comma
    value: function render() {
      var _this = this;

      var translate = this.props.t;

      var renderForm = function renderForm(record, form) {
        var getFieldDecorator = form.getFieldDecorator;

        switch (record.key) {
          case 'name':
            return _react.default.createElement(_form.default, null, _react.default.createElement(FormItem, {
              style: {
                margin: 0
              }
            }, getFieldDecorator('familyName', {
              rules: [{
                required: true,
                message: "".concat(translate('edit-profile:input-last-name'))
              }],
              initialValue: record.value.familyName,
              validateTrigger: 'onBlur'
            })(_react.default.createElement(_input.default, {
              placeholder: translate('edit-profile:your-last-name'),
              name: "familyName"
            }))), _react.default.createElement(FormItem, {
              style: {
                margin: 0
              }
            }, getFieldDecorator('givenName', {
              rules: [{
                required: true,
                message: "".concat(translate('edit-profile:input-first-name'))
              }],
              initialValue: record.value.givenName,
              validateTrigger: 'onBlur'
            })(_react.default.createElement(_input.default, {
              placeholder: translate('edit-profile:your-first-name'),
              name: "givenName"
            }))));

          case 'phoneNo':
            return _react.default.createElement(FormItem, {
              style: {
                margin: 0
              }
            }, getFieldDecorator('phoneNo', {
              rules: [{
                required: true,
                message: "".concat(translate('edit-profile:input-phone'))
              }, {
                pattern: _config.config.regex.phone,
                message: "".concat(translate('edit-profile:invalid-phone'))
              }, {
                len: 12,
                message: translate('edit-profile:invalid-phone')
              }],
              initialValue: record.value ? record.value : '+84',
              validateTrigger: 'onBlur'
            })(_react.default.createElement(_input.default, {
              placeholder: translate('edit-profile:your-phone'),
              name: "phoneNo"
            })));

          case 'email':
            return _react.default.createElement(FormItem, {
              style: {
                margin: 0
              }
            }, getFieldDecorator('email', {
              rules: [{
                required: true,
                message: "".concat(translate('edit-profile:input-email'))
              }],
              initialValue: record.value,
              validateTrigger: 'onBlur'
            })(_react.default.createElement(_input.default, {
              placeholder: translate('edit-profile:your-email'),
              name: "email"
            })));

          case 'address':
            return _react.default.createElement(FormItem, {
              style: {
                margin: 0
              }
            }, getFieldDecorator('address', {
              rules: [{
                required: true,
                message: "".concat(translate('edit-profile:input-address'))
              }],
              initialValue: record.value,
              validateTrigger: 'onBlur'
            })(_react.default.createElement(_input.default, {
              placeholder: translate('edit-profile:your-address'),
              name: "address"
            })));

          case 'province':
            return _react.default.createElement(FormItem, {
              style: {
                margin: 0
              }
            }, getFieldDecorator('province', {
              rules: [{
                required: true,
                message: "".concat(translate('edit-profile:input-province'))
              }],
              initialValue: record.value,
              validateTrigger: 'onBlur'
            })(_react.default.createElement(_select.default, {
              style: {
                width: '100%'
              },
              placeholder: translate('edit-profile:select-province')
            }, _this.props.provinces.map(function (item, index) {
              return _react.default.createElement(Option, {
                value: item._id,
                key: index
              }, item.name);
            }))));

          case 'description':
            return _react.default.createElement(FormItem, {
              style: {
                margin: 0
              }
            }, getFieldDecorator('description', {
              rules: [{
                required: true,
                message: "".concat(translate('edit-profile:input-description'))
              }],
              initialValue: record.value,
              validateTrigger: 'onBlur'
            })(_react.default.createElement(_input.default.TextArea, {
              placeholder: translate('edit-profile:your-description'),
              name: "description",
              autosize: {
                minRows: 5
              }
            })));

          case 'newPassword':
            return _react.default.createElement(_form.default, null, _react.default.createElement(FormItem, {
              style: {
                margin: 0
              }
            }, getFieldDecorator('newPassword', {
              rules: [{
                required: true,
                message: "".concat(translate('edit-profile:input-new-password'))
              }],
              initialValue: record.value,
              validateTrigger: 'onBlur'
            })(_react.default.createElement(_input.default, {
              type: "password",
              placeholder: translate('edit-profile:new-password'),
              name: "newPassword"
            }))), _react.default.createElement(FormItem, {
              style: {
                margin: 0
              }
            }, getFieldDecorator('confirmPassword', {
              rules: [{
                required: true,
                message: "".concat(translate('edit-profile:input-confirm-password'))
              }, {
                validator: function validator(_rule, value, callback) {
                  if (value !== form.getFieldValue('newPassword')) {
                    callback("".concat(translate('edit-profile:confirm-password-error')));
                  }

                  callback();
                }
              }],
              validateTrigger: 'onBlur'
            })(_react.default.createElement(_input.default, {
              type: "password",
              placeholder: translate('edit-profile:confirm-password'),
              name: "confirmPassword"
            }))));

          default:
            return null;
        }
      };

      var _this$props = this.props,
          editing = _this$props.editing,
          restProps = _objectWithoutProperties(_this$props, ["editing"]);

      return _react.default.createElement(EditableContext.Consumer, null, function (form) {
        return _react.default.createElement("td", restProps, editing ? renderForm(_this.props.record, form) : _react.default.createElement("div", {
          style: {
            wordBreak: 'break-word',
            whiteSpace: 'pre-line'
          }
        }, restProps.children));
      });
    }
  }]);

  return EditableCell;
}(_react.default.Component);

var EditableTable =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(EditableTable, _React$Component2);

  function EditableTable(props) {
    var _this2;

    _classCallCheck(this, EditableTable);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(EditableTable).call(this, props));

    _defineProperty(_assertThisInitialized(_this2), "columns", void 0);

    _defineProperty(_assertThisInitialized(_this2), "cancel", function () {
      _this2.setState({
        editingKey: ''
      });
    });

    var translate = props.t;

    var filterProvince = _this2.props.provinces.filter(function (item) {
      return item._id === props.userProfile.province;
    });

    var currentNameProvince = filterProvince[0] ? filterProvince[0].name : '';
    var data = [{
      label: "".concat(translate('edit-profile:fullname')),
      value: {
        familyName: props.userProfile.familyName,
        givenName: props.userProfile.givenName
      },
      key: 'name'
    }, {
      label: "".concat(translate('edit-profile:phone')),
      value: props.userProfile.phoneNo,
      key: 'phoneNo'
    }, {
      label: "".concat(translate('edit-profile:email')),
      value: props.userProfile.email || props.userProfile.loginDetail.email,
      key: 'email'
    }, {
      label: "".concat(translate('edit-profile:address')),
      value: props.userProfile.address,
      key: 'address'
    }, {
      label: "".concat(translate('edit-profile:province')),
      value: currentNameProvince,
      key: 'province'
    }, {
      label: "".concat(translate('edit-profile:description')),
      value: props.userProfile.description,
      key: 'description'
    }];

    if (props.userProfile.loginDetail.provider === 'email') {
      data.push({
        label: "".concat(translate('edit-profile:password')),
        value: '',
        key: 'newPassword'
      });
    }

    _this2.state = {
      data: data,
      editingKey: ''
    };
    _this2.columns = [{
      title: 'Label',
      dataIndex: 'label',
      width: _reactDeviceDetect.isMobile ? '30%' : '20%',
      editable: false
    }, {
      title: 'Value',
      dataIndex: 'value',
      width: _reactDeviceDetect.isMobile ? '50%' : '50%',
      editable: true,
      render: function render(_text, record) {
        return _typeof(record.value) === 'object' ? Object.keys(record.value).map(function (item) {
          return record.value[item];
        }).join(' ') : record ? record.value : '';
      }
    }, {
      title: 'Operations',
      dataIndex: 'operation',
      render: function render(_text, record) {
        var editable = record.key === _this2.state.editingKey;
        return _react.default.createElement("div", null, editable ? _react.default.createElement("span", null, _react.default.createElement(EditableContext.Consumer, null, function (form) {
          return _react.default.createElement(_button.default, {
            onClick: function onClick() {
              return _this2.save(form, record.key);
            },
            style: {
              marginBottom: '8px',
              marginRight: '8px'
            },
            type: "primary",
            icon: "check"
          }, translate('edit-profile:save'));
        }), _react.default.createElement(_button.default, {
          onClick: function onClick() {
            return _this2.cancel();
          },
          icon: "close"
        }, translate('edit-profile:cancel'))) : _react.default.createElement(_button.default, {
          onClick: function onClick() {
            return _this2.edit(record.key);
          },
          type: "primary",
          icon: "edit"
        }, translate('edit-profile:change')));
      }
    }];
    return _this2;
  }

  _createClass(EditableTable, [{
    key: "edit",
    value: function edit(key) {
      this.setState({
        editingKey: key
      });
    }
  }, {
    key: "save",
    value: function save(form, key) {
      var _this3 = this;

      form.validateFields(
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(error, row) {
          var success;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (error) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 3;
                  return _this3.props.editUserProfile(row);

                case 3:
                  success = _context.sent;

                  if (success) {
                    _this3.setState({
                      editingKey: '',
                      data: _this3.state.data.map(function (item) {
                        if (key === 'newPassword') {
                          return item;
                        } else if (item.key === key && item.key !== 'province') {
                          return _objectSpread({}, item, {
                            value: row.familyName ? row : row[key]
                          });
                        } else if (item.key === key && item.key === 'province') {
                          var filterProvince = _this3.props.provinces.filter(function (ite) {
                            return ite._id === row[key];
                          });

                          var currentNameProvince = filterProvince[0] ? filterProvince[0].name : '';
                          return _objectSpread({}, item, {
                            value: currentNameProvince
                          });
                        } else {
                          return item;
                        }
                      })
                    });
                  }

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var components = {
        body: {
          row: EditableFormRow,
          cell: EditableCell
        }
      };
      var columns = this.columns.map(function (col) {
        if (!col.editable) {
          return col;
        } else {
          return _objectSpread({}, col, {
            onCell: function onCell(record) {
              return {
                record: record,
                provinces: _this4.props.provinces,
                editing: record.key === _this4.state.editingKey,
                t: _this4.props.t
              };
            }
          });
        }
      });
      return _react.default.createElement("div", null, _react.default.createElement(_table.default, {
        loading: this.props.loading,
        components: components,
        pagination: false,
        showHeader: false,
        dataSource: this.state.data,
        columns: columns,
        rowClassName: function rowClassName() {
          return 'editable-row';
        }
      }));
    }
  }]);

  return EditableTable;
}(_react.default.Component);

var UserProfileForm =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(UserProfileForm, _React$Component3);

  function UserProfileForm() {
    _classCallCheck(this, UserProfileForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserProfileForm).apply(this, arguments));
  }

  _createClass(UserProfileForm, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(EditableTable, {
        provinces: this.props.provinces,
        loading: this.props.loading,
        userProfile: this.props.userProfile,
        editUserProfile: this.props.editUserProfile,
        t: this.props.t
      });
    }
  }]);

  return UserProfileForm;
}(_react.default.Component);

var _default = UserProfileForm;
exports.default = _default;
//# sourceMappingURL=UserProfileForm.js.map