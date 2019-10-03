"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var _ = require("../..");

var _website = require("../../../website");

var yup = _interopRequireWildcard(require("yup"));

var _shop = require("../shop/shop.repository");

var _lodash = require("lodash");

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _auth = require("../../../auth");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var newsService = {
  setup: function setup(app, path) {
    app.get(path + '/get-by-owner/:ownerId', newsService.getByOwner);
    app.get(path + '/statistics/info', newsService.getStatisticsInfo);
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
              (0, _core.ensurePermission)(params.authUser, _.PERMISSIONS.NEWS.VIEW); // 2. validate

              (0, _core.validateQuery)(params.query); // 3. do business logic
              // 4. persist to db

              _context.next = 4;
              return _.newsRepository.find(params.query);

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
    _regenerator.default.mark(function _callee2(id, _params) {
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
              return _.newsRepository.increaseView(id);

            case 4:
              _context2.next = 6;
              return _.newsRepository.findById(id);

            case 6:
              return _context2.abrupt("return", _context2.sent);

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
      var validationSchema, existedShop, promises, ids, id;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // 1. authorize
              // ensurePermission(params.authUser, PERMISSIONS.NEWS.CREATE);
              // 2. validate
              validationSchema = yup.object().shape({
                title: yup.string().required('Title is required'),
                state: yup.string(),
                newsType: yup.string().required('News type is required'),
                priceType: yup.string().required('Price type is required'),
                location: yup.string(),
                owner: yup.string().required('Owner ID is required'),
                status: yup.string(),
                usedHours: yup.number(),
                serialNo: yup.string(),
                categoryId: yup.string(),
                type: yup.string(),
                brand: yup.string(),
                model: yup.string(),
                weight: yup.number(),
                year: yup.number(),
                shop: yup.string(),
                weightRange: yup.number(),
                rentalPeriod: yup.number()
              });
              _context3.next = 3;
              return validationSchema.validate(data);

            case 3:
              if (!data.shop) {
                _context3.next = 9;
                break;
              }

              _context3.next = 6;
              return _shop.shopRepository.findById(data.shop);

            case 6:
              existedShop = _context3.sent;

              if (existedShop) {
                _context3.next = 9;
                break;
              }

              throw new _core.UserInputError('Shop didnt exist');

            case 9:
              if (!(data.imageUrls && data.imageUrls.length)) {
                _context3.next = 19;
                break;
              }

              promises = data.imageUrls.map(function (val) {
                return _website.imageService.moveFilesToUploadFolder(val.url);
              });
              _context3.next = 13;
              return Promise.all(promises);

            case 13:
              _context3.next = 15;
              return _website.imageService.deleteByUrls(data.imageUrls.map(function (val) {
                return val.url;
              }));

            case 15:
              _context3.next = 17;
              return _.newsRepository.create(_objectSpread({}, data, params.creationInfo, {
                imageUrls: data.imageUrls.map(function (val) {
                  var lastDot = val.url.lastIndexOf('.');
                  var fileHash = val.url.slice(0, lastDot).trim();
                  return "/upload/".concat(fileHash);
                })
              }));

            case 17:
              ids = _context3.sent;
              return _context3.abrupt("return", {
                id: ids
              });

            case 19:
              _context3.next = 21;
              return _.newsRepository.create(_objectSpread({}, data, params.creationInfo, {
                createdDate: new Date(params.creationInfo.createdAt)
              }));

            case 21:
              id = _context3.sent;
              return _context3.abrupt("return", {
                id: id
              });

            case 23:
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
              _context4.next = 2;
              return newsService[data.operation](id, data.payload, params);

            case 2:
              return _context4.abrupt("return", {});

            case 3:
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
  updatePending: function () {
    var _updatePending = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(id, data, params) {
      var existedNews, validationSchema, promises;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(!params.authUser || params.authUser.id !== data.owner)) {
                _context5.next = 2;
                break;
              }

              throw new Error('Unauthorized');

            case 2:
              if (id) {
                _context5.next = 4;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 4:
              _context5.next = 6;
              return _.newsRepository.findById(id);

            case 6:
              existedNews = _context5.sent;

              if (existedNews) {
                _context5.next = 9;
                break;
              }

              throw new _core.EntityNotFoundError('News');

            case 9:
              validationSchema = yup.object().shape({
                title: yup.string(),
                newsType: yup.string(),
                priceType: yup.string(),
                location: yup.string(),
                status: yup.string(),
                usedHours: yup.number(),
                serialNo: yup.string(),
                categoryId: yup.string(),
                type: yup.string(),
                brand: yup.string(),
                model: yup.string(),
                weight: yup.number(),
                year: yup.number()
              });
              _context5.next = 12;
              return validationSchema.validate(data);

            case 12:
              if (!(data.imageUrls && data.imageUrls.length)) {
                _context5.next = 23;
                break;
              }

              promises = data.imageUrls.filter(function (val) {
                return val.url.indexOf('/upload') < 0;
              }).map(function (val) {
                return _website.imageService.moveFilesToUploadFolder(val.url);
              });
              _context5.next = 16;
              return Promise.all(promises);

            case 16:
              _context5.next = 18;
              return _website.imageService.deleteByUrls(data.imageUrls.filter(function (val) {
                return val.url.indexOf('/upload') < 0;
              }).map(function (val) {
                return val.url;
              }));

            case 18:
              _context5.next = 20;
              return _.newsRepository.update(_objectSpread({
                id: id
              }, data, {
                imageUrls: data.imageUrls.map(function (val) {
                  var lastDot = val.url.lastIndexOf('.');
                  var fileHash = val.url.slice(0, lastDot).trim();
                  var indexOfSrc = val.url.indexOf('/upload');
                  return indexOfSrc >= 0 ? val.url : "/upload/".concat(fileHash);
                })
              }, params.modificationInfo));

            case 20:
              return _context5.abrupt("return", {});

            case 23:
              _context5.next = 25;
              return _.newsRepository.update(_objectSpread({
                id: id
              }, data, params.modificationInfo));

            case 25:
              return _context5.abrupt("return", {});

            case 26:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function updatePending(_x9, _x10, _x11) {
      return _updatePending.apply(this, arguments);
    }

    return updatePending;
  }(),
  updateFollowCount: function () {
    var _updateFollowCount = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(newsId, type) {
      var existedNews;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!(!newsId || !type)) {
                _context6.next = 2;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 2:
              _context6.next = 4;
              return _.newsRepository.findById(newsId);

            case 4:
              existedNews = _context6.sent;

              if (existedNews) {
                _context6.next = 7;
                break;
              }

              throw new _core.EntityNotFoundError('News');

            case 7:
              if (!(type === 'follow')) {
                _context6.next = 12;
                break;
              }

              _context6.next = 10;
              return _.newsRepository.increaseFollowCount(newsId);

            case 10:
              _context6.next = 14;
              break;

            case 12:
              _context6.next = 14;
              return _.newsRepository.decreaseFollowCount(newsId);

            case 14:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function updateFollowCount(_x12, _x13) {
      return _updateFollowCount.apply(this, arguments);
    }

    return updateFollowCount;
  }(),
  getByOwner: function () {
    var _getByOwner = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7(req, res) {
      var idToken, decodedIdToken, authUser, data;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              idToken = (0, _lodash.replace)(req.headers.authorization, 'Bearer ', '');
              _context7.next = 4;
              return _firebaseAdmin.default.auth().verifyIdToken(idToken);

            case 4:
              decodedIdToken = _context7.sent;
              authUser = {
                id: decodedIdToken.uid,
                roles: decodedIdToken.roles,
                permissions: decodedIdToken.permissions
              };
              (0, _core.validateQuery)(req.query);
              _context7.next = 9;
              return _.newsRepository.getNewsByOwnerId({
                status: req.query.status,
                ownerId: req.params.ownerId,
                first: req.query.first,
                before: req.query.before,
                after: req.query.after,
                sortBy: req.query.sortBy,
                authUser: authUser
              });

            case 9:
              data = _context7.sent;
              res.status(200).json(data);
              _context7.next = 17;
              break;

            case 13:
              _context7.prev = 13;
              _context7.t0 = _context7["catch"](0);

              _core.logger.error(_context7.t0);

              res.status(_context7.t0.status || 500).end(_context7.t0.message || 'Internal server error');

            case 17:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 13]]);
    }));

    function getByOwner(_x14, _x15) {
      return _getByOwner.apply(this, arguments);
    }

    return getByOwner;
  }(),
  getStatisticsInfo: function () {
    var _getStatisticsInfo = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee8(req, res) {
      var idToken, decodedIdToken, adminRole, _req$query, startDate, endDate, validationSchema, result;

      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              // authorization
              idToken = (0, _lodash.replace)(req.cookies.token || req.headers.authorization, 'Bearer ', ''); // console.log('idToken', idToken);

              if (idToken) {
                _context8.next = 4;
                break;
              }

              throw new _core.NotAuthorizedError();

            case 4:
              _context8.next = 6;
              return _firebaseAdmin.default.auth().verifyIdToken(idToken);

            case 6:
              decodedIdToken = _context8.sent;
              _context8.next = 9;
              return _auth.roleRepository.findOne({
                name: 'admin'
              });

            case 9:
              adminRole = _context8.sent;
              // console.log('decodedIdToken', 'adminRole', decodedIdToken, adminRole);
              (0, _core.ensureRole)({
                id: decodedIdToken.uid,
                roles: decodedIdToken.roles,
                permissions: decodedIdToken.permissions
              }, String(adminRole._id)); // validate start/end date

              _req$query = req.query, startDate = _req$query.startDate, endDate = _req$query.endDate;
              validationSchema = yup.object().shape({
                startDate: yup.string().required('Bad request'),
                endDate: yup.string().required('Bad request')
              });
              _context8.next = 15;
              return validationSchema.validate({
                startDate: startDate,
                endDate: endDate
              });

            case 15:
              if (!(new Date(startDate).getTime() > new Date(endDate).getTime())) {
                _context8.next = 17;
                break;
              }

              throw new _core.UserInputError('Date range');

            case 17:
              _context8.next = 19;
              return _.newsRepository.getStatisticsInfo(startDate, endDate);

            case 19:
              result = _context8.sent;
              res.status(200).json(result);
              _context8.next = 27;
              break;

            case 23:
              _context8.prev = 23;
              _context8.t0 = _context8["catch"](0);

              _core.logger.error(_context8.t0);

              res.status(_context8.t0.status || 500).end(_context8.t0.message || 'Internal server error');

            case 27:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 23]]);
    }));

    function getStatisticsInfo(_x16, _x17) {
      return _getStatisticsInfo.apply(this, arguments);
    }

    return getStatisticsInfo;
  }()
};
var _default = newsService;
exports.default = _default;
//# sourceMappingURL=news.service.js.map