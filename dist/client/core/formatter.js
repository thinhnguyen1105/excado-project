"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatMoney = void 0;
var formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'VND',
  currencyDisplay: 'code',
  minimumFractionDigits: 0
});
var formatMoney = formatter.format;
exports.formatMoney = formatMoney;
//# sourceMappingURL=formatter.js.map