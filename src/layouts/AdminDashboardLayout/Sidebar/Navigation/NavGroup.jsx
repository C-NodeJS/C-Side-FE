import { List } from "@mui/material";
import NavItem from "./NavItem";

const NavGroup = ({ item }) => {
  const navCollapse = item.children?.map((menuItem) => {
    return <NavItem key={menuItem.id} item={menuItem} level={1} />
  })

  return (
    <div>NavGroup
      <List>
        {navCollapse}
      </List>
    </div>
  )
}

export default NavGroup;