import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const NavList = ({ open }) => {
  const navList = [
    {
      id: 1,
      name: "Notes",
      icon: <LightbulbOutlinedIcon />,
    },
    {
      id: 2,
      name: "Reminders",
      icon: <NotificationsNoneOutlinedIcon/>,
    },
    {
      id: 3,
      name: "Edit labels",
      icon: <EditOutlinedIcon />,
    },
    {
      id: 4,
      name: "Archive",
      icon: <ArchiveOutlinedIcon />,
    },
    {
      id: 5,
      name: "Trash",
      icon: <DeleteOutlineOutlinedIcon />,
    },
  ];
  return (
    <List>
      {navList.map((list) => (
        <ListItemButton key={list.id}>
          <ListItemIcon>{list.icon}</ListItemIcon>
          <ListItemText primary={list.name} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default NavList;
