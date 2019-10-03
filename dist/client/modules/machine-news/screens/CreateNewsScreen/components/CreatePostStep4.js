"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/upload/style");

var _upload = _interopRequireDefault(require("antd/lib/upload"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var config = _interopRequireWildcard(require("../../../../../config"));

var uuid = _interopRequireWildcard(require("uuid"));

var _lodash = _interopRequireDefault(require("lodash"));

require("./CreatePost.less");

var _formik = require("formik");

var yup = _interopRequireWildcard(require("yup"));

var _core = require("../../../../../core");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var CreatePostStep4 =
/*#__PURE__*/
function (_Component) {
  _inherits(CreatePostStep4, _Component);

  function CreatePostStep4() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreatePostStep4);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreatePostStep4)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      previewVisible: false,
      previewImage: '',
      isUploading: false,
      uploadPercent: ''
    });

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
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(image) {
        var formData, result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = new FormData();
                formData.append('image', image.originFileObj ? image.originFileObj : image);
                _context.prev = 2;

                _this.setState({
                  isUploading: true
                });

                _context.next = 6;
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

              case 6:
                result = _context.sent;

                _this.props.changeData({
                  imageUrls: [].concat(_toConsumableArray(_this.props.imageUrls), [{
                    uid: image.uid,
                    url: result.data
                  }])
                });

                _this.setState({
                  isUploading: false
                });

                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);

                _message2.default.error("".concat(_this.props.t('common:error-happen')), 4);

                _this.setState({
                  isUploading: false
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(CreatePostStep4, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isSeller = ['SELL', 'LEASE'].indexOf(this.props.newsType) > -1;
      var validateSchema = isSeller ? {
        description: yup.string().required("".concat(this.props.t('create-news:input-description'))).min(20, "".concat(this.props.t('create-news:input-description-limit')))
      } : {
        description: yup.string()
      };
      var NewsValidateSchema = yup.object().shape(validateSchema);

      var uploadButton = _react.default.createElement("div", null, _react.default.createElement(_icon.default, {
        type: "camera"
      }), _react.default.createElement("div", {
        className: "ant-upload-text"
      }, this.props.t('create-news:upload')));

      return _react.default.createElement(_row.default, null, _react.default.createElement(_formik.Formik, {
        initialValues: {
          description: this.props.description
        },
        validateOnChange: false,
        validationSchema: NewsValidateSchema,
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee2(_values, formikBag) {
            return _regenerator.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _this2.props.submit();

                  case 2:
                    formikBag.resetForm({
                      description: undefined
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
        }, _this2.props.t('create-news:input-title'))), _react.default.createElement(_row.default, {
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
        }, _this2.props.t('create-news:description-title'), " ", isSeller && _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", null, "(", _this2.props.t('create-news:limit-character'), ")"), _react.default.createElement("span", {
          className: "text-red"
        }, "*"))), _react.default.createElement("div", {
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
          _regenerator.default.mark(function _callee3() {
            var validateResult;
            return _regenerator.default.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return context.validateForm();

                  case 3:
                    validateResult = _context3.sent;

                    // tslint:disable-next-line:no-console
                    if (validateResult && !Object.keys(validateResult).length || !validateResult) {
                      if (!isSeller || _this2.props.imageUrls && _this2.props.imageUrls.length) {
                        _this2.props.nextStep();
                      } else {
                        _message2.default.error("{this.props.t('create-news:image-limit')}", 5);
                      }
                    }

                    _context3.next = 9;
                    break;

                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](0);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, null, [[0, 7]]);
          }))
        }, _react.default.createElement("h3", {
          className: "no-margin text-bold text-white"
        }, _this2.props.t('create-news:next').toUpperCase())), _react.default.createElement(_modal.default, {
          visible: _this2.state.previewVisible,
          footer: null,
          onCancel: _this2.handleCancel
        }, _react.default.createElement("img", {
          alt: "example",
          style: {
            width: '100%'
          },
          src: _this2.state.previewImage
        }))));
      }));
    }
  }]);

  return CreatePostStep4;
}(_react.Component);

var _default = CreatePostStep4;
exports.default = _default;
//# sourceMappingURL=CreatePostStep4.js.map