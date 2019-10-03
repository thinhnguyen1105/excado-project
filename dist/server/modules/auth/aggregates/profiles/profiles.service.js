"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var _ = require("../..");

var yup = _interopRequireWildcard(require("yup"));

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _config = require("../../../../config");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var profileService = {
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(params) {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!params.authUser || !params.authUser.id)) {
                _context.next = 4;
                break;
              }

              throw new _core.NotAuthenticatedError();

            case 4:
              _context.next = 6;
              return params.repository.findById(params.authUser.id);

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
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (id) {
                _context2.next = 2;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

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
  patch: function () {
    var _patch = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(id, data, params) {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              (0, _core.validateOperation)(data.operation, ['updateDetail', 'updateAvatar', 'changePassword']);
              _context3.next = 3;
              return profileService[data.operation](id, data.payload, params);

            case 3:
              return _context3.abrupt("return", {});

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function patch(_x4, _x5, _x6) {
      return _patch.apply(this, arguments);
    }

    return patch;
  }(),
  updateDetail: function () {
    var _updateDetail = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(id, data, params) {
      var existedUser, validationSchema, user, currentCustomClaims;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // 1. authorize
              (0, _core.ensureOwner)(params.authUser, id); // 2. validate

              if (id) {
                _context4.next = 3;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 3:
              _context4.next = 5;
              return params.repository.findById(id);

            case 5:
              existedUser = _context4.sent;

              if (existedUser) {
                _context4.next = 8;
                break;
              }

              throw new _core.EntityNotFoundError('User');

            case 8:
              validationSchema = yup.object().shape({
                familyName: yup.string().min(2, 'Too short').max(50, 'Too long'),
                givenName: yup.string().min(2, 'Too short').max(50, 'Too long'),
                phoneNo: yup.string().matches(_config.config.regex.phone, 'Invalid phone number'),
                email: yup.string().email('Invalid email address'),
                address: yup.string().min(20, 'Too short').max(500, 'Too long'),
                description: yup.string().min(20, 'Too short').max(1000, 'Too long')
              });
              _context4.next = 11;
              return validationSchema.validate(data);

            case 11:
              if (!(data.familyName || data.givenName)) {
                _context4.next = 14;
                break;
              }

              _context4.next = 14;
              return _firebaseAdmin.default.auth().updateUser(existedUser._id, {
                displayName: (0, _.addFullName)({
                  familyName: data.familyName || existedUser.familyName,
                  givenName: data.givenName || existedUser.givenName,
                  type: 'givenNameFirst'
                })
              });

            case 14:
              if (!data.province) {
                _context4.next = 22;
                break;
              }

              _context4.next = 17;
              return _firebaseAdmin.default.auth().getUser(existedUser._id);

            case 17:
              user = _context4.sent;
              currentCustomClaims = user.customClaims || {};
              currentCustomClaims['province'] = data.province;
              _context4.next = 22;
              return _firebaseAdmin.default.auth().setCustomUserClaims(existedUser._id, currentCustomClaims);

            case 22:
              _context4.next = 24;
              return params.repository.update(_objectSpread({
                id: id
              }, data, params.modificationInfo, {
                fullName: (0, _.addFullName)({
                  familyName: data.familyName || existedUser.familyName,
                  givenName: data.givenName || existedUser.givenName,
                  type: 'givenNameFirst'
                })
              }));

            case 24:
              return _context4.abrupt("return", {});

            case 25:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function updateDetail(_x7, _x8, _x9) {
      return _updateDetail.apply(this, arguments);
    }

    return updateDetail;
  }(),
  updateAvatar: function () {
    var _updateAvatar = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(id, data, params) {
      var existedUser, user, currentCustomClaims;
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

              throw new _core.UserInputError('Invalid query params');

            case 3:
              _context5.next = 5;
              return params.repository.findById(id);

            case 5:
              existedUser = _context5.sent;

              if (existedUser) {
                _context5.next = 8;
                break;
              }

              throw new _core.EntityNotFoundError('User');

            case 8:
              _context5.next = 10;
              return _firebaseAdmin.default.auth().getUser(existedUser._id);

            case 10:
              user = _context5.sent;
              currentCustomClaims = user.customClaims || {};
              currentCustomClaims['avatarUrl'] = data.avatarUrl;
              _context5.next = 15;
              return _firebaseAdmin.default.auth().setCustomUserClaims(existedUser._id, currentCustomClaims);

            case 15:
              _context5.next = 17;
              return params.repository.update(_objectSpread({
                id: id,
                avatarUrl: data.avatarUrl
              }, params.modificationInfo));

            case 17:
              return _context5.abrupt("return", {});

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function updateAvatar(_x10, _x11, _x12) {
      return _updateAvatar.apply(this, arguments);
    }

    return updateAvatar;
  }(),
  changePassword: function () {
    var _changePassword = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(id, data, params) {
      var existedUser, validationSchema;
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

              throw new _core.UserInputError('Invalid query params');

            case 3:
              _context6.next = 5;
              return params.repository.findById(id);

            case 5:
              existedUser = _context6.sent;

              if (existedUser) {
                _context6.next = 8;
                break;
              }

              throw new _core.EntityNotFoundError('User');

            case 8:
              validationSchema = yup.object().shape({
                newPassword: yup.string().matches(_config.config.regex.password, 'Password must be minimum 6 characters, at least 1 upper letter, 1 number and 1 special character')
              });
              _context6.next = 11;
              return validationSchema.validate(data);

            case 11:
              _context6.next = 13;
              return _firebaseAdmin.default.auth().updateUser(existedUser._id, {
                password: data.newPassword
              });

            case 13:
              return _context6.abrupt("return", {});

            case 14:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function changePassword(_x13, _x14, _x15) {
      return _changePassword.apply(this, arguments);
    }

    return changePassword;
  }()
};
var _default = profileService;
exports.default = _default;
//# sourceMappingURL=profiles.service.js.map