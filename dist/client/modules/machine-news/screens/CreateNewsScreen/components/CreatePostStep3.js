"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireWildcard(require("react"));

require("./CreatePost.less");

var _formik = require("formik");

var yup = _interopRequireWildcard(require("yup"));

var _core = require("../../../../../core");

var _slugify = _interopRequireDefault(require("slugify"));

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

var CreatePostStep3 =
/*#__PURE__*/
function (_Component) {
  _inherits(CreatePostStep3, _Component);

  function CreatePostStep3() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreatePostStep3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreatePostStep3)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

          var text = DOCSO.doc(value) + "".concat(_this.props.t('create-news:dong'));
          return text.charAt(0).toUpperCase() + text.slice(1);
        }
      } else return '';
    });

    return _this;
  }

  _createClass(CreatePostStep3, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isSeller = ['SELL', 'LEASE'].indexOf(this.props.newsType) > -1;
      var newsValidate = isSeller ? {
        location: yup.string().required("".concat(this.props.t('create-news:input-location'))),
        state: yup.string().required("".concat(this.props.t('create-news:input-state'))),
        serialNo: yup.string()
      } : {
        location: yup.string(),
        state: yup.string(),
        serialNo: yup.string()
      };
      var NewsValidateSchema = yup.object().shape(newsValidate);
      return _react.default.createElement(_row.default, null, _react.default.createElement(_formik.Formik, {
        initialValues: {
          location: this.props.location,
          state: this.props.state,
          price: this.props.price,
          priceType: this.props.priceType,
          usedHours: this.props.usedHours,
          serialNo: this.props.serialNo
        },
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
        onSubmit: function onSubmit(_values, formikBag) {
          _this2.props.nextStep();

          formikBag.resetForm({
            location: undefined,
            state: undefined,
            priceType: 'FIXED',
            price: 0
          });
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
        }, "Nh\u1EADp th\xF4ng tin chi ti\u1EBFt (3/5)")), _react.default.createElement(_row.default, {
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
        }, _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          },
          validateStatus: context.errors.location ? 'error' : undefined,
          help: context.errors.location
        }, _react.default.createElement("h3", {
          className: ""
        }, _this2.props.t('create-news:location'), " ", isSeller && _react.default.createElement("span", {
          className: "text-red"
        }, "*")), _react.default.createElement(_select.default, {
          showSearch: true,
          filterOption: function filterOption(inputValue, option) {
            return (0, _slugify.default)(option.props.children.toLowerCase()).indexOf((0, _slugify.default)(inputValue.toLocaleLowerCase())) === 0;
          },
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
        }, _react.default.createElement(_form.default.Item, {
          style: {
            marginBottom: '0px'
          },
          validateStatus: context.errors.state ? 'error' : undefined,
          help: context.errors.state
        }, _react.default.createElement("h3", {
          className: ""
        }, _this2.props.t('create-news:state'), " ", isSeller && _react.default.createElement("span", {
          className: "text-red"
        }, "*")), _react.default.createElement(_select.default, {
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
        }, _this2.props.t('create-news:state-new')), _react.default.createElement(_select.default.Option, {
          value: 'USED'
        }, _this2.props.t('create-news:state-used')), _react.default.createElement(_select.default.Option, {
          value: 'LIQUIDATE'
        }, _this2.props.t('create-news:state-liquidate')))))), _react.default.createElement(_col.default, {
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
          placeholder: "".concat(_this2.props.t('create-news:placeholder-machine-serial')),
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
          placeholder: _this2.props.t('create-news:placeholder-used-hours'),
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
          xs: 24,
          style: {
            margin: '-1px'
          }
        }, _react.default.createElement("div", {
          className: "big-margin-top"
        }, _react.default.createElement("h3", {
          className: ""
        }, "Gi\xE1 ", isSeller && _react.default.createElement("span", {
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
          value: _this2.props.price,
          addonAfter: "VND",
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
        }))), _react.default.createElement("h4", null, _this2.convertPriceToText(_this2.props.price))))), _react.default.createElement("div", {
          className: "create-post__next-button text-center big-margin-top cursor-pointer",
          onClick:
          /*#__PURE__*/
          _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee() {
            var validateResult;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return context.validateForm();

                  case 3:
                    validateResult = _context.sent;

                    if (validateResult && Object.keys(validateResult).length === 0 || !validateResult) {
                      _this2.props.nextStep();
                    }

                    _context.next = 9;
                    break;

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 7]]);
          }))
        }, _react.default.createElement("h3", {
          className: "no-margin text-bold text-white"
        }, _this2.props.t('create-news:next').toUpperCase()))));
      }));
    }
  }]);

  return CreatePostStep3;
}(_react.Component);

var _default = CreatePostStep3;
exports.default = _default;
//# sourceMappingURL=CreatePostStep3.js.map