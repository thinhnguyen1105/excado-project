"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFileStream = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var saveFileStream =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(stream, filePath) {
    var saveLocation;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            saveLocation = "".concat(_config.config.storage.folder).concat(filePath.indexOf('/') === 0 ? filePath : '/' + filePath);
            _context.next = 3;
            return _fsExtra.default.ensureDir(_path.default.dirname(saveLocation));

          case 3:
            _context.next = 5;
            return new Promise(function (resolve, reject) {
              var fileStream = _fsExtra.default.createWriteStream(saveLocation);

              stream.pipe(fileStream);
              stream.on('error', function (error) {
                reject(error);
              });
              fileStream.on('finish', function () {
                resolve();
              });
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function saveFileStream(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.saveFileStream = saveFileStream;
//# sourceMappingURL=local.storage.js.map