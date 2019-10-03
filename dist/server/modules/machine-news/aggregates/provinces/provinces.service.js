"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var _ = require("../..");

var yup = _interopRequireWildcard(require("yup"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var provinceService = {
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_params) {
      var provinces, result, haNoi, hoChiMinh, haiPhong, daNang, otherCountry;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _.provinceRepository.find();

            case 2:
              provinces = _context.sent;
              result = [];
              haNoi = provinces.data.filter(function (item) {
                return item.slug === 'ha-noi';
              })[0];

              if (haNoi) {
                result.push(haNoi);
              }

              hoChiMinh = provinces.data.filter(function (item) {
                return item.slug === 'ho-chi-minh';
              })[0];

              if (hoChiMinh) {
                result.push(hoChiMinh);
              }

              haiPhong = provinces.data.filter(function (item) {
                return item.slug === 'hai-phong';
              })[0];

              if (haiPhong) {
                result.push(haiPhong);
              }

              daNang = provinces.data.filter(function (item) {
                return item.slug === 'da-nang';
              })[0];

              if (daNang) {
                result.push(daNang);
              }

              provinces.data.forEach(function (item) {
                if (['ha-noi', 'ho-chi-minh', 'hai-phong', 'da-nang', 'quoc-gia-khac'].indexOf(item.slug) === -1) {
                  result.push(item);
                }
              });
              otherCountry = provinces.data.filter(function (item) {
                return item.slug === 'quoc-gia-khac';
              })[0];

              if (otherCountry) {
                result.push(otherCountry);
              }

              return _context.abrupt("return", {
                before: provinces.before,
                after: provinces.after,
                data: result
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function find(_x) {
      return _find.apply(this, arguments);
    }

    return find;
  }(),
  get: function () {
    var _get = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(id, _params) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (id) {
                _context2.next = 2;
                break;
              }

              throw new _core.ProvinceInputError('Invalid query params');

            case 2:
              _context2.next = 4;
              return _.provinceRepository.findById(id);

            case 4:
              return _context2.abrupt("return", _context2.sent);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function get(_x2, _x3) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(data, params) {
      var validationSchema, id;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // 1. authorize
              // ensurePermission(params.authUser, PERMISSIONS.NEWS.CREATE);
              // 2. validate
              validationSchema = yup.object().shape({
                slug: yup.string().required('Slug is required'),
                name: yup.string().required('Name is required')
              });
              _context3.next = 3;
              return validationSchema.validate(data);

            case 3:
              _context3.next = 5;
              return _.provinceRepository.create(_objectSpread({}, data, params.creationInfo));

            case 5:
              id = _context3.sent;
              return _context3.abrupt("return", {
                id: id
              });

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function create(_x4, _x5) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),
  patch: function () {
    var _patch = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(id, data, params) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              provinceService[data.operation](id, data.payload, params);
              return _context4.abrupt("return", {});

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function patch(_x6, _x7, _x8) {
      return _patch.apply(this, arguments);
    }

    return patch;
  }()
};
var _default = provinceService;
exports.default = _default;
//# sourceMappingURL=provinces.service.js.map