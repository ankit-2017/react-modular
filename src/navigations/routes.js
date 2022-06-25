import { lazy } from 'react';

const Home = lazy(() => import('components/Home'));

export default [
  {
    routeProps: {
      path: '/',
      component: Home,
      exact: true,
      private: false,
    },
    name: 'home',
  },
];
