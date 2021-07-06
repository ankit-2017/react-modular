const { lazy } = require('react');

const UserDashboard = lazy(() => import('views/dashboard/pages/dashboard.page'))

export default [
    {
        routeProps: {
            path: '/user/dashboard',
            component: UserDashboard,
            exact: true,
            private: true
        },
        name: 'userDashboard',
    },
]
