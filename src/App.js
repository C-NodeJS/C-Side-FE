import {
  BrowserRouter as Router, Navigate, Route, Routes
} from "react-router-dom";
import "./App.css";
import { RequireAuth } from "./components";
import RoleBasedGuard from "./guards/RoleBasedGuard";
import { Client, Dashboard, Login, Signup, SystemAdmin, Host } from "./pages";
import { SYSTEM_ADMIN, HOST, CLIENT } from "./constants/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/dashboard"} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/host" element={<RoleBasedGuard 
          accessibleRoles={[SYSTEM_ADMIN]}
        >
          <SystemAdmin />
          </RoleBasedGuard>}>
        </Route>

        <Route path="/manager" element={<RoleBasedGuard
            accessibleRoles={[HOST]}
          >
            <Host />
          </RoleBasedGuard>
        }>
        </Route>

        <Route path="/client" element={
          <RoleBasedGuard
            accessibleRoles={[CLIENT]}
          >
            <Client />
          </RoleBasedGuard>
        }>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
