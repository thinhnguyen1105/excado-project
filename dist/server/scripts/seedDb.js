"use strict";

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = require("../config");

var _fsExtra = require("fs-extra");

var _core = require("../core");

var _auth = require("../modules/auth");

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createAdministratorRole =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var rootDir, moduleNames, excludedModules, permissions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, moduleName, permissionsURL, administrator;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rootDir = "".concat(_core.rootLocation, "/server/modules");
            _context.next = 3;
            return (0, _fsExtra.readdir)(rootDir);

          case 3:
            moduleNames = _context.sent;
            excludedModules = ['.DS_Store'];
            permissions = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 9;
            _iterator = moduleNames[Symbol.iterator]();

          case 11:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 20;
              break;
            }

            moduleName = _step.value;

            if (!(excludedModules.indexOf(moduleName) !== -1)) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("continue", 17);

          case 15:
            permissionsURL = "../modules/".concat(moduleName, "/permissions");

            try {
              (function () {
                var modulePermissions = require(permissionsURL).PERMISSIONS;

                Object.keys(modulePermissions).forEach(function (aggregate) {
                  Object.keys(modulePermissions[aggregate]).forEach(function (item) {
                    return permissions.push(modulePermissions[aggregate][item]);
                  });
                });
              })();
            } catch (error) {
              // tslint:disable-next-line:no-console
              console.log(error);
            }

          case 17:
            _iteratorNormalCompletion = true;
            _context.next = 11;
            break;

          case 20:
            _context.next = 26;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](9);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 26:
            _context.prev = 26;
            _context.prev = 27;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 29:
            _context.prev = 29;

            if (!_didIteratorError) {
              _context.next = 32;
              break;
            }

            throw _iteratorError;

          case 32:
            return _context.finish(29);

          case 33:
            return _context.finish(26);

          case 34:
            administrator = {
              name: 'admin',
              description: 'Site administrator',
              permissions: permissions,
              isDefault: false,
              isActive: true
            };
            _context.next = 37;
            return _auth.roleRepository.create(administrator);

          case 37:
            return _context.abrupt("return", _context.sent);

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[9, 22, 26, 34], [27,, 29, 33]]);
  }));

  return function createAdministratorRole() {
    return _ref.apply(this, arguments);
  };
}();

var createAdministratorUser =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(administratorRoleId) {
    var newUser, administratorRole;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _firebaseAdmin.default.initializeApp({
              credential: _firebaseAdmin.default.credential.cert({
                projectId: _config.config.firebase.serviceAccount['project_id'],
                clientEmail: _config.config.firebase.serviceAccount['client_email'],
                privateKey: _config.config.firebase.serviceAccount['private_key']
              }),
              databaseURL: _config.config.firebase.databaseURL
            });

            _context2.next = 3;
            return _firebaseAdmin.default.auth().createUser({
              email: 'admin@timmay.vn',
              emailVerified: true,
              password: 'timmayadmin',
              displayName: 'Timmay Admin'
            });

          case 3:
            newUser = _context2.sent;
            _context2.next = 6;
            return _auth.roleRepository.findById(administratorRoleId);

          case 6:
            administratorRole = _context2.sent;
            _context2.next = 9;
            return _firebaseAdmin.default.auth().setCustomUserClaims(newUser.uid, {
              roles: [administratorRole._id],
              permissions: administratorRole.permissions,
              avatarUrl: '',
              province: ''
            });

          case 9:
            _context2.next = 11;
            return _auth.userRepository.create({
              id: newUser.uid,
              email: newUser.email,
              phoneNo: newUser.phoneNumber,
              familyName: 'Timmay',
              givenName: 'Admin',
              fullName: 'Timmay Admin',
              loginDetail: {
                email: newUser.email,
                provider: 'email'
              },
              roles: [administratorRole._id],
              createdAt: new Date().getTime(),
              createdBy: 'timmay-admin',
              isActive: true,
              completeSignUp: false
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createAdministratorUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();

_asyncToGenerator(
/*#__PURE__*/
_regenerator.default.mark(function _callee3() {
  var administratorRoleId;
  return _regenerator.default.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _mongoose.default.connect(_config.config.database.connectionString, {
            useNewUrlParser: true
          });

        case 2:
          _context3.next = 4;
          return createAdministratorRole();

        case 4:
          administratorRoleId = _context3.sent;
          _context3.next = 7;
          return createAdministratorUser(administratorRoleId);

        case 7:
          process.exit();

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
}))();
//# sourceMappingURL=seedDb.js.map