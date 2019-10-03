"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/tabs/style");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

var _react = _interopRequireDefault(require("react"));

var _MachineItem = _interopRequireDefault(require("../../../../../components/MachineItem/MachineItem"));

require("../../../../../components/MachineDetailBox/MachineDetailBox.less");

require("./DetailsProduct.less");

var _core = require("../../../../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPane = _tabs.default.TabPane;

var DetailsProduct = function DetailsProduct(props) {
  var translate = props.t;
  return _react.default.createElement(_tabs.default, {
    className: "tab",
    defaultActiveKey: "1"
  }, _react.default.createElement(TabPane, {
    tab: translate('shop-info:public-news'),
    key: "1"
  }, props.data && props.data.length > 0 ? props.data.map(function (item, index) {
    return _react.default.createElement(_MachineItem.default, {
      key: index,
      id: item._id,
      starStatus: item.isFollowing ? 'filled' : 'outlined',
      changeFollowStatus: props.changeFollowStatus,
      lg: 8,
      md: 8,
      sm: 12,
      xs: 24,
      linkRedirect: "/bai-dang-cua-hang/".concat(item._id),
      imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
      title: item.title,
      price: item.price,
      newsState: item.state,
      location: item.location.name,
      ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : 'test',
      ownerId: item.owner ? item.owner._id : '',
      currentUserId: props.profileState && props.profileState.authUser && props.profileState.authUser.id ? props.profileState.authUser.id : ''
    });
  }) : _react.default.createElement("div", {
    className: "noti-store-no-data"
  }, translate('shop-info:no-data')), _react.default.createElement("a", {
    href: "/bai-dang-cua-hang"
  }, _react.default.createElement(_button.default, {
    type: "primary",
    className: "button-see-more"
  }, translate('shop-info:more').toUpperCase()))));
};

var _default = DetailsProduct;
exports.default = _default;
//# sourceMappingURL=DetailsProduct.js.map