import { FC } from 'react';
import { useRouteError } from 'react-router-dom';

export const ErrorPage: FC = () => {
  const err = useRouteError() as any;

  return (
    <div className="">
      <p>Oops!</p>
      <p>Sorry, something went wrong</p>
      {err.statusText ?? err.message}
    </div>
  );
};
