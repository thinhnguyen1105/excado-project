"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupRoutes = void 0;

var setupRoutes = function setupRoutes(_ref) {
  var routes = _ref.routes;
  routes.add('admin-statistics', '/quan-ly/thong-ke-tin-bai', 'admin-statistics').add('admin-users', '/quan-ly/nguoi-dung', 'admin-users').add('admin-upload-excel', '/quan-ly/dang-tin', 'admin-upload-excel').add('admin-adsense', '/quan-ly/quang-cao', 'admin-adsense').add('admin-feature-brands', '/quan-ly/hang-hop-tac', 'admin-feature-brands').add('admin-rental-periods', '/quan-ly/thoi-gian-thue', 'admin-rental-periods').add('admin-weight-ranges', '/quan-ly/khoang-trong-luong', 'admin-weight-ranges').add('admin-brands', '/quan-ly/danh-sach-hang', 'admin-brands').add('admin-categories', '/quan-ly/chung-loai-may', 'admin-categories').add('admin-models', '/quan-ly/danh-sach-models', 'admin-models').add('admin-reports', '/quan-ly/bao-cao-vi-pham', 'admin-reports');
};

exports.setupRoutes = setupRoutes;
//# sourceMappingURL=routes.js.map