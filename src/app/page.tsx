"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import Cards from "./component/Cards";
import Table from "./component/Table";
import Table1 from "./component/Table1";
import Table2 from "./component/Table2";
import { useDarkMode } from "./context/Darkmode";
import { theme } from "./utils/theme";

const drawerWidth = 260;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(false);
  const { darkMode } = useDarkMode();
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    let body = document.querySelector("body");
    if (body !== null) {
      body.style.backgroundColor = darkMode
        ? theme.darkmodebodyBg
        : theme.lightmodebodyBg;
      body.style.color = darkMode ? theme.darkmodeClr : theme.lightmodeClr;
    }
  }, [darkMode]);

  return (
    <Box
      sx={{
        display: "flex",
        color: darkMode ? theme.darkmodeClr : theme.lightmodeClr,
        bgcolor: darkMode ? theme.darkmodebodyBg : theme.lightmodebodyBg,
      }}
    >
      <CssBaseline />
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} />
      <Main open={open} sx={{ minHeight: "100vh", color: "black" }}>
        <DrawerHeader />
        <div>
          <div className="h-40" style={{ backgroundColor: "#624bff" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "40px 20px 0px 20px",
              }}
            >
              <div
                style={{
                  color: darkMode ? "black" : "white",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Projects
              </div>
              <div>
                <button
                  className="font-medium py-2 px-4 shadow rounded-md"
                  style={{
                    backgroundColor: darkMode
                      ? theme.darkmodeBg
                      : theme.lightmodeBg,
                    color: darkMode ? theme.darkmodeClr : theme.lightmodeClr,
                  }}
                >
                  Create New Project
                </button>
              </div>
            </div>
            <div className="pt-2">
              <Cards />
            </div>
            <Table />
            <div className={`flex gap-5 flex-wrap p-4`}>
              <div className="flex-1 shadow-md rounded-md">
                <Table1 />
              </div>
              <div className="flex-1 shadow-md rounded-md">
                <Table2 />
              </div>
            </div>
          </div>
        </div>
      </Main>
    </Box>
  );
}
