import { Box, List, Typography } from "@mui/material";
import menuItems from "../../constants/menu-items";
import SideBarGroupItem from "./SideBarGroupItem";

export default function Sidebar() {
  const { items } = menuItems;

  return (
    <Box sx={{ pl: 3, mb: 1.5 }}>
      {items.map((item) => {
        return <SideBarGroupItem key={item.id} item={item} />;
      })}
    </Box>
  );
}
