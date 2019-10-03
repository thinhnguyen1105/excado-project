"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var yup = _interopRequireWildcard(require("yup"));

var _permissions = require("../../permissions");

var _shop = require("./shop.repository");

var _followShops = require("../follows/follow-shops.repository");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var domainNameRegex = /^(?=.*[a-z0-9-])[a-z0-9-\d]{3,}$/;
var shopService = {
  setup: function setup(app, path) {
    app.get(path + '/get-by-domain/:shopDomain',
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(req, res) {
        var shopInfo, shopInfoJSON, shopId, userId, followShop;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _shop.shopRepository.findOne({
                  domain: req.params.shopDomain
                });

              case 3:
                shopInfo = _context.sent;
                shopInfoJSON = JSON.parse(JSON.stringify(shopInfo));

                if (!req.query.authId) {
                  _context.next = 12;
                  break;
                }

                shopId = shopInfo._id;
                userId = req.query.authId;
                _context.next = 10;
                return _followShops.followShopRepository.findOne({
                  user: userId,
                  shop: shopId
                });

              case 10:
                followShop = _context.sent;
                shopInfoJSON = _objectSpread({}, shopInfoJSON, {
                  isFollowing: Boolean(followShop)
                });

              case 12:
                res.status(200).json(shopInfoJSON);
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);

                _core.logger.error(_context.t0);

                res.status(_context.t0.status || 500).end(_context.t0.message || 'Internal server error');

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 15]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    app.get(path + '/get-by-owner/:ownerId',
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(req, res) {
        var shopInfo;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _shop.shopRepository.findOne({
                  owner: req.params.ownerId
                });

              case 3:
                shopInfo = _context2.sent;
                res.status(200).json(shopInfo);
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

                _core.logger.error(_context2.t0);

                res.status(_context2.t0.status || 500).end(_context2.t0.message || 'Internal server error');

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  },
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(_ref3) {
      var query, repository, authUser;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              query = _ref3.query, repository = _ref3.repository, authUser = _ref3.authUser;

              // 1. authorize
              if (!query.owner) {
                (0, _core.ensurePermission)(authUser, _permissions.PERMISSIONS.SHOPS.VIEW);
              } // 2. validate


              (0, _core.validateQuery)(query); // 3. do business logic
              // 4. persist to db

              _context3.next = 5;
              return repository.find(query);

            case 5:
              return _context3.abrupt("return", _context3.sent);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function find(_x5) {
      return _find.apply(this, arguments);
    }

    return find;
  }(),
  get: function () {
    var _get = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(id, params) {
      var shopInfo;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (id) {
                _context4.next = 2;
                break;
              }

              throw new _core.UserInputError('Invalid id');

            case 2:
              _context4.next = 4;
              return params.repository.findById(id);

            case 4:
              shopInfo = _context4.sent;

              if (!(!(0, _core.hasPermission)(params.authUser, _permissions.PERMISSIONS.SHOPS.VIEW) && !(0, _core.isOwner)(params.authUser, shopInfo.owner._id))) {
                _context4.next = 7;
                break;
              }

              throw new _core.NotAuthorizedError();

            case 7:
              return _context4.abrupt("return", shopInfo);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function get(_x6, _x7) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(data, params) {
      var ownerInfo, existedDomain, id, existedShop, _existedDomain, _id;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(0, _core.hasPermission)(params.authUser, _permissions.PERMISSIONS.SHOPS.CREATE)) {
                _context5.next = 19;
                break;
              }

              _context5.next = 3;
              return (0, _core.validatePayload)({
                owner: yup.string().required('Owner is required'),
                domain: yup.string().matches(domainNameRegex, 'Domain name can only contain letters, numbers and hyphens').required('Domain name is required'),
                name: yup.string().min(5, 'Too short').max(100, 'Too long').required('Shop name is required'),
                // address: yup.string().min(20, 'Too short').max(500, 'Too long').required('Address is required'),
                // geocode: yup.object().required('Geocode is required').shape({lng: yup.number(), lat: yup.number()}),
                description: yup.string().min(20, 'Too short').max(2000, 'Too long').required('Description is required'),
                email: yup.string().required('Email is required').email('Invalid email address'),
                phone: yup.string().matches(/^([0-9]){4,15}$/, 'Invalid phone number').required('Phone number is required'),
                expiryDate: yup.number().required('Expiry date is required'),
                introImages: yup.array().of(yup.string()),
                logoImage: yup.string()
              }, data);

            case 3:
              _context5.next = 5;
              return params.userRepository.findById(data.owner);

            case 5:
              ownerInfo = _context5.sent;

              if (ownerInfo) {
                _context5.next = 8;
                break;
              }

              throw new _core.UserInputError("Owner didn't exist");

            case 8:
              _context5.next = 10;
              return params.repository.findOne({
                domain: data.domain
              });

            case 10:
              existedDomain = _context5.sent;

              if (!existedDomain) {
                _context5.next = 13;
                break;
              }

              throw new _core.UserInputError('Domain name already exist');

            case 13:
              _context5.next = 15;
              return params.repository.create(_objectSpread({}, data, params.creationInfo));

            case 15:
              id = _context5.sent;
              return _context5.abrupt("return", {
                id: id
              });

            case 19:
              _context5.next = 21;
              return (0, _core.validatePayload)({
                owner: yup.string().required('Owner is required'),
                domain: yup.string().matches(domainNameRegex, 'Domain name can only contain letters, numbers and hyphens').required('Domain name is required'),
                name: yup.string().min(5, 'Too short').max(100, 'Too long').required('Shop name is required'),
                // address: yup.string().min(20, 'Too short').max(500, 'Too long').required('Address is required'),
                // geocode: yup.object().required('Geocode is required').shape({lng: yup.number(), lat: yup.number()}),
                description: yup.string().min(20, 'Too short').max(2000, 'Too long').required('Description is required'),
                phone: yup.string().matches(/^([0-9]){4,15}$/, 'Invalid phone number').required('Phone number is required'),
                email: yup.string().required('Email is required').email('Invalid email address'),
                expiryDate: yup.number().required('Expiry date is required'),
                introImages: yup.array().of(yup.string()),
                logoImage: yup.string()
              }, data);

            case 21:
              _context5.next = 23;
              return params.repository.findOne({
                owner: data.owner
              });

            case 23:
              existedShop = _context5.sent;

              if (!existedShop) {
                _context5.next = 26;
                break;
              }

              throw new _core.NotAuthorizedError();

            case 26:
              if (!(data.owner !== params.authUser.id)) {
                _context5.next = 28;
                break;
              }

              throw new _core.NotAuthorizedError();

            case 28:
              _context5.next = 30;
              return params.repository.findOne({
                domain: data.domain
              });

            case 30:
              _existedDomain = _context5.sent;

              if (!_existedDomain) {
                _context5.next = 33;
                break;
              }

              throw new _core.UserInputError('Domain name already exist');

            case 33:
              _context5.next = 35;
              return params.repository.create(_objectSpread({}, data, params.creationInfo));

            case 35:
              _id = _context5.sent;
              return _context5.abrupt("return", {
                id: _id
              });

            case 37:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function create(_x8, _x9) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),
  patch: function () {
    var _patch = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(id, data, params) {
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              (0, _core.validateOperation)(data.operation, ['updateDetail', 'activate', 'deactivate', 'updateIntroImages', 'updateLogoImage']);
              _context6.next = 3;
              return shopService[data.operation](id, data.payload, params);

            case 3:
              return _context6.abrupt("return", {});

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function patch(_x10, _x11, _x12) {
      return _patch.apply(this, arguments);
    }

    return patch;
  }(),
  updateDetail: function () {
    var _updateDetail = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7(id, data, params) {
      var existedShop, validationSchema, existedDomain;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (id) {
                _context7.next = 2;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 2:
              _context7.next = 4;
              return params.repository.findById(id);

            case 4:
              existedShop = _context7.sent;

              if (existedShop) {
                _context7.next = 7;
                break;
              }

              throw new _core.EntityNotFoundError('Shop');

            case 7:
              validationSchema = yup.object().shape({
                domain: yup.string().matches(domainNameRegex, 'Domain name can only contain letters, numbers and hyphens'),
                name: yup.string().min(5, 'Too short').max(100, 'Too long'),
                address: yup.string().min(20, 'Too short').max(500, 'Too long'),
                geocode: yup.object().shape({
                  lng: yup.number(),
                  lat: yup.number()
                }),
                description: yup.string().min(20, 'Too short').max(2000, 'Too long'),
                phone: yup.string().matches(/^([0-9]){4,15}$/, 'Invalid phone number'),
                email: yup.string().email('Invalid email address'),
                expiryDate: yup.number(),
                introImages: yup.array().of(yup.string()),
                logoImage: yup.string()
              });
              _context7.next = 10;
              return validationSchema.validate(data);

            case 10:
              if (!data.domain) {
                _context7.next = 16;
                break;
              }

              _context7.next = 13;
              return params.repository.findOne({
                domain: data.domain
              });

            case 13:
              existedDomain = _context7.sent;

              if (!(existedDomain && existedDomain._id.toString() !== id)) {
                _context7.next = 16;
                break;
              }

              throw new _core.UserInputError('Domain has been used');

            case 16:
              if (!(!(0, _core.hasPermission)(params.authUser, _permissions.PERMISSIONS.SHOPS.EDIT) && !(0, _core.isOwner)(params.authUser, existedShop.owner._id))) {
                _context7.next = 18;
                break;
              }

              throw new _core.NotAuthorizedError();

            case 18:
              _context7.next = 20;
              return params.repository.update(_objectSpread({
                id: id
              }, data, params.modificationInfo));

            case 20:
              return _context7.abrupt("return", {});

            case 21:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function updateDetail(_x13, _x14, _x15) {
      return _updateDetail.apply(this, arguments);
    }

    return updateDetail;
  }(),
  activate: function () {
    var _activate = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee8(id, _data, params) {
      var existedShop;
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              // 1. authorize
              (0, _core.ensurePermission)(params.authUser, _permissions.PERMISSIONS.SHOPS.EDIT); // 2. validate

              if (id) {
                _context8.next = 3;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 3:
              _context8.next = 5;
              return params.repository.findById(id);

            case 5:
              existedShop = _context8.sent;

              if (existedShop) {
                _context8.next = 8;
                break;
              }

              throw new _core.EntityNotFoundError('Shop');

            case 8:
              _context8.next = 10;
              return params.repository.update(_objectSpread({
                id: id,
                isActive: true
              }, params.modificationInfo));

            case 10:
              return _context8.abrupt("return", {});

            case 11:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    function activate(_x16, _x17, _x18) {
      return _activate.apply(this, arguments);
    }

    return activate;
  }(),
  deactivate: function () {
    var _deactivate = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee9(id, _data, params) {
      var existedShop;
      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              // 1. authorize
              (0, _core.ensurePermission)(params.authUser, _permissions.PERMISSIONS.SHOPS.EDIT); // 2. validate

              if (id) {
                _context9.next = 3;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 3:
              _context9.next = 5;
              return params.repository.findById(id);

            case 5:
              existedShop = _context9.sent;

              if (existedShop) {
                _context9.next = 8;
                break;
              }

              throw new _core.EntityNotFoundError('Shop');

            case 8:
              _context9.next = 10;
              return params.repository.update(_objectSpread({
                id: id,
                isActive: false
              }, params.modificationInfo));

            case 10:
              return _context9.abrupt("return", {});

            case 11:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    function deactivate(_x19, _x20, _x21) {
      return _deactivate.apply(this, arguments);
    }

    return deactivate;
  }(),
  updateLogoImage: function () {
    var _updateLogoImage = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee10(id, data, params) {
      var existedShop;
      return _regenerator.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (id) {
                _context10.next = 2;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 2:
              _context10.next = 4;
              return params.repository.findById(id);

            case 4:
              existedShop = _context10.sent;

              if (existedShop) {
                _context10.next = 7;
                break;
              }

              throw new _core.EntityNotFoundError('Shop');

            case 7:
              if (!(!(0, _core.hasPermission)(params.authUser, _permissions.PERMISSIONS.SHOPS.EDIT) && !(0, _core.isOwner)(params.authUser, existedShop.owner._id))) {
                _context10.next = 9;
                break;
              }

              throw new _core.NotAuthorizedError();

            case 9:
              _context10.next = 11;
              return params.repository.update(_objectSpread({
                id: id,
                logoImage: data.logoImage
              }, params.modificationInfo));

            case 11:
              return _context10.abrupt("return", {});

            case 12:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    function updateLogoImage(_x22, _x23, _x24) {
      return _updateLogoImage.apply(this, arguments);
    }

    return updateLogoImage;
  }(),
  updateIntroImages: function () {
    var _updateIntroImages = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee11(id, data, params) {
      var existedShop;
      return _regenerator.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              if (id) {
                _context11.next = 2;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 2:
              _context11.next = 4;
              return params.repository.findById(id);

            case 4:
              existedShop = _context11.sent;

              if (existedShop) {
                _context11.next = 7;
                break;
              }

              throw new _core.EntityNotFoundError('Shop');

            case 7:
              if (!(!(0, _core.hasPermission)(params.authUser, _permissions.PERMISSIONS.SHOPS.EDIT) && !(0, _core.isOwner)(params.authUser, existedShop.owner._id))) {
                _context11.next = 9;
                break;
              }

              throw new _core.NotAuthorizedError();

            case 9:
              _context11.next = 11;
              return params.repository.update(_objectSpread({
                id: id,
                introImages: data.introImages
              }, params.modificationInfo));

            case 11:
              return _context11.abrupt("return", {});

            case 12:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    function updateIntroImages(_x25, _x26, _x27) {
      return _updateIntroImages.apply(this, arguments);
    }

    return updateIntroImages;
  }(),
  updateFollowCount: function () {
    var _updateFollowCount = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee12(shopId, type) {
      var existedShop;
      return _regenerator.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              if (!(!shopId || !type)) {
                _context12.next = 2;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 2:
              _context12.next = 4;
              return _shop.shopRepository.findById(shopId);

            case 4:
              existedShop = _context12.sent;

              if (existedShop) {
                _context12.next = 7;
                break;
              }

              throw new _core.EntityNotFoundError('News');

            case 7:
              if (!(type === 'follow')) {
                _context12.next = 12;
                break;
              }

              _context12.next = 10;
              return _shop.shopRepository.increaseFollowCount(shopId);

            case 10:
              _context12.next = 14;
              break;

            case 12:
              _context12.next = 14;
              return _shop.shopRepository.decreaseFollowCount(shopId);

            case 14:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    function updateFollowCount(_x28, _x29) {
      return _updateFollowCount.apply(this, arguments);
    }

    return updateFollowCount;
  }()
};
var _default = shopService;
exports.default = _default;
//# sourceMappingURL=shop.service.js.map