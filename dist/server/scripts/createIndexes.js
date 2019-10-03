"use strict";

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = require("fs-extra");

var _core = require("../core");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// tslint:disable:no-console
var createIndexes =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var moduleNames, excludedModules, excludedAggregates, createIndexPromises, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, module, aggregateNames, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, aggregateName, serviceRepositoryUrl, repository, createRepoIndexes;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _mongoose.default.connect(_config.config.database.connectionString, {
              useNewUrlParser: true
            });

          case 2:
            _context.next = 4;
            return (0, _fsExtra.readdir)("".concat(_core.isDev ? 'src' : 'dist', "/server/modules"));

          case 4:
            moduleNames = _context.sent;
            excludedModules = ['website', '.DS_Store'];
            excludedAggregates = ['helpers', '.DS_Store'];
            createIndexPromises = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 11;
            _iterator = moduleNames[Symbol.iterator]();

          case 13:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 52;
              break;
            }

            module = _step.value;

            if (!(excludedModules.indexOf(module) !== -1)) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("continue", 49);

          case 17:
            _context.next = 19;
            return (0, _fsExtra.readdir)("".concat(_core.isDev ? 'src' : 'dist', "/server/modules/").concat(module, "/aggregates"));

          case 19:
            aggregateNames = _context.sent;
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 23;
            _iterator2 = aggregateNames[Symbol.iterator]();

          case 25:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context.next = 35;
              break;
            }

            aggregateName = _step2.value;

            if (!(excludedAggregates.indexOf(aggregateName) !== -1 || aggregateName.indexOf('index') === 0)) {
              _context.next = 29;
              break;
            }

            return _context.abrupt("continue", 32);

          case 29:
            _core.logger.info("[Create Index] [".concat(module, "] ").concat(aggregateName, " ..."));

            serviceRepositoryUrl = "../modules/".concat(module, "/aggregates/").concat(aggregateName, "/").concat(aggregateName, ".repository");

            try {
              repository = require(serviceRepositoryUrl);
              createRepoIndexes = repository[Object.keys(repository)[Object.keys(repository).length - 1]].ensureIndexes;

              if (createRepoIndexes) {
                createIndexPromises.push(createRepoIndexes());
              }
            } catch (error) {// console.log(error);
            }

          case 32:
            _iteratorNormalCompletion2 = true;
            _context.next = 25;
            break;

          case 35:
            _context.next = 41;
            break;

          case 37:
            _context.prev = 37;
            _context.t0 = _context["catch"](23);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t0;

          case 41:
            _context.prev = 41;
            _context.prev = 42;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 44:
            _context.prev = 44;

            if (!_didIteratorError2) {
              _context.next = 47;
              break;
            }

            throw _iteratorError2;

          case 47:
            return _context.finish(44);

          case 48:
            return _context.finish(41);

          case 49:
            _iteratorNormalCompletion = true;
            _context.next = 13;
            break;

          case 52:
            _context.next = 58;
            break;

          case 54:
            _context.prev = 54;
            _context.t1 = _context["catch"](11);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 58:
            _context.prev = 58;
            _context.prev = 59;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 61:
            _context.prev = 61;

            if (!_didIteratorError) {
              _context.next = 64;
              break;
            }

            throw _iteratorError;

          case 64:
            return _context.finish(61);

          case 65:
            return _context.finish(58);

          case 66:
            _context.next = 68;
            return Promise.all(createIndexPromises);

          case 68:
            console.log('Create indexes success');
            process.exit();

          case 70:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 54, 58, 66], [23, 37, 41, 49], [42,, 44, 48], [59,, 61, 65]]);
  }));

  return function createIndexes() {
    return _ref.apply(this, arguments);
  };
}();

createIndexes();
//# sourceMappingURL=createIndexes.js.map