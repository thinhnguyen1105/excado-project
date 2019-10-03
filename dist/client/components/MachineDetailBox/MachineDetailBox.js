"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireWildcard(require("react"));

require("./MachineDetailBox.less");

var _MachineItem = _interopRequireDefault(require("../MachineItem/MachineItem"));

var _core = require("../../core");

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

var MachineDetailBox =
/*#__PURE__*/
function (_Component) {
  _inherits(MachineDetailBox, _Component);

  function MachineDetailBox() {
    _classCallCheck(this, MachineDetailBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(MachineDetailBox).apply(this, arguments));
  }

  _createClass(MachineDetailBox, [{
    key: "render",
    value: function render() {
      var _this = this;

      var renderMachineDetailList = this.props.data.filter(function (ite) {
        return Boolean(ite);
      }).map(function (item, index) {
        return _react.default.createElement(_MachineItem.default, {
          id: item._id,
          key: index,
          lg: _this.props.lg,
          md: _this.props.md,
          sm: _this.props.sm,
          xs: _this.props.xs,
          linkRedirect: item._id ? "/bai-dang/".concat(item._id) : '#',
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title ? item.title : '',
          price: item.price ? item.price : 0,
          newsState: item.state,
          location: item.location ? item.location.name : '',
          ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : '',
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this.props.changeFollowStatus,
          totalFollow: item.counterFollow && item.counterFollow !== 0 ? item.counterFollow : undefined,
          totalView: item.counterView && item.counterView !== 0 ? item.counterView : undefined,
          isShowTotalFollowAndView: _this.props.isShowTotalFollowAndView,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this.props.profileState && _this.props.profileState.authUser && _this.props.profileState.authUser.id ? _this.props.profileState.authUser.id : ''
        });
      });
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("h3", {
        className: "title"
      }, this.props.title), _react.default.createElement(_row.default, {
        gutter: 12,
        type: "flex",
        className: "grid-view"
      }, _react.default.createElement(_col.default, {
        className: "button-pagging",
        lg: 1,
        md: 1,
        sm: 1,
        xs: 1
      }, !this.props.hiddenButton ? _react.default.createElement(_button.default, {
        disabled: this.props.disabledButtonLeft,
        onClick: this.props.buttonLeft,
        className: "button-left"
      }, _react.default.createElement(_icon.default, {
        type: "arrow-left"
      })) : _react.default.createElement("div", null)), _react.default.createElement(_col.default, {
        lg: 22,
        md: 22,
        sm: 22,
        xs: 22
      }, renderMachineDetailList), _react.default.createElement(_col.default, {
        className: "button-pagging-right",
        lg: 1,
        md: 1,
        sm: 1,
        xs: 1
      }, !this.props.hiddenButton ? _react.default.createElement(_button.default, {
        disabled: this.props.disabledButtonRight,
        onClick: this.props.buttonRight,
        className: "button-right"
      }, _react.default.createElement(_icon.default, {
        type: "arrow-right"
      })) : _react.default.createElement("div", null))));
    }
  }]);

  return MachineDetailBox;
}(_react.Component);

var _default = MachineDetailBox;
exports.default = _default;
//# sourceMappingURL=MachineDetailBox.js.map