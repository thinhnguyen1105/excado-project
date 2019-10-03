"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

var _react = _interopRequireDefault(require("react"));

require("./Map.less");

var _reactGoogleMaps = require("react-google-maps");

var _config = require("../../../../../config");

var _i18n = require("../../../../../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var MyMapComponent = (0, _reactGoogleMaps.withScriptjs)((0, _reactGoogleMaps.withGoogleMap)(function (props) {
  return _react.default.createElement(_reactGoogleMaps.GoogleMap, {
    defaultZoom: 16,
    defaultCenter: props.locationGeocode
  }, props.isMarkerShown && _react.default.createElement(_reactGoogleMaps.Marker, {
    position: props.locationGeocode
  }));
}));

var Map =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Map);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Map)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      locationGeocode: _this.props.geocode ? _this.props.geocode : {
        lat: 21.0277644,
        lng: 105.8341598
      }
    });

    return _this;
  }

  _createClass(Map, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_row.default, {
        className: "outline-map"
      }, _react.default.createElement(_row.default, {
        className: "title"
      }, _react.default.createElement("strong", null, this.props.t('shop-info:map'))), _react.default.createElement(MyMapComponent, {
        isMarkerShown: true,
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=".concat(_config.config.googleMaps.apiKey, "&libraries=geometry,drawing,places"),
        locationGeocode: this.state.locationGeocode,
        loadingElement: _react.default.createElement("div", {
          style: {
            height: "100%",
            textAlign: 'center'
          }
        }, _react.default.createElement(_spin.default, null)),
        containerElement: _react.default.createElement("div", {
          style: {
            height: "400px"
          }
        }),
        mapElement: _react.default.createElement("div", {
          style: {
            height: "100%"
          }
        })
      }));
    }
  }]);

  return Map;
}(_react.default.Component);

var _default = (0, _i18n.withNamespaces)('shop-info')(Map);

exports.default = _default;
//# sourceMappingURL=Map.js.map