"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageRouter = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var express = _interopRequireWildcard(require("express"));

var _sharp = _interopRequireDefault(require("sharp"));

var _ = require("../..");

var _productImage = require("./multer/productImage.middleware");

var _shopImage = require("./multer/shopImage.middleware");

var _config = require("../../../../config");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var uploadRouter = express.Router();
uploadRouter.post('/', _productImage.productImageMiddleware.single('image'),
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res) {
    var path, lastDot, fileHash;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!req.file) {
              _context.next = 15;
              break;
            }

            if (!req.file.filename) {
              _context.next = 13;
              break;
            }

            path = process.cwd();
            lastDot = req.file.filename.lastIndexOf('.');
            fileHash = req.file.filename.slice(0, lastDot).trim();
            _context.next = 8;
            return _.imageService.create({
              name: req.file.filename,
              url: req.file.filename
            });

          case 8:
            _context.next = 10;
            return (0, _sharp.default)("".concat(path, "/temp/").concat(req.file.filename)).resize(300).toFormat('jpg').toFile("".concat(path, "/temp/").concat(fileHash, "-small.jpg"));

          case 10:
            _context.next = 12;
            return (0, _sharp.default)("".concat(path, "/temp/").concat(req.file.filename)).resize(900).toFormat('jpg').toFile("".concat(path, "/temp/").concat(fileHash, "-large.jpg"));

          case 12:
            res.status(200).send("".concat(req.file.filename));

          case 13:
            _context.next = 16;
            break;

          case 15:
            res.status(200).end();

          case 16:
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            res.status(_context.t0.status || 500).send(_context.t0.message || 'Internal Server Error');

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 18]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
uploadRouter.post('/shop-intro-images', _shopImage.shopImageMiddleware.array('introImage', _config.config.upload.shopIntroImageNumber),
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(req, res) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            try {
              res.status(200).json({
                introImages: req.files.map(function (item) {
                  return "/upload/".concat(item.filename);
                })
              });
            } catch (error) {
              res.status(error.status || 500).send(error.message || 'Internal Server Error');
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
uploadRouter.post('/shop-logo-image', _shopImage.shopImageMiddleware.array('logoImage'),
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(req, res) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            try {
              res.status(200).json({
                logoImage: "/upload/".concat(req.files[0].filename)
              });
            } catch (error) {
              res.status(error.status || 500).send(error.message || 'Internal Server Error');
            }

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
uploadRouter.post('/avatar-image', _shopImage.shopImageMiddleware.array('avatarImage'),
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(req, res) {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            try {
              res.status(200).json({
                avatarUrl: "/upload/".concat(req.files[0].filename)
              });
            } catch (error) {
              res.status(error.status || 500).send(error.message || 'Internal Server Error');
            }

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
uploadRouter.post('/brand-logo-image', _shopImage.shopImageMiddleware.array('brandLogoImage'),
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(req, res) {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            try {
              res.status(200).json({
                logoImage: "/upload/".concat(req.files[0].filename)
              });
            } catch (error) {
              res.status(error.status || 500).send(error.message || 'Internal Server Error');
            }

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
uploadRouter.post('/category-image', _shopImage.shopImageMiddleware.array('categoryImage'),
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(req, res) {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            try {
              res.status(200).json({
                categoryImage: "/upload/".concat(req.files[0].filename)
              });
            } catch (error) {
              res.status(error.status || 500).send(error.message || 'Internal Server Error');
            }

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
uploadRouter.post('/feature-brand-logo-image', _shopImage.shopImageMiddleware.array('featureBrandLogoImage'),
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee7(req, res) {
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            try {
              res.status(200).json({
                logoImage: "/upload/".concat(req.files[0].filename)
              });
            } catch (error) {
              res.status(error.status || 500).send(error.message || 'Internal Server Error');
            }

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
uploadRouter.post('/adsense-image', _shopImage.shopImageMiddleware.array('adsenseImage'),
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee8(req, res) {
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            try {
              res.status(200).json({
                adsenseImage: "/upload/".concat(req.files[0].filename)
              });
            } catch (error) {
              res.status(error.status || 500).send(error.message || 'Internal Server Error');
            }

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());
var imageRouter = uploadRouter;
exports.imageRouter = imageRouter;
//# sourceMappingURL=image.router.js.map