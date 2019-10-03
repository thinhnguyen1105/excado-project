"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupRoutes = void 0;

var setupRoutes = function setupRoutes(_ref) {
  var routes = _ref.routes;
  routes.add('register', '/dang-ki', 'register').add('login', '/dang-nhap', 'login');
};

exports.setupRoutes = setupRoutes;
//# sourceMappingURL=routes.js.map