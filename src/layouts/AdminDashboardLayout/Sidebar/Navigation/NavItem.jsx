import { ListItemButton, ListItemText, Typography } from "@mui/material";

const NavItem = ({ item, level}) => {
  return (
    <div>NavItem
      <ListItemButton>
        <ListItemText
          primary={
            <Typography>{item.tilte}</Typography>
          }
        />
      </ListItemButton>
    </div>
  )
}

export default NavItem;