"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/card/style");

var _card = _interopRequireDefault(require("antd/lib/card"));

require("antd/lib/upload/style");

var _upload = _interopRequireDefault(require("antd/lib/upload"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var yup = _interopRequireWildcard(require("yup"));

var _core = require("../../../../../core");

require("./CreateShopStep3.less");

var _config = require("../../../../../config");

var _MapWithSearchBox = _interopRequireDefault(require("../../../../../components/MapWithSearchBox/MapWithSearchBox"));

var _reactDeviceDetect = require("react-device-detect");

var _i18n = require("../../../../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CreateShopStep3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreateShopStep3, _React$Component);

  function CreateShopStep3() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateShopStep3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateShopStep3)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      previewVisible: false,
      previewImage: ''
    });

    _defineProperty(_assertThisInitialized(_this), "logoImageBeforeUpload", function (file) {
      if (_config.config.upload.allowImageExt.test(file.name)) {
        _this.props.changeLogoImage(file);
      } else {
        _message2.default.error('Ảnh chỉ nhận các định dạng PNG, JPG, JPEG');
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "introImageBeforeUpload", function (file) {
      if (_this.props.introImageList.length < _config.config.upload.shopIntroImageNumber && _config.config.upload.allowImageExt.test(file.name)) {
        _this.props.addIntroImage(file);
      } else {
        _message2.default.error('Ảnh không quá 2MB và chỉ upload tối đa 10 ảnh');
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "removeIntroImage", function (file) {
      _this.props.removeIntroImage(file);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      return _this.setState({
        previewVisible: false,
        previewImage: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePreview", function (file) {
      _this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true
      });
    });

    return _this;
  }

  _createClass(CreateShopStep3, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var ShopValidateSchema = yup.object().shape({
        name: yup.string().min(5, translate('my-shop:shop-name-is-too-short')).max(50, translate('my-shop:shop-name-is-too-long')).required(translate('my-shop:please-filled-your-shop-name')),
        phone: yup.string().matches(/^([0-9]){4,15}$/, translate('my-shop:invalid-phone-number')).required(translate('my-shop:please-filled-your-phone-number')),
        domain: yup.string().matches(/^(?=.*[a-z0-9-])[a-z0-9-\d]{3,}$/, translate('my-shop:domain-error')).max(50, translate('my-shop:domain-is-too-long')).required(translate('my-shop:please-filled-your-domain')),
        email: yup.string().matches(/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/, translate('my-shop:invalid-email')).email(translate('my-shop:invalid-email')).required(translate('my-shop:please-filled-your-email')),
        description: yup.string().min(50, translate('my-shop:introduce-is-too-short')).max(2000, translate('my-shop:introduce-is-too-long')).required(translate('my-shop:please-filled-your-introduce'))
      });

      var uploadButton = _react.default.createElement("div", null, _react.default.createElement(_icon.default, {
        type: "plus"
      }), _react.default.createElement("div", {
        className: "ant-upload-text"
      }, "Upload"));

      return _react.default.createElement(_formik.Formik, {
        initialValues: {
          name: '',
          phone: '',
          domain: '',
          address: '',
          geocode: undefined,
          email: '',
          description: ''
        },
        validateOnChange: false,
        validationSchema: ShopValidateSchema,
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee(values) {
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _this2.props.handleShopInfoChange(values);

                    _this2.props.nextStep();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()
      }, function (context) {
        return _react.default.createElement("div", null, _react.default.createElement("div", {
          className: "step-3"
        }, _react.default.createElement(_row.default, {
          type: "flex",
          gutter: 24,
          className: "shop-info"
        }, _react.default.createElement(_col.default, {
          lg: 8,
          md: 8,
          sm: 0,
          xs: 0
        }, _react.default.createElement(_card.default, {
          style: {
            padding: '20px 20px 0px 20px',
            margin: '0 auto',
            maxWidth: '240px'
          },
          cover: _react.default.createElement("img", {
            alt: "example",
            src: _this2.props.logoImageList[0] ? _this2.props.logoImageList[0].base64Url : '/static/images/icon-shop.png',
            style: {
              position: 'absolute'
            }
          })
        }, _react.default.createElement(_card.default.Meta, {
          title: _react.default.createElement(_upload.default, {
            showUploadList: false,
            beforeUpload: _this2.logoImageBeforeUpload
          }, _react.default.createElement(_button.default, {
            icon: "upload"
          }, "Upload Logo"))
        })), ","), _react.default.createElement(_col.default, {
          lg: 16,
          md: 16,
          sm: 24,
          xs: 24
        }, _reactDeviceDetect.isMobile ? _react.default.createElement("div", null, _react.default.createElement(_card.default, {
          style: {
            padding: '20px 20px 0px 20px',
            margin: '0 auto',
            maxWidth: '240px'
          },
          cover: _react.default.createElement("img", {
            alt: "example",
            src: _this2.props.logoImageList[0] ? _this2.props.logoImageList[0].base64Url : '/static/images/icon-shop.png',
            style: {
              position: 'absolute'
            }
          })
        }, _react.default.createElement(_card.default.Meta, {
          title: _react.default.createElement(_upload.default, {
            showUploadList: false,
            beforeUpload: _this2.logoImageBeforeUpload
          }, _react.default.createElement(_button.default, {
            icon: "upload"
          }, "Upload Logo"))
        })), ",") : _react.default.createElement("div", null), _react.default.createElement(_form.default, null, _react.default.createElement(_form.default.Item, {
          label: translate('my-shop:shop-name'),
          validateStatus: context.errors.name ? 'error' : undefined,
          help: context.errors.name
        }, _react.default.createElement(_input.default, {
          value: context.values.name,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'name',
              validateSchema: ShopValidateSchema,
              context: context
            });
          },
          placeholder: translate('my-shop:input-your-shop-name'),
          type: "text",
          name: "name"
        })), _react.default.createElement(_form.default.Item, {
          label: translate('my-shop:phone-number'),
          validateStatus: context.errors.phone ? 'error' : undefined,
          help: context.errors.phone
        }, _react.default.createElement(_input.default, {
          value: context.values.phone,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'phone',
              validateSchema: ShopValidateSchema,
              context: context
            });
          },
          placeholder: translate('my-shop:input-your-phone-number'),
          type: "text",
          name: "phone"
        })), _react.default.createElement(_form.default.Item, {
          label: translate('my-shop:shop-domain'),
          validateStatus: context.errors.domain ? 'error' : undefined,
          help: context.errors.domain
        }, _react.default.createElement(_input.default, {
          addonBefore: "https://",
          addonAfter: ".timmay.vn",
          value: context.values.domain,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'domain',
              validateSchema: ShopValidateSchema,
              context: context
            });
          },
          placeholder: translate('my-shop:input-your-shop-domain'),
          type: "text",
          name: "domain"
        })), _react.default.createElement(_form.default.Item, {
          label: translate('my-shop:shop-address'),
          validateStatus: context.errors.address ? 'error' : undefined,
          help: context.errors.address
        }, _react.default.createElement(_MapWithSearchBox.default, {
          selectAddress: context.setFieldValue
        })), _react.default.createElement(_form.default.Item, {
          label: translate('my-shop:email'),
          validateStatus: context.errors.email ? 'error' : undefined,
          help: context.errors.email
        }, _react.default.createElement(_input.default, {
          value: context.values.email,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'email',
              validateSchema: ShopValidateSchema,
              context: context
            });
          },
          placeholder: translate('my-shop:input your email'),
          type: "text",
          name: "email"
        })), _react.default.createElement(_form.default.Item, {
          label: translate('my-shop:introduce-store-min'),
          validateStatus: context.errors.description ? 'error' : undefined,
          help: context.errors.description
        }, _react.default.createElement(_input.default.TextArea, {
          value: context.values.description,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'description',
              validateSchema: ShopValidateSchema,
              context: context
            });
          },
          placeholder: translate('my-shop:input-your-introduce-store'),
          name: "description",
          autosize: {
            minRows: 5
          }
        })), _react.default.createElement(_form.default.Item, {
          label: translate('my-shop:add-introduce-images')
        }, _react.default.createElement("div", {
          className: "clearfix"
        }, _react.default.createElement(_upload.default, {
          listType: "picture-card",
          multiple: true,
          beforeUpload: _this2.introImageBeforeUpload,
          onRemove: _this2.removeIntroImage,
          fileList: _this2.props.introImageList.map(function (item, index) {
            return {
              uid: index,
              name: index,
              status: 'done',
              url: item.base64Url
            };
          }),
          onPreview: _this2.handlePreview
        }, uploadButton), _react.default.createElement(_modal.default, {
          visible: _this2.state.previewVisible,
          footer: null,
          onCancel: _this2.handleCancel
        }, _react.default.createElement("img", {
          alt: "example",
          style: {
            width: '100%'
          },
          src: _this2.state.previewImage
        }))))))), !_reactDeviceDetect.isMobile ? _react.default.createElement(_row.default, null, _react.default.createElement(_button.default, {
          type: "primary",
          onClick: function onClick() {
            return context.handleSubmit();
          },
          className: "next-button",
          size: "large"
        }, translate('create-shop:next'))) : _react.default.createElement("div", null)), _reactDeviceDetect.isMobile ? _react.default.createElement(_button.default, {
          type: "primary",
          onClick: function onClick() {
            return context.handleSubmit();
          },
          className: "next-button-mobile",
          size: "large"
        }, translate('create-shop:next')) : _react.default.createElement("div", null));
      });
    }
  }]);

  return CreateShopStep3;
}(_react.default.Component);

var _default = (0, _i18n.withNamespaces)('my-shop')(CreateShopStep3);

exports.default = _default;
//# sourceMappingURL=CreateShopStep3.js.map