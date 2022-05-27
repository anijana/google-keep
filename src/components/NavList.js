import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";

const NavList = ({ open }) => {
  const navList = [
    {
      id: 1,
      name: "Notes",
      icon: <LightbulbOutlinedIcon />,
      route: "/",
    },
    
    {
      id: 2,
      name: "Archive",
      icon: <ArchiveOutlinedIcon />,
      route: "/archive",
    },
    {
      id: 3,
      name: "Trash",
      icon: <DeleteOutlineOutlinedIcon />,
      route: "/delete",
    },
  ];
  return (
    <List>
      {navList.map((list) => (
        <ListItemButton key={list.id}>
          <Link to={list.route} style={{textDecoration:'none', display: 'flex', color: 'inherit'}}>
            <ListItemIcon style={{alignItems: 'center'}}>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </Link>
        </ListItemButton>
      ))}
    </List>
  );
};

export default NavList;
