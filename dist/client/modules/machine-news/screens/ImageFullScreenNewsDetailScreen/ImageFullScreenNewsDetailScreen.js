"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _CommonLayout = _interopRequireDefault(require("../../../../layouts/Page/CommonLayout"));

var _core = require("../../../../core");

require("react-image-gallery/styles/css/image-gallery.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var images = [];

var ImageFullScreenNewsDetailScreen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageFullScreenNewsDetailScreen, _React$Component);

  function ImageFullScreenNewsDetailScreen(props) {
    var _this;

    _classCallCheck(this, ImageFullScreenNewsDetailScreen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageFullScreenNewsDetailScreen).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "imageGallery", void 0);

    _this.imageGallery = React.createRef();
    return _this;
  }

  _createClass(ImageFullScreenNewsDetailScreen, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      images = this.props.newsData.imageUrls.length > 0 ? this.props.newsData.imageUrls.map(function (value) {
        return {
          original: (0, _core.getImageUrl)(value, 'large') ? (0, _core.getImageUrl)(value, 'large') : _this2.props.newsData.categoryId.imageUrl
        };
      }) : [{
        original: '/static/images/sample-machine.png',
        thumbnail: '/static/images/sample-machine.png'
      }];
      var renderImages = images.map(function (value) {
        return React.createElement("img", {
          src: "".concat(value.original),
          width: "100%",
          style: {
            marginBottom: '15px'
          }
        });
      });
      return React.createElement(React.Fragment, null, React.createElement(_CommonLayout.default, {
        updateFilters: this.props.updateFilters,
        topBrands: this.props.topBrands,
        searchKeyword: this.props.searchKeyword,
        hasSideBar: false,
        hasMenuItems: true,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }, renderImages));
    }
  }]);

  return ImageFullScreenNewsDetailScreen;
}(React.Component);

var _default = ImageFullScreenNewsDetailScreen;
exports.default = _default;
//# sourceMappingURL=ImageFullScreenNewsDetailScreen.js.map