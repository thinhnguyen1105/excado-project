"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PagingButtons = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PagingButtons = function PagingButtons(props) {
  return _react.default.createElement("div", {
    className: "pagination",
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, props.before && _react.default.createElement(_button.default, {
    onClick: props.getPrevPage
  }, _react.default.createElement(_icon.default, {
    type: "left"
  }), " Prev"), props.after && _react.default.createElement(_button.default, {
    onClick: props.getNextPage
  }, "Next ", _react.default.createElement(_icon.default, {
    type: "right"
  })));
};

exports.PagingButtons = PagingButtons;
//# sourceMappingURL=PagingButtons.js.map