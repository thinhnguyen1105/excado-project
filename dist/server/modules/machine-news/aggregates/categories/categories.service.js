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

var _readFromCache = require("../brands/middlewares/readFromCache.middleware");

var _writeToCache = require("../brands/middlewares/writeToCache.middleware");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var categoryService = {
  setup: function setup(app, path) {
    app.get(path + '/customs/find-category-detail/:categorySlug', _readFromCache.readFromCache,
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(req, res) {
        var categorySlug, categoryDetail;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                categorySlug = req.params.categorySlug;
                _context.next = 4;
                return _.categoryRepository.findCategoryDetail(categorySlug);

              case 4:
                categoryDetail = _context.sent;
                (0, _writeToCache.writeToCache)(path + "/customs/find-category-detail/".concat(categorySlug), categoryDetail);
                res.status(200).json(categoryDetail);
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

                _core.logger.error(_context.t0);

                res.status(_context.t0.status || 500).end(_context.t0.message || 'Internal server error');

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(_params) {
      var categories, result, otherCategory;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _.categoryRepository.find();

            case 2:
              categories = _context2.sent;
              result = [];
              categories.data.forEach(function (item) {
                if (['chung-loai-khac'].indexOf(item.slug) === -1) {
                  result.push(item);
                }
              });
              otherCategory = categories.data.filter(function (item) {
                return item.slug === 'chung-loai-khac';
              })[0];

              if (otherCategory) {
                result.push(otherCategory);
              }

              return _context2.abrupt("return", {
                before: categories.before,
                after: categories.after,
                data: result
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function find(_x3) {
      return _find.apply(this, arguments);
    }

    return find;
  }(),
  get: function () {
    var _get = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(id, _params) {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (id) {
                _context3.next = 2;
                break;
              }

              throw new _core.CategoryInputError('Invalid query params');

            case 2:
              _context3.next = 4;
              return _.categoryRepository.findById(id);

            case 4:
              return _context3.abrupt("return", _context3.sent);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function get(_x4, _x5) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(data, params) {
      var validationSchema, id;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // 1. authorize
              // ensurePermission(params.authUser, PERMISSIONS.NEWS.CREATE);
              // 2. validate
              validationSchema = yup.object().shape({
                name: yup.string().required('Category name is required'),
                imageUrl: yup.string().required('Category image is required')
              });
              _context4.next = 3;
              return validationSchema.validate(data);

            case 3:
              _context4.next = 5;
              return _.categoryRepository.create(_objectSpread({}, data, params.creationInfo, {
                slug: (0, _slugify.default)(data.name)
              }));

            case 5:
              id = _context4.sent;
              return _context4.abrupt("return", {
                id: id
              });

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function create(_x6, _x7) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),
  patch: function () {
    var _patch = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(id, data, params) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              (0, _core.validateOperation)(data.operation, ['updateDetail']);
              categoryService[data.operation](id, data.payload, params);
              return _context5.abrupt("return", {});

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function patch(_x8, _x9, _x10) {
      return _patch.apply(this, arguments);
    }

    return patch;
  }(),
  updateDetail: function () {
    var _updateDetail = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(id, data, params) {
      var existedCategory, validationSchema;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (id) {
                _context6.next = 2;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 2:
              existedCategory = params.repository.findById(id);

              if (existedCategory) {
                _context6.next = 5;
                break;
              }

              throw new _core.EntityNotFoundError('Category');

            case 5:
              validationSchema = yup.object().shape({
                name: yup.string(),
                imageUrl: yup.string()
              });
              _context6.next = 8;
              return validationSchema.validate(data);

            case 8:
              _context6.next = 10;
              return params.repository.update(_objectSpread({
                id: id
              }, data, params.modificationInfo, {
                slug: (0, _slugify.default)(data.name)
              }));

            case 10:
              return _context6.abrupt("return", {});

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function updateDetail(_x11, _x12, _x13) {
      return _updateDetail.apply(this, arguments);
    }

    return updateDetail;
  }()
};
var _default = categoryService;
exports.default = _default;
//# sourceMappingURL=categories.service.js.map