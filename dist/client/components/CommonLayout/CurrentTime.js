"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

require("./CurrentTime.less");

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

var timerID;

var CurrentTime =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CurrentTime, _React$Component);

  function CurrentTime(props) {
    var _this;

    _classCallCheck(this, CurrentTime);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CurrentTime).call(this, props));
    _this.state = {
      date: new Date()
    };
    return _this;
  }

  _createClass(CurrentTime, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      timerID = setInterval(function () {
        return _this2.tick();
      }, 60000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(timerID);
    }
  }, {
    key: "tick",
    value: function tick() {
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var vietnameseDay = ['Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy', 'Chủ nhật'];
      var day = vietnameseDay[this.state.date.getDay()];
      var date = this.state.date.getDate() < 10 ? "0".concat(this.state.date.getDate()) : this.state.date.getDate();
      var month = this.state.date.getMonth() + 1 < 10 ? "0".concat(this.state.date.getMonth() + 1) : this.state.date.getMonth() + 1;
      var year = this.state.date.getFullYear();
      var hours = this.state.date.getHours() < 10 ? "0".concat(this.state.date.getHours()) : this.state.date.getHours();
      var minutes = this.state.date.getMinutes() < 10 ? "0".concat(this.state.date.getMinutes()) : this.state.date.getMinutes();
      var timeZone = "GMT".concat(this.state.date.getTimezoneOffset() / -60 > 0 ? "+".concat(this.state.date.getTimezoneOffset() / -60) : this.state.date.getTimezoneOffset() / -60);
      return React.createElement("div", {
        className: "current-time"
      }, React.createElement("span", {
        className: "city-time"
      }, "".concat(day, ", ").concat(date, "/").concat(month, "/").concat(year, ", ").concat(hours, ":").concat(minutes, " (").concat(timeZone, ")")));
    }
  }]);

  return CurrentTime;
}(React.Component);

var _default = CurrentTime;
exports.default = _default;
//# sourceMappingURL=CurrentTime.js.map