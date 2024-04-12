"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import { sidebarData } from "../utils/sidebarData";
import { useDarkMode } from "../context/Darkmode";
import { theme } from "../utils/theme";

const drawerWidth = 260;

type props = {
  open: boolean;
};

const Sidebar = ({ open }: props) => {
  const { darkMode } = useDarkMode();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          color: darkMode ? theme.darkmodeClr : theme.lightmodeClr,
          bgcolor: darkMode ? theme.darkmodeBg : theme.lightmodeBg,
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <div
        style={{
          padding: "1rem 1.5rem 1.5rem",
          display: "block",
          marginRight: 0,
          filter: darkMode ? "brightness(0) invert(1)" : "",
        }}
      >
        <img
          src="com-logo.svg"
          alt="Example SVG"
          style={{ height: "1.875rem" }}
        />
      </div>
      <List>
        {sidebarData.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: "30px",
                  filter: darkMode ? "brightness(0) invert(1)" : "",
                }}
              >
                <DashboardCustomizeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
