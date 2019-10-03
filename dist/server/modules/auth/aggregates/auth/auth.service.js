"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _lodash = require("lodash");

var _core = require("../../../../core");

var _replace = _interopRequireDefault(require("lodash/replace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var authService = {
  setup: function setup(app, path) {
    app.post(path + '/get-custom-token', authService.getCustomToken);
    app.post(path + '/update-password', authService.updatePassword);
  },
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(data, params) {
      var verifyIdToken, userFirebaseInfo, defaultRoles, existedUser, newUser;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _firebaseAdmin.default.auth().verifyIdToken(data.idToken);

            case 2:
              verifyIdToken = _context.sent;
              _context.next = 5;
              return _firebaseAdmin.default.auth().getUser(verifyIdToken.uid);

            case 5:
              userFirebaseInfo = _context.sent;
              _context.next = 8;
              return params.roleRepository.findDefaultRoles();

            case 8:
              defaultRoles = _context.sent;

              if (userFirebaseInfo.customClaims) {
                _context.next = 12;
                break;
              }

              _context.next = 12;
              return _firebaseAdmin.default.auth().setCustomUserClaims(verifyIdToken.uid, {
                roles: defaultRoles,
                permissions: defaultRoles ? (0, _lodash.union)(defaultRoles.map(function (role) {
                  return role.permissions;
                })) : [],
                avatarUrl: '',
                province: ''
              });

            case 12:
              if (!(userFirebaseInfo.providerData[0].providerId === 'phone')) {
                _context.next = 15;
                break;
              }

              _context.next = 15;
              return _firebaseAdmin.default.auth().updateUser(userFirebaseInfo.uid, {
                emailVerified: true
              });

            case 15:
              _context.next = 17;
              return params.repository.findById(verifyIdToken.uid);

            case 17:
              existedUser = _context.sent;

              if (existedUser) {
                _context.next = 22;
                break;
              }

              newUser = {
                id: userFirebaseInfo.uid,
                email: userFirebaseInfo.providerData[0].providerId === 'phone' ? '' : userFirebaseInfo.email || userFirebaseInfo.providerData[0].email,
                phoneNo: userFirebaseInfo.phoneNumber,
                familyName: userFirebaseInfo.providerData[0] ? userFirebaseInfo.providerData[0].displayName : '',
                givenName: '',
                fullName: userFirebaseInfo.providerData[0] ? userFirebaseInfo.providerData[0].displayName : '',
                loginDetail: userFirebaseInfo.providerData[0].providerId === 'facebook.com' ? {
                  uid: userFirebaseInfo.providerData[0] ? userFirebaseInfo.providerData[0].uid : '',
                  email: userFirebaseInfo.providerData[0] ? userFirebaseInfo.providerData[0].email : '',
                  provider: 'facebook'
                } : userFirebaseInfo.providerData[0].providerId === 'google.com' ? {
                  uid: userFirebaseInfo.providerData[0] ? userFirebaseInfo.providerData[0].uid : '',
                  email: userFirebaseInfo.providerData[0] ? userFirebaseInfo.providerData[0].email : '',
                  provider: 'google'
                } : userFirebaseInfo.providerData[0].providerId === 'password' ? {
                  email: userFirebaseInfo.providerData[0] ? userFirebaseInfo.providerData[0].email : '',
                  provider: 'email'
                } : {
                  phoneNo: userFirebaseInfo.phoneNumber,
                  provider: 'phone'
                },
                roles: defaultRoles.map(function (role) {
                  return role.id;
                }),
                isActive: true,
                completeSignUp: false,
                createdBy: userFirebaseInfo.uid,
                createdAt: new Date().getTime()
              };
              _context.next = 22;
              return params.repository.create(newUser);

            case 22:
              return _context.abrupt("return", {});

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function create(_x, _x2) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),
  getCustomToken: function () {
    var _getCustomToken = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(req, res) {
      var idToken, tokenInfo, customToken;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              idToken = req.body.idToken;
              _context2.next = 4;
              return _firebaseAdmin.default.auth().verifyIdToken((0, _replace.default)(idToken, 'Bearer ', ''));

            case 4:
              tokenInfo = _context2.sent;
              _context2.next = 7;
              return _firebaseAdmin.default.auth().createCustomToken(tokenInfo.uid);

            case 7:
              customToken = _context2.sent;
              res.status(200).json({
                customToken: customToken
              });
              _context2.next = 15;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);

              _core.logger.error(_context2.t0);

              res.status(_context2.t0.status || 500).end(_context2.t0.message || 'Internal server error');

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    function getCustomToken(_x3, _x4) {
      return _getCustomToken.apply(this, arguments);
    }

    return getCustomToken;
  }(),
  updatePassword: function () {
    var _updatePassword = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(req, res) {
      var _req$body, idToken, newPassword, tokenInfo;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _req$body = req.body, idToken = _req$body.idToken, newPassword = _req$body.newPassword;
              _context3.next = 4;
              return _firebaseAdmin.default.auth().verifyIdToken(idToken);

            case 4:
              tokenInfo = _context3.sent;
              _context3.next = 7;
              return _firebaseAdmin.default.auth().updateUser(tokenInfo.uid, {
                password: newPassword
              });

            case 7:
              res.status(200).end();
              _context3.next = 14;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);

              _core.logger.error(_context3.t0);

              res.status(_context3.t0.status || 500).end(_context3.t0.message || 'Internal server error');

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }));

    function updatePassword(_x5, _x6) {
      return _updatePassword.apply(this, arguments);
    }

    return updatePassword;
  }()
};
var _default = authService;
exports.default = _default;
//# sourceMappingURL=auth.service.js.map