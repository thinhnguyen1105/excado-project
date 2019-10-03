"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageRepository = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ImageSchema = new _mongoose.default.Schema((0, _core.addAuditableSchema)((0, _core.addDeletableSchema)({
  name: String,
  url: String
})), {
  timestamps: true
});
ImageSchema.index({
  location: 'text'
});

var ImageModel = _mongoose.default.model('Image', ImageSchema);

var find =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return ImageModel.find({}).exec();

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function find() {
    return _ref.apply(this, arguments);
  };
}();

var findById =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(id) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", ImageModel.findById(id).exec());

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function findById(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var create =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(payload) {
    var newImage;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            newImage = new ImageModel(payload);
            _context3.next = 3;
            return newImage.save();

          case 3:
            return _context3.abrupt("return", newImage);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function create(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var update =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(payload) {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return ImageModel.findByIdAndUpdate(payload._id, {
              $set: payload
            }).exec();

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function update(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

var deleteByUrls =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(urls) {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return ImageModel.deleteMany({
              url: {
                $in: urls
              }
            }).exec();

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteByUrls(_x4) {
    return _ref5.apply(this, arguments);
  };
}();

var imageRepository = {
  find: find,
  findById: findById,
  create: create,
  update: update,
  deleteByUrls: deleteByUrls
};
exports.imageRepository = imageRepository;
//# sourceMappingURL=image.repository.js.map