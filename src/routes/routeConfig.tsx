// import { Route, Outlet, Navigate } from 'react-router-dom';

import { createBrowserRouter } from 'react-router-dom';
import { ADMIN } from './constants';
import { Login } from '../features/auth/Login';
import { ErrorPage } from '../features/ErrorPage';
import { Layout } from '../components/Layout';

import { initializeApp } from 'firebase/app';
import { config } from '../features/auth/config';
import { AuthRoute } from '../features/auth/AuthRoute';
import { Dashboard } from '../components/dashboard';

initializeApp(config.firebaseConfig);

export const routing = createBrowserRouter([
  {
    path: ADMIN.PATHS.ROOT,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AuthRoute><Dashboard /></AuthRoute>,
        index: true
      },
      {
        path: ADMIN.PATHS.LOGIN,
        element: <Login />
      }
    ]
  }
]);
