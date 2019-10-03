"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupRoutes = void 0;

var setupRoutes = function setupRoutes(_ref) {
  var routes = _ref.routes;
  routes.add('users', '/nguoi-dung/:id', 'users').add('dashboard', '/quan-li-tin-dang', 'dashboard').add('edit-profile', '/thong-tin-ca-nhan', 'edit-profile').add('followed-list', '/tin-da-luu', 'followed-list').add('search-details', '/tim-kiem', 'search-details').add('detail-news', '/bai-dang/:id', 'detail-news').add('image-fullscreen-news-detail', '/xem-tat-ca-anh/:id', 'image-fullscreen-news-detail').add('create-news', '/dang-tin', 'create-news').add('edit-news', '/sua-tin/:id', 'edit-news').add('shop-info', '/thong-tin-cua-hang', 'shop-info').add('shop-news', '/bai-dang-cua-hang', 'shop-news').add('shop-news-detail', '/bai-dang-cua-hang/:id', 'shop-news-detail').add('my-shop', '/cua-hang-cua-toi', 'my-shop').add('create-shop', '/tao-cua-hang', 'create-shop').add('all-brands', '/danh-sach-hang', 'all-brands').add('brand-detail', '/danh-sach-hang/:brandId', 'brand-detail').add('category-detail', '/chung-loai-may/:categoryId', 'category-detail');
};

exports.setupRoutes = setupRoutes;
//# sourceMappingURL=routes.js.map