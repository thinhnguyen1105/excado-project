"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _machineNews = require("../../../machine-news");

var _core = require("../../../../core");

var _auth = require("../../../auth");

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _slugify = _interopRequireDefault(require("slugify"));

var _core2 = require("../../../../../client/core");

var _xlsx = require("xlsx");

var _replace = _interopRequireDefault(require("lodash/replace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var uploadService = {
  createNewsFromExcelRow: function () {
    var _createNewsFromExcelRow = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(row, index, newsType) {
      var newsStates, phoneNo, firstName, newsState, location, usedHours, price, serialNo, category, brand, model, description, year, rentalPeriod, weightRange, imageUrls, existedUser, newUser, title, news;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newsStates = [{
                value: 'NEW',
                label: 'Mới'
              }, {
                value: 'USED',
                label: 'Nhập bãi'
              }, {
                value: 'LIQUIDATE',
                label: 'Thanh lý'
              }];
              phoneNo = "+".concat(row['A']).trim();
              firstName = row['B'].trim();
              newsState = newsStates.filter(function (state) {
                return state.label === row['C'];
              })[0] ? newsStates.filter(function (state) {
                return state.label === row['C'];
              })[0].value : '';

              if (!row['D']) {
                _context.next = 10;
                break;
              }

              _context.next = 7;
              return _machineNews.ProvinceModel.findOne({
                slug: (0, _slugify.default)((0, _core2.convertVietnamese)(row['D'].trim()))
              }).exec();

            case 7:
              _context.t0 = _context.sent;
              _context.next = 11;
              break;

            case 10:
              _context.t0 = '';

            case 11:
              location = _context.t0;
              usedHours = row['E'];
              price = row['F'];
              serialNo = row['G'];
              _context.next = 17;
              return _machineNews.CategoryModel.findOne({
                slug: (0, _slugify.default)((0, _core2.convertVietnamese)(row['H'].trim()))
              }).exec();

            case 17:
              category = _context.sent;

              if (!row['I']) {
                _context.next = 24;
                break;
              }

              _context.next = 21;
              return _machineNews.BrandModel.findOne({
                slug: (0, _slugify.default)((0, _core2.convertVietnamese)(row['I'].trim()))
              }).exec();

            case 21:
              _context.t1 = _context.sent;
              _context.next = 25;
              break;

            case 24:
              _context.t1 = '';

            case 25:
              brand = _context.t1;

              if (!row['J']) {
                _context.next = 32;
                break;
              }

              _context.next = 29;
              return _machineNews.ModelModel.findOne({
                slug: row['J'].trim()
              }).populate('brand').populate('category').exec();

            case 29:
              _context.t2 = _context.sent;
              _context.next = 33;
              break;

            case 32:
              _context.t2 = '';

            case 33:
              model = _context.t2;
              description = row['K'];
              year = row['L'];
              rentalPeriod = row['M'].split('/')[1];
              weightRange = row['N'].split('/')[1];
              imageUrls = row['O'] ? row['O'].split('\n') : []; // validate

              if (!(!phoneNo || !firstName)) {
                _context.next = 41;
                break;
              }

              throw new _core.UserInputError("Invalid user info at row ".concat(index));

            case 41:
              _context.next = 43;
              return _auth.UsersModel.findOne({
                phoneNo: phoneNo
              }).exec();

            case 43:
              existedUser = _context.sent;

              if (existedUser) {
                _context.next = 51;
                break;
              }

              _context.next = 47;
              return _firebaseAdmin.default.auth().createUser({
                phoneNumber: phoneNo,
                password: 'Timmay@123',
                email: "".concat(phoneNo.replace('+', ''), "@timmay.vn"),
                displayName: firstName,
                emailVerified: true
              });

            case 47:
              newUser = _context.sent;
              _context.next = 50;
              return _auth.UsersModel.create({
                id: newUser.uid,
                email: newUser.email,
                phoneNo: phoneNo,
                familyName: firstName,
                givenName: '',
                fullName: firstName,
                loginDetail: {
                  phoneNo: newUser.phoneNumber,
                  provider: 'phone'
                },
                roles: [],
                isActive: true,
                completeSignUp: false,
                createdBy: newUser.uid,
                createdAt: new Date().getTime()
              });

            case 50:
              existedUser = _context.sent;

            case 51:
              if (!(['SELL', 'LEASE'].indexOf(newsType) > -1 && !newsState)) {
                _context.next = 53;
                break;
              }

              throw new _core.UserInputError("Invalid news state at row ".concat(index));

            case 53:
              if (!(row['D'] && (!location || !location._id))) {
                _context.next = 55;
                break;
              }

              throw new _core.UserInputError("Invalid location at row ".concat(index));

            case 55:
              if (!(usedHours && isNaN(usedHours))) {
                _context.next = 57;
                break;
              }

              throw new _core.UserInputError("Invalid used hours at row ".concat(index));

            case 57:
              if (!(price && isNaN(price))) {
                _context.next = 59;
                break;
              }

              throw new _core.UserInputError("Invalid price at row ".concat(index));

            case 59:
              if (!(!category || !category._id)) {
                _context.next = 61;
                break;
              }

              throw new _core.UserInputError("Invalid category at row ".concat(index));

            case 61:
              if (!(['SELL', 'LEASE'].indexOf(newsType) > -1 && (!brand || !brand._id))) {
                _context.next = 63;
                break;
              }

              throw new _core.UserInputError("Invalid brand at row ".concat(index));

            case 63:
              if (!(['SELL', 'LEASE'].indexOf(newsType) > -1 && (!model || !model._id))) {
                _context.next = 65;
                break;
              }

              throw new _core.UserInputError("Invalid model at row ".concat(index));

            case 65:
              if (!(newsType === 'RENT' && !rentalPeriod)) {
                _context.next = 67;
                break;
              }

              throw new _core.UserInputError("Invalid rental period at row ".concat(index));

            case 67:
              if (weightRange) {
                _context.next = 69;
                break;
              }

              throw new _core.UserInputError("Invalid weight range at row ".concat(index));

            case 69:
              if (!(['SELL', 'LEASE'].indexOf(newsType) > -1 && imageUrls.length === 0)) {
                _context.next = 71;
                break;
              }

              throw new _core.UserInputError("Missing images at row ".concat(index));

            case 71:
              title = '';
              _context.t3 = newsType;
              _context.next = _context.t3 === 'SELL' ? 75 : _context.t3 === 'LEASE' ? 77 : _context.t3 === 'BUY' ? 79 : _context.t3 === 'RENT' ? 81 : 83;
              break;

            case 75:
              title = "".concat(year ? year : '', " ").concat(model.brand.name.toUpperCase(), " ").concat(model.name, " ").concat(serialNo);
              return _context.abrupt("break", 84);

            case 77:
              title = "".concat(year ? year : '', " ").concat(model.brand.name.toUpperCase(), " ").concat(model.name, " ").concat(serialNo);
              return _context.abrupt("break", 84);

            case 79:
              title = "T\xECm mua ".concat(category.name);
              return _context.abrupt("break", 84);

            case 81:
              title = "T\xECm thu\xEA ".concat(category.name);
              return _context.abrupt("break", 84);

            case 83:
              return _context.abrupt("break", 84);

            case 84:
              // create news
              news = new _machineNews.NewsModel({
                title: title,
                state: newsState,
                newsType: newsType,
                location: location ? location._id : undefined,
                owner: existedUser._id,
                status: 'PUBLIC',
                description: description,
                usedHours: usedHours,
                price: price,
                serialNo: serialNo,
                categoryId: model && model.category ? model.category._id : category ? category._id : undefined,
                brand: model && model.brand ? model.brand._id : brand ? brand._id : undefined,
                model: model ? model._id : undefined,
                year: year,
                weightRange: weightRange,
                rentalPeriod: rentalPeriod,
                createdAt: new Date().getTime(),
                imageUrls: imageUrls
              });
              _context.next = 87;
              return news.save();

            case 87:
              _context.next = 89;
              return news.populate('categoryId').populate('weightRange').execPopulate();

            case 89:
              return _context.abrupt("return", news);

            case 90:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function createNewsFromExcelRow(_x, _x2, _x3) {
      return _createNewsFromExcelRow.apply(this, arguments);
    }

    return createNewsFromExcelRow;
  }(),
  uploadExcelFile: function () {
    var _uploadExcelFile = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(file, authorizationHeader) {
      var idToken, decodedIdToken, newsTypes, workbook, createNewsPromises, i, newsType, wordSheet, sheetData, j, data;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              idToken = (0, _replace.default)(authorizationHeader, 'Bearer ', '');
              _context2.next = 3;
              return _firebaseAdmin.default.auth().verifyIdToken(idToken);

            case 3:
              decodedIdToken = _context2.sent;

              if (!(decodedIdToken.roles.indexOf('5c7f747708898183ac62f2af') > -1)) {
                _context2.next = 15;
                break;
              }

              newsTypes = ['SELL', 'LEASE', 'BUY', 'RENT'];
              workbook = (0, _xlsx.readFile)("upload/".concat(file.filename));
              createNewsPromises = [];

              for (i = 2; i < workbook.SheetNames.length; i += 1) {
                newsType = newsTypes[i - 2];
                wordSheet = workbook.Sheets[workbook.SheetNames[i]];
                sheetData = _xlsx.utils.sheet_to_json(wordSheet, {
                  header: 'A'
                });

                for (j = 2; j < sheetData.length; j += 1) {
                  createNewsPromises.push(uploadService.createNewsFromExcelRow(sheetData[j], j, newsType));
                }
              }

              _context2.next = 11;
              return Promise.all(createNewsPromises);

            case 11:
              data = _context2.sent;
              return _context2.abrupt("return", {
                data: data
              });

            case 15:
              throw new _core.NotAuthorizedError();

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function uploadExcelFile(_x4, _x5) {
      return _uploadExcelFile.apply(this, arguments);
    }

    return uploadExcelFile;
  }()
};
exports.uploadService = uploadService;
//# sourceMappingURL=uploads.service.js.map