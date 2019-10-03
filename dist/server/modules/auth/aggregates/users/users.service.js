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

var _users = require("./users.repository");

var _config = require("../../../../../client/config");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var usersService = {
  setup: function setup(app, path) {
    app.get(path + '/customs/check-email-exist/:email', usersService.checkEmailExist);
    app.get(path + '/customs/check-phone-number-exist/:phoneNo', usersService.checkPhoneNoExist);
  },
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
              // 1. authorize
              (0, _core.ensurePermission)(authUser, _.PERMISSIONS.USERS.VIEW); // 2. validate

              (0, _core.validateQuery)(query); // 3. do business logic
              // 4. persist to db

              _context.next = 5;
              return repository.find(query);

            case 5:
              return _context.abrupt("return", _context.sent);

            case 6:
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
              // 1. authorize
              (0, _core.ensurePermission)(params.authUser, _.PERMISSIONS.USERS.VIEW); // 2. validate

              if (id) {
                _context2.next = 3;
                break;
              }

              throw new _core.UserInputError('Invalid id');

            case 3:
              _context2.next = 5;
              return params.repository.findById(id);

            case 5:
              return _context2.abrupt("return", _context2.sent);

            case 6:
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
      var existedUser, newUser, roles, permissions, id;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // 1. authorize
              (0, _core.ensurePermission)(params.authUser, _.PERMISSIONS.USERS.CREATE); // 2. validate

              _context3.next = 3;
              return (0, _core.validatePayload)({
                email: yup.string().required('Email is required').email('Invalid email'),
                password: yup.string().required('Password is required').matches(_config.config.regex.password, 'Password must be minimum 6 characters, at least 1 upper letter, 1 number and 1 special character'),
                roles: yup.array(),
                familyName: yup.string().required('Family name is required').min(2, 'Too short').max(50, 'Too long'),
                givenName: yup.string().required('Given name is required').min(2, 'Too short').max(50, 'Too long')
              }, data);

            case 3:
              _context3.next = 5;
              return params.repository.findOne({
                email: data.email
              });

            case 5:
              existedUser = _context3.sent;

              if (!existedUser) {
                _context3.next = 8;
                break;
              }

              throw new _core.UserInputError('Email already exist');

            case 8:
              _context3.next = 10;
              return _firebaseAdmin.default.auth().createUser({
                email: data.email,
                password: data.password
              });

            case 10:
              newUser = _context3.sent;

              _firebaseAdmin.default.auth().updateUser(newUser.uid, {
                displayName: (0, _.addFullName)({
                  familyName: data.familyName,
                  givenName: data.givenName,
                  type: 'givenNameFirst'
                }),
                emailVerified: true
              });

              _context3.next = 14;
              return params.roleRepository.findByIds(data.roles);

            case 14:
              roles = _context3.sent;
              permissions = [];
              _context3.next = 18;
              return _firebaseAdmin.default.auth().setCustomUserClaims(newUser.uid, {
                roles: data.roles,
                permissions: roles.map(function (item) {
                  return permissions = [].concat(_toConsumableArray(permissions), _toConsumableArray(item.permissions));
                }),
                avatarUrl: '',
                province: ''
              });

            case 18:
              _context3.next = 20;
              return params.repository.create(_objectSpread({
                id: newUser.uid
              }, data, params.creationInfo, {
                loginDetail: {
                  email: data.email,
                  provider: 'email'
                },
                fullName: (0, _.addFullName)({
                  familyName: data.familyName,
                  givenName: data.givenName,
                  type: 'givenNameFirst'
                })
              }));

            case 20:
              id = _context3.sent;
              return _context3.abrupt("return", {
                id: id
              });

            case 22:
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
              return usersService[data.operation](id, data.payload, params);

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
      var existedUser, validationSchema, emailExist, _ref2, _ref3, roles, userInfo, permissions, customClaims;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              // 1. authorize
              (0, _core.ensurePermission)(params.authUser, _.PERMISSIONS.USERS.EDIT); // 2. validate

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
              validationSchema = yup.object().shape({
                email: yup.string().email('Invalid email'),
                familyName: yup.string().min(2, 'Too short').max(50, 'Too long'),
                givenName: yup.string().min(2, 'Too short').max(50, 'Too long'),
                roles: yup.array()
              });
              _context5.next = 11;
              return validationSchema.validate(data);

            case 11:
              if (!data.email) {
                _context5.next = 19;
                break;
              }

              _context5.next = 14;
              return params.repository.findOne({
                email: data.email
              });

            case 14:
              emailExist = _context5.sent;

              if (!(emailExist && emailExist.id !== id)) {
                _context5.next = 17;
                break;
              }

              throw new _core.UserInputError('Email already exist');

            case 17:
              _context5.next = 19;
              return _firebaseAdmin.default.auth().updateUser(existedUser._id, {
                email: data.email
              });

            case 19:
              if (!(data.roles && data.roles.length > 0)) {
                _context5.next = 31;
                break;
              }

              _context5.next = 22;
              return Promise.all([params.roleRepository.findByIds(data.roles), _firebaseAdmin.default.auth().getUser(existedUser._id)]);

            case 22:
              _ref2 = _context5.sent;
              _ref3 = _slicedToArray(_ref2, 2);
              roles = _ref3[0];
              userInfo = _ref3[1];
              permissions = [];
              roles.map(function (item) {
                return permissions = [].concat(_toConsumableArray(permissions), _toConsumableArray(item.permissions));
              });
              customClaims = _objectSpread({}, userInfo.customClaims, {
                roles: data.roles,
                permissions: permissions
              });
              _context5.next = 31;
              return _firebaseAdmin.default.auth().setCustomUserClaims(existedUser._id, customClaims);

            case 31:
              if (!(data.familyName || data.givenName)) {
                _context5.next = 34;
                break;
              }

              _context5.next = 34;
              return _firebaseAdmin.default.auth().updateUser(existedUser._id, {
                displayName: (0, _.addFullName)({
                  familyName: data.familyName || existedUser.familyName,
                  givenName: data.givenName || existedUser.givenName,
                  type: 'givenNameFirst'
                })
              });

            case 34:
              _context5.next = 36;
              return params.repository.update(_objectSpread({
                id: id
              }, data, params.modificationInfo, {
                fullName: (0, _.addFullName)({
                  familyName: data.familyName || existedUser.familyName,
                  givenName: data.givenName || existedUser.givenName,
                  type: 'givenNameFirst'
                })
              }));

            case 36:
              return _context5.abrupt("return", {});

            case 37:
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
  }(),
  activate: function () {
    var _activate = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(id, _data, params) {
      var existedUser;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              // 1. authorize
              (0, _core.ensurePermission)(params.authUser, _.PERMISSIONS.USERS.EDIT); // 2. validate

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
              _context6.next = 10;
              return _firebaseAdmin.default.auth().updateUser(existedUser._id, {
                disabled: false
              });

            case 10:
              _context6.next = 12;
              return params.repository.update(_objectSpread({
                id: id,
                isActive: true
              }, params.modificationInfo));

            case 12:
              return _context6.abrupt("return", {});

            case 13:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function activate(_x12, _x13, _x14) {
      return _activate.apply(this, arguments);
    }

    return activate;
  }(),
  deactivate: function () {
    var _deactivate = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7(id, _data, params) {
      var existedUser;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              // 1. authorize
              (0, _core.ensurePermission)(params.authUser, _.PERMISSIONS.USERS.EDIT); // 2. validate

              if (id) {
                _context7.next = 3;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 3:
              _context7.next = 5;
              return params.repository.findById(id);

            case 5:
              existedUser = _context7.sent;

              if (existedUser) {
                _context7.next = 8;
                break;
              }

              throw new _core.EntityNotFoundError('User');

            case 8:
              _context7.next = 10;
              return _firebaseAdmin.default.auth().updateUser(existedUser._id, {
                disabled: true
              });

            case 10:
              _context7.next = 12;
              return params.repository.update(_objectSpread({
                id: id,
                isActive: false
              }, params.modificationInfo));

            case 12:
              return _context7.abrupt("return", {});

            case 13:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function deactivate(_x15, _x16, _x17) {
      return _deactivate.apply(this, arguments);
    }

    return deactivate;
  }(),
  updateFollowCount: function () {
    var _updateFollowCount = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee8(userId, type) {
      var existedNews;
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (!(!userId || !type)) {
                _context8.next = 2;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 2:
              _context8.next = 4;
              return _users.userRepository.findById(userId);

            case 4:
              existedNews = _context8.sent;

              if (existedNews) {
                _context8.next = 7;
                break;
              }

              throw new _core.EntityNotFoundError('User');

            case 7:
              if (!(type === 'follow')) {
                _context8.next = 12;
                break;
              }

              _context8.next = 10;
              return _users.userRepository.increaseFollowCount(userId);

            case 10:
              _context8.next = 14;
              break;

            case 12:
              _context8.next = 14;
              return _users.userRepository.decreaseFollowCount(userId);

            case 14:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    function updateFollowCount(_x18, _x19) {
      return _updateFollowCount.apply(this, arguments);
    }

    return updateFollowCount;
  }(),
  checkEmailExist: function () {
    var _checkEmailExist = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee9(req, res) {
      var email, firebaseUser, existedEmail;
      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              email = req.params.email;
              _context9.prev = 2;
              _context9.next = 5;
              return _firebaseAdmin.default.auth().getUserByEmail(email);

            case 5:
              firebaseUser = _context9.sent;
              _context9.next = 11;
              break;

            case 8:
              _context9.prev = 8;
              _context9.t0 = _context9["catch"](2);
              firebaseUser = null;

            case 11:
              _context9.next = 13;
              return _users.userRepository.findOne({
                email: email
              });

            case 13:
              existedEmail = _context9.sent;
              res.status(200).json({
                emailExist: Boolean(existedEmail || firebaseUser)
              });
              _context9.next = 21;
              break;

            case 17:
              _context9.prev = 17;
              _context9.t1 = _context9["catch"](0);

              _core.logger.error(_context9.t1);

              res.status(_context9.t1.status || 500).end(_context9.t1.message || 'Internal server error');

            case 21:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[0, 17], [2, 8]]);
    }));

    function checkEmailExist(_x20, _x21) {
      return _checkEmailExist.apply(this, arguments);
    }

    return checkEmailExist;
  }(),
  checkPhoneNoExist: function () {
    var _checkPhoneNoExist = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee10(req, res) {
      var phoneNo, firebaseUser, mongoUser;
      return _regenerator.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              phoneNo = req.params.phoneNo;
              _context10.prev = 2;
              _context10.next = 5;
              return _firebaseAdmin.default.auth().getUserByPhoneNumber(phoneNo);

            case 5:
              firebaseUser = _context10.sent;
              _context10.next = 11;
              break;

            case 8:
              _context10.prev = 8;
              _context10.t0 = _context10["catch"](2);
              firebaseUser = null;

            case 11:
              _context10.next = 13;
              return _users.userRepository.findOne({
                phoneNo: phoneNo
              });

            case 13:
              mongoUser = _context10.sent;
              res.status(200).json({
                phoneNoExist: Boolean(firebaseUser || mongoUser)
              });
              _context10.next = 21;
              break;

            case 17:
              _context10.prev = 17;
              _context10.t1 = _context10["catch"](0);

              _core.logger.error(_context10.t1);

              res.status(_context10.t1.status || 500).end(_context10.t1.message || 'Internal server error');

            case 21:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[0, 17], [2, 8]]);
    }));

    function checkPhoneNoExist(_x22, _x23) {
      return _checkPhoneNoExist.apply(this, arguments);
    }

    return checkPhoneNoExist;
  }()
};
var _default = usersService;
exports.default = _default;
//# sourceMappingURL=users.service.js.map