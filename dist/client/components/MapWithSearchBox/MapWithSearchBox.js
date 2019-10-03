"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

var _react = _interopRequireDefault(require("react"));

var _recompose = require("recompose");

var _reactGoogleMaps = require("react-google-maps");

var _SearchBox = _interopRequireDefault(require("react-google-maps/lib/components/places/SearchBox"));

var _lodash = require("lodash");

require("./MapWithSearchBox.less");

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapWithSearchBox = (0, _recompose.compose)((0, _recompose.withProps)({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=".concat(_config.config.googleMaps.apiKey, "&libraries=geometry,drawing,places"),
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
}), (0, _recompose.lifecycle)({
  componentWillMount: function componentWillMount() {
    var _this = this;

    var refs = {};
    this.setState({
      bounds: null,
      center: this.props.geocode ? this.props.geocode : {
        lat: 21.0277644,
        lng: 105.8341598
      },
      markers: [{
        position: this.props.geocode ? this.props.geocode : {
          lat: 21.0277644,
          lng: 105.8341598
        }
      }],
      onMapMounted: function onMapMounted(ref) {
        refs.map = ref;
      },
      onBoundsChanged: function onBoundsChanged() {
        _this.setState({
          bounds: refs.map.getBounds(),
          center: refs.map.getCenter()
        });
      },
      onSearchBoxMounted: function onSearchBoxMounted(ref) {
        refs.searchBox = ref;
      },
      onPlacesChanged: function onPlacesChanged() {
        var places = refs.searchBox.getPlaces();
        var newAddress = places[0]['formatted_address'].indexOf(places[0].name) > -1 ? places[0]['formatted_address'] : "".concat(places[0].name, ", ").concat(places[0]['formatted_address']);

        _this.props.selectAddress('address', newAddress);

        _this.props.selectAddress('geocode', {
          lng: places[0].geometry.location.lng(),
          lat: places[0].geometry.location.lat()
        });

        var bounds = new window.google.maps.LatLngBounds();
        places.forEach(function (place) {
          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        var nextMarkers = places.map(function (place) {
          return {
            position: place.geometry.location
          };
        });
        var nextCenter = (0, _lodash.get)(nextMarkers, '0.position', _this.state.center);

        _this.setState({
          center: nextCenter,
          markers: nextMarkers
        });
      }
    });
  }
}), _reactGoogleMaps.withScriptjs, _reactGoogleMaps.withGoogleMap)(function (props) {
  return _react.default.createElement(_reactGoogleMaps.GoogleMap, {
    ref: props.onMapMounted,
    defaultZoom: 16,
    center: props.center,
    onBoundsChanged: props.onBoundsChanged
  }, _react.default.createElement(_SearchBox.default, {
    ref: props.onSearchBoxMounted,
    bounds: props.bounds,
    controlPosition: window.google.maps.ControlPosition.TOP_LEFT,
    onPlacesChanged: props.onPlacesChanged
  }, _react.default.createElement("input", {
    type: "text",
    defaultValue: props.address,
    placeholder: "Nh\u1EADp \u0111\u1ECBa ch\u1EC9 c\u1EEDa h\xE0ng ...",
    style: {
      boxSizing: "border-box",
      border: "1px solid transparent",
      width: "240px",
      height: "32px",
      marginTop: "10px",
      marginLeft: "10px",
      padding: "0 12px",
      borderRadius: "3px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
      fontSize: "14px",
      outline: "none",
      textOverflow: "ellipses"
    }
  })), props.markers.map(function (marker, index) {
    return _react.default.createElement(_reactGoogleMaps.Marker, {
      key: index,
      position: marker.position,
      draggable: true
    });
  }));
});
var _default = MapWithSearchBox;
exports.default = _default;
//# sourceMappingURL=MapWithSearchBox.js.map