import { SYSTEM_ADMIN } from "../constants";
import RoleBasedGuard from "../guards/RoleBasedGuard";
import MainLayout from "../layouts/MainLayout";
import AdminDashBoard from "../pages/AdminPage/AdminDashboard";
import AllRooms from "../pages/AdminPage/Rooms/AllRooms";
import PendingRooms from "../pages/AdminPage/Rooms/PendingRooms";

const AdminRoutes = {
  path: 'admin',

  element: (
    <RoleBasedGuard
      accessibleRoles={[SYSTEM_ADMIN]}
    >
      <MainLayout />
    </RoleBasedGuard>
  ),
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
        },
        {
          path: 'pendingRooms',
          element: <PendingRooms />
        }
      ]
    }
  ]
}

export default AdminRoutes;