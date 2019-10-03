"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationDropdown = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/list/style");

var _list = _interopRequireDefault(require("antd/lib/list"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _core = require("../../core");

var moment = _interopRequireWildcard(require("moment"));

require("./NotificationDropdown.less");

require("firebase/auth");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var NotificationDropdown = function NotificationDropdown(props) {
  var getNotificationContent = function getNotificationContent(notification) {
    if (notification.type === 'CREATE_NEWS') {
      var isShop = notification.news.shop && notification.news.shop._id;

      if (isShop) {
        var displayName = notification.news.shop.name;
        return _react.default.createElement("p", null, "B\xE0i vi\u1EBFt \xA0", _react.default.createElement("a", {
          title: notification.news.title,
          onClick: function onClick() {
            props.readNotification(notification._id);
            window.location.href = "".concat((0, _core.getShopUrl)(notification.news.shop.domain), "/bai-dang-cua-hang/").concat(notification.news._id);
          }
        }, _react.default.createElement("b", null, notification.news.title)), " \xA0 \u0111\xE3 \u0111\u01B0\u1EE3c \u0111\u0103ng th\xE0nh c\xF4ng trong c\u1EEDa h\xE0ng \xA0", _react.default.createElement("a", {
          title: displayName,
          onClick: function onClick() {
            props.readNotification(notification._id);
            window.location.href = "".concat((0, _core.getShopUrl)(notification.news.shop.domain), "/thong-tin-cua-hang");
          }
        }, _react.default.createElement("b", null, displayName)));
      } else {
        return _react.default.createElement("p", null, "B\xE0i vi\u1EBFt \xA0", _react.default.createElement("a", {
          title: notification.news.title,
          onClick: function onClick() {
            props.readNotification(notification._id);
            window.location.href = "/bai-dang/".concat(notification.news._id);
          }
        }, _react.default.createElement("b", null, notification.news.title)), " \xA0 \u0111\xE3 \u0111\u01B0\u1EE3c \u0111\u0103ng th\xE0nh c\xF4ng");
      }
    } else if (notification.type === 'FOLLOW_USER') {
      var _displayName = notification.news.owner.fullName || notification.news.owner.email || notification.news.owner.phoneNo;

      return _react.default.createElement("p", null, "Ng\u01B0\u1EDDi d\xF9ng \xA0", _react.default.createElement("a", {
        title: _displayName,
        onClick: function onClick() {
          props.readNotification(notification._id);
          window.location.href = "/nguoi-dung/".concat(notification.news.owner._id);
        }
      }, _react.default.createElement("b", null, _displayName)), " \xA0 v\u1EEBa \u0111\u0103ng b\xE0i vi\u1EBFt \xA0", _react.default.createElement("a", {
        title: notification.news.title,
        onClick: function onClick() {
          props.readNotification(notification._id);
          window.location.href = "/bai-dang/".concat(notification.news._id);
        }
      }, _react.default.createElement("b", null, notification.news.title)));
    } else if (notification.type === 'FOLLOW_SHOP') {
      var _displayName2 = notification.news.shop.name;
      return _react.default.createElement("p", null, "C\u1EEDa h\xE0ng \xA0", _react.default.createElement("a", {
        title: _displayName2,
        onClick: function onClick() {
          props.readNotification(notification._id);
          window.location.href = "".concat((0, _core.getShopUrl)(notification.news.shop.domain), "/thong-tin-cua-hang");
        }
      }, _react.default.createElement("b", null, _displayName2)), " \xA0 v\u1EEBa \u0111\u0103ng b\xE0i vi\u1EBFt \xA0", _react.default.createElement("a", {
        title: notification.news.title,
        onClick: function onClick() {
          props.readNotification(notification._id);
          window.location.href = "".concat((0, _core.getShopUrl)(notification.news.shop.domain), "/bai-dang-cua-hang/").concat(notification.news._id);
        }
      }, _react.default.createElement("b", null, notification.news.title)));
    }

    return;
  };

  return _react.default.createElement("div", {
    className: "notification-dropdown"
  }, _react.default.createElement(_spin.default, {
    spinning: props.loadingNotification
  }, props.notificationList.length > 0 ? _react.default.createElement("div", null, _react.default.createElement(_list.default, {
    className: "notification-list",
    itemLayout: "horizontal",
    dataSource: props.notificationList,
    renderItem: function renderItem(item) {
      return _react.default.createElement(_list.default.Item, {
        onClick:
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", props.readNotification(item._id));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })),
        style: item.state === 'UNREAD' ? {
          background: '#e6f7ff',
          cursor: 'pointer'
        } : {}
      }, _react.default.createElement(_list.default.Item.Meta, {
        title: getNotificationContent(item),
        description: _react.default.createElement("span", {
          style: {
            fontSize: '12px'
          }
        }, _react.default.createElement(_icon.default, {
          type: "clock-circle"
        }), " ", moment(item.createdAt).format('DD-MM-YYYY HH:mm'))
      }));
    }
  }, props.hasNext && _react.default.createElement(_list.default.Item, {
    className: "loadmore-containter"
  }, _react.default.createElement("a", {
    className: "loadmore-button",
    onClick: props.loadMoreNotifications,
    type: "primary"
  }, "Xem th\xEAm"))), _react.default.createElement("div", {
    className: "small-text"
  }, _react.default.createElement("a", {
    onClick: props.readAllNotifications
  }, "\u0110\xE1nh d\u1EA5u \u0111\xE3 \u0111\u1ECDc t\u1EA5t c\u1EA3"))) : _react.default.createElement("div", {
    style: {
      height: '60px',
      textAlign: 'center',
      marginTop: '40px',
      fontWeight: 500
    }
  }, props.loadingNotification ? '' : 'Bạn không có thông báo nào')));
};

exports.NotificationDropdown = NotificationDropdown;
//# sourceMappingURL=NotificationDropdown.js.map