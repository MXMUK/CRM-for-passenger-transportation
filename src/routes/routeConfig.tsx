// import { Route, Outlet, Navigate } from 'react-router-dom';

import { createBrowserRouter } from 'react-router-dom';
import { ADMIN } from './constants';
import { Login } from '../features/auth/Login';
import { ErrorPage } from '../features/ErrorPage';
import { Layout } from '../components/Layout';

export const routing = createBrowserRouter([
  {
    path: ADMIN.PATHS.ROOT,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <h1>home</h1>,
        index: true
      },
      {
        path: ADMIN.PATHS.LOGIN,
        element: <Login />
      }
    ]
  }
]);
