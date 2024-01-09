import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import CreateCategory from '../pages/Admin/createCategory/CreateCategory';
import ManageCategory from '../pages/Admin/ManageCategory/ManageCategory';
import AdminLayOut from '../Layout/AdminLayOut';
import Login from '../pages/UI/Login/Login';
import Home from '../pages/UI/Home/Home';
import SignUp from '../pages/UI/SignUp/SignUP';
import AdminLogin from '../pages/Admin/login/AdminLogin';

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      
    ]
  },
  {
    path: '/admin',
    element: <AdminLayOut></AdminLayOut>,
    children: [
      {
        path: 'login',
        element: <AdminLogin></AdminLogin>
      },
      {
        path: 'createcategory',
        element: <CreateCategory></CreateCategory>
      },
      {
        path: 'manageCategory',
        element: <ManageCategory></ManageCategory>
      }
    ]
  }
])


export default Route;