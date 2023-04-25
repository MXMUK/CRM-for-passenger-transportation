import { FC } from 'react';
import { Outlet } from 'react-router-dom';
// import { Outlet, useNavigation } from 'react-router-dom';
// import { Spinner } from '../Spinner';
// import { AuthProvider } from '../../features/auth/Auth';
// import { Login } from '../../features/auth/Login';
// import { AuthProvider } from '../../features/auth/Auth';

export const Layout: FC<React.PropsWithChildren> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [isLogin, setIsLogin] = useState(false);
  // const { state } = useNavigation();

  // const apiKey = process.env.API_KEY;

  // return (
  //   <>
  //     <header>{state === 'loading' ? <Spinner /> : <div className="">header</div>}</header>

  //     <main>
  //       {isLogin ? (
  //         <div className="">
  //           logged in
  //           <Outlet />
  //         </div>
  //       ) : (
  //         <>
  //           <Outlet />
  //           <AuthProvider />
  //         </>
  //       )}
  //     </main>

  //     <footer>
  //       footer
  //       {JSON.stringify(apiKey)}
  //     </footer>
  //   </>
  // );

  // return (
  //   <div className="min-vh-100 min-vw-100 bg-dark">
  //     <div className="d-flex justify-content-center vh-100 align-items-center">
  //       <div className="col-sm-3 bg-secondary rounded p-4">
  //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat incidunt dignissimos
  //         mollitia quam aut, eveniet quibusdam dolorum labore pariatur odio doloribus est tempore a
  //         tenetur sunt sequi voluptatibus eius illo.
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <Outlet />
  );
};
