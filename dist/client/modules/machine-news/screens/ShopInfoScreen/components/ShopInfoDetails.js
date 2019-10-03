"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireDefault(require("react"));

require("./ShopInfoDetails.less");

var _InformationStore = _interopRequireDefault(require("./InformationStore"));

var _ShopIntroImages = _interopRequireDefault(require("./ShopIntroImages"));

var _DetailsProduct = _interopRequireDefault(require("./DetailsProduct"));

var _Map = _interopRequireDefault(require("./Map"));

var _SeeMost = _interopRequireDefault(require("./SeeMost"));

var _core = require("../../../../../core");

var _reactDeviceDetect = require("react-device-detect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShopInfoDetails = function ShopInfoDetails(props) {
  var translate = props.t;
  return _react.default.createElement(_row.default, {
    className: "outline-body",
    gutter: !_reactDeviceDetect.isMobile ? 16 : 0
  }, _react.default.createElement(_col.default, {
    lg: 16,
    md: 24,
    xs: 24,
    sm: 24
  }, _react.default.createElement(_InformationStore.default, {
    title: props.shopInfo.name,
    address: props.shopInfo.address,
    email: props.shopInfo.email,
    website: (0, _core.getShopUrl)(props.shopInfo.domain),
    describe: props.shopInfo.description,
    phoneNumber: props.shopInfo.phone,
    t: props.t
  }), _react.default.createElement(_ShopIntroImages.default, {
    title: translate('shop-info:feature-images'),
    introImages: props.shopInfo.introImages
  }), _react.default.createElement(_DetailsProduct.default, {
    t: props.t,
    data: props.newsData,
    profileState: props.profileState,
    changeFollowStatus: props.changeFollowItemStatus
  })), _react.default.createElement(_col.default, {
    lg: 8,
    md: 24,
    xs: 24,
    sm: 24
  }, props.profileState && props.profileState.authUser && props.profileState.authUser.id !== props.shopInfo.owner ? _react.default.createElement(_row.default, {
    gutter: !_reactDeviceDetect.isMobile ? 10 : 0,
    style: {
      marginBottom: '12px',
      marginLeft: '0px',
      marginRight: '0px'
    }
  }, _react.default.createElement(_col.default, {
    lg: 12,
    md: 12,
    xs: 12,
    sm: 12,
    style: {
      paddingLeft: '0px',
      paddingRight: '0px'
    }
  }, _react.default.createElement(_button.default, {
    className: "button-follow",
    onClick: function onClick() {
      return props.changeFollowStatus(props.starStatus, props.shopInfo._id);
    }
  }, _react.default.createElement(_icon.default, {
    type: "star",
    theme: props.starStatus
  }), props.starStatus === 'filled' ? translate('shop-info:unfollow') : translate('shop-info:follow'))), _react.default.createElement(_col.default, {
    lg: 12,
    md: 12,
    xs: 12,
    sm: 12,
    style: {
      paddingLeft: '0px',
      paddingRight: '0px'
    }
  }, _react.default.createElement(_button.default, {
    className: "send-message-button",
    type: "primary",
    icon: "message"
  }, translate('shop-info:mess')))) : null, _react.default.createElement(_Map.default, {
    location: props.shopInfo.address,
    geocode: props.shopInfo.geocode
  }), _react.default.createElement(_SeeMost.default, {
    title: translate('shop-info:most-viewed'),
    dataMachine: props.resultSearchNewestPost.data
  })));
};

var _default = ShopInfoDetails;
exports.default = _default;
//# sourceMappingURL=ShopInfoDetails.js.map