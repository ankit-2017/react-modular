import { lazy } from 'react'

const Landing = lazy(() => import('views/auth/pages/landing.page'))
const Login = lazy(() => import('views/auth/pages/login.page'))
const SignUp = lazy(() => import('views/auth/pages/signup.page'))

export default [
    {
        routeProps: {
            path: '/',
            component: Landing,
            exact: true,
            private: false
        },
        name: 'landing',
    },
    {
        routeProps: {
            path: '/login',
            component: Login,
            exact: true,
            private: false
        },
        name: 'login',
    },
    {
        routeProps: {
            path: '/signup',
            component: SignUp,
            exact: true,
            private: false
        },
        name: 'signup',
    },
]
