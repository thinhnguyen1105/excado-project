"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMenuConfigs = void 0;

var _menuConfigs = require("../modules/admin/menuConfigs");

var getMenuConfigs = function getMenuConfigs() {
  return [_menuConfigs.authMenuConfigs, _menuConfigs.appMenuConfigs, _menuConfigs.statisticsMenuConfigs];
};

exports.getMenuConfigs = getMenuConfigs;
//# sourceMappingURL=getMenuConfigs.js.map