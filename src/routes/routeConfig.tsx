// import { Route, Outlet, Navigate } from 'react-router-dom';

import { createBrowserRouter } from 'react-router-dom';
import { ADMIN } from './constants';
import { Login } from '../features/auth/Login';
import { Layout } from '../components/Layout';

// export const DashBoardLayout: React.FC = () => {
//   return (
//     <Layout>
//       {/* <Outlet /> */}
//       <>sdgfjsfdgllfd</>
//     </Layout>
//   );
// };

export const routing = createBrowserRouter([
  {
    path: ADMIN.PATHS.ROOT,
    element: <Layout></Layout>,
    errorElement: <>err</>,
    children: [
      {
        element: <Login />,
        index: true
      }
    ]
  }
]);

export {};

// import Login from 'features/auth';
// import Layout from 'components/Layout';
// import { General, Restaurant, PaymentsIntegration } from 'features/settings';
// import {
//   Menu,
//   MenuItemAdd,
//   MenuItemUpdate,
//   Additions,
//   CreateAddition,
//   UpdateAddition,
// } from 'features/menu';
// import PaymentEdit from 'features/settings/components/payments/paymentEdit';
// import Cashier from 'features/cashier';

// import { ADMIN, CASHIER, MENU, SETTINGS, TABLES, KITCHEN } from './constants';
// import CategoryAdd from 'features/menu/components/category/AddCategory';
// import CategoryUpdate from 'features/menu/components/category/UpdateCategory';
// import CashierMoney from 'features/cashier/components/CashierMoney';
// import Tables from 'features/tables/components/Tables';

// import Kitchen from 'features/kitchen';
// import TableDetails from 'features/tables/components/TableDetails';

// export const DashBoardLayout: React.FC = () => {
//   return (
//     <Layout>
//       <Outlet />
//     </Layout>
//   );
// };

// export const DashBoardRoutes = (): JSX.Element => {
//   return (
//     <Route path={ADMIN.PATHS.ROOT} element={<DashBoardLayout />}>
//       <Route path={ADMIN.PATHS.LOGIN} element={<Login />} />
//       <Route path={SETTINGS} element={<Navigate to={ADMIN.PATHS.SETTINGS_GENERAL} />} />
//       <Route path={ADMIN.PATHS.SETTINGS_GENERAL} element={<General />} />
//       <Route path={ADMIN.PATHS.SETTINGS_RESTAURANT} element={<Restaurant />} />
//       <Route path={MENU} element={<Navigate to={ADMIN.PATHS.MENU_FOODS} />} />
//       <Route path={ADMIN.PATHS.MENU_FOODS} element={<Menu />} />
//       <Route path={KITCHEN} element={<Kitchen />} />
//       <Route path={ADMIN.PATHS.MENU_FOODS_ADD_CATEGORY} element={<CategoryAdd />} />
//       <Route
//         path={`${ADMIN.PATHS.MENU_FOODS_EDIT_CATEGORY}/:categoryId`}
//         element={<CategoryUpdate />}
//       />
//       <Route path={`${ADMIN.PATHS.MENU_FOODS_ADD}`} element={<MenuItemAdd />} />
//       <Route path={`${ADMIN.PATHS.MENU_FOODS_EDIT}/:menuItemId`} element={<MenuItemUpdate />} />
//       <Route path={ADMIN.PATHS.SETTINGS_PAYMENT} element={<PaymentsIntegration />} />
//       <Route path={`${ADMIN.PATHS.SETTINGS_PAYMENT}/:paymentSetupId`} element={<PaymentEdit />} />
//       <Route path={ADMIN.PATHS.MENU_ADDITIONS} element={<Additions />} />
//       <Route path={ADMIN.PATHS.MENU_ADDITIONS_ADD} element={<CreateAddition />} />
//       <Route path={`${ADMIN.PATHS.MENU_ADDITIONS_EDIT}/:additionId`} element={<UpdateAddition />} />
//       <Route path={CASHIER} element={<Cashier />} />
//       <Route path={ADMIN.PATHS.CASHIERMONEY} element={<CashierMoney />} />
//       <Route path={TABLES} element={<Tables />} />
//       <Route path={`${TABLES}/:tableId`} element={<TableDetails />} />
//     </Route>
//   );
// };
