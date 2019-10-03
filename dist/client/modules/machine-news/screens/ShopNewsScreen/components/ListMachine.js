"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

var _react = _interopRequireDefault(require("react"));

var _MachineItem = _interopRequireDefault(require("../../../../../components/MachineItem/MachineItem"));

require("./ListMachine.less");

var _core = require("../../../../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListMachine = function ListMachine(props) {
  if (props.data.length > 0) {
    return _react.default.createElement("div", {
      className: "list-machine"
    }, _react.default.createElement(_row.default, null, props.data.map(function (item, index) {
      return _react.default.createElement(_MachineItem.default, {
        id: item._id,
        key: index,
        lg: 8,
        md: 8,
        sm: 24,
        xs: 24,
        linkRedirect: "".concat((0, _core.getShopUrl)(item.shop.domain), "/bai-dang-cua-hang/").concat(item._id),
        imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
        title: item.title,
        price: item.price,
        newsState: item.state,
        location: item.location.name,
        ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : 'test',
        starStatus: item.isFollowing ? 'filled' : 'outlined',
        changeFollowStatus: props.changeFollowStatus,
        ownerId: item.owner ? item.owner._id : '',
        currentUserId: props.profileState && props.profileState.authUser && props.profileState.authUser.id ? props.profileState.authUser.id : ''
      });
    })), _react.default.createElement(_row.default, {
      className: "group-button"
    }, props.hasPrev && _react.default.createElement(_button.default, {
      className: "button-previous",
      onClick: props.getPrevPage
    }, _react.default.createElement(_icon.default, {
      type: "left"
    }), " ", props.t('common:previous')), props.hasNext && _react.default.createElement(_button.default, {
      className: "button-next",
      type: "primary",
      onClick: props.getNextPage
    }, props.t('common:next'), " ", _react.default.createElement(_icon.default, {
      type: "right"
    }))));
  } else {
    return _react.default.createElement("div", {
      className: "list-machine",
      style: {
        padding: '42px 20px',
        fontSize: '24px',
        textAlign: 'center'
      }
    }, props.t('common:no-data'));
  }
};

var _default = ListMachine;
exports.default = _default;
//# sourceMappingURL=ListMachine.js.map