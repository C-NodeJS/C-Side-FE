import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { forwardRef, useEffect } from 'react';

export default function SidebarItem(props) {
  const { children } = props;
  let listItemProps = { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={children.url} target={itemTarget} />) };
  let itemTarget = '_self';

  if (children.target) {
      itemTarget = '_blank';
  }
  
  return (
    <ListItemButton
      {...listItemProps}
      sx={{
        '&:hover': {
          bgcolor: 'blue'
        },
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "flex-start",
      }}
    >
      <ListItemText
        primary={
          <Typography variant="h6" sx={{ color: children ? "red" : "blue" }}>
            {children.title}
          </Typography>
        }
      />
    </ListItemButton>
  );
}
