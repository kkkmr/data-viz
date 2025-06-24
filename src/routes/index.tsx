import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import RequireAuth from '../components/RequireAuth';
import RouteError from '../pages/errorRoute';
import Logout from '../pages/auth/Logout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth />,
    errorElement:<RouteError/>,
    children: [
        { 
            path: '', 
            element: <MainLayout />
        }
    ]
  },
  {path:'/login',element:<Login/>},
  {path:'/logout',element:<Logout/>},
  {path:'/register',element:<Register/>}
]);