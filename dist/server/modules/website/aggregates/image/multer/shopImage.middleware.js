"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shopImageMiddleware = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _multer = _interopRequireDefault(require("multer"));

var path = _interopRequireWildcard(require("path"));

var fs = _interopRequireWildcard(require("fs"));

var util = _interopRequireWildcard(require("util"));

var uuid = _interopRequireWildcard(require("uuid"));

var _config = require("../../../../../config");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var imageFilter = function imageFilter(_req, file, cb) {
  if (!file.originalname.match(_config.config.upload.allowImageExt)) {
    return cb(new Error('Only image files are allowed'), false);
  }

  cb(null, true);
};

var storage = _multer.default.diskStorage({
  destination: function () {
    var _destination = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_req, _file, cb) {
      var fileFolder, fsAccessPromise, fsMkdirPromise;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fileFolder = path.join(__dirname, "../../../../../../../upload");
              fsAccessPromise = util.promisify(fs.access);
              _context.prev = 2;
              _context.next = 5;
              return fsAccessPromise(fileFolder);

            case 5:
              _context.next = 12;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](2);
              fsMkdirPromise = util.promisify(fs.mkdir);
              _context.next = 12;
              return fsMkdirPromise(fileFolder);

            case 12:
              cb(null, path.join(__dirname, "../../../../../../../upload"));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 7]]);
    }));

    function destination(_x, _x2, _x3) {
      return _destination.apply(this, arguments);
    }

    return destination;
  }(),
  filename: function () {
    var _filename = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(_req, file, cb) {
      var hash, lastDot, fileType;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              hash = uuid.v4();
              lastDot = file.originalname.lastIndexOf('.');
              fileType = file.originalname.slice(lastDot + 1).trim();
              cb(null, "".concat(hash, ".").concat(fileType));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function filename(_x4, _x5, _x6) {
      return _filename.apply(this, arguments);
    }

    return filename;
  }()
});

var shopImageMiddleware = (0, _multer.default)({
  storage: storage,
  fileFilter: imageFilter
});
exports.shopImageMiddleware = shopImageMiddleware;
//# sourceMappingURL=shopImage.middleware.js.map