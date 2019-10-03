"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/avatar/style");

var _avatar = _interopRequireDefault(require("antd/lib/avatar"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireWildcard(require("react"));

require("./DetailUser.less");

var moment = _interopRequireWildcard(require("moment"));

var _formik = require("formik");

var yup = _interopRequireWildcard(require("yup"));

var _core = require("../../../../../core");

var _services = require("../../../../../services");

var _i18n = require("../../../../../i18n");

var _config = require("../../../../../config");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Fragment = _react.default.Fragment;

var DetailUser =
/*#__PURE__*/
function (_Component) {
  _inherits(DetailUser, _Component);

  function DetailUser() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DetailUser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DetailUser)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      reportModalVisible: false,
      isReporting: false,
      reportInfo: {}
    });

    _defineProperty(_assertThisInitialized(_this), "handleReportClick", function (reportOption) {
      _this.setState({
        reportModalVisible: true,
        reportInfo: _objectSpread({}, _this.state.reportInfo, {
          news: _this.props.newsData._id,
          reason: reportOption.value
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "cancelReport", function () {
      _this.setState({
        reportModalVisible: false,
        reportInfo: {}
      });
    });

    _defineProperty(_assertThisInitialized(_this), "createReport",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(values) {
        var serviceProxy;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  isReporting: true
                });

                _context.prev = 1;
                serviceProxy = (0, _services.getServiceProxy)();
                _context.next = 5;
                return serviceProxy.createReport(_objectSpread({}, _this.state.reportInfo, values));

              case 5:
                _this.setState({
                  isReporting: false,
                  reportModalVisible: false,
                  reportInfo: {}
                });

                _message2.default.success(_this.props.t('common:report-success'));

                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);

                _message2.default.error(_context.t0.message);

                _this.setState({
                  isReporting: false
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(DetailUser, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var ReportValidateSchema = yup.object().shape({
        description: yup.string().required(translate('common:please-describe-more-details')).min(20, translate('common:describe-too-short')).max(500, translate('common:describe-too-long')),
        email: yup.string().matches(/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/, translate('common:emailInvalid')).max(50, translate('common:email-too-long')).required(translate('common:pleaseInputEmail')).required(translate('common:pleaseInputEmail')),
        phoneNo: yup.string().required(translate('common:pleaseInputPhoneNo')).max(15, translate('common:phoneTooLong')).matches(_config.config.regex.phone, translate('common:invalidPhoneNo'))
      });
      var shopUrl = this.props.newsData.shop ? (0, _core.getShopUrl)(this.props.newsData.shop.domain) : '#';
      return _react.default.createElement(_row.default, {
        className: "outline"
      }, this.props.newsData.shop && this.props.newsData.shop._id && this.props.isShopDomain ? _react.default.createElement(Fragment, null, _react.default.createElement(_row.default, {
        className: "shop-info"
      }, _react.default.createElement("a", {
        href: "".concat(shopUrl),
        title: this.props.newsData.shop.name,
        className: "link-to-user"
      }, _react.default.createElement(_col.default, {
        className: "avatar",
        lg: 3,
        md: 3,
        sm: 6,
        xs: 6
      }, _react.default.createElement(_avatar.default, {
        size: 64,
        icon: "user"
      }))), _react.default.createElement(_col.default, {
        lg: 6,
        md: 6,
        sm: 18,
        xs: 18,
        className: "shop-info-text"
      }, _react.default.createElement("a", {
        href: "".concat(shopUrl),
        className: "link-to-user",
        title: this.props.newsData.shop.name
      }, _react.default.createElement("div", null, _react.default.createElement("strong", null, this.props.newsData.shop.name)), _react.default.createElement("div", null, translate('common:date-join'), " ", moment(new Date(this.props.newsData.shop.createdAt)).format('DD/MM/YYYY'))), this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id !== this.props.newsData.owner._id ? _react.default.createElement("div", null, _react.default.createElement("a", {
        onClick: function onClick() {
          return _this2.props.changeFollowShopStatus(_this2.props.starShopStatus, _this2.props.newsData.shop._id);
        }
      }, _react.default.createElement(_icon.default, {
        className: "icon-star",
        type: "star",
        theme: this.props.starShopStatus
      }), this.props.starShopStatus !== 'filled' ? translate('common:follow-shop') : translate('common:unfollow-shop'))) : null), _react.default.createElement(_col.default, {
        lg: 5,
        md: 5,
        xs: 0,
        sm: 0
      }), _react.default.createElement(_col.default, {
        lg: 10,
        md: 10,
        sm: 24,
        xs: 24
      }, _react.default.createElement("div", {
        className: "call-button"
      }, _react.default.createElement("a", {
        href: this.props.newsData.shop && this.props.newsData.shop.phone ? "tel:".concat(this.props.newsData.shop.phone) : "",
        style: {
          marginBottom: '40px'
        }
      }, _react.default.createElement(_button.default, {
        className: "button-call",
        type: "primary",
        icon: "phone"
      }, this.props.newsData.shop && this.props.newsData.shop.phone ? "".concat(this.props.newsData.shop.phone) : translate('common:phone-number-not-registered'))))))) : _react.default.createElement(_row.default, {
        className: "detail-user-info"
      }, _react.default.createElement("a", {
        href: "/nguoi-dung/".concat(this.props.newsData.owner._id),
        title: this.props.newsData.owner.fullName ? this.props.newsData.owner.fullName : this.props.newsData.owner.email ? this.props.newsData.owner.email : this.props.newsData.owner.phoneNo,
        className: "link-to-user"
      }, _react.default.createElement(_col.default, {
        className: "avatar",
        lg: 3,
        md: 3,
        sm: 6,
        xs: 6
      }, _react.default.createElement(_avatar.default, {
        size: 64,
        icon: "user"
      }))), _react.default.createElement(_col.default, {
        lg: 6,
        md: 6,
        sm: 18,
        xs: 18,
        className: "user-info-text"
      }, _react.default.createElement("a", {
        href: "/nguoi-dung/".concat(this.props.newsData.owner._id),
        title: this.props.newsData.owner.fullName ? this.props.newsData.owner.fullName : this.props.newsData.owner.email ? this.props.newsData.owner.email : this.props.newsData.owner.phoneNo,
        className: "link-to-user"
      }, _react.default.createElement("div", null, _react.default.createElement("strong", null, this.props.newsData.owner.fullName ? this.props.newsData.owner.fullName : this.props.newsData.owner.email ? this.props.newsData.owner.email : this.props.newsData.owner.phoneNo)), _react.default.createElement("div", null, translate('common:joinDate'), ": ", moment(new Date(this.props.newsData.owner.createdAt)).format('DD/MM/YYYY'))), this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id !== this.props.newsData.owner._id ? _react.default.createElement("div", null, _react.default.createElement("a", {
        onClick: function onClick() {
          return _this2.props.changeFollowUserStatus(_this2.props.starUserStatus, _this2.props.newsData.owner._id);
        }
      }, _react.default.createElement(_icon.default, {
        className: "icon-star",
        type: "star",
        theme: this.props.starUserStatus
      }), this.props.starUserStatus !== 'filled' ? translate('common:follow-seller') : translate('common:unfollow-seller'))) : null), _react.default.createElement(_col.default, {
        lg: 5,
        md: 5,
        xs: 0,
        sm: 0
      }), _react.default.createElement(_col.default, {
        lg: 10,
        md: 10,
        sm: 24,
        xs: 24
      }, _react.default.createElement("div", {
        className: "call-button"
      }, _react.default.createElement("a", {
        href: this.props.newsData.owner.phoneNo ? "tel:".concat(this.props.newsData.owner.phoneNo) : ""
      }, _react.default.createElement(_button.default, {
        className: "button-call",
        type: "primary",
        icon: "phone"
      }, this.props.newsData.owner.phoneNo ? "".concat(this.props.newsData.owner.phoneNo) : translate('common:phone-number-not-registered')))))), _react.default.createElement("hr", {
        className: "line-shadow"
      }), _react.default.createElement(_row.default, null, _react.default.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }
      }, _react.default.createElement("h3", {
        style: {
          display: 'inline-block'
        }
      }, translate('common:describe-product')), this.props.profileState.authUser && this.props.profileState.authUser.id === this.props.newsData.owner._id && _react.default.createElement("a", {
        href: "/sua-tin/".concat(this.props.newsData._id)
      }, _react.default.createElement(_button.default, {
        type: "primary",
        icon: "edit"
      }, translate('common:edit-this-news')))), _react.default.createElement("p", {
        className: "description"
      }, this.props.newsData.description)), _react.default.createElement("hr", {
        className: "line-shadow"
      }), _react.default.createElement("p", {
        className: "notification"
      }, _react.default.createElement("em", null, translate('common:note-report'))), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        xs: 24,
        className: "report-button"
      }, _core.reportReasons.map(function (item) {
        return _react.default.createElement(_button.default, {
          className: "button-report",
          key: item.value,
          onClick: function onClick() {
            return _this2.handleReportClick(item);
          }
        }, translate("common:".concat(item.value.toLowerCase())));
      }))), _react.default.createElement(_formik.Formik, {
        initialValues: {
          description: '',
          email: '',
          phoneNo: ''
        },
        validateOnChange: false,
        validationSchema: ReportValidateSchema,
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee2(values, formikBag) {
            return _regenerator.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _this2.createReport(values);

                  case 2:
                    formikBag.resetForm({
                      description: '',
                      email: '',
                      phoneNo: ''
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x2, _x3) {
            return _ref2.apply(this, arguments);
          };
        }()
      }, function (context) {
        return _react.default.createElement(_modal.default, {
          title: translate('common:report-post'),
          visible: _this2.state.reportModalVisible,
          onOk: context.handleSubmit,
          onCancel: _this2.cancelReport,
          confirmLoading: _this2.state.isReporting,
          okText: translate('common:send-report'),
          cancelText: translate('common:cancel')
        }, _react.default.createElement(_form.default, null, _react.default.createElement(_form.default.Item, {
          validateStatus: context.errors.description ? 'error' : undefined,
          help: context.errors.description
        }, _react.default.createElement(_input.default.TextArea, {
          value: context.values.description,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'description',
              validateSchema: ReportValidateSchema,
              context: context
            });
          },
          autosize: {
            minRows: 5
          },
          placeholder: translate('common:please-describe-more-details'),
          name: "description"
        })), _react.default.createElement(_form.default.Item, {
          label: translate('common:note-get-info'),
          validateStatus: context.errors.email ? 'error' : undefined,
          help: context.errors.email,
          style: {
            marginBottom: '0px'
          }
        }, _react.default.createElement(_input.default, {
          value: context.values.email,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'email',
              validateSchema: ReportValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:your-email'),
          name: "email"
        })), _react.default.createElement(_form.default.Item, {
          validateStatus: context.errors.phoneNo ? 'error' : undefined,
          help: context.errors.phoneNo
        }, _react.default.createElement(_input.default, {
          value: context.values.phoneNo,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'phoneNo',
              validateSchema: ReportValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:your-phone-number'),
          name: "phoneNo"
        }))));
      }));
    }
  }]);

  return DetailUser;
}(_react.Component);

var _default = (0, _i18n.withNamespaces)('common')(DetailUser);

exports.default = _default;
//# sourceMappingURL=DetailUser.js.map