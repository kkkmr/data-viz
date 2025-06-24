import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import type { RootState } from '../app/store';

const RequireAuth = () => {
  const { user, loading } = useSelector((state: RootState) => state.auth);

  if (loading) return <div>Loading...</div>;
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;
