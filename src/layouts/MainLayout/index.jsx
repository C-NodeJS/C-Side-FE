import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Sidebar />
      <Outlet />
    </Box>
  );
}
