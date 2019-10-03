"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireWildcard(require("react"));

require("./BrandFollowLetter.less");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var BrandFollowLetter = function BrandFollowLetter(props) {
  var classifyObject = function classifyObject() {
    var result = {};
    props.listBrands.filter(function (item) {
      return item.name;
    }).sort().map(function (brand) {
      var letter = brand.name[0].toUpperCase();
      result[letter] ? result[letter] = [].concat(_toConsumableArray(result[letter]), [brand]) : result[letter] = [brand];
    });
    return result;
  };

  var listBrandAlphabet = classifyObject();
  return _react.default.createElement(_react.Fragment, null, Object.keys(listBrandAlphabet).map(function (item, index) {
    return _react.default.createElement(_row.default, {
      key: index
    }, _react.default.createElement("h1", {
      className: "row-brand"
    }, item), _react.default.createElement(_row.default, {
      gutter: 10
    }, listBrandAlphabet[item].map(function (brand) {
      return _react.default.createElement(_col.default, {
        key: brand._id,
        lg: 6,
        md: 12,
        sm: 12,
        xs: 24
      }, _react.default.createElement("a", {
        className: "brand-link",
        title: brand.name,
        onClick: function onClick() {
          window.location.href = "/danh-sach-hang/".concat(brand.slug);
        }
      }, brand.name.toUpperCase(), " (", brand.totalNews, ")"));
    })));
  }), props.loading && _react.default.createElement(_row.default, {
    style: {
      textAlign: 'center',
      marginTop: '24px'
    }
  }, _react.default.createElement(_icon.default, {
    type: "sync",
    spin: true,
    style: {
      fontSize: '42px'
    }
  })));
};

var _default = BrandFollowLetter;
exports.default = _default;
//# sourceMappingURL=BrandFollowLetter.js.map