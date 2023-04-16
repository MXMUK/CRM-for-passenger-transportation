import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routing } from '../routes/routeConfig';

export const App: FC = () => {
  return (
    <RouterProvider router={routing} />
  );
};
