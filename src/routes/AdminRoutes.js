import MainLayout from "../layouts/MainLayout";
import AdminDashBoard from "../pages/AdminPage/AdminDashboard";
import AllRooms from "../pages/AdminPage/Rooms/AllRooms";

const AdminRoutes = {
  path: 'admin',
  element: (<MainLayout />),
  children: [
    {
      path: 'hello',
      element: <AdminDashBoard />
    },
    {
      path: 'rooms',
      children: [
        {
          path: 'getAlls',
          element: <AllRooms />
        }
      ]
    }
  ]
}

export default AdminRoutes;