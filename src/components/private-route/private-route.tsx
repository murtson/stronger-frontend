import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  isAllowed: boolean;
  redirectPath?: string;
}

const PrivateRoute: React.FC<Props> = ({ isAllowed, redirectPath = '/login', children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? <React.Fragment>{children}</React.Fragment> : <Outlet />;
};
export default PrivateRoute;
