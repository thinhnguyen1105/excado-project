"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

require("./ModelModal.less");

var _formik = require("formik");

var yup = _interopRequireWildcard(require("yup"));

var _core = require("../../../../../core");

var _slugify = _interopRequireDefault(require("slugify"));

var _i18n = require("../../../../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ModelModal = function ModelModal(props) {
  var translate = props.t;
  var formItemLayout = {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  };
  var initialValues = props.modelInfo && props.modelInfo._id ? {
    name: props.modelInfo.name,
    brand: props.modelInfo.brand._id,
    category: props.modelInfo.category._id
  } : {
    name: '',
    brand: '',
    category: ''
  };
  var ModelValidateSchema = yup.object().shape({
    name: yup.string().required(translate('admin-models:pleaseInputModelName')),
    brand: yup.string().required(translate('admin-models:pleaseSelectBrand')),
    category: yup.string().required(translate('admin-models:pleaseSelectCategory'))
  });
  return _react.default.createElement(_formik.Formik, {
    initialValues: initialValues,
    validateOnChange: false,
    validationSchema: ModelValidateSchema,
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
                  brand: '',
                  category: ''
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
  }, function (modelContext) {
    return _react.default.createElement(_modal.default, {
      title: props.modelInfo && props.modelInfo._id ? "".concat(translate('admin-models:edit-model'), ": ").concat(props.modelInfo.name) : "".concat(translate('admin-models:create-model')),
      visible: props.visible,
      onOk: modelContext.handleSubmit,
      onCancel: props.handleCancel,
      okText: translate('common:save'),
      cancelText: translate('common:cancel'),
      confirmLoading: props.loading,
      className: "model-modal"
    }, _react.default.createElement(_form.default, {
      onSubmit: modelContext.handleSubmit
    }, props.modelInfo && props.modelInfo._id ? _react.default.createElement(_form.default.Item, _extends({
      label: "".concat(translate('admin-models:brand-name'))
    }, formItemLayout, {
      style: {
        marginBottom: '0px'
      }
    }), _react.default.createElement("strong", null, props.modelInfo.brand.name)) : _react.default.createElement(_form.default.Item, _extends({
      label: "".concat(translate('admin-models:brand-name')),
      style: {
        marginBottom: '0px'
      },
      validateStatus: modelContext.errors.brand ? 'error' : undefined,
      help: modelContext.errors.brand
    }, formItemLayout), _react.default.createElement(_select.default, {
      value: modelContext.values.brand ? modelContext.values.brand : undefined,
      notFoundContent: props.loadingBrands ? _react.default.createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, _react.default.createElement(_spin.default, {
        size: "small"
      })) : null,
      showSearch: true,
      filterOption: false,
      placeholder: translate('admin-models:select-brand'),
      onSearch: props.getBrands,
      onSelect: function onSelect(value) {
        modelContext.setFieldValue('brand', value);
      },
      onBlur: function onBlur() {
        return (0, _core.validateField)({
          fieldName: 'brand',
          validateSchema: ModelValidateSchema,
          context: modelContext
        });
      }
    }, props.brands.map(function (val) {
      return _react.default.createElement(_select.default.Option, {
        value: val._id,
        key: val._id
      }, val.name);
    }))), props.modelInfo && props.modelInfo._id ? _react.default.createElement(_form.default.Item, _extends({
      label: "".concat(translate('admin-models:category-name'))
    }, formItemLayout, {
      style: {
        marginBottom: '0px'
      }
    }), _react.default.createElement("strong", null, props.modelInfo.category.name)) : _react.default.createElement(_form.default.Item, _extends({
      style: {
        marginBottom: '0px'
      },
      validateStatus: modelContext.errors.category ? 'error' : undefined,
      help: modelContext.errors.category,
      label: "".concat(translate('admin-models:category-name'))
    }, formItemLayout), _react.default.createElement(_select.default, {
      showSearch: true,
      filterOption: function filterOption(inputValue, option) {
        return (0, _slugify.default)(option.props.children.toLowerCase()).indexOf((0, _slugify.default)(inputValue.toLocaleLowerCase())) === 0;
      },
      placeholder: translate('admin-models:select-category'),
      value: modelContext.values.category ? modelContext.values.category : undefined,
      onChange: function onChange(value) {
        modelContext.setFieldValue('category', value);
      },
      onBlur: function onBlur() {
        return (0, _core.validateField)({
          fieldName: 'category',
          validateSchema: ModelValidateSchema,
          context: modelContext
        });
      }
    }, props.categories.map(function (val) {
      return _react.default.createElement(_select.default.Option, {
        value: val._id,
        key: val._id
      }, val.name);
    }))), _react.default.createElement(_form.default.Item, _extends({
      label: "".concat(translate('admin-models:model-name')),
      validateStatus: modelContext.errors.name ? 'error' : undefined,
      help: modelContext.errors.name
    }, formItemLayout), _react.default.createElement(_input.default, {
      value: modelContext.values.name,
      onChange: modelContext.handleChange,
      placeholder: translate('admin-models:model-name'),
      type: "text",
      name: "name",
      onBlur: function onBlur() {
        return (0, _core.validateField)({
          fieldName: 'name',
          validateSchema: ModelValidateSchema,
          context: modelContext
        });
      }
    }))));
  });
};

var _default = (0, _i18n.withNamespaces)('admin-models')(ModelModal);

exports.default = _default;
//# sourceMappingURL=ModelModal.js.map