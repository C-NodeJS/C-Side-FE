import MainLayout from "../layouts/MainLayout";
import AdminDashBoard from "../pages/AdminPage/AdminDashboard";

const AdminRoutes = {
  path: 'admin',
  element: (<MainLayout />),
  children: [
    {
      path: 'hello',
      element: <AdminDashBoard />
    }
  ]
}

export default AdminRoutes;