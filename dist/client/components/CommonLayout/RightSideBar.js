"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RightSideBar = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Fragment = React.Fragment;

var RightSideBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RightSideBar, _React$Component);

  function RightSideBar() {
    _classCallCheck(this, RightSideBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(RightSideBar).apply(this, arguments));
  }

  _createClass(RightSideBar, [{
    key: "render",
    value: function render() {
      var adsPosition4 = this.props.adsense.filter(function (item) {
        return item.position === 4;
      })[0];
      var adsPosition5 = this.props.adsense.filter(function (item) {
        return item.position === 5;
      })[0];
      return React.createElement(Fragment, null, React.createElement("a", {
        href: adsPosition4 && adsPosition4.hyperlink ? adsPosition4.hyperlink : '#'
      }, React.createElement("img", {
        src: adsPosition4 && adsPosition4.imageUrl ? adsPosition4.imageUrl : '/static/images/sidebar-1.png',
        width: "100%"
      })), React.createElement("a", {
        href: adsPosition5 && adsPosition5.hyperlink ? adsPosition5.hyperlink : '#'
      }, React.createElement("img", {
        src: adsPosition5 && adsPosition5.imageUrl ? adsPosition5.imageUrl : '/static/images/sidebar-1.png',
        width: "100%",
        style: {
          marginTop: '30px'
        }
      })));
    }
  }]);

  return RightSideBar;
}(React.Component);

exports.RightSideBar = RightSideBar;
//# sourceMappingURL=RightSideBar.js.map