"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statisticsMenuConfigs = exports.authMenuConfigs = exports.appMenuConfigs = void 0;
var appMenuConfigs = {
  name: 'appManagement',
  icon: 'qrcode',
  items: [{
    name: 'reportsManagement',
    path: '/quan-ly/bao-cao-vi-pham',
    permission: '',
    children: []
  }, {
    name: 'brandsManagement',
    path: '/quan-ly/danh-sach-hang',
    permission: '',
    children: []
  }, {
    name: 'categoriesManagement',
    path: '/quan-ly/chung-loai-may',
    permission: '',
    children: []
  }, {
    name: 'modelsManagement',
    path: '/quan-ly/danh-sach-models',
    permission: '',
    children: []
  }, {
    name: 'weightRangesManagement',
    path: '/quan-ly/khoang-trong-luong',
    permission: '',
    children: []
  }, {
    name: 'rentalPeriodsManagement',
    path: '/quan-ly/thoi-gian-thue',
    permission: '',
    children: []
  }, {
    name: 'featureBrandsManagement',
    path: '/quan-ly/hang-hop-tac',
    permission: '',
    children: []
  }, {
    name: 'adsenseManagement',
    path: '/quan-ly/quang-cao',
    permission: '',
    children: []
  }, {
    name: 'uploadExcelFile',
    path: '/quan-ly/dang-tin',
    permission: '',
    children: []
  }]
};
exports.appMenuConfigs = appMenuConfigs;
var authMenuConfigs = {
  name: 'authManagement',
  icon: 'user',
  items: [{
    name: 'usersManagement',
    path: '/quan-ly/nguoi-dung',
    permission: '',
    children: []
  }]
};
exports.authMenuConfigs = authMenuConfigs;
var statisticsMenuConfigs = {
  name: 'statisticsManagement',
  icon: 'rise',
  items: [{
    name: 'newsStatistics',
    path: '/quan-ly/thong-ke-tin-bai',
    permission: '',
    children: []
  }]
};
exports.statisticsMenuConfigs = statisticsMenuConfigs;
//# sourceMappingURL=menuConfigs.js.map