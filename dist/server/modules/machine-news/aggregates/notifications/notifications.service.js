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

var notificationStates = ['READ', 'UNREAD'];
var notificationTypes = ['FOLLOW_USER', 'FOLLOW_SHOP', 'CREATE_NEWS'];
var notificationsService = {
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref) {
      var query, repository, authUser;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _ref.query, repository = _ref.repository, authUser = _ref.authUser;

              if (!(!authUser || !authUser.id)) {
                _context.next = 3;
                break;
              }

              throw new _core.NotAuthenticatedError();

            case 3:
              // 2. validate
              (0, _core.validateQuery)(query); // 3. do business logic
              // 4. persist to db

              _context.next = 6;
              return repository.find(_objectSpread({}, query, {
                owner: authUser.id
              }));

            case 6:
              return _context.abrupt("return", _context.sent);

            case 7:
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
      var unreadNotifications;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // 1. authorize
              (0, _core.ensureOwner)(params.authUser, id); // 2. validate

              if (id) {
                _context2.next = 3;
                break;
              }

              throw new _core.UserInputError('Invalid id');

            case 3:
              _context2.next = 5;
              return params.repository.countUnreadNotifications(id);

            case 5:
              unreadNotifications = _context2.sent;
              return _context2.abrupt("return", {
                unreadNotifications: unreadNotifications
              });

            case 7:
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
              // 2. validate
              validationSchema = yup.object().shape({
                owner: yup.string().required('Owner is required'),
                news: yup.string().required('News is required'),
                state: yup.string().required('State type is required').oneOf(notificationStates),
                type: yup.string().required('Notification type is required').oneOf(notificationTypes)
              });
              _context3.next = 3;
              return validationSchema.validate(data);

            case 3:
              _context3.next = 5;
              return params.repository.create(_objectSpread({}, data, {
                createdAt: new Date().getTime()
              }));

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
              (0, _core.validateOperation)(data.operation, ['readAllNotifications', 'readNotification']);
              _context4.next = 3;
              return notificationsService[data.operation](id, data.payload, params);

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
  readAllNotifications: function () {
    var _readAllNotifications = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(id, _data, params) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              // 1. authorize
              (0, _core.ensureOwner)(params.authUser, id); // 2. validate

              if (id) {
                _context5.next = 3;
                break;
              }

              throw new _core.UserInputError('Invalid user id');

            case 3:
              _context5.next = 5;
              return params.repository.readAllNotifications(id);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function readAllNotifications(_x9, _x10, _x11) {
      return _readAllNotifications.apply(this, arguments);
    }

    return readAllNotifications;
  }(),
  readNotification: function () {
    var _readNotification = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(id, data, params) {
      var existedNotification;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              // 1. authorize
              (0, _core.ensureOwner)(params.authUser, id); // 2. validate

              if (id) {
                _context6.next = 3;
                break;
              }

              throw new _core.UserInputError('Invalid user id');

            case 3:
              _context6.next = 5;
              return params.repository.findById(data.notificationId);

            case 5:
              existedNotification = _context6.sent;

              if (existedNotification) {
                _context6.next = 8;
                break;
              }

              throw new _core.EntityNotFoundError('Notification');

            case 8:
              _context6.next = 10;
              return params.repository.update({
                id: existedNotification._id,
                state: 'READ',
                readAt: new Date().getTime()
              });

            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function readNotification(_x12, _x13, _x14) {
      return _readNotification.apply(this, arguments);
    }

    return readNotification;
  }()
};
var _default = notificationsService;
exports.default = _default;
//# sourceMappingURL=notifications.service.js.map