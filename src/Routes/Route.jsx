
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MainLayout from '../Layout/MainLayout';
import CreateCategory from '../pages/Admin/createCategory/CreateCategory';

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
        path:'/admin/createcategory',
        element:<CreateCategory></CreateCategory>
      }
    ]
  }
])


export default Route;