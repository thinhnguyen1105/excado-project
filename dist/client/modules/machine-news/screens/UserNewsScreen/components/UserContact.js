"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var React = _interopRequireWildcard(require("react"));

require("./UserContact.less");

var moment = _interopRequireWildcard(require("moment"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fragment = React.Fragment;

var UserContact = function UserContact(props) {
  var phoneSvg = function phoneSvg() {
    return React.createElement("svg", {
      width: "17",
      height: "16",
      viewBox: "0 0 17 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M16.0137 12.6552L13.4839 10.1784C12.9801 9.6871 12.1456 9.70203 11.6242 10.2127L10.5543 11.2598C10.4326 11.3789 10.2474 11.4051 10.0982 11.3231C9.29331 10.8866 8.19175 10.2882 7.03258 9.15259C5.86998 8.01458 5.25818 6.93454 4.81086 6.14613C4.7308 6.00445 4.75539 5.82581 4.87176 5.71206L5.52916 5.06945L5.9497 4.65725C6.47194 4.14586 6.48634 3.32921 5.98363 2.83648L3.45385 0.359373C2.95114 -0.132666 2.11632 -0.117739 1.59408 0.39365L0.89135 1.08554C0.885726 1.09108 0.885755 1.10016 0.891416 1.10566C0.896615 1.11071 0.897127 1.11888 0.892616 1.12456C0.657071 1.42087 0.460081 1.76176 0.313068 2.12905C0.176026 2.4826 0.0907036 2.81998 0.0516897 3.15805C-0.282352 5.86906 0.983128 8.34671 4.41748 11.7088C9.16479 16.3559 12.9905 16.0049 13.1555 15.9877C13.515 15.9457 13.8595 15.8616 14.2096 15.7285C14 .5825 15.5859 14.9313 15.3927 15.2344 15.1617C15.2389 15.1583 15.2452 15.1585 15.2495 15.1622C15.2542 15.1663 15.2611 15.1661 15.2656 15.1618L15.98 14.477C16.5012 13.9657 16.5162 13.1487 16.0137 12.6552Z",
      fill: "white"
    }));
  };

  var chatSvg = function chatSvg() {
    return React.createElement("svg", {
      width: "20",
      height: "21",
      viewBox: "0 0 20 21",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M16.4935 0H3.50647C1.57297 0 0 1.69966 0 3.7888V12.4441C0 14.5333 1.57297 16.2329\n3.50647 16.2329L11.7785 16.2329L15.7384 20.5115C15.8726 20.6565 16.0519 20.7335 16.2344\n20.7335C16.3248 20.7335 16.4159 20.7145 16.5026 20.6757C16.7647 20.5584 16.9356 20.2823 16.9356 19.9757V16.2029C18.6613 15.9674 20 14.3715 20 12.4441V3.7888C20 1.69966 18.427 0 16.4935 0ZM18.5974 12.4442C18.5974 13.6977 17.6536 14.7174 16.4935 14.7174H16.2343C15.847 14.7174 15.533 15.0568 15.533 15.4752V18.1463L12.5649 14.9394C12.4334 14.7972 12.2551 14.7174 12.069 14.7174H3.50647C2.34636 14.7174 1.40259 13.6977 1.40259 12.4442V3.78887C1.40259 2.53537 2.34636 1.51562 3.50647 1.51562H16.4935C17.6536 1.51562 18.5974 2.53537 18.5974 3.78887V12.4442Z",
      fill: "white"
    }), React.createElement("path", {
      d: "M15.161 5.36523H4.83801C4.45073 5.36523 4.13672 5.70445 4.13672 6.12296C4.13672 6.5414\n4.45073 6.88068 4.83801 6.88068H15.161C15.5483 6.88068 15.8623 6.5414 15.8623 6.12296C15.8623\n5.70445 15.5484 5.36523 15.161 5.36523Z",
      fill: "white"
    }), React.createElement("path", {
      d: "M15.161 9.60938H4.83801C4.45073 9.60938 4.13672 9.94861 4.13672 10.3671C4.13672 10.7856\n4.45073 11.1249 4.83801 11.1249H15.161C15.5483 11.1249 15.8623 10.7856 15.8623 10.3671C15.8623\n9.94867 15.5484 9.60938 15.161 9.60938Z",
      fill: "white"
    }));
  };

  var displayName = props.profileData.fullName || props.profileData.email;
  return React.createElement(Fragment, null, React.createElement("div", {
    className: "shop-basic-info"
  }, React.createElement("div", {
    className: "user-image"
  }, React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      backgroundImage: "url(".concat(props.profileState.authUser && props.profileState.authUser.avatarUrl ? props.profileState.authUser.avatarUrl : '/static/images/default-avatar.jpg', ")"),
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  })), React.createElement("br", null), React.createElement("span", {
    className: "description"
  }, displayName)), React.createElement("div", {
    className: "join-date"
  }, React.createElement("span", null, React.createElement("i", null, props.t('user-page:joined-date'), " ", moment(new Date(props.profileData.createdAt)).format('DD/MM/YYYY')))), props.profileState && props.profileState.authUser && props.profileState.authUser.id !== props.profileData._id ? React.createElement("div", {
    className: "shop-contact"
  }, React.createElement("a", {
    href: "tel:".concat(props.profileData.phoneNo)
  }, React.createElement(_button.default, {
    type: "primary",
    className: "phone-call-button"
  }, React.createElement(_icon.default, {
    component: phoneSvg
  }), " ", props.profileData.phoneNo || "".concat(props.t('user-page:no-phone-number')))), React.createElement(_button.default, {
    href: "sms:".concat(props.profileData.phoneNo),
    type: "primary",
    className: "chat-button"
  }, React.createElement(_icon.default, {
    component: chatSvg
  }), " ", props.t('user-page:mess-user')), React.createElement(_button.default, {
    type: "primary",
    className: "star-button"
  }, React.createElement("div", null, React.createElement("a", {
    onClick: function onClick() {
      props.profileState.authUser ? props.changeFollowUserStatus(props.starStatus, props.profileData._id) : props.changeFollowUserStatus(props.starStatus, '');
    },
    style: {
      color: '#fff'
    }
  }, React.createElement(_icon.default, {
    type: "star",
    theme: props.starStatus
  }), props.starStatus !== 'filled' ? "".concat(props.t('user-page:follow')) : "".concat(props.t('user-page:unfollow'))))), React.createElement("span", {
    className: "follower-count"
  }, React.createElement(_icon.default, {
    type: "user"
  }), " ", props.profileData.counterFollow && props.profileData.counterFollow > 0 ? "".concat(props.profileData.counterFollow, " ").concat(props.t('user-page:follow-count')) : "".concat(props.t('user-page:no-follow-count')))) : null);
};

var _default = UserContact;
exports.default = _default;
//# sourceMappingURL=UserContact.js.map