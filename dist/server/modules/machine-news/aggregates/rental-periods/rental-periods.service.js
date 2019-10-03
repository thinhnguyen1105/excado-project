"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var _rentalPeriods = require("./rental-periods.repository");

var yup = _interopRequireWildcard(require("yup"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var rentalPeriodService = {
  setup: function setup(app, path) {
    // TODO: Refactor setup method. Only register route handle, separate handle function
    app.get(path + '/customs/get-all',
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_req, res) {
        var data;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _rentalPeriods.rentalPeriodRepository.findAll();

              case 3:
                data = _context.sent;
                res.status(200).json({
                  data: data
                });
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                _core.logger.error(_context.t0);

                res.status(_context.t0.status || 500).end(_context.t0.message || 'Internal server error');

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  },
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

    function get(_x3, _x4) {
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
                min: yup.number().required('Min rental period is required').min(1, 'Min rental period must be greater than 1'),
                max: yup.number().min(data.min, "Max rental period must be greater than min rental period")
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

    function create(_x5, _x6) {
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
              (0, _core.validateOperation)(data.operation, ['updateDetail']);
              _context4.next = 3;
              return rentalPeriodService[data.operation](id, data.payload, params);

            case 3:
              return _context4.abrupt("return", {});

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function patch(_x7, _x8, _x9) {
      return _patch.apply(this, arguments);
    }

    return patch;
  }(),
  updateDetail: function () {
    var _updateDetail = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(id, data, params) {
      var existedRentalPeriod, validationSchema;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (id) {
                _context5.next = 2;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 2:
              _context5.next = 4;
              return params.repository.findById(id);

            case 4:
              existedRentalPeriod = _context5.sent;

              if (existedRentalPeriod) {
                _context5.next = 7;
                break;
              }

              throw new _core.EntityNotFoundError('Rental reriod');

            case 7:
              validationSchema = yup.object().shape({
                min: yup.number().min(1, 'Min rental period must be greater than 1'),
                max: yup.number().min(data.min || existedRentalPeriod.min, "Max rental period must be greater than min rental period")
              });
              _context5.next = 10;
              return validationSchema.validate(data);

            case 10:
              _context5.next = 12;
              return params.repository.update(_objectSpread({
                id: id
              }, data, params.modificationInfo));

            case 12:
              return _context5.abrupt("return", {});

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function updateDetail(_x10, _x11, _x12) {
      return _updateDetail.apply(this, arguments);
    }

    return updateDetail;
  }()
};
var _default = rentalPeriodService;
exports.default = _default;
//# sourceMappingURL=rental-periods.service.js.map