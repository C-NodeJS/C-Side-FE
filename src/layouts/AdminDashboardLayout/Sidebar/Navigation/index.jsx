import NavGroup from "./NavGroup";
import menuItem from "menu-items";
import { Box } from "@mui/material";

const Navigation = () => {
  const navsGroup = menuItem.items.map((item) => {
    switch (item.type) {
      case "group":
        return <NavGroup key={item.id} item={item} />;
      default:
        return <div>Error</div>;
    }
  });

  return (
    <div>
      Navigation
      <Box>{navsGroup}</Box>
    </div>
  );
};

export default Navigation;
