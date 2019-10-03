"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideBar = void 0;

require("antd/lib/layout/style");

var _layout = _interopRequireDefault(require("antd/lib/layout"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/menu/style");

var _menu = _interopRequireDefault(require("antd/lib/menu"));

var _react = _interopRequireDefault(require("react"));

require("./SideBar.less");

var _core = require("../../../core");

var _store = require("../../../store");

var _i18n = require("../../../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SideBarMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideBarMenu, _React$Component);

  function SideBarMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SideBarMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SideBarMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedMenuItem: '',
      openedSubMenu: ''
    });

    return _this;
  }

  _createClass(SideBarMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;

      var getMenuItem = function getMenuItem(item) {
        if ((0, _core.checkPermission)(_this2.props.authUser, item.permission)) {
          return _react.default.createElement(_menu.default.Item, {
            key: item.path
          }, _react.default.createElement("a", {
            href: item.path
          }, _react.default.createElement("span", null, translate("common:".concat(item.name)))));
        }

        return;
      };

      var getSubMenus = function getSubMenus(subMenu) {
        var render = false;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = subMenu.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if ((0, _core.checkPermission)(_this2.props.authUser, item.permission)) {
              render = true;
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (render) {
          return _react.default.createElement(_menu.default.SubMenu, {
            key: subMenu.name,
            title: _react.default.createElement("span", null, _react.default.createElement(_icon.default, {
              type: subMenu.icon
            }), _react.default.createElement("span", null, translate("common:".concat(subMenu.name))))
          }, subMenu.items.map(function (item) {
            return getMenuItem(item);
          }));
        }

        return;
      };

      var menuProps = {};

      if (!this.props.menuCollapsed) {
        menuProps.openKeys = [this.props.openedSubMenu];
      }

      return _react.default.createElement(_layout.default.Sider, {
        trigger: null,
        collapsible: true,
        collapsed: this.props.menuCollapsed,
        breakpoint: "lg",
        width: this.props.menuWidth,
        collapsedWidth: this.props.collapsedWidth,
        theme: this.props.menuTheme,
        className: "sider"
      }, _react.default.createElement("div", {
        className: "logo",
        id: "logo"
      }, _react.default.createElement("a", {
        href: "#"
      }, _react.default.createElement("img", {
        src: "/static/images/logo-timmay.png",
        alt: "logo"
      }))), _react.default.createElement(_menu.default, _extends({
        key: "Menu",
        mode: "inline",
        inlineCollapsed: this.props.menuCollapsed,
        theme: this.props.menuTheme,
        style: {
          padding: '16px 0',
          width: '100%'
        },
        className: "sider",
        onOpenChange: function onOpenChange(openKeys) {
          return _this2.props.openSubMenuChange(openKeys[openKeys.length - 1]);
        },
        selectedKeys: [this.props.selectedMenuItem]
      }, menuProps), (0, _core.getMenuConfigs)().map(function (item) {
        return getSubMenus(item);
      })));
    }
  }]);

  return SideBarMenu;
}(_react.default.Component);

var mapState = function mapState(rootState) {
  return {
    authUser: rootState.profileModel.authUser
  };
};

var mapDispatch = function mapDispatch(_rootReducer) {
  return {};
};

var SideBar = (0, _i18n.withNamespaces)('common')((0, _store.withRematch)(_store.initStore, mapState, mapDispatch)(SideBarMenu));
exports.SideBar = SideBar;
//# sourceMappingURL=SideBar.js.map