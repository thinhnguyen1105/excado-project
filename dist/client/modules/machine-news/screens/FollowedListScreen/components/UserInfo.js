"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var React = _interopRequireWildcard(require("react"));

require("./UserInfo.less");

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

var UserInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserInfo, _React$Component);

  function UserInfo() {
    _classCallCheck(this, UserInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserInfo).apply(this, arguments));
  }

  _createClass(UserInfo, [{
    key: "render",
    value: function render() {
      return React.createElement(_row.default, {
        className: "user-info"
      }, React.createElement(_col.default, {
        lg: 4,
        md: 4,
        sm: 24,
        xs: 24,
        className: "user-avatar",
        style: {
          textAlign: 'center'
        }
      }, React.createElement("div", {
        className: "image-dashboard"
      }, React.createElement("div", {
        style: {
          width: '100%',
          height: '100%',
          backgroundImage: "url(".concat(this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.avatarUrl ? this.props.profileState.authUser.avatarUrl : 'static/images/default-avatar.jpg', ")"),
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }
      }))), React.createElement(_col.default, {
        lg: 20,
        md: 20,
        sm: 24,
        xs: 24,
        className: "user-text"
      }, React.createElement("span", null, this.props.profileState.authUser.fullName), React.createElement("br", null), React.createElement("a", {
        href: "/nguoi-dung/".concat(this.props.profileState.authUser.id),
        title: this.props.profileState.authUser.fullName
      }, React.createElement("span", null, "Xem trang c\xE1 nh\xE2n"))));
    }
  }]);

  return UserInfo;
}(React.Component);

var _default = UserInfo;
exports.default = _default;
//# sourceMappingURL=UserInfo.js.map