import DefaultLayout from '@@/Default';
import AuthLayout from '@@/Auth';
import NotFound from '@@/404';
import Queries from '@/Queries';
import LoginForm from '@/LoginForm';
export const routes = [
    {
        path: '/',
        auth: true,
        component: Queries,
        exact: true,
        layout: DefaultLayout
    },
    {
        path: '/login',
        auth: false,
        component: LoginForm,
        exact: true,
        layout: AuthLayout
    },
    {
        path: '*',
        auth: false,
        component: NotFound
    }
];
