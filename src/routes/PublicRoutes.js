import MainLayout from "../layouts/MainLayout";
import { Dashboard, Login, Signup } from "../pages";

const PublicRoutes =
{
  path: '',
  children: [
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'signUp',
      element: <Signup />,
    },
    {
      path: '',
      element: <Dashboard />,
    },
  ]
}


export default PublicRoutes;