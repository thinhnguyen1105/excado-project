"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/tabs/style");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

var _react = _interopRequireDefault(require("react"));

require("./DetailsHomePage.less");

var _CityList = _interopRequireDefault(require("../components/CityList"));

var _MachineList = _interopRequireDefault(require("./MachineList"));

var _MachineDetailBox = _interopRequireDefault(require("../../../../../components/MachineDetailBox/MachineDetailBox"));

var _CommonKeywords = _interopRequireDefault(require("./CommonKeywords"));

var _i18n = require("../../../../../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TabPane = _tabs.default.TabPane;

var DetailsHomePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DetailsHomePage, _React$Component);

  function DetailsHomePage() {
    _classCallCheck(this, DetailsHomePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(DetailsHomePage).apply(this, arguments));
  }

  _createClass(DetailsHomePage, [{
    key: "render",
    value: function render() {
      var _this = this;

      var translate = this.props.t;
      return _react.default.createElement(_row.default, {
        className: "details-home-page"
      }, _react.default.createElement(_tabs.default, {
        defaultActiveKey: "1",
        onChange: function onChange(activeKey) {
          return _this.props.onChangeTabs(activeKey);
        }
      }, _react.default.createElement(TabPane, {
        tab: translate('index:news-sell'),
        key: "1"
      }, _react.default.createElement(_spin.default, {
        spinning: this.props.searchState.isLoadingDataSell
      }, _react.default.createElement(_row.default, {
        className: "machine-list"
      }, this.props.searchState.dataTotal.dataSell.data.length === 0 ? _react.default.createElement("div", {
        className: "box-nodata"
      }, translate('index:no-data')) : _react.default.createElement(_MachineDetailBox.default, {
        title: translate('index:news-sell'),
        data: this.props.searchState.dataTotal.dataSell.data,
        profileState: this.props.profileState,
        changeFollowStatus: this.props.changeFollowStatus,
        buttonLeft: this.props.buttonLeft,
        buttonRight: this.props.buttonRight,
        disabledButtonLeft: this.props.disabledButtonLeft,
        disabledButtonRight: this.props.disabledButtonRight,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6,
        hiddenButton: false
      })))), _react.default.createElement(TabPane, {
        tab: translate('index:news-buy-or-rent'),
        key: "2"
      }, _react.default.createElement(_spin.default, {
        spinning: this.props.searchState.isLoadingDataBuy
      }, _react.default.createElement(_row.default, {
        className: "machine-list"
      }, this.props.searchState.dataTotal.dataBuy.data.length === 0 ? _react.default.createElement("div", {
        className: "box-nodata"
      }, translate('index:no-data')) : _react.default.createElement(_MachineDetailBox.default, {
        title: translate('index:news-buy-or-rent'),
        data: this.props.searchState.dataTotal.dataBuy.data,
        profileState: this.props.profileState,
        changeFollowStatus: this.props.changeFollowStatus,
        buttonLeft: this.props.buttonLeft,
        buttonRight: this.props.buttonRight,
        disabledButtonLeft: this.props.disabledButtonLeft,
        disabledButtonRight: this.props.disabledButtonRight,
        hiddenButton: false,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6
      })))), _react.default.createElement(TabPane, {
        tab: translate('index:machine-for-rent'),
        key: "3"
      }, _react.default.createElement(_spin.default, {
        spinning: this.props.searchState.isLoadingDataLease
      }, _react.default.createElement(_row.default, {
        className: "machine-list"
      }, this.props.searchState.dataTotal.dataLease.data.length === 0 ? _react.default.createElement("div", {
        className: "box-nodata"
      }, translate('index:no-data')) : _react.default.createElement(_MachineDetailBox.default, {
        title: translate('index:machine-for-rent'),
        data: this.props.searchState.dataTotal.dataLease.data,
        profileState: this.props.profileState,
        changeFollowStatus: this.props.changeFollowStatus,
        buttonLeft: this.props.buttonLeft,
        buttonRight: this.props.buttonRight,
        disabledButtonLeft: this.props.disabledButtonLeft,
        disabledButtonRight: this.props.disabledButtonRight,
        hiddenButton: false,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6
      })))), _react.default.createElement(TabPane, {
        tab: translate('index:machine-nearest'),
        key: "4"
      }, _react.default.createElement(_spin.default, {
        spinning: this.props.isLoadingNearestMachine
      }, _react.default.createElement(_row.default, {
        className: "machine-list"
      }, this.props.profileData && this.props.profileData.province ? _react.default.createElement(_MachineDetailBox.default, {
        profileState: this.props.profileState,
        title: translate('index:machine-nearest'),
        data: this.props.newsDataNearestMachine.data,
        changeFollowStatus: this.props.changeMostFollowNewsFollowStatus,
        buttonLeft: this.props.buttonLeft,
        buttonRight: this.props.buttonRight,
        disabledButtonLeft: this.props.disabledButtonLeft,
        disabledButtonRight: this.props.disabledButtonRight,
        hiddenButton: false,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6
      }) : _react.default.createElement("div", {
        className: "box-nodata"
      }, this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? _react.default.createElement("a", {
        href: "/thong-tin-ca-nhan"
      }, translate('common:update-location-notify')) : _react.default.createElement("a", {
        onClick: function onClick() {
          return _this.props.profileReducers.openModal({
            modalName: 'login'
          });
        }
      }, translate('common:login-update-location-notify'))))))), _react.default.createElement(_spin.default, {
        spinning: this.props.searchState.isLoadingDataMostFollow
      }, _react.default.createElement(_row.default, {
        className: "machine-list"
      }, _react.default.createElement(_MachineDetailBox.default, {
        profileState: this.props.profileState,
        title: translate('index:most-follow-news'),
        data: this.props.searchState.dataTotal.dataMostFollow.data,
        changeFollowStatus: this.props.changeMostFollowNewsFollowStatus,
        buttonLeft: this.props.buttonLeftMostFollow,
        buttonRight: this.props.buttonRightMostFollow,
        disabledButtonLeft: this.props.disabledButtonLeftMostFollow,
        disabledButtonRight: this.props.disabledButtonRightMostFollow,
        hiddenButton: false,
        isShowTotalFollowAndView: false,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6
      }))), _react.default.createElement(_row.default, null, _react.default.createElement(_MachineList.default, {
        categories: this.props.categories,
        seeMoreTotalMachineClicked: this.props.seeMoreTotalMachineClicked,
        onSeeMoreTotalMachineClick: this.props.onSeeMoreTotalMachineClick
      })), _react.default.createElement(_CityList.default, {
        provinces: this.props.provinces,
        seeMoreClicked: this.props.seeMoreClicked,
        onSeeMoreButtonClick: this.props.onSeeMoreCityListButtonClick
      }), this.props.recentViewedData.length > 0 && _react.default.createElement(_spin.default, {
        spinning: this.props.isLoadingRecentViewed
      }, _react.default.createElement(_row.default, {
        className: "machine-list"
      }, _react.default.createElement(_MachineDetailBox.default, {
        title: translate('index:recent-news'),
        data: this.props.recentViewedData.map(function (item) {
          return item.news;
        }),
        profileState: this.props.profileState,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6,
        buttonRight: this.props.getRecentViewedNextPage,
        buttonLeft: this.props.getRecentViewedPrevPage,
        disabledButtonRight: this.props.hasRecentViewedNextPage,
        disabledButtonLeft: this.props.hasRecentViewedPrevPage,
        changeFollowStatus: this.props.changeRecentViewedFollowStatus,
        hiddenButton: false
      }))), _react.default.createElement(_row.default, {
        className: "machine-list"
      }, _react.default.createElement(_MachineDetailBox.default, {
        title: translate('index:suggest-for-today'),
        data: this.props.resultSuggestForToday.data,
        profileState: this.props.profileState,
        hiddenButton: true,
        disabledButtonLeft: true,
        disabledButtonRight: true,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6,
        changeFollowStatus: this.props.changeSuggestForTodayFollowStatus,
        buttonLeft: function buttonLeft() {
          return;
        },
        buttonRight: function buttonRight() {
          return;
        }
      })), _react.default.createElement(_CommonKeywords.default, {
        commonKeywords: this.props.commonKeywords,
        t: this.props.t
      }));
    }
  }]);

  return DetailsHomePage;
}(_react.default.Component);

var _default = (0, _i18n.withNamespaces)('index')(DetailsHomePage);

exports.default = _default;
//# sourceMappingURL=DetailsHomePage.js.map