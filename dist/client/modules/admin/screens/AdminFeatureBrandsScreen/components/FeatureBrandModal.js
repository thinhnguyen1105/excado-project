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

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

require("./FeatureBrandModal.less");

var yup = _interopRequireWildcard(require("yup"));

var _formik = require("formik");

var _core = require("../../../../../core");

var _i18n = require("../../../../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var FeatureBrandModal = function FeatureBrandModal(props) {
  var translate = props.t;
  var FeatureBrandValidateSchema = yup.object().shape({
    brand: yup.string().required(translate('admin-feature-brands:pleaseSelectBrand')),
    hyperlink: yup.string().required(translate('admin-feature-brands:pleaseInputHyperlink')),
    logoImage: yup.string().required(translate('admin-feature-brands:pleaseUploadBrandLogo')),
    order: yup.number().required(translate('admin-feature-brands:pleaseSelectOrder'))
  });
  var initialValues = props.featureBrandInfo && props.featureBrandInfo._id ? {
    brand: props.featureBrandInfo.brand._id,
    hyperlink: props.featureBrandInfo.hyperlink,
    logoImage: props.featureBrandInfo.logoImage,
    order: props.featureBrandInfo.order
  } : {
    brand: '',
    hyperlink: '',
    logoImage: '',
    order: 1
  };
  var orderOptions = [1, 2, 3, 4, 5, 6];
  return _react.default.createElement(_formik.Formik, {
    initialValues: initialValues,
    validateOnChange: false,
    validationSchema: FeatureBrandValidateSchema,
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
                  brand: '',
                  hyperlink: '',
                  logoImage: '',
                  order: 1
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
  }, function (context) {
    return _react.default.createElement(_modal.default, {
      title: props.featureBrandInfo && props.featureBrandInfo._id ? "".concat(translate('admin-feature-brands:edit-feature-brand'), ": ").concat(props.featureBrandInfo.brand.name) : "".concat(translate('admin-feature-brands:create-feature-brand')),
      visible: props.visible,
      onOk: context.handleSubmit,
      onCancel: props.handleCancel,
      okText: translate('common:save'),
      cancelText: translate('common:cancel'),
      confirmLoading: props.loading,
      className: "feature-brand-modal",
      width: 420
    }, _react.default.createElement(_form.default, {
      onSubmit: context.handleSubmit
    }, _react.default.createElement(_form.default.Item, {
      label: "".concat(translate('admin-feature-brands:brand-name')),
      style: {
        marginBottom: '0px'
      },
      validateStatus: context.errors.brand ? 'error' : undefined,
      help: context.errors.brand
    }, _react.default.createElement(_select.default, {
      value: context.values.brand ? context.values.brand : undefined,
      notFoundContent: props.loadingBrands ? _react.default.createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, _react.default.createElement(_spin.default, {
        size: "small"
      })) : null,
      showSearch: true,
      filterOption: false,
      placeholder: translate('admin-feature-brands:select-brand'),
      onSearch: props.getBrands,
      onSelect: function onSelect(value) {
        context.setFieldValue('brand', value);
      },
      onBlur: function onBlur() {
        return (0, _core.validateField)({
          fieldName: 'brand',
          validateSchema: FeatureBrandValidateSchema,
          context: context
        });
      }
    }, props.brands.map(function (val) {
      return _react.default.createElement(_select.default.Option, {
        value: val._id,
        key: val._id
      }, val.name);
    }))), _react.default.createElement(_form.default.Item, {
      label: "".concat(translate('admin-feature-brands:hyperlink')),
      validateStatus: context.errors.hyperlink ? 'error' : undefined,
      help: context.errors.hyperlink
    }, _react.default.createElement(_input.default, {
      value: context.values.hyperlink,
      onChange: context.handleChange,
      placeholder: translate('admin-feature-brands:hyperlink'),
      type: "text",
      name: "hyperlink",
      onBlur: function onBlur() {
        return (0, _core.validateField)({
          fieldName: 'hyperlink',
          validateSchema: FeatureBrandValidateSchema,
          context: context
        });
      }
    })), _react.default.createElement(_form.default.Item, {
      label: "".concat(translate('admin-feature-brands:order')),
      style: {
        marginBottom: '0px'
      },
      validateStatus: context.errors.order ? 'error' : undefined,
      help: context.errors.order
    }, _react.default.createElement(_select.default, {
      value: context.values.order ? context.values.order : undefined,
      placeholder: translate('admin-feature-brands:order'),
      onSelect: function onSelect(value) {
        context.setFieldValue('order', value);
      },
      onBlur: function onBlur() {
        return (0, _core.validateField)({
          fieldName: 'order',
          validateSchema: FeatureBrandValidateSchema,
          context: context
        });
      }
    }, orderOptions.map(function (val) {
      return _react.default.createElement(_select.default.Option, {
        value: val,
        key: val
      }, "#", val);
    }))), _react.default.createElement(_form.default.Item, {
      label: "".concat(translate('admin-feature-brands:brand-logo')),
      validateStatus: context.errors.logoImage ? 'error' : undefined,
      help: context.errors.logoImage
    }, _react.default.createElement(_card.default, {
      style: {
        padding: '20px 20px 0px 20px',
        margin: '0 auto'
      },
      cover: context.values.logoImage ? _react.default.createElement("img", {
        src: context.values.logoImage,
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
            context.setFieldValue('logoImage', result);
          });
          return false;
        },
        showUploadList: false
      }, _react.default.createElement(_button.default, {
        icon: "upload"
      }, translate('admin-feature-brands:upload-brand-logo')))
    })))));
  });
};

var _default = (0, _i18n.withNamespaces)('admin-feature-brands')(FeatureBrandModal);

exports.default = _default;
//# sourceMappingURL=FeatureBrandModal.js.map