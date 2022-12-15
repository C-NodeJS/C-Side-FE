import { Box, List, Typography } from "@mui/material";
import SidebarItem from "./SidebarItem";

export default function SideBarGroupItem(props) {
  const { item } = props;

  return (
    <List
      subheader={
        item.title && (
          <Box sx={{ pl: 3, mb: 1.5 }}>
            <Typography variant="subtitle2" color="textSecondary">
              {item.title}
            </Typography>
          </Box>
        )
      }
    >
      {item.child.map((children) => {
        return (
          <SidebarItem key={children.id} children={children} />
        )
      })}
    </List>
  );
}
