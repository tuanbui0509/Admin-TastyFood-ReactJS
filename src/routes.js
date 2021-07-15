import React from 'react';
import DashboardPage from './Pages/DashboardPage/DashboardPage'
import ViewOrdersPage from './Pages/ViewOrdersPage/ViewOrdersPage'
import ViewProductsPage from './Pages/ViewProductsPage/ViewProductsPage'
import ViewCustomersPage from './Pages/ViewCustomersPage/ViewCustomersPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ViewCategoriesPage from './Pages/ViewCategoriesPage/ViewCategoriesPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <DashboardPage />
    } , 
    {
        path: '/admin/view-products',
        exact: false,
        main: () => <ViewProductsPage />
    },
    {
        path: '/admin/view-customers',
        exact: false,
        main: ({history}) => <ViewCustomersPage history={history}/>
    },
    {
        path: '/admin/view-orders',
        exact: false,
        main: ({history}) => <ViewOrdersPage history={history}/>
    },
    {
        path: '/admin/view-categories',
        exact: false,
        main: ({history}) => <ViewCategoriesPage history={history}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;