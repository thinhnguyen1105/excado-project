"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _ = require("../..");

var fs = _interopRequireWildcard(require("fs"));

var _core = require("../../../../core");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var imageService = {
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_params) {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _.imageRepository.find();

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
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
    _regenerator.default.mark(function _callee2(_id, _params) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _.imageRepository.findById(_id);

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
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
    _regenerator.default.mark(function _callee3(data, _params) {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _.imageRepository.create(data);

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
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
    _regenerator.default.mark(function _callee4(_id, data, _params) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _.imageRepository.update(data);

            case 2:
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
  deleteByUrls: function () {
    var _deleteByUrls = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(urls) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(urls && urls.length)) {
                _context5.next = 4;
                break;
              }

              _context5.next = 3;
              return _.imageRepository.deleteByUrls(urls);

            case 3:
              return _context5.abrupt("return", _context5.sent);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function deleteByUrls(_x9) {
      return _deleteByUrls.apply(this, arguments);
    }

    return deleteByUrls;
  }(),
  moveFilesToUploadFolder: function () {
    var _moveFilesToUploadFolder = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(url) {
      var path, lastDot, fileHash, smallPromise, largePromise;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              path = process.cwd();
              lastDot = url.lastIndexOf('.');
              fileHash = url.slice(0, lastDot).trim(); // const mainPromise = new Promise((resolve, _reject) => {
              //   move(`${path}/temp/${url}`, `${path}/upload/${url}` , (err?: any) => {
              //     if (err) {
              //       _reject(err.message);
              //       logger.error(err);
              //     }
              //     resolve();
              //   });
              // });

              smallPromise = new Promise(function (resolve, _reject) {
                move("".concat(path, "/temp/").concat(fileHash, "-small.jpg"), "".concat(path, "/upload/").concat(fileHash, "-small.jpg"), function (err) {
                  if (err) {
                    _reject(err.message);

                    _core.logger.error(err);
                  }

                  resolve();
                });
              });
              largePromise = new Promise(function (resolve, reject) {
                move("".concat(path, "/temp/").concat(fileHash, "-large.jpg"), "".concat(path, "/upload/").concat(fileHash, "-large.jpg"), function (err) {
                  if (err) {
                    reject(err.message); // tslint:disable-next-line

                    console.log('err', err);
                  }

                  resolve();
                });
              });
              _context6.next = 7;
              return Promise.all([smallPromise, largePromise]);

            case 7:
              return _context6.abrupt("return", _context6.sent);

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function moveFilesToUploadFolder(_x10) {
      return _moveFilesToUploadFolder.apply(this, arguments);
    }

    return moveFilesToUploadFolder;
  }()
};
exports.imageService = imageService;

var move = function move(oldPath, newPath, callback) {
  fs.rename(oldPath, newPath, function (err) {
    if (err) {
      _core.logger.error(err);

      if (err.code === 'EXDEV') {
        copy();
      } else callback();
    }

    callback();
  });

  var copy = function copy() {
    var readStream = fs.createReadStream(oldPath);
    var writeStream = fs.createWriteStream(newPath);
    readStream.on('error', callback);
    writeStream.on('error', callback);
    readStream.on('close', function () {
      fs.unlink(oldPath, callback);
    });
    readStream.pipe(writeStream);
  };
};
//# sourceMappingURL=image.service.js.map