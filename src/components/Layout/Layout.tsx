import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: FC<React.PropsWithChildren> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="">
      <div className="">Layout</div>
      {isLogin ? (
        <div className="">
          logged in
          <Outlet />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};
