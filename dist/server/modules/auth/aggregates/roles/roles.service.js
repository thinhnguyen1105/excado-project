"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var yup = _interopRequireWildcard(require("yup"));

var _ = require("../..");

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _replace = _interopRequireDefault(require("lodash/replace"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var roleNameRegex = /^[a-zA-Z0-9-]*$/;
var roleService = {
  setup: function setup(app, path) {
    app.get(path + '/customs/get-all', roleService.getAll);
  },
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(params) {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // 1. authorize
              (0, _core.ensurePermission)(params.authUser, _.PERMISSIONS.ROLES.VIEW); // 2. validate

              (0, _core.validateQuery)(params.query); // 3. do business logic
              // 4. persist to db

              _context.next = 4;
              return params.repository.find(params.query);

            case 4:
              return _context.abrupt("return", _context.sent);

            case 5:
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
              (0, _core.ensurePermission)(params.authUser, _.PERMISSIONS.ROLES.VIEW); // 2. validate

              if (id) {
                _context2.next = 3;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

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
      var validationSchema, existedRole, id;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // 1. authorize
              (0, _core.ensurePermission)(params.authUser, _.PERMISSIONS.ROLES.CREATE); // 2. validate

              validationSchema = yup.object().shape({
                name: yup.string().min(2, 'Name too short').max(50, 'Name too long').matches(roleNameRegex).required('Name is required'),
                description: yup.string().required('Description is required'),
                permissions: yup.array().required('Permissions is required')
              });
              _context3.next = 4;
              return validationSchema.validate(data);

            case 4:
              _context3.next = 6;
              return params.repository.findOne({
                name: data.name
              });

            case 6:
              existedRole = _context3.sent;

              if (!existedRole) {
                _context3.next = 9;
                break;
              }

              throw new _core.UserInputError('Role name already exist');

            case 9:
              _context3.next = 11;
              return params.repository.create(_objectSpread({}, data, params.creationInfo));

            case 11:
              id = _context3.sent;
              return _context3.abrupt("return", {
                id: id
              });

            case 13:
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
              return roleService[data.operation](id, data.payload, params);

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
      var existedRole, validationSchema;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              // 1. authorize
              (0, _core.ensurePermission)(params.authUser, _.PERMISSIONS.ROLES.EDIT); // 2. validate

              if (id) {
                _context5.next = 3;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 3:
              _context5.next = 5;
              return params.repository.findById(id);

            case 5:
              existedRole = _context5.sent;

              if (existedRole) {
                _context5.next = 8;
                break;
              }

              throw new _core.EntityNotFoundError('Role');

            case 8:
              validationSchema = yup.object().shape({
                name: yup.string().min(2, 'Name too short').max(50, 'Name too long').matches(roleNameRegex),
                description: yup.string(),
                permissions: yup.array()
              });
              _context5.next = 11;
              return validationSchema.validate(data);

            case 11:
              _context5.next = 13;
              return params.repository.update(_objectSpread({
                id: id
              }, data, params.modificationInfo));

            case 13:
              return _context5.abrupt("return", {});

            case 14:
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
      var existedRole;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              // 1. authorize
              (0, _core.ensurePermission)(params.authUser, _.PERMISSIONS.ROLES.EDIT); // 2. validate

              if (id) {
                _context6.next = 3;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 3:
              _context6.next = 5;
              return params.repository.findById(id);

            case 5:
              existedRole = _context6.sent;

              if (existedRole) {
                _context6.next = 8;
                break;
              }

              throw new _core.EntityNotFoundError('Role');

            case 8:
              _context6.next = 10;
              return params.repository.update(_objectSpread({
                id: id,
                isActive: true
              }, params.modificationInfo));

            case 10:
              return _context6.abrupt("return", {});

            case 11:
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
      var existedRole;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              // 1. authorize
              (0, _core.ensurePermission)(params.authUser, _.PERMISSIONS.ROLES.EDIT); // 2. validate

              if (id) {
                _context7.next = 3;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 3:
              _context7.next = 5;
              return params.repository.findById(id);

            case 5:
              existedRole = _context7.sent;

              if (existedRole) {
                _context7.next = 8;
                break;
              }

              throw new _core.EntityNotFoundError('Role');

            case 8:
              _context7.next = 10;
              return params.repository.update(_objectSpread({
                id: id,
                isActive: false
              }, params.modificationInfo));

            case 10:
              return _context7.abrupt("return", {});

            case 11:
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
  getAll: function () {
    var _getAll = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee8(req, res) {
      var idToken, roles;
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              idToken = (0, _replace.default)(req.headers.authorization || req.cookies.token ? req.headers.authorization || req.cookies.token : '', 'Bearer ', '');
              _context8.next = 4;
              return _firebaseAdmin.default.auth().verifyIdToken(idToken);

            case 4:
              _context8.next = 6;
              return _.roleRepository.findAll();

            case 6:
              roles = _context8.sent;
              res.status(200).json({
                roles: roles
              });
              _context8.next = 14;
              break;

            case 10:
              _context8.prev = 10;
              _context8.t0 = _context8["catch"](0);

              _core.logger.error(_context8.t0);

              res.status(_context8.t0.status || 500).end(_context8.t0.message || 'Internal server error');

            case 14:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 10]]);
    }));

    function getAll(_x18, _x19) {
      return _getAll.apply(this, arguments);
    }

    return getAll;
  }()
};
var _default = roleService;
exports.default = _default;
//# sourceMappingURL=roles.service.js.map