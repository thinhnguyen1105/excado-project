"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/tabs/style");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

var React = _interopRequireWildcard(require("react"));

require("./UserNewsDetail.less");

var _MachineItem = _interopRequireDefault(require("../../../../../components/MachineItem/MachineItem"));

var _core = require("../../../../../core");

var _reactDeviceDetect = require("react-device-detect");

var _DetailMachineBoxHorizontal = _interopRequireDefault(require("../../SearchDetailsScreen/components/DetailMachineBoxHorizontal"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPane = _tabs.default.TabPane;

var UserNewsDetail = function UserNewsDetail(props) {
  var renderShopItems = props.data.map(function (item, index) {
    return !_reactDeviceDetect.isMobile ? React.createElement(_MachineItem.default, {
      id: item._id,
      key: index,
      lg: 6,
      md: 6,
      sm: 24,
      xs: 24,
      linkRedirect: "/bai-dang/".concat(item._id),
      imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
      title: item.title,
      price: item.price,
      newsState: item.state,
      location: item.location ? item.location.name : "".concat(props.t('user-page:undefined')),
      ownerName: item.owner.fullName,
      starStatus: item.isFollowing ? 'filled' : 'outlined',
      changeFollowStatus: props.changeFollowStatus,
      ownerId: item.owner ? item.owner._id : '',
      currentUserId: props.profileState && props.profileState.authUser && props.profileState.authUser.id ? props.profileState.authUser.id : ''
    }) : React.createElement(_DetailMachineBoxHorizontal.default, {
      id: item._id,
      key: index,
      imageUrl: item.imageUrls[0],
      title: item.title,
      price: item.price,
      linkRedirect: "/bai-dang/".concat(item._id),
      location: item.location.name,
      newsState: item.state,
      typeOfMachine: item.categoryId.name,
      brand: item.brand.name,
      owner: item.owner,
      starStatus: item.isFollowing ? 'filled' : 'outlined',
      changeFollowStatus: props.changeFollowStatus,
      ownerId: item.owner ? item.owner._id : '',
      currentUserId: props.profileState && props.profileState.authUser && props.profileState.authUser.id ? props.profileState.authUser.id : ''
    });
  });
  return React.createElement("div", {
    className: "shop-details"
  }, React.createElement(_tabs.default, {
    activeKey: props.activeTab,
    tabBarStyle: {
      background: '#fff',
      margin: 0
    },
    onChange: function onChange(activeKey) {
      return props.activeTabChange({
        activeTab: activeKey
      });
    }
  }, _core.newsTypes.map(function (item) {
    return React.createElement(TabPane, {
      tab: props.t("common:".concat(item.value.toLowerCase())),
      key: item.value
    }, React.createElement(_spin.default, {
      spinning: props.loading
    }, props.data.length > 0 ? React.createElement("div", null, React.createElement(_row.default, null, renderShopItems), React.createElement(_row.default, {
      className: "next-and-back-button"
    }, props.hasPrev && React.createElement(_button.default, {
      className: "button-back",
      onClick: props.getPrevPage
    }, React.createElement(_icon.default, {
      type: "left"
    }), " ", props.t('common:previous')), props.hasNext && React.createElement(_button.default, {
      className: "button-next",
      type: "primary",
      onClick: props.getNextPage
    }, props.t('common:next'), " ", React.createElement(_icon.default, {
      type: "right"
    })))) : React.createElement("div", {
      className: "no-data"
    }, props.t('common:no-data'))));
  })));
};

var _default = UserNewsDetail;
exports.default = _default;
//# sourceMappingURL=UserNewsDetail.js.map