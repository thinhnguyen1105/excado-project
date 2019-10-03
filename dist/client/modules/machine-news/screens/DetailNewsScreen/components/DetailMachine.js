"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireWildcard(require("react"));

require("./DetailMachine.less");

var _core = require("../../../../../core");

var JSZip = _interopRequireWildcard(require("jszip"));

var _fileSaver = require("file-saver");

var _reactImageGallery = _interopRequireDefault(require("react-image-gallery"));

require("react-image-gallery/styles/css/image-gallery.css");

var moment = _interopRequireWildcard(require("moment"));

var _i18n = require("../../../../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var isClient = typeof window !== 'undefined';
var JSZipUtils = isClient ? require('jszip-utils') : undefined;
var zip = new JSZip();
var images = [];

var DetailMachine =
/*#__PURE__*/
function (_Component) {
  _inherits(DetailMachine, _Component);

  function DetailMachine(props) {
    var _this;

    _classCallCheck(this, DetailMachine);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DetailMachine).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "imageGallery", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentImage: ''
    });

    _defineProperty(_assertThisInitialized(_this), "renderItem", function (item) {
      return _react.default.createElement("div", {
        className: "image-gallery-image",
        style: {
          background: "url(".concat(item.original, ")"),
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          position: 'relative',
          width: "100%",
          height: "400px",
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#fff'
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderThumbInner", function (item) {
      return _react.default.createElement("div", {
        className: "image-gallery-thumbnail-inner",
        style: {
          background: "url(".concat(item.original, ")"),
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          position: 'relative',
          width: "100%",
          height: "80px",
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#fff'
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFullScreenItem", function (item) {
      return _react.default.createElement("div", {
        className: "image-gallery-image",
        style: {
          background: "url(".concat(item.original, ")"),
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          position: 'relative',
          width: "100%",
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#fff',
          height: '500px'
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "downloadAllImages", function () {
      var count = 0;

      var urls = _this.props.newsData.imageUrls.map(function (value) {
        if (value.indexOf('.jpg') !== -1 || value.indexOf('.png') !== -1) {
          return value;
        } else {
          return value + "-large.jpg";
        }
      });

      urls.forEach(function (url) {
        JSZipUtils.getBinaryContent(url, function (err, data) {
          if (err) {
            throw err;
          }

          zip.file(url.replace('static/upload/', ''), data, {
            binary: true
          });
          count++;

          if (count === urls.length) {
            zip.generateAsync({
              type: 'blob'
            }).then(function (content) {
              (0, _fileSaver.saveAs)(content, "".concat(_this.props.newsData.title, ".zip"));
            });
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFilterClick", function (payload) {
      window.location.href = "/tim-kiem?".concat(Object.keys(payload).map(function (item) {
        return "".concat(item, "=").concat(payload[item]);
      }).join('&'));
    });

    _this.imageGallery = _react.default.createRef();
    return _this;
  }

  _createClass(DetailMachine, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      images = this.props.newsData.imageUrls.length > 0 ? this.props.newsData.imageUrls.map(function (value) {
        return {
          original: (0, _core.getImageUrl)(value, 'large') ? (0, _core.getImageUrl)(value, 'large') : _this2.props.newsData.categoryId.imageUrl,
          thumbnail: (0, _core.getImageUrl)(value, 'small') ? (0, _core.getImageUrl)(value, 'small') : _this2.props.newsData.categoryId.imageUrl
        };
      }) : [{
        original: '/static/images/sample-machine.png',
        thumbnail: '/static/images/sample-machine.png'
      }];
      var isSeller = ['SELL', 'LEASE'].indexOf(this.props.newsData.newsType) > -1;
      var weightRange = this.props.newsData.weightRange.max ? this.props.t('common:from-to').replace('{from}', this.props.newsData.weightRange.min).replace('{to}', this.props.newsData.weightRange.max) + ' ' + this.props.t('common:ton') : this.props.t('common:more-than') + ' ' + this.props.newsData.weightRange.min + ' ' + this.props.t('common:ton');
      var rentalPeriod = '';

      if (this.props.newsData.rentalPeriod && this.props.newsData.rentalPeriod._id) {
        rentalPeriod = this.props.newsData.rentalPeriod.max ? this.props.t('common:from-to').replace('{from}', this.props.newsData.rentalPeriod.min).replace('{to}', this.props.newsData.rentalPeriod.max) + ' ' + this.props.t('common:month') : this.props.t('common:more-than') + ' ' + this.props.newsData.rentalPeriod.min + ' ' + this.props.t('common:month');
      }

      return _react.default.createElement("div", null, _react.default.createElement(_row.default, {
        className: "outline"
      }, _react.default.createElement(_row.default, {
        gutter: 25
      }, _react.default.createElement(_col.default, {
        lg: 16,
        md: 16,
        sm: 24,
        xs: 24
      }, _react.default.createElement(_reactImageGallery.default, {
        ref: this.imageGallery,
        items: images,
        showPlayButton: false,
        showFullscreenButton: true,
        renderItem: this.renderItem.bind(this),
        renderThumbInner: this.renderThumbInner.bind(this),
        renderFullscreenButton: function renderFullscreenButton(_onClick, isFullscreen) {
          return _react.default.createElement("a", {
            href: "/xem-tat-ca-anh/".concat(_this2.props.newsData._id),
            target: "_blank",
            title: _this2.props.newsData.title
          }, _react.default.createElement("button", {
            type: "button",
            className: "image-gallery-fullscreen-button".concat(isFullscreen ? ' active' : '')
          }));
        }
      })), _react.default.createElement(_col.default, {
        lg: 8,
        md: 8,
        sm: 24,
        xs: 24
      }, _react.default.createElement("h1", {
        className: "post-title"
      }, this.props.newsData.title), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        lg: 24,
        md: 24,
        sm: 24,
        xs: 24
      }, _react.default.createElement("div", {
        className: "post-price"
      }, translate('common:price'), " ", this.props.newsData && this.props.newsData.price ? (0, _core.formatMoney)(Number(this.props.newsData.price)) : translate('common:contact'))), _react.default.createElement(_col.default, {
        lg: 24,
        md: 24,
        sm: 24,
        xs: 24
      }, _react.default.createElement("div", {
        className: "post-location"
      }, this.props.newsData && this.props.newsData.location ? this.props.newsData.location.name : '')), _react.default.createElement(_col.default, {
        lg: 24,
        md: 24,
        sm: 24,
        xs: 24
      }, _react.default.createElement("div", {
        className: "post-created-at"
      }, translate('common:postTime'), ": ", moment(new Date(this.props.newsData.createdAt)).format('DD/MM/YYYY HH:mm')))), _react.default.createElement("hr", {
        className: "line-shadow"
      }), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, translate('common:type-of-machine'))), _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, this.props.newsData.categoryId ? _react.default.createElement("a", {
        href: "/tim-kiem?category=".concat(this.props.newsData.categoryId.slug),
        title: this.props.newsData.categoryId.name
      }, this.props.newsData.categoryId.name) : _react.default.createElement(_react.Fragment, null)))), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, translate('common:manufacturer'))), _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, this.props.newsData.brand ? _react.default.createElement("a", {
        href: "/tim-kiem?brand=".concat(this.props.newsData.brand.slug),
        title: this.props.newsData.brand.name
      }, this.props.newsData.brand.name) : _react.default.createElement(_react.Fragment, null)))), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, "Model")), _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, this.props.newsData.model ? _react.default.createElement("a", {
        href: "/tim-kiem?keyword=".concat(this.props.newsData.model.name),
        title: this.props.newsData.model.name
      }, this.props.newsData.model.name) : _react.default.createElement(_react.Fragment, null)))), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, translate('common:status-of-machine'))), _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, _react.default.createElement("a", {
        href: "/tim-kiem?state=".concat(this.props.newsData.state),
        title: this.props.newsData.state ? translate("common:".concat(this.props.newsData.state.toLowerCase())) : ''
      }, this.props.newsData.state ? translate("common:".concat(this.props.newsData.state.toLowerCase())) : '')))), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, isSeller ? translate('common:year-of-manufacturer') : translate('common:rental-period'))), _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, isSeller ? this.props.newsData.year ? this.props.newsData.year : translate('common:unknown') : rentalPeriod))), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, translate('common:weight-range'))), _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, _react.default.createElement("a", {
        href: "/tim-kiem?maxWeight=".concat(this.props.newsData.weightRange.max, "&minWeight=").concat(this.props.newsData.weightRange.min),
        title: weightRange
      }, weightRange)))), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, translate('common:active-hours'))), _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, this.props.newsData.usedHours ? "".concat(this.props.newsData.usedHours, " ").concat(translate('common:hour')) : ''))), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, translate('common:frame-numbers'))), _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, this.props.newsData.serialNo ? this.props.newsData.serialNo : ''))), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, translate('common:counter-follow'))), _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, this.props.newsData.counterFollow ? this.props.newsData.counterFollow : 0))), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, translate('common:counter-view'))), _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("div", null, this.props.newsData.counterView ? this.props.newsData.counterView : 0))))), _react.default.createElement("hr", {
        className: "line-shadow"
      }), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 24,
        xs: 24
      }, _react.default.createElement(_button.default, {
        onClick: function onClick() {
          return _this2.downloadAllImages();
        },
        className: "button-download-image",
        type: "primary",
        icon: "download"
      }, translate('common:download-all-images')), _react.default.createElement("a", {
        href: "/xem-tat-ca-anh/".concat(this.props.newsData._id),
        target: "_blank",
        title: this.props.newsData.title
      }, _react.default.createElement(_button.default, {
        className: "button-download-image",
        type: "primary",
        icon: "eye"
      }, translate('common:showAllImages')))), this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id !== this.props.newsData.owner._id ? _react.default.createElement(_col.default, {
        className: "view-and-follow",
        lg: 12,
        md: 12,
        sm: 24,
        xs: 24
      }, _react.default.createElement("span", {
        className: "view"
      }, this.props.starStatus === 'filled' ? translate('common:unfollow') : translate('common:follow')), _react.default.createElement("a", {
        onClick: function onClick() {
          return _this2.props.changeFollowItemStatus(_this2.props.starStatus, _this2.props.newsData._id);
        }
      }, _react.default.createElement(_icon.default, {
        className: "icon-star",
        type: "star",
        theme: this.props.starStatus
      }))) : null)));
    }
  }]);

  return DetailMachine;
}(_react.Component);

var _default = (0, _i18n.withNamespaces)('common')(DetailMachine);

exports.default = _default;
//# sourceMappingURL=DetailMachine.js.map