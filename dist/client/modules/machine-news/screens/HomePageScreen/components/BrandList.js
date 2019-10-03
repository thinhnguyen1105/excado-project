"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./BrandList.less");

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _head = _interopRequireDefault(require("next/head"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var BrandList = function BrandList(props) {
  var renderBrand = props.featureBrands.map(function (featureBrand, index) {
    return _react.default.createElement("div", {
      className: "brand-image",
      key: index
    }, _react.default.createElement("a", {
      href: "".concat(featureBrand.hyperlink),
      title: featureBrand.brand.name
    }, _react.default.createElement("img", {
      src: featureBrand.logoImage
    })));
  });
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    responsive: [{
      breakpoint: 1120,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000
      }
    }, {
      breakpoint: 768,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000
      }
    }, {
      breakpoint: 425,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000
      }
    }, {
      breakpoint: 576,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000
      }
    }]
  };
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_head.default, null, _react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), _react.default.createElement("meta", {
    name: "google",
    content: "notranslate"
  }), _react.default.createElement("meta", {
    charSet: "utf-8"
  }), _react.default.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  }), _react.default.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  }), _react.default.createElement("link", {
    rel: "shortcut icon",
    type: "image/png",
    href: "/static/images/favicon.png"
  }), _react.default.createElement("title", null, "Timmay.vn | Ch\u1EE3 m\xE1y c\xF4ng tr\xECnh")), _react.default.createElement("div", {
    className: "brand-list"
  }, _react.default.createElement(_reactSlick.default, settings, renderBrand)));
};

var _default = BrandList;
exports.default = _default;
//# sourceMappingURL=BrandList.js.map