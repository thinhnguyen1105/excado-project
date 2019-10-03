"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

var _react = _interopRequireWildcard(require("react"));

require("./SeeMost.less");

var _DetailMachineBoxHorizontal = _interopRequireDefault(require("./DetailMachineBoxHorizontal"));

var _core = require("../../../../../core");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SeeMost =
/*#__PURE__*/
function (_Component) {
  _inherits(SeeMost, _Component);

  function SeeMost() {
    _classCallCheck(this, SeeMost);

    return _possibleConstructorReturn(this, _getPrototypeOf(SeeMost).apply(this, arguments));
  }

  _createClass(SeeMost, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_row.default, {
        className: "out-line-see-most"
      }, _react.default.createElement(_row.default, {
        className: "title"
      }, _react.default.createElement("strong", null, this.props.title)), _react.default.createElement(_row.default, {
        className: "body"
      }, this.props.dataMachine.length === 0 ? _react.default.createElement("div", null, "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u") : _react.default.createElement("div", null, this.props.dataMachine.map(function (item, index) {
        return _react.default.createElement(_DetailMachineBoxHorizontal.default, {
          key: index,
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price ? item.price : 0,
          linkRedirect: item._id ? "/bai-dang-cua-hang/".concat(item._id) : '',
          location: item.location.name,
          statusMachine: item.state,
          isFollowing: true,
          typeOfMachine: item.newsType,
          brand: item.brand.name,
          owner: item.owner.name,
          isShowTotalFollowAndView: true,
          counterFollow: item.counterFollow,
          counterView: item.counterView
        });
      }))));
    }
  }]);

  return SeeMost;
}(_react.Component);

var _default = SeeMost;
exports.default = _default;
//# sourceMappingURL=SeeMost.js.map