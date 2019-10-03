"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/upload/style");

var _upload = _interopRequireDefault(require("antd/lib/upload"));

require("antd/lib/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

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

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var config = _interopRequireWildcard(require("../../../../../config"));

require("./CreatePost.less");

var uuid = _interopRequireWildcard(require("uuid"));

var _lodash = _interopRequireDefault(require("lodash"));

var _formik = require("formik");

var yup = _interopRequireWildcard(require("yup"));

var _core = require("../../../../../core");

var jsCookies = _interopRequireWildcard(require("js-cookie"));

var _services = require("../../../../../services");

var _slugify = _interopRequireDefault(require("slugify"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var CreatePostStep5 =
/*#__PURE__*/
function (_Component) {
  _inherits(CreatePostStep5, _Component);

  function CreatePostStep5() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreatePostStep5);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreatePostStep5)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      previewVisible: false,
      previewImage: '',
      isUploading: false,
      models: [],
      isLoading: false,
      createModel: false,
      uploadPercent: ''
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

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      return _this.setState({
        previewVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePreview", function (file) {
      _this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (obj) {
      var fileExtensionRegex = /\.(gif|jpg|jpeg|tiff|png|JPG|PNG|JPEG|GIF|TIFF)$/;
      var filterFileList = obj.fileList.filter(function (val) {
        return fileExtensionRegex.test(val.name);
      });

      if (filterFileList.length > 15) {
        _message2.default.error("".concat(_this.props.t('create-news:upload-image-limit')));
      } else {
        _this.props.changeFileList({
          fileList: filterFileList
        });

        if (filterFileList.length < obj.fileList.length) {
          _message2.default.error("".concat(_this.props.t('create-news:upload-image-error')), 5);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "beforeUpload", function (file) {
      var fileExtensionRegex = /\.(gif|jpg|jpeg|tiff|png|JPG|PNG|JPEG|GIF|TIFF)$/;
      var allowedUpload = true;

      if (!fileExtensionRegex.test(file.name)) {
        allowedUpload = false;
      }

      if (!allowedUpload) {// message.error('Ảnh không quá 2MB và chỉ nhận các định dạng PNG, JPG, JPEG.', 5);
      } else {
        _this.uploadImage(file);
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "uploadImage",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(image) {
        var formData, result;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append('image', image.originFileObj ? image.originFileObj : image);
                _context2.prev = 2;
                _context2.next = 5;
                return _this.setState({
                  isUploading: true
                });

              case 5:
                _context2.next = 7;
                return (0, _axios.default)({
                  method: 'post',
                  url: "".concat(config.config.url.api, "/upload-image"),
                  data: formData,
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  },
                  onUploadProgress: function onUploadProgress(progressEvent) {
                    _this.setState({
                      uploadPercent: (progressEvent.loaded / progressEvent.total * 100).toFixed(2)
                    });
                  }
                });

              case 7:
                result = _context2.sent;

                _this.props.changeData({
                  imageUrls: [].concat(_toConsumableArray(_this.props.imageUrls), [{
                    uid: image.uid,
                    url: result.data
                  }])
                });

                _this.setState({
                  isUploading: false
                });

                _context2.next = 17;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](2);

                _message2.default.error("".concat(_this.props.t('create-news:error-happen')), 4);

                _this.setState({
                  isUploading: false
                }); // tslint:disable-next-line


                console.log(_context2.t0);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 12]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "convertPriceToText", function (value) {
      if (value) {
        if (value <= 1000) {
          return "".concat(_this.props.t('create-news:price-limit'));
        } else {
          // tslint:disable-next-line
          var DOCSO = function () {
            var t = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"],
                r = function r(_r, n) {
              var o = "",
                  a = Math.floor(_r / 10),
                  e = _r % 10;
              return a > 1 ? (o = " " + t[a] + " mươi", 1 == e && (o += " mốt")) : 1 == a ? (o = " mười", 1 == e && (o += " một")) : n && e > 0 && (o = " lẻ"), 5 == e && a >= 1 ? o += " lăm" : 4 == e && a >= 1 ? o += " tư" : (e > 1 || 1 == e && 0 == a) && (o += " " + t[e]), o;
            },
                n = function n(_n, o) {
              var a = "",
                  e = Math.floor(_n / 100),
                  _n = _n % 100;

              return o || e > 0 ? (a = " " + t[e] + " trăm", a += r(_n, !0)) : a = r(_n, !1), a;
            },
                o = function o(t, r) {
              var o = "",
                  a = Math.floor(t / 1e6),
                  t = t % 1e6;
              a > 0 && (o = n(a, r) + " triệu", r = !0);
              var e = Math.floor(t / 1e3),
                  t = t % 1e3;
              return e > 0 && (o += n(e, r) + " ngàn", r = !0), t > 0 && (o += n(t, r)), o;
            };

            return {
              doc: function doc(r) {
                if (0 == r) return t[0];
                var n = "",
                    a = "";

                do {
                  var ty = r % 1e9,
                      r = Math.floor(r / 1e9),
                      n = r > 0 ? o(ty, !0) + a + n : o(ty, !1) + a + n,
                      a = " tỷ";
                } while (r > 0);

                return n.trim();
              }
            };
          }();

          var text = DOCSO.doc(value) + ' đồng';
          return text.charAt(0).toUpperCase() + text.slice(1);
        }
      } else return '';
    });

    return _this;
  }

  _createClass(CreatePostStep5, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isSeller = ['SELL', 'LEASE'].indexOf(this.props.newsType) > -1;
      var YEAR_DATA = [];

      for (var i = 1900; i < new Date().getFullYear() + 1; i += 1) {
        YEAR_DATA.push(i);
      }

      YEAR_DATA.push(0);

      var uploadButton = _react.default.createElement("div", null, _react.default.createElement(_icon.default, {
        type: "camera"
      }), _react.default.createElement("div", {
        className: "ant-upload-text"
      }, this.props.t('create-news:upload').toUpperCase()));

      var formItemLayout = {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      };
      var ModelValidateSchema = yup.object().shape({
        modelName: yup.string().required("".concat(this.props.t('create-news:input-model-name')))
      });
      var validateSchema = isSeller ? {
        newsType: yup.string().required("".concat(this.props.t('create-news:input-news-type'))),
        categoryId: yup.string().required("".concat(this.props.t('create-news:input-cateogry'))),
        brand: yup.string().required("".concat(this.props.t('create-news:input-brand'))),
        model: yup.string().required("".concat(this.props.t('create-news:input-model'))),
        selectedWeightRange: yup.number().required("".concat(this.props.t('create-news:input-weight-range'))),
        year: yup.number().required("".concat(this.props.t('create-news:input-year'))),
        location: yup.string().required("".concat(this.props.t('create-news:input-location'))),
        state: yup.string().required("".concat(this.props.t('create-news:input-state'))),
        serialNo: yup.string(),
        title: yup.string().required("".concat(this.props.t('create-news:title-required'))),
        description: yup.string().required("".concat(this.props.t('create-news:input-description')))
      } : this.props.newsType === 'RENT' ? {
        newsType: yup.string().required("".concat(this.props.t('create-news:input-news-type'))),
        categoryId: yup.string().required("".concat(this.props.t('create-news:input-category'))),
        brand: yup.string(),
        model: yup.string(),
        selectedWeightRange: yup.number().required("".concat(this.props.t('create-news:input-weight-range'))),
        selectedRentalPeriod: yup.number().required("".concat(this.props.t('create-news:input-time'))),
        location: yup.string(),
        state: yup.string(),
        serialNo: yup.string(),
        title: yup.string().required("".concat(this.props.t('create-news:title-required'))),
        description: yup.string()
      } : {
        newsType: yup.string().required("".concat(this.props.t('create-news:input-news-type'))),
        categoryId: yup.string().required("".concat(this.props.t('create-news:input-category'))),
        brand: yup.string(),
        model: yup.string(),
        selectedWeightRange: yup.number().required("".concat(this.props.t('create-news:input-weight-range'))),
        location: yup.string(),
        state: yup.string(),
        serialNo: yup.string(),
        title: yup.string().required("".concat(this.props.t('create-news:title-required'))),
        description: yup.string()
      };
      var NewsValidateSchema = yup.object().shape(validateSchema);
      var initialValues = isSeller ? {
        newsType: this.props.newsType ? _core.newsTypes.filter(function (val) {
          return val.value === _this2.props.newsType;
        })[0].label : undefined,
        categoryId: this.props.categoryId,
        brand: this.props.brand,
        model: this.props.model,
        selectedWeightRange: this.props.selectedWeightRange,
        year: this.props.year,
        location: this.props.location,
        state: this.props.state,
        serialNo: this.props.serialNo,
        usedHours: this.props.usedHours,
        priceType: this.props.priceType,
        price: this.props.price,
        title: this.props.title,
        description: this.props.description
      } : this.props.newsType === 'RENT' ? {
        newsType: this.props.newsType ? _core.newsTypes.filter(function (val) {
          return val.value === _this2.props.newsType;
        })[0].label : undefined,
        categoryId: this.props.categoryId,
        brand: this.props.brand,
        model: this.props.model,
        selectedWeightRange: this.props.selectedWeightRange,
        selectedRentalPeriod: this.props.selectedRentalPeriod,
        location: this.props.location,
        state: this.props.state,
        serialNo: this.props.serialNo,
        usedHours: this.props.usedHours,
        priceType: this.props.priceType,
        price: this.props.price,
        title: this.props.title,
        description: this.props.description
      } : {
        newsType: this.props.newsType ? _core.newsTypes.filter(function (val) {
          return val.value === _this2.props.newsType;
        })[0].label : undefined,
        categoryId: this.props.categoryId,
        brand: this.props.brand,
        model: this.props.model,
        selectedWeightRange: this.props.selectedWeightRange,
        location: this.props.location,
        state: this.props.state,
        serialNo: this.props.serialNo,
        usedHours: this.props.usedHours,
        priceType: this.props.priceType,
        price: this.props.price,
        title: this.props.title,
        description: this.props.description
      };
      return _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
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
      }, _react.default.createElement(_formik.Formik, {
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: NewsValidateSchema,
        validate: function validate(values) {
          var errors = {};

          if (values.priceType === 'FIXED' && isSeller) {
            if (!values.price) {
              errors.price = "".concat(_this2.props.t('create-news:input-price'));
            }
          }

          return errors;
        },
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref3 = _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee3(_values, formikBag) {
            return _regenerator.default.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return _this2.props.submit();

                  case 2:
                    formikBag.resetForm({});

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x3, _x4) {
            return _ref3.apply(this, arguments);
          };
        }()
      }, function (context) {
        return _react.default.createElement(_form.default, null, _react.default.createElement("div", {
          className: "white-box text-center"
        }, _react.default.createElement(_icon.default, {
          type: "left",
          className: "create-post__back-button cursor-pointer",
          onClick: _this2.props.backStep
        }), _react.default.createElement("h3", {
          className: "create-post__headline text-bold no-margin"
        }, _this2.props.t('create-news:check-news-title'))), _react.default.createElement("h2", {
          className: "create-post__session-headline"
        }, _this2.props.t('create-news:news-type')), _react.default.createElement(_row.default, {
          gutter: 30
        }, _react.default.createElement(_col.default, {
          xs: 24
        }, _react.default.createElement("div", {
          className: "white-box justify-space-between vertical-center big-margin-top cursor-pointer",
          onClick: function onClick() {
            return _this2.props.toStep(1);
          }
        }, _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          },
          validateStatus: context.errors.newsType ? 'error' : undefined,
          help: context.errors.newsType
        }, _react.default.createElement(_input.default, {
          className: "hidden-input bold-input",
          value: context.values.newsType,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'newsType',
              validateSchema: NewsValidateSchema,
              context: context
            });
          },
          placeholder: "".concat(_this2.props.t('create-news:input-news-type')),
          type: "text",
          name: "newsType"
        })), _react.default.createElement(_icon.default, {
          type: "right"
        })))), _react.default.createElement("h2", {
          className: "create-post__session-headline"
        }, _this2.props.t('create-news:basic-infomation')), _react.default.createElement(_row.default, {
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
        }, "+ ", _this2.props.t('create-news:add-new-model'))))), _this2.state.createModel && _react.default.createElement(_formik.Formik, {
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
        }, _this2.props.weightRanges.map(function (item) {
          return _react.default.createElement(_select.default.Option, {
            value: item._id,
            key: item.min
          }, item.max ? "T\u1EEB ".concat(item.min, " \u0111\u1EBFn ").concat(item.max, " t\u1EA5n") : "Tr\xEAn ".concat(item.min, " t\u1EA5n"));
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
            value: item,
            key: item
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
            key: item.min
          }, item.max ? "".concat(_this2.props.t('create-news:from'), " ").concat(item.min, " ").concat(_this2.props.t('create-news:to'), " ").concat(item.max, " ").concat(_this2.props.t('create-news:month')) : "".concat(_this2.props.t('create-news:more-than'), " ").concat(item.min, " ").concat(_this2.props.t('create-news:month')));
        })))) : null)), _react.default.createElement("h2", {
          className: "create-post__session-headline"
        }, _this2.props.t('create-news:detail-infomation')), _react.default.createElement(_row.default, {
          gutter: 30,
          className: "flex-wrap"
        }, _react.default.createElement(_col.default, {
          xs: 24,
          sm: 12,
          style: {
            margin: '-1px'
          }
        }, _react.default.createElement("div", {
          className: "big-margin-top"
        }, _react.default.createElement("h3", {
          className: ""
        }, _this2.props.t('create-news:location'), " ", isSeller && _react.default.createElement("span", {
          className: "text-red"
        }, "*")), _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          },
          validateStatus: context.errors.location ? 'error' : undefined,
          help: context.errors.location
        }, _react.default.createElement(_select.default, {
          placeholder: _this2.props.t('create-news:select-location'),
          value: _this2.props.location,
          className: "create-post__select-box",
          onChange: function onChange(value) {
            context.setFieldValue('location', value);

            _this2.props.changeData({
              location: value
            });
          },
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'location',
              validateSchema: NewsValidateSchema,
              context: context
            });
          }
        }, _this2.props.provinces.map(function (val) {
          return _react.default.createElement(_select.default.Option, {
            value: val._id,
            key: val._id
          }, val.name);
        }))))), _react.default.createElement(_col.default, {
          xs: 24,
          sm: 12,
          style: {
            margin: '-1px'
          }
        }, _react.default.createElement("div", {
          className: "big-margin-top"
        }, _react.default.createElement("h3", {
          className: ""
        }, _this2.props.t('create-news:state'), " ", isSeller && _react.default.createElement("span", {
          className: "text-red"
        }, "*")), _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          },
          validateStatus: context.errors.state ? 'error' : undefined,
          help: context.errors.state
        }, _react.default.createElement(_select.default, {
          placeholder: _this2.props.t('create-news:select-state'),
          value: _this2.props.state,
          className: "create-post__select-box",
          onChange: function onChange(value) {
            context.setFieldValue('state', value);

            _this2.props.changeData({
              state: value
            });
          },
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'state',
              validateSchema: NewsValidateSchema,
              context: context
            });
          }
        }, _react.default.createElement(_select.default.Option, {
          value: 'NEW'
        }, _this2.props.t('create-news:new')), _react.default.createElement(_select.default.Option, {
          value: 'USED'
        }, _this2.props.t('create-news:used')), _react.default.createElement(_select.default.Option, {
          value: 'LIQUIDATE'
        }, _this2.props.t('create-news:liquidate')))))), _react.default.createElement(_col.default, {
          xs: 24,
          sm: 12,
          style: {
            margin: '-1px'
          }
        }, _react.default.createElement("div", {
          className: "big-margin-top"
        }, _react.default.createElement("h3", {
          className: ""
        }, _this2.props.t('create-news:machine-serial')), _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          },
          validateStatus: context.errors.serialNo ? 'error' : undefined,
          help: context.errors.serialNo
        }, _react.default.createElement(_input.default, {
          type: "text",
          value: _this2.props.serialNo,
          placeholder: _this2.props.t('create-news:placeholder-machine-serial'),
          onChange: function onChange(e) {
            context.setFieldValue('serialNo', e.target.value);

            _this2.props.changeData({
              serialNo: e.target.value
            });
          },
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'serialNo',
              validateSchema: NewsValidateSchema,
              context: context
            });
          }
        })))), _react.default.createElement(_col.default, {
          xs: 24,
          sm: 12,
          style: {
            margin: '-1px'
          }
        }, _react.default.createElement("div", {
          className: "big-margin-top"
        }, _react.default.createElement("h3", {
          className: ""
        }, _this2.props.t('create-news:used-hours')), _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          },
          validateStatus: context.errors.usedHours ? 'error' : undefined,
          help: context.errors.usedHours
        }, _react.default.createElement(_input.default, {
          type: "number",
          value: _this2.props.usedHours,
          placeholder: _this2.props.t('create-news:placeholder-used-hourrs'),
          onChange: function onChange(e) {
            if (Number(e.target.value) > 0) {
              context.setFieldError('usedHours', '');
            }

            context.setFieldValue('usedHours', e.target.value);

            _this2.props.changeData({
              usedHours: e.target.value
            });
          }
        })))), _react.default.createElement(_col.default, {
          xs: 24
        }, _react.default.createElement("div", {
          className: "big-margin-top"
        }, _react.default.createElement("h3", {
          className: ""
        }, _this2.props.t('create-news:price'), " ", _react.default.createElement("span", {
          className: "text-red"
        }, "*")), _react.default.createElement("div", {
          className: "vertical-center"
        }, _react.default.createElement(_checkbox.default, {
          className: "create-post__price-checkbox",
          checked: _this2.props.priceType === 'NEGOTIATION',
          onChange: function onChange(e) {
            if (e.target.checked) {
              context.setFieldError('price', '');
              context.setFieldValue('priceType', 'NEGOTIATION');

              _this2.props.changeData({
                priceType: 'NEGOTIATION'
              });
            }
          }
        }), _react.default.createElement("h4", {
          className: "no-margin"
        }, _this2.props.t('create-news:contact-price'))), _react.default.createElement("div", {
          className: "vertical-center slight-margin-top"
        }, _react.default.createElement(_checkbox.default, {
          className: "create-post__price-checkbox",
          checked: _this2.props.priceType === 'FIXED',
          onChange: function onChange(e) {
            if (e.target.checked) {
              context.setFieldValue('priceType', 'FIXED');

              _this2.props.changeData({
                priceType: 'FIXED'
              });
            }
          }
        }), _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          },
          validateStatus: context.errors.price ? 'error' : undefined,
          help: context.errors.price
        }, _react.default.createElement(_input.default, {
          placeholder: _this2.props.t('create-news:placeholder-price'),
          addonAfter: "VND",
          value: _this2.props.price,
          disabled: _this2.props.priceType === 'NEGOTIATION',
          type: "number",
          onChange: function onChange(e) {
            if (e.target.value) {
              context.setFieldError('price', '');
            }

            context.setFieldValue('price', e.target.value);

            _this2.props.changeData({
              price: e.target.value
            });
          }
        }))), _react.default.createElement("h4", null, _this2.convertPriceToText(_this2.props.price))))), _react.default.createElement("h2", {
          className: "create-post__session-headline"
        }, _this2.props.t('create-news:description-title')), _react.default.createElement(_row.default, {
          gutter: 30
        }, _react.default.createElement(_col.default, {
          xs: 24
        }, _react.default.createElement("div", {
          className: "big-margin-top"
        }, _react.default.createElement("div", {
          className: "big-margin-top"
        }, _react.default.createElement("h3", {
          className: ""
        }, _this2.props.t('create-news:title')), _react.default.createElement("div", {
          className: "white-box"
        }, _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          }
        }, _this2.props.title))), _react.default.createElement("h3", {
          className: "",
          style: {
            marginTop: '15px'
          }
        }, _this2.props.t('create-news:choose-image'), " ", isSeller && _react.default.createElement("span", {
          className: "text-red"
        }, "*")), _react.default.createElement("div", {
          className: "white-box"
        }, _react.default.createElement(_spin.default, {
          spinning: _this2.state.isUploading,
          tip: "".concat(_this2.state.uploadPercent, "% ...")
        }, _react.default.createElement(_upload.default, {
          beforeUpload: _this2.beforeUpload,
          listType: "picture-card",
          multiple: true,
          fileList: _this2.props.fileList.map(function (val) {
            if (val.uid) {
              return val;
            } else {
              var deepCloneValue = JSON.parse(JSON.stringify(val));
              deepCloneValue.uid = uuid.v4();
              return deepCloneValue;
            }
          }),
          onPreview: _this2.handlePreview,
          onChange: _lodash.default.debounce(_this2.handleChange, 300)
        }, uploadButton))), _react.default.createElement("div", {
          className: "big-margin-top"
        }, _react.default.createElement("h3", {
          className: ""
        }, _this2.props.t('create-news:description-title'), " ", isSeller && _react.default.createElement("span", {
          className: "text-red"
        }, "*")), _react.default.createElement("div", {
          className: "white-box"
        }, _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          },
          validateStatus: context.errors.description ? 'error' : undefined,
          help: context.errors.description
        }, _react.default.createElement(_input.default.TextArea, {
          className: "create-post__no-border-textarea-box",
          value: _this2.props.description,
          onChange: function onChange(e) {
            context.setFieldValue('description', e.target.value);

            _this2.props.changeData({
              description: e.target.value
            });
          },
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'description',
              validateSchema: NewsValidateSchema,
              context: context
            });
          },
          autosize: {
            minRows: 5
          }
        }))))))), !_this2.state.isUploading && _react.default.createElement("div", {
          className: "create-post__next-button text-center big-margin-top cursor-pointer",
          onClick:
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee4() {
            var validateResult;
            return _regenerator.default.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return context.validateForm();

                  case 3:
                    validateResult = _context4.sent;

                    if (validateResult && !Object.keys(validateResult).length || !validateResult) {
                      _this2.props.submit();
                    }

                    _context4.next = 9;
                    break;

                  case 7:
                    _context4.prev = 7;
                    _context4.t0 = _context4["catch"](0);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, null, [[0, 7]]);
          }))
        }, _react.default.createElement("h3", {
          className: "no-margin text-bold text-white"
        }, _this2.props.loading && _react.default.createElement(_icon.default, {
          type: "loading"
        }), " ", _this2.props.isCreate ? "".concat(_this2.props.t('create-news:create-post')) : "".concat(_this2.props.t('create-news:save-post')))));
      }), _react.default.createElement(_modal.default, {
        visible: this.state.previewVisible,
        footer: null,
        onCancel: this.handleCancel
      }, _react.default.createElement("img", {
        alt: "example",
        style: {
          width: '100%'
        },
        src: this.state.previewImage
      }))));
    }
  }]);

  return CreatePostStep5;
}(_react.Component);

var _default = CreatePostStep5;
exports.default = _default;
//# sourceMappingURL=CreatePostStep5.js.map