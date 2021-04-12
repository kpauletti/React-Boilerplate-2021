import DefaultLayout from '@@/Default';
import NotFound from '@@/404';
import Home from '@/Home';
import Login from '~/Login';

export const routes = [
    {
        path: '/',
        auth: false,
        component: Home,
        exact: true,
        layout: DefaultLayout
    },
    {
        path: '/login',
        auth: false,
        component: Login,
        exact: true,
        layout: DefaultLayout
    },
    {
        path: '*',
        auth: false,
        component: NotFound
    }
];
