import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import CreateCategory from '../pages/Admin/createCategory/CreateCategory';
import ManageCategory from '../pages/Admin/ManageCategory/ManageCategory';
import AdminLayOut from '../Layout/AdminLayOut';
import Login from '../pages/UI/Login/Login';
import Home from '../pages/UI/Home/Home';
import SignUp from '../pages/UI/SignUp/SignUP';

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
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path: '/admin/createcategory',
        element: <CreateCategory></CreateCategory>
      },
      {
        path: '/admin/manageCategory',
        element: <ManageCategory></ManageCategory>
      }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayOut></AdminLayOut>
  }
])


export default Route;