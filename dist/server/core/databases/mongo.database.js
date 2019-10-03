"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Schema", {
  enumerable: true,
  get: function get() {
    return _mongoose.Schema;
  }
});
Object.defineProperty(exports, "model", {
  enumerable: true,
  get: function get() {
    return _mongoose.model;
  }
});
Object.defineProperty(exports, "ObjectId", {
  enumerable: true,
  get: function get() {
    return _mongodb.ObjectId;
  }
});
exports.getPaginationResult = exports.addIsDeletableSchema = exports.addIsAuditableSchema = exports.removeId = exports.getId = exports.startDatabase = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _mongoose = require("mongoose");

var _mongodb = require("mongodb");

var _2 = require("./..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var startDatabase =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(connectionString) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _mongoose.connect)(connectionString, {
              useNewUrlParser: true
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function startDatabase(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.startDatabase = startDatabase;

var getId = function getId() {
  return new _mongoose.Types.ObjectId().toString();
};

exports.getId = getId;

var removeId = function removeId(entity) {
  var savedEntity = _objectSpread({}, entity);

  delete savedEntity.id;
  return savedEntity;
};

exports.removeId = removeId;

var addIsAuditableSchema = function addIsAuditableSchema(schema) {
  return _objectSpread({}, schema, {
    createdBy: String,
    createdAt: Number,
    lastModifiedBy: String,
    lastModifiedAt: Number
  });
};

exports.addIsAuditableSchema = addIsAuditableSchema;

var addIsDeletableSchema = function addIsDeletableSchema(schema) {
  return _objectSpread({}, schema, {
    deletedBy: String,
    deletedAt: Number,
    isDeleted: String
  });
};

exports.addIsDeletableSchema = addIsDeletableSchema;

var getPaginationResult =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(query, mongoQuery) {
    var paginationMongoQuery, _ref3, _ref4, fieldToOrder, documents, edges, cursor;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            paginationMongoQuery = query.first ? mongoQuery.limit(query.first + 1) : query.last ? mongoQuery.limit(query.last + 1) : mongoQuery;
            _ref3 = query.orderBy ? query.orderBy.split('_') : [undefined], _ref4 = _slicedToArray(_ref3, 1), fieldToOrder = _ref4[0];
            _context2.next = 4;
            return paginationMongoQuery.exec();

          case 4:
            documents = _context2.sent;
            edges = documents.filter(function (_document, index) {
              return index < documents.length - 1;
            }).map(function (document) {
              return {
                node: document
              };
            });
            cursor = fieldToOrder ? (0, _2.encodeBase64)(_defineProperty({}, fieldToOrder, documents[documents.length - 1][fieldToOrder])) : undefined;
            return _context2.abrupt("return", query.first ? {
              edges: edges,
              pageInfo: {
                hasNextPage: query.first > documents.length,
                endCursor: cursor
              }
            } : query.last ? {
              edges: edges,
              pageInfo: {
                hasNextPage: query.last > documents.length,
                endCursor: cursor
              }
            } : {
              edges: edges,
              pageInfo: {}
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPaginationResult(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getPaginationResult = getPaginationResult;
//# sourceMappingURL=mongo.database.js.map