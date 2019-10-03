"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var yup = _interopRequireWildcard(require("yup"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var adsenseService = {
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(params) {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // 1. authorize
              // 2. validate
              (0, _core.validateQuery)(params.query); // 3. do business logic
              // 4. persist to db

              _context.next = 3;
              return params.repository.find(params.query);

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
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
    _regenerator.default.mark(function _callee2(id, params) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (id) {
                _context2.next = 2;
                break;
              }

              throw new _core.UserInputError('Invalid id');

            case 2:
              _context2.next = 4;
              return params.repository.findById(id);

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
      var id;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _core.validatePayload)({
                position: yup.number().required('Order is required').oneOf([1, 2, 3, 4, 5, 6], 'Invalid position'),
                imageUrl: yup.string().required('Image is required'),
                hyperlink: yup.string().required('Adsense hyperlink is required')
              }, data);

            case 2:
              _context3.next = 4;
              return params.repository.create(_objectSpread({}, data, params.creationInfo));

            case 4:
              id = _context3.sent;
              return _context3.abrupt("return", {
                id: id
              });

            case 6:
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
              (0, _core.validateOperation)(data.operation, ['updateDetail', 'activate', 'deactivate']);
              _context4.next = 3;
              return adsenseService[data.operation](id, data.payload, params);

            case 3:
              return _context4.abrupt("return", {});

            case 4:
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
  }(),
  updateDetail: function () {
    var _updateDetail = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(id, data, params) {
      var existedAdsense;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return (0, _core.validatePayload)({
                position: yup.number().oneOf([1, 2, 3, 4, 5, 6], 'Invalid position'),
                imageUrl: yup.string(),
                hyperlink: yup.string()
              }, data);

            case 2:
              _context5.next = 4;
              return params.repository.findById(id);

            case 4:
              existedAdsense = _context5.sent;

              if (existedAdsense) {
                _context5.next = 7;
                break;
              }

              throw new _core.UserInputError('Ads didnt exist');

            case 7:
              _context5.next = 9;
              return params.repository.update(_objectSpread({
                id: id
              }, data));

            case 9:
              return _context5.abrupt("return", {});

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function updateDetail(_x9, _x10, _x11) {
      return _updateDetail.apply(this, arguments);
    }

    return updateDetail;
  }()
};
var _default = adsenseService;
exports.default = _default;
//# sourceMappingURL=adsense.service.js.map