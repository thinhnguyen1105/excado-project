"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var _ = require("../..");

var yup = _interopRequireWildcard(require("yup"));

var _slugify = _interopRequireDefault(require("slugify"));

var _readFromCache = require("./middlewares/readFromCache.middleware");

var _writeToCache = require("./middlewares/writeToCache.middleware");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var brandService = {
  setup: function setup(app, path) {
    app.get(path + '/customs/find-top-brands', _readFromCache.readFromCache,
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_req, res) {
        var result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _.brandRepository.findTopBrands();

              case 3:
                result = _context.sent;
                (0, _writeToCache.writeToCache)(path + "/customs/find-top-brands", result);
                res.status(200).json(result);
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

                _core.logger.error(_context.t0);

                res.status(_context.t0.status || 500).end(_context.t0.message || 'Internal server error');

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    app.get(path + '/customs/find-brand-detail/:brandSlug', _readFromCache.readFromCache,
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(req, res) {
        var brandDetail;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _.brandRepository.findBrandDetail(req.params.brandSlug);

              case 3:
                brandDetail = _context2.sent;
                (0, _writeToCache.writeToCache)(path + "/customs/find-brand-detail/".concat(req.params.brandSlug), brandDetail);
                res.status(200).json(brandDetail);
                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);

                _core.logger.error(_context2.t0);

                res.status(_context2.t0.status || 500).end(_context2.t0.message || 'Internal server error');

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
    app.get(path + '/customs/find-brand-list', _readFromCache.readFromCache,
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(_req, res) {
        var result;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _.brandRepository.findBrandList();

              case 3:
                result = _context3.sent;
                (0, _writeToCache.writeToCache)(path + '/customs/find-brand-list', result);
                res.status(200).json(result);
                _context3.next = 12;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);

                _core.logger.error(_context3.t0);

                res.status(_context3.t0.status || 500).end(_context3.t0.message || 'Internal server error');

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }));

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());
  },
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(params) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return params.repository.find(params.query);

            case 2:
              return _context4.abrupt("return", _context4.sent);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function find(_x7) {
      return _find.apply(this, arguments);
    }

    return find;
  }(),
  get: function () {
    var _get = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(id, _params) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (id) {
                _context5.next = 2;
                break;
              }

              throw new _core.BrandInputError('Invalid query params');

            case 2:
              _context5.next = 4;
              return _.brandRepository.findById(id);

            case 4:
              return _context5.abrupt("return", _context5.sent);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function get(_x8, _x9) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(data, params) {
      var validationSchema, id;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              // 1. authorize
              // ensurePermission(params.authUser, PERMISSIONS.NEWS.CREATE);
              // 2. validate
              validationSchema = yup.object().shape({
                name: yup.string().required('Name is required'),
                logoImage: yup.string().required('Logo image is required')
              });
              _context6.next = 3;
              return validationSchema.validate(data);

            case 3:
              _context6.next = 5;
              return _.brandRepository.create(_objectSpread({}, data, params.creationInfo, {
                slug: (0, _slugify.default)(data.name)
              }));

            case 5:
              id = _context6.sent;
              return _context6.abrupt("return", {
                id: id
              });

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function create(_x10, _x11) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),
  patch: function () {
    var _patch = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7(id, data, params) {
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              (0, _core.validateOperation)(data.operation, ['updateDetail']);
              brandService[data.operation](id, data.payload, params);
              return _context7.abrupt("return", {});

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function patch(_x12, _x13, _x14) {
      return _patch.apply(this, arguments);
    }

    return patch;
  }(),
  updateDetail: function () {
    var _updateDetail = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee8(id, data, params) {
      var existedBrand, validationSchema;
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (id) {
                _context8.next = 2;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 2:
              existedBrand = params.repository.findById(id);

              if (existedBrand) {
                _context8.next = 5;
                break;
              }

              throw new _core.EntityNotFoundError('Brand');

            case 5:
              validationSchema = yup.object().shape({
                name: yup.string(),
                logoImage: yup.string()
              });
              _context8.next = 8;
              return validationSchema.validate(data);

            case 8:
              _context8.next = 10;
              return params.repository.update(_objectSpread({
                id: id
              }, data, params.modificationInfo, {
                slug: (0, _slugify.default)(data.name)
              }));

            case 10:
              return _context8.abrupt("return", {});

            case 11:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    function updateDetail(_x15, _x16, _x17) {
      return _updateDetail.apply(this, arguments);
    }

    return updateDetail;
  }()
};
var _default = brandService;
exports.default = _default;
//# sourceMappingURL=brands.service.js.map