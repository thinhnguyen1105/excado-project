import Routes from 'next-routes';

export const setupRoutes = ({ routes }: { routes: Routes }) => {
  routes
    .add('register', '/dang-ki', 'register')
    .add('login', '/dang-nhap', 'login');
};
