"use strict";

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var provinceRepository = _interopRequireWildcard(require("../modules/machine-news/aggregates/provinces/provinces.repository"));

var modelRepository = _interopRequireWildcard(require("../modules/machine-news/aggregates/models/models.repository"));

var newsRepository = _interopRequireWildcard(require("../modules/machine-news/aggregates/news/news.repository"));

var _config = require("../config");

var _machineNews = require("../modules/machine-news");

var _weightRanges = require("../modules/machine-news/aggregates/weight-ranges/weight-ranges.repository");

var _rentalPeriods = require("../modules/machine-news/aggregates/rental-periods/rental-periods.repository");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var randomString = function randomString() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

var randomDate = function randomDate() {
  var start = new Date(2018, 10, 20);
  var end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

_mongoose.default.connect(_config.config.database.connectionString, {
  useNewUrlParser: true
},
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(err) {
    var _ref2, _ref3, allModels, allProvinces, allShops, allWeightRange, allRentalPeriod, allNewsType, allState, allImages, importNewsPromises, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, model, province, shop, newsType, newsState, weightRange, rentalPeriod, isSeller, year, serialNo, createdDate, title;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (err) {
              console.log(err);
            }

            _context.next = 3;
            return Promise.all([modelRepository.modelRepository.findAll(), provinceRepository.provinceRepository.find(), _machineNews.shopRepository.getAll(), _weightRanges.weightRangeRepository.findAll(), _rentalPeriods.rentalPeriodRepository.findAll()]);

          case 3:
            _ref2 = _context.sent;
            _ref3 = _slicedToArray(_ref2, 5);
            allModels = _ref3[0];
            allProvinces = _ref3[1];
            allShops = _ref3[2];
            allWeightRange = _ref3[3];
            allRentalPeriod = _ref3[4];
            allNewsType = ['SELL', 'BUY', 'RENT', 'LEASE'];
            allState = ['NEW', 'USED', 'LIQUIDATE'];
            allImages = ["/static/images/may-1.jpg", "/static/images/may-2.jpg", "/static/images/may-3.jpg", "/static/images/may-4.jpg", "/static/images/may-5.jpg"];
            importNewsPromises = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 17;
            _iterator = allModels[Symbol.iterator]();

          case 19:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 51;
              break;
            }

            item = _step.value;
            model = item;
            province = allProvinces.data[Math.floor(Math.random() * allProvinces.data.length)];
            shop = allShops[Math.floor(Math.random() * allShops.length)];
            newsType = allNewsType[Math.floor(Math.random() * allNewsType.length)];
            newsState = allState[Math.floor(Math.random() * allState.length)];
            weightRange = allWeightRange[Math.floor(Math.random() * allWeightRange.length)];
            rentalPeriod = allRentalPeriod[Math.floor(Math.random() * allRentalPeriod.length)];
            isSeller = ['SELL', 'LEASE'].indexOf(newsType) > -1;
            year = Math.floor(Math.random() * (new Date().getFullYear() + 1 - 1900) + 1900);
            serialNo = randomString();
            createdDate = randomDate();
            title = '';
            _context.t0 = newsType;
            _context.next = _context.t0 === 'SELL' ? 36 : _context.t0 === 'LEASE' ? 38 : _context.t0 === 'BUY' ? 40 : _context.t0 === 'RENT' ? 42 : 44;
            break;

          case 36:
            title = "".concat(year ? year : '', " ").concat(model.brand.name.toUpperCase(), " ").concat(model.name, " ").concat(serialNo);
            return _context.abrupt("break", 45);

          case 38:
            title = "".concat(year ? year : '', " ").concat(model.brand.name.toUpperCase(), " ").concat(model.name, " ").concat(serialNo);
            return _context.abrupt("break", 45);

          case 40:
            title = "T\xECm mua ".concat(model.category.name);
            return _context.abrupt("break", 45);

          case 42:
            title = "T\xECm thu\xEA ".concat(model.category.name);
            return _context.abrupt("break", 45);

          case 44:
            return _context.abrupt("break", 45);

          case 45:
            importNewsPromises.push(newsRepository.newsRepository.create({
              title: title,
              state: newsState,
              newsType: newsType,
              priceType: 'FIXED',
              location: province._id,
              owner: shop.owner._id,
              shop: shop._id,
              status: 'PUBLIC',
              usedHours: Math.floor(Math.random() * 500) + 1,
              price: isSeller ? Math.floor(Math.random() * 10000000000) : undefined,
              serialNo: serialNo,
              categoryId: model.category._id,
              brand: model.brand._id,
              model: model._id,
              description: "\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Proin volutpat pharetra volutpat. Nulla dictum neque id sem venenatis, non consequat ipsum ultrices.\n        In sed justo mi. Nulla malesuada quam id libero sodales tincidunt.\n        Donec interdum molestie dolor, quis imperdiet dui blandit eu. Vestibulum et turpis eu nulla semper consequat ut vel mauris.\n        Cras ac dictum libero.Sed feugiat nisl odio, at fermentum mi tempor dictum. Curabitur venenatis eget mauris a accumsan.\n\n        Nullam tristique dolor quis sapien cursus, in consequat mauris malesuada.\n        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\n        Suspendisse id massa lacus. Nam lobortis ex eu urna mattis, non lacinia nisi sagittis.\n        Cras pellentesque, lectus vel posuere imperdiet, nunc mauris porta nisl, eu scelerisque nunc elit sit amet nulla.\n      ",
              year: isSeller ? year : undefined,
              weightRange: weightRange._id,
              rentalPeriod: !isSeller ? rentalPeriod._id : undefined,
              createdAt: createdDate.getTime(),
              createdDate: createdDate,
              imageUrls: isSeller ? [allImages[Math.floor(Math.random() * allImages.length)]] : []
            }));
            _context.next = 48;
            return Promise.all(importNewsPromises);

          case 48:
            _iteratorNormalCompletion = true;
            _context.next = 19;
            break;

          case 51:
            _context.next = 57;
            break;

          case 53:
            _context.prev = 53;
            _context.t1 = _context["catch"](17);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 57:
            _context.prev = 57;
            _context.prev = 58;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 60:
            _context.prev = 60;

            if (!_didIteratorError) {
              _context.next = 63;
              break;
            }

            throw _iteratorError;

          case 63:
            return _context.finish(60);

          case 64:
            return _context.finish(57);

          case 65:
            process.exit();

          case 66:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[17, 53, 57, 65], [58,, 60, 64]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
//# sourceMappingURL=importNews.js.map