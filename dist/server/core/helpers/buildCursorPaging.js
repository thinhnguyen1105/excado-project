"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.execCursorPaging = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _decodeBase3 = require("./decodeBase64");

var _encodeBase = require("./encodeBase64");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var execCursorPaging =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(model, filters, sortBy, pageSize, populates, before, after) {
    var sortField, sortOrder, _decodeBase, sortFieldValue, secondSortValue, _decodeBase2, _sortFieldValue, _secondSortValue, _model$find$sort, query, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, data, _model$find$sort2, _query, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _item, _data;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sortField = sortBy.split('|')[0];
            sortOrder = sortBy.split('|')[1] === 'asc' ? 1 : -1;

            if (before) {
              _decodeBase = (0, _decodeBase3.decodeBase64)(before), sortFieldValue = _decodeBase.sortFieldValue, secondSortValue = _decodeBase.secondSortValue;
              filters.push({
                $or: [_defineProperty({}, sortField, sortOrder === 1 ? {
                  $lt: sortFieldValue
                } : {
                  $gt: sortFieldValue
                }), {
                  $and: [_defineProperty({}, sortField, sortFieldValue), {
                    _id: sortOrder === 1 ? {
                      $lt: secondSortValue
                    } : {
                      $gt: secondSortValue
                    }
                  }]
                }]
              });
            } else if (after) {
              _decodeBase2 = (0, _decodeBase3.decodeBase64)(after), _sortFieldValue = _decodeBase2.sortFieldValue, _secondSortValue = _decodeBase2.secondSortValue;
              filters.push({
                $or: [_defineProperty({}, sortField, sortOrder === 1 ? {
                  $gt: _sortFieldValue
                } : {
                  $lt: _sortFieldValue
                }), {
                  $and: [_defineProperty({}, sortField, _sortFieldValue), {
                    _id: sortOrder === 1 ? {
                      $gt: _secondSortValue
                    } : {
                      $lt: _secondSortValue
                    }
                  }]
                }]
              });
            }

            if (!before) {
              _context.next = 30;
              break;
            }

            query = model.find(filters.length > 0 ? {
              $and: filters
            } : {}).sort((_model$find$sort = {}, _defineProperty(_model$find$sort, sortField, sortOrder * -1), _defineProperty(_model$find$sort, "_id", sortOrder * -1), _model$find$sort)).limit(pageSize + 1);
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 8;

            for (_iterator = populates[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              item = _step.value;
              query = query.populate(item);
            }

            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](8);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 16:
            _context.prev = 16;
            _context.prev = 17;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 19:
            _context.prev = 19;

            if (!_didIteratorError) {
              _context.next = 22;
              break;
            }

            throw _iteratorError;

          case 22:
            return _context.finish(19);

          case 23:
            return _context.finish(16);

          case 24:
            _context.next = 26;
            return query.exec();

          case 26:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data.length === pageSize + 1 ? data.slice(0, pageSize - 1).reverse() : _toConsumableArray(data).reverse(),
              before: data.length === pageSize + 1 ? (0, _encodeBase.encodeBase64)({
                sortFieldValue: data[pageSize - 1][sortField],
                secondSortValue: data[pageSize - 1]._id
              }) : undefined,
              after: (0, _encodeBase.encodeBase64)({
                sortFieldValue: data[0][sortField],
                secondSortValue: data[0]._id
              })
            });

          case 30:
            _query = model.find(filters.length > 0 ? {
              $and: filters
            } : {}).sort((_model$find$sort2 = {}, _defineProperty(_model$find$sort2, sortField, sortOrder), _defineProperty(_model$find$sort2, "_id", sortOrder), _model$find$sort2)).limit(pageSize + 1);
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 34;

            for (_iterator2 = populates[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              _item = _step2.value;
              _query = _query.populate(_item);
            }

            _context.next = 42;
            break;

          case 38:
            _context.prev = 38;
            _context.t1 = _context["catch"](34);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t1;

          case 42:
            _context.prev = 42;
            _context.prev = 43;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 45:
            _context.prev = 45;

            if (!_didIteratorError2) {
              _context.next = 48;
              break;
            }

            throw _iteratorError2;

          case 48:
            return _context.finish(45);

          case 49:
            return _context.finish(42);

          case 50:
            _context.next = 52;
            return _query.exec();

          case 52:
            _data = _context.sent;
            return _context.abrupt("return", {
              data: _data.length === pageSize + 1 ? _data.slice(0, pageSize) : _data,
              before: after ? (0, _encodeBase.encodeBase64)({
                sortFieldValue: _data[0][sortField],
                secondSortValue: _data[0]._id
              }) : undefined,
              after: _data.length === pageSize + 1 ? (0, _encodeBase.encodeBase64)({
                sortFieldValue: _data[pageSize - 1][sortField],
                secondSortValue: _data[pageSize - 1]._id
              }) : undefined
            });

          case 54:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 12, 16, 24], [17,, 19, 23], [34, 38, 42, 50], [43,, 45, 49]]);
  }));

  return function execCursorPaging(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
    return _ref.apply(this, arguments);
  };
}();

exports.execCursorPaging = execCursorPaging;
//# sourceMappingURL=buildCursorPaging.js.map