"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/card/style");

var _card = _interopRequireDefault(require("antd/lib/card"));

require("antd/lib/upload/style");

var _upload = _interopRequireDefault(require("antd/lib/upload"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

require("./BrandModal.less");

var _formik = require("formik");

var yup = _interopRequireWildcard(require("yup"));

var _core = require("../../../../../core");

var _i18n = require("../../../../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BrandModal = function BrandModal(props) {
  var translate = props.t;
  var BrandValidateSchema = yup.object().shape({
    name: yup.string().required(translate('admin-brands:pleaseInputBrandName')),
    logoImage: yup.string().required(translate('admin-brands:pleaseUploadBrandLogo'))
  });
  var initialValues = props.brandInfo && props.brandInfo._id ? {
    name: props.brandInfo.name,
    logoImage: props.brandInfo.logoImage
  } : {
    name: '',
    logoImage: ''
  };
  return _react.default.createElement(_formik.Formik, {
    initialValues: initialValues,
    validateOnChange: false,
    validationSchema: BrandValidateSchema,
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
                _context.next = 2;
                return props.handleOk(values);

              case 2:
                formikBag.resetForm({
                  name: '',
                  logoImage: ''
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  }, function (brandContext) {
    return _react.default.createElement(_modal.default, {
      title: props.brandInfo && props.brandInfo._id ? "".concat(translate('admin-brands:edit-brand'), ": ").concat(props.brandInfo.name) : "".concat(translate('admin-brands:create-brand')),
      visible: props.visible,
      onOk: brandContext.handleSubmit,
      onCancel: props.handleCancel,
      okText: translate('common:save'),
      cancelText: translate('common:cancel'),
      confirmLoading: props.loading,
      className: "brand-modal",
      width: 420
    }, _react.default.createElement(_form.default, {
      onSubmit: brandContext.handleSubmit
    }, _react.default.createElement(_form.default.Item, {
      label: "".concat(translate('admin-brands:brand-name')),
      validateStatus: brandContext.errors.name ? 'error' : undefined,
      help: brandContext.errors.name
    }, _react.default.createElement(_input.default, {
      value: brandContext.values.name,
      onChange: brandContext.handleChange,
      placeholder: translate('admin-brands:brand-name'),
      type: "text",
      name: "name",
      onBlur: function onBlur() {
        return (0, _core.validateField)({
          fieldName: 'name',
          validateSchema: BrandValidateSchema,
          context: brandContext
        });
      }
    })), _react.default.createElement(_form.default.Item, {
      label: "".concat(translate('admin-brands:brand-logo')),
      validateStatus: brandContext.errors.logoImage ? 'error' : undefined,
      help: brandContext.errors.logoImage
    }, _react.default.createElement(_card.default, {
      style: {
        padding: '20px 20px 0px 20px',
        margin: '0 auto'
      },
      cover: brandContext.values.logoImage ? _react.default.createElement("img", {
        src: brandContext.values.logoImage,
        style: {
          width: '100%',
          height: 'auto'
        }
      }) : null
    }, _react.default.createElement(_card.default.Meta, {
      title: _react.default.createElement(_upload.default, {
        beforeUpload: function beforeUpload(file) {
          props.uploadLogoImage(file);
          (0, _core.getBase64Image)(file, function (result) {
            brandContext.setFieldValue('logoImage', result);
          });
          return false;
        },
        showUploadList: false
      }, _react.default.createElement(_button.default, {
        icon: "upload"
      }, translate('admin-brands:upload-brand-logo')))
    })))));
  });
};

var _default = (0, _i18n.withNamespaces)('admin-brands')(BrandModal);

exports.default = _default;
//# sourceMappingURL=BrandModal.js.map