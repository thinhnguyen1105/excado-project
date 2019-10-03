"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/card/style");

var _card = _interopRequireDefault(require("antd/lib/card"));

require("antd/lib/upload/style");

var _upload = _interopRequireDefault(require("antd/lib/upload"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

require("./AdsenseInfo.less");

var yup = _interopRequireWildcard(require("yup"));

var _formik = require("formik");

var _core = require("../../../../../core");

var _i18n = require("../../../../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var AdsenseInfo = function AdsenseInfo(props) {
  var BrandValidateSchema = yup.object().shape({
    imageUrl: yup.string().required(props.t('admin-adsense:pleaseUploadImage')),
    hyperlink: yup.string().required(props.t('admin-adsense:pleaseInputHyperlink'))
  });
  var initialValues = props.adsenseInfo && props.adsenseInfo._id ? {
    imageUrl: props.adsenseInfo.imageUrl,
    hyperlink: props.adsenseInfo.hyperlink
  } : {
    imageUrl: '',
    hyperlink: ''
  };
  return _react.default.createElement("div", {
    className: "adsense-info"
  }, _react.default.createElement("h2", {
    className: "adsense-title"
  }, props.t('admin-adsense:adsense-info')), _react.default.createElement(_formik.Formik, {
    enableReinitialize: true,
    initialValues: initialValues,
    validateOnChange: false,
    validationSchema: BrandValidateSchema,
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
                _context.next = 2;
                return props.handleOk(values);

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
    return _react.default.createElement(_form.default, {
      onSubmit: context.handleSubmit
    }, _react.default.createElement(_form.default.Item, {
      label: "".concat(props.t('admin-adsense:ads-image')),
      validateStatus: context.errors.imageUrl ? 'error' : undefined,
      help: context.errors.imageUrl
    }, _react.default.createElement(_card.default, {
      style: {
        padding: '20px 20px 20px 20px',
        margin: '0 auto'
      },
      cover: context.values.imageUrl ? _react.default.createElement("img", {
        src: context.values.imageUrl,
        style: {
          width: 'auto',
          height: '460px',
          margin: '0 auto'
        }
      }) : null
    }, _react.default.createElement(_card.default.Meta, {
      title: _react.default.createElement(_upload.default, {
        beforeUpload: function beforeUpload(file) {
          props.uploadLogoImage(file);
          (0, _core.getBase64Image)(file, function (result) {
            context.setFieldValue('imageUrl', result);
          });
          return false;
        },
        showUploadList: false
      }, _react.default.createElement(_button.default, {
        icon: "upload"
      }, props.t('admin-adsense:upload-ads-image')))
    }))), _react.default.createElement(_form.default.Item, {
      label: "".concat(props.t('admin-adsense:ads-hyperlink')),
      validateStatus: context.errors.hyperlink ? 'error' : undefined,
      help: context.errors.hyperlink
    }, _react.default.createElement(_input.default, {
      value: context.values.hyperlink,
      onChange: context.handleChange,
      placeholder: props.t('admin-adsense:ads-hyperlink'),
      type: "text",
      name: "hyperlink",
      onBlur: function onBlur() {
        return (0, _core.validateField)({
          fieldName: 'hyperlink',
          validateSchema: BrandValidateSchema,
          context: context
        });
      }
    })), _react.default.createElement(_form.default.Item, {
      className: "button-right"
    }, _react.default.createElement(_button.default, {
      className: "save-button",
      type: "primary",
      htmlType: "submit",
      loading: props.loading
    }, props.t('common:save'))));
  }));
};

var _default = (0, _i18n.withNamespaces)('admin-adsense')(AdsenseInfo);

exports.default = _default;
//# sourceMappingURL=AdsenseInfo.js.map