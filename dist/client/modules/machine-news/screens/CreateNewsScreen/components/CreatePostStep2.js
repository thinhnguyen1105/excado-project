"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/divider/style");

var _divider = _interopRequireDefault(require("antd/lib/divider"));

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireWildcard(require("react"));

require("./CreatePost.less");

var _services = require("../../../../../services");

var _formik = require("formik");

var yup = _interopRequireWildcard(require("yup"));

var _core = require("../../../../../core");

var jsCookies = _interopRequireWildcard(require("js-cookie"));

var _slugify = _interopRequireDefault(require("slugify"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var CreatePostStep2 =
/*#__PURE__*/
function (_Component) {
  _inherits(CreatePostStep2, _Component);

  function CreatePostStep2() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreatePostStep2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreatePostStep2)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: false,
      createModel: false
    });

    _defineProperty(_assertThisInitialized(_this), "openCreateModel", function () {
      _this.setState({
        createModel: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeCreateModel", function () {
      _this.setState({
        createModel: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCreateModel",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(payload) {
        var idToken, serviceProxy, result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  isLoading: true
                });

                _context.prev = 1;
                idToken = jsCookies.get('token');
                serviceProxy = (0, _services.getServiceProxy)(idToken);
                _context.next = 6;
                return serviceProxy.createModel({
                  name: payload.modelName,
                  slug: (0, _slugify.default)(payload.modelName),
                  category: _this.props.categoryId,
                  brand: _this.props.brand
                });

              case 6:
                result = _context.sent;

                _message2.default.success("".concat(_this.props.t('create-news:create-model-successful')));

                _this.props.addNewModel({
                  _id: result.id,
                  name: payload.modelName,
                  slug: (0, _slugify.default)(payload.modelName),
                  category: _this.props.categories.filter(function (item) {
                    return item._id === _this.props.categoryId;
                  })[0],
                  brand: _this.props.brands.filter(function (item) {
                    return item._id === _this.props.brand;
                  })[0],
                  totalNews: 0,
                  createdAt: new Date().getTime()
                });

                _this.setState({
                  isLoading: false,
                  createModel: false
                });

                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);

                _message2.default.error(_context.t0.message);

                _this.setState({
                  isLoading: false
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(CreatePostStep2, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var YEAR_DATA = [];

      for (var i = 1900; i < new Date().getFullYear() + 1; i += 1) {
        YEAR_DATA.push(i);
      }

      YEAR_DATA.push(0);
      var formItemLayout = {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      };
      var isSeller = ['SELL', 'LEASE'].indexOf(this.props.newsType) > -1;
      var newsValidate = isSeller ? {
        categoryId: yup.string().required("".concat(this.props.t('create-news:input-category'))),
        brand: yup.string().required("".concat(this.props.t('create-news:input-brand'))),
        model: yup.string().required("".concat(this.props.t('create-news:input-model'))),
        selectedWeightRange: yup.number().required("".concat(this.props.t('create-news:input-weight-range'))),
        year: yup.number().required("".concat(this.props.t('create-news:input-year')))
      } : this.props.newsType === 'RENT' ? {
        categoryId: yup.string().required("".concat(this.props.t('create-news:input-category'))),
        brand: yup.string(),
        model: yup.string(),
        selectedWeightRange: yup.number().required("".concat(this.props.t('create-news:input-weight-range'))),
        selectedRentalPeriod: yup.number().required("".concat(this.props.t('create-news:input-time')))
      } : {
        categoryId: yup.string().required("".concat(this.props.t('create-news:input-category'))),
        brand: yup.string(),
        model: yup.string(),
        selectedWeightRange: yup.number().required("".concat(this.props.t('create-news:input-weight-range')))
      };
      var NewsValidateSchema = yup.object().shape(newsValidate);
      var ModelValidateSchema = yup.object().shape({
        modelName: yup.string().required("".concat(this.props.t('create-news:input-model-name')))
      });
      var initialValues = isSeller ? {
        categoryId: this.props.categoryId,
        brand: this.props.brand,
        model: this.props.model,
        selectedWeightRange: this.props.selectedWeightRange,
        year: this.props.year
      } : this.props.newsType === 'RENT' ? {
        categoryId: this.props.categoryId,
        brand: this.props.brand,
        model: this.props.model,
        selectedWeightRange: this.props.selectedWeightRange,
        selectedRentalPeriod: this.props.selectedRentalPeriod
      } : {
        categoryId: this.props.categoryId,
        brand: this.props.brand,
        model: this.props.model,
        selectedWeightRange: this.props.selectedWeightRange
      };
      return _react.default.createElement(_row.default, {
        className: "create-post-step-2"
      }, _react.default.createElement(_formik.Formik, {
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: NewsValidateSchema,
        onSubmit: function onSubmit(_values, formikBag) {
          _this2.props.nextStep();

          formikBag.resetForm({});
        }
      }, function (context) {
        return _react.default.createElement(_form.default, null, _react.default.createElement(_col.default, {
          xs: {
            span: 22,
            offset: 1
          },
          sm: {
            span: 20,
            offset: 2
          },
          md: {
            span: 16,
            offset: 4
          },
          lg: {
            span: 12,
            offset: 6
          }
        }, _react.default.createElement("div", {
          className: "white-box text-center"
        }, _react.default.createElement(_icon.default, {
          type: "left",
          className: "create-post__back-button cursor-pointer",
          onClick: _this2.props.backStep
        }), _react.default.createElement("h3", {
          className: "create-post__headline text-bold no-margin"
        }, "Nh\u1EADp th\xF4ng tin c\u01A1 b\u1EA3n (2/5)")), _react.default.createElement(_row.default, {
          gutter: 30,
          className: "flex-wrap"
        }, _react.default.createElement(_col.default, {
          xs: 24,
          sm: 12,
          lg: 8,
          style: {
            margin: '-1px'
          }
        }, _react.default.createElement("div", {
          className: "big-margin-top"
        }, _react.default.createElement("h3", {
          className: ""
        }, _this2.props.t('create-news:category'), " ", _react.default.createElement("span", {
          className: "text-red"
        }, "*")), _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          },
          validateStatus: context.errors.categoryId ? 'error' : undefined,
          help: context.errors.categoryId
        }, _react.default.createElement(_select.default, {
          showSearch: true,
          filterOption: function filterOption(inputValue, option) {
            return (0, _slugify.default)(option.props.children.toLowerCase()).indexOf((0, _slugify.default)(inputValue.toLocaleLowerCase())) === 0;
          },
          placeholder: _this2.props.t('create-news:select-category'),
          value: _this2.props.categoryId,
          className: "create-post__select-box",
          onChange: function onChange(value) {
            context.setFieldValue('model', undefined);
            context.setFieldValue('categoryId', value);

            _this2.props.changeData({
              categoryId: value,
              model: undefined
            });

            _this2.props.getModels({
              categoryId: value
            });
          },
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'categoryId',
              validateSchema: NewsValidateSchema,
              context: context
            });
          }
        }, _this2.props.categories.map(function (val) {
          return _react.default.createElement(_select.default.Option, {
            value: val._id,
            key: val._id
          }, val.name);
        }))))), _react.default.createElement(_col.default, {
          xs: 24,
          sm: 12,
          lg: 8,
          style: {
            margin: '-1px'
          }
        }, _react.default.createElement("div", {
          className: "big-margin-top"
        }, _react.default.createElement("h3", {
          className: ""
        }, _this2.props.t('create-news:brand'), " ", isSeller && _react.default.createElement("span", {
          className: "text-red"
        }, "*")), _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          },
          validateStatus: context.errors.brand ? 'error' : undefined,
          help: context.errors.brand
        }, _react.default.createElement(_select.default, {
          value: _this2.props.brand,
          className: "create-post__select-box",
          notFoundContent: _this2.props.loading ? _react.default.createElement("div", {
            style: {
              textAlign: 'center'
            }
          }, _react.default.createElement(_spin.default, {
            size: "small"
          })) : null,
          showSearch: true,
          filterOption: false,
          placeholder: _this2.props.t('create-news:select-brand'),
          onSearch: _this2.props.getBrands,
          onSelect: function onSelect(value) {
            context.setFieldValue('brand', value);
            context.setFieldValue('model', undefined);

            _this2.props.changeData({
              brand: value,
              model: undefined
            });

            _this2.props.getModels({
              categoryId: value
            });
          },
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'brand',
              validateSchema: NewsValidateSchema,
              context: context
            });
          },
          dropdownRender: function dropdownRender(menu) {
            return _react.default.createElement("div", null, menu, _react.default.createElement(_divider.default, {
              style: {
                margin: '2px 0'
              }
            }), _react.default.createElement("div", {
              style: {
                padding: '4px',
                fontSize: '12px',
                textAlign: 'center'
              }
            }, _this2.props.t('create-news:display'), " ", _this2.props.brands.length, " ", _this2.props.t('create-news:of-total'), " 2000"));
          }
        }, _this2.props.brands.map(function (val) {
          return _react.default.createElement(_select.default.Option, {
            value: val._id,
            key: val._id
          }, val.name);
        }))))), _react.default.createElement(_col.default, {
          xs: 24,
          sm: 12,
          lg: 8,
          style: {
            margin: '-1px'
          }
        }, _react.default.createElement("div", {
          className: "big-margin-top"
        }, _react.default.createElement("h3", {
          className: ""
        }, _this2.props.t('create-news:model'), " ", isSeller && _react.default.createElement("span", {
          className: "text-red"
        }, "*")), _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          },
          validateStatus: context.errors.model ? 'error' : undefined,
          help: context.errors.model
        }, _react.default.createElement(_select.default, {
          value: _this2.props.model,
          className: "create-post__select-box",
          notFoundContent: _this2.props.loading ? _react.default.createElement("div", {
            style: {
              textAlign: 'center'
            }
          }, _react.default.createElement(_spin.default, {
            size: "small"
          })) : null,
          showSearch: true,
          filterOption: false,
          placeholder: _this2.props.t('create-news:select-model'),
          onSearch: function onSearch(value) {
            return _this2.props.getModels({
              search: value
            });
          },
          onSelect: function onSelect(value) {
            context.setFieldValue('model', value);

            _this2.props.changeData({
              model: value
            });
          },
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'model',
              validateSchema: NewsValidateSchema,
              context: context
            });
          },
          dropdownRender: function dropdownRender(menu) {
            return _react.default.createElement("div", null, menu, _this2.props.models.length > 0 && _react.default.createElement(_divider.default, {
              style: {
                margin: '2px 0'
              }
            }), _this2.props.models.length > 0 && _react.default.createElement("div", {
              style: {
                padding: '4px',
                fontSize: '12px',
                textAlign: 'center'
              }
            }, _this2.props.t('create-news:display'), " ", _this2.props.models.length, " ", _this2.props.t('create-news:of-total'), " 8000"));
          }
        }, _this2.props.brand && _this2.props.categoryId ? _this2.props.models.map(function (val) {
          return _react.default.createElement(_select.default.Option, {
            value: val._id,
            key: val._id
          }, val.name);
        }) : _this2.props.brand ? _react.default.createElement(_select.default.Option, {
          value: 0,
          key: 'nokey',
          disabled: true
        }, _this2.props.t('create-news:no-model')) : _react.default.createElement(_select.default.Option, {
          value: 0,
          key: 'nokey',
          disabled: true
        }, _this2.props.t('create-news:input-category-brand')), _this2.props.brand && _this2.props.categoryId && _react.default.createElement(_select.default.Option, {
          disabled: true,
          key: 'create-model',
          style: {
            textAlign: 'center'
          }
        }, _react.default.createElement(_button.default, {
          type: "primary",
          onClick: _this2.openCreateModel
        }, "+ ", _this2.props.t('create-news:add-model'))))), _this2.state.createModel && _react.default.createElement(_formik.Formik, {
          initialValues: {
            modelName: ''
          },
          validateOnChange: false,
          validationSchema: ModelValidateSchema,
          onSubmit: function onSubmit(values, formikBag) {
            _this2.handleCreateModel(values);

            formikBag.resetForm({});
          }
        }, function (context2) {
          return _react.default.createElement(_modal.default, {
            title: _this2.props.t('create-news:add-new-model'),
            visible: _this2.state.createModel,
            onOk: context2.handleSubmit,
            onCancel: _this2.closeCreateModel,
            okText: _this2.props.t('create-news:save'),
            cancelText: _this2.props.t('create-news:cancel'),
            confirmLoading: _this2.state.isLoading
          }, _react.default.createElement(_form.default, {
            layout: "horizontal"
          }, _react.default.createElement(_form.default.Item, _extends({
            label: _this2.props.t('create-news:category-label')
          }, formItemLayout, {
            style: {
              marginBottom: '0px'
            }
          }), _react.default.createElement("strong", null, _this2.props.categories.filter(function (item) {
            return item._id === _this2.props.categoryId;
          })[0].name)), _react.default.createElement(_form.default.Item, _extends({}, formItemLayout, {
            label: _this2.props.t('create-news:brand-label'),
            style: {
              marginBottom: '0px'
            }
          }), _react.default.createElement("strong", null, _this2.props.brands.filter(function (item) {
            return item._id === _this2.props.brand;
          })[0].name)), _react.default.createElement(_form.default.Item, _extends({}, formItemLayout, {
            label: _this2.props.t('create-news:model-label'),
            validateStatus: context2.errors.modelName ? 'error' : undefined,
            help: context2.errors.modelName
          }), _react.default.createElement(_input.default, {
            value: context2.values.modelName,
            onChange: context2.handleChange,
            onBlur: function onBlur() {
              return (0, _core.validateField)({
                fieldName: 'modelName',
                validateSchema: ModelValidateSchema,
                context: context2
              });
            },
            placeholder: _this2.props.t('create-news:model-name'),
            name: "modelName"
          }))));
        }))), _react.default.createElement(_col.default, {
          xs: 24,
          sm: 12,
          lg: 8,
          style: {
            margin: '-1px'
          }
        }, _react.default.createElement("div", {
          className: "big-margin-top"
        }, _react.default.createElement("h3", {
          className: ""
        }, _this2.props.t('create-news:weight-range'), " ", _react.default.createElement("span", {
          className: "text-red"
        }, "*")), _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          },
          validateStatus: context.errors.selectedWeightRange ? 'error' : undefined,
          help: context.errors.selectedWeightRange
        }, _react.default.createElement(_select.default, {
          placeholder: _this2.props.t('create-news:weight-range'),
          value: _this2.props.selectedWeightRange,
          className: "create-post__select-box",
          onChange: function onChange(value) {
            context.setFieldValue('selectedWeightRange', value);

            _this2.props.changeData({
              selectedWeightRange: value
            });
          },
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'selectedWeightRange',
              validateSchema: NewsValidateSchema,
              context: context
            });
          }
        }, _this2.props.weightRanges.sort(function (a, b) {
          return a.min - b.min;
        }).map(function (item) {
          return _react.default.createElement(_select.default.Option, {
            value: item._id,
            key: item._id
          }, item.max ? "".concat(_this2.props.t('create-news:from'), " ").concat(item.min, " ").concat(_this2.props.t('create-news:to'), " ").concat(item.max, " ").concat(_this2.props.t('create-news:ton')) : "".concat(_this2.props.t('create-news:more-than'), " ").concat(item.min, " ").concat(_this2.props.t('create-news:ton')));
        }))))), _react.default.createElement(_col.default, {
          xs: 24,
          sm: 12,
          lg: 8,
          style: {
            margin: '-1px'
          }
        }, isSeller ? _react.default.createElement("div", {
          className: "big-margin-top"
        }, _react.default.createElement("h3", {
          className: ""
        }, _this2.props.t('create-news:year'), " ", _react.default.createElement("span", {
          className: "text-red"
        }, "*")), _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          },
          validateStatus: context.errors.year ? 'error' : undefined,
          help: context.errors.year
        }, _react.default.createElement(_select.default, {
          showSearch: true,
          filterOption: function filterOption(inputValue, option) {
            return (0, _core.convertVietnamese)(option.props.children.toString()).indexOf(inputValue) === 0;
          },
          placeholder: _this2.props.t('create-news:select-year'),
          value: _this2.props.year,
          className: "create-post__select-box",
          onChange: function onChange(value) {
            context.setFieldValue('year', value);

            _this2.props.changeData({
              year: value
            });
          },
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'year',
              validateSchema: NewsValidateSchema,
              context: context
            });
          }
        }, YEAR_DATA.reverse().map(function (item) {
          return _react.default.createElement(_select.default.Option, {
            key: item,
            value: item
          }, item > 0 ? item : 'Không xác định');
        })))) : _this2.props.newsType === 'RENT' ? _react.default.createElement("div", {
          className: "big-margin-top"
        }, _react.default.createElement("h3", {
          className: ""
        }, _this2.props.t('create-news:time'), " ", _react.default.createElement("span", {
          className: "text-red"
        }, "*")), _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          },
          validateStatus: context.errors.selectedRentalPeriod ? 'error' : undefined,
          help: context.errors.selectedRentalPeriod
        }, _react.default.createElement(_select.default, {
          placeholder: _this2.props.t('create-news:time'),
          value: _this2.props.selectedRentalPeriod,
          className: "create-post__select-box",
          onChange: function onChange(value) {
            context.setFieldValue('selectedRentalPeriod', value);

            _this2.props.changeData({
              selectedRentalPeriod: value
            });
          },
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'selectedRentalPeriod',
              validateSchema: NewsValidateSchema,
              context: context
            });
          }
        }, _this2.props.rentalPeriods.sort(function (a, b) {
          return a.min - b.min;
        }).map(function (item) {
          return _react.default.createElement(_select.default.Option, {
            value: item._id,
            key: item._id
          }, item.max ? "".concat(_this2.props.t('create-news:from'), " ").concat(item.min, " ").concat(_this2.props.t('create-news:to'), " ").concat(item.max, " ").concat(_this2.props.t('create-news:month')) : "".concat(_this2.props.t('create-news:more-than'), " ").concat(item.min, " ").concat(_this2.props.t('create-news:month')));
        })))) : null)), _react.default.createElement("div", {
          className: "note"
        }, _react.default.createElement("div", null, _react.default.createElement("i", null, _this2.props.t('create-news:weight-range-note')))), _react.default.createElement("div", {
          className: "create-post__next-button text-center big-margin-top cursor-pointer",
          onClick:
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee2() {
            var validateResult;
            return _regenerator.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return context.validateForm();

                  case 3:
                    validateResult = _context2.sent;

                    if (validateResult && !Object.keys(validateResult).length || !validateResult) {
                      _this2.props.nextStep();
                    }

                    _context2.next = 9;
                    break;

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](0);

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[0, 7]]);
          }))
        }, _react.default.createElement("h3", {
          className: "no-margin text-bold text-white"
        }, _this2.props.t('create-news:next').toUpperCase()))));
      }));
    }
  }]);

  return CreatePostStep2;
}(_react.Component);

var _default = CreatePostStep2;
exports.default = _default;
//# sourceMappingURL=CreatePostStep2.js.map