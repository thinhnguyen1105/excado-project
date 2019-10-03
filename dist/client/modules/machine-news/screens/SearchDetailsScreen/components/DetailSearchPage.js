"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireWildcard(require("react"));

var _DetailMachineBoxHorizontal = _interopRequireDefault(require("./DetailMachineBoxHorizontal"));

require("./DetailSearchPage.less");

var _core = require("../../../../../core");

var _i18n = require("../../../../../i18n");

var _reactDeviceDetect = require("react-device-detect");

var _MachineItem = _interopRequireDefault(require("../../../../../components/MachineItem/MachineItem"));

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

var DetailSearchPage =
/*#__PURE__*/
function (_Component) {
  _inherits(DetailSearchPage, _Component);

  function DetailSearchPage() {
    _classCallCheck(this, DetailSearchPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(DetailSearchPage).apply(this, arguments));
  }

  _createClass(DetailSearchPage, [{
    key: "render",
    value: function render() {
      var _this = this;

      var translate = this.props.t;
      return _react.default.createElement(_row.default, {
        className: "outline-detail-search-page"
      }, _react.default.createElement(_spin.default, {
        spinning: this.props.loading.handleFiltersChange || this.props.loading.getNextPage || this.props.loading.getPrevPage || this.props.loading.handleSortChange
      }, this.props.data.map(function (item, index) {
        return _reactDeviceDetect.isMobile ? _react.default.createElement(_MachineItem.default, {
          id: item._id,
          key: index,
          lg: 12,
          md: 12,
          sm: 12,
          xs: 12,
          linkRedirect: "/bai-dang/".concat(item._id),
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title ? item.title : '',
          price: item.price ? item.price : 0,
          newsState: item.state,
          location: item.location ? item.location.name : '',
          ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : '',
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this.props.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this.props.profileState && _this.props.profileState.authUser && _this.props.profileState.authUser.id ? _this.props.profileState.authUser.id : ''
        }) : _react.default.createElement(_DetailMachineBoxHorizontal.default, {
          id: item._id,
          key: index,
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          linkRedirect: "/bai-dang/".concat(item._id),
          location: item.location ? item.location.name : '',
          newsState: item.state,
          typeOfMachine: item.categoryId.name,
          brand: item.brand ? item.brand.name : '',
          owner: item.owner,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this.props.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this.props.profileState && _this.props.profileState.authUser && _this.props.profileState.authUser.id ? _this.props.profileState.authUser.id : ''
        });
      }), _react.default.createElement(_row.default, {
        className: "next-and-back-button"
      }, this.props.hasPrev && _react.default.createElement(_button.default, {
        className: "button-back",
        onClick: this.props.getPrevPage
      }, _react.default.createElement(_icon.default, {
        type: "left"
      }), translate('common:previous-page')), this.props.hasNext && _react.default.createElement(_button.default, {
        className: "button-next",
        type: "primary",
        onClick: this.props.getNextPage
      }, translate('common:next-page'), _react.default.createElement(_icon.default, {
        type: "right"
      })))));
    }
  }]);

  return DetailSearchPage;
}(_react.Component);

var _default = (0, _i18n.withNamespaces)('common')(DetailSearchPage);

exports.default = _default;
//# sourceMappingURL=DetailSearchPage.js.map