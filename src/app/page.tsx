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

const drawerWidth = 240;
const data = [
  { name: 'Design a FreshCart Home page', Deadline: 'Today', Status: "Approved" },
  { name: 'Dash UI Dark Version Design', Deadline: 'Yesterday', Status: "Pending" },
  { name: 'Dash UI Dark Version Design', Deadline: 'Yesterday', Status: "Pending" },
  { name: 'Dash UI Dark Version Design', Deadline: 'Yesterday', Status: "Pending" },
  { name: 'Dash UI Dark Version Design', Deadline: 'Yesterday', Status: "Pending" },
  { name: 'Dash UI Dark Version Design', Deadline: 'Yesterday', Status: "Pending" },
  { name: 'Dash UI Dark Version Design', Deadline: 'Yesterday', Status: "Pending" },
  // Add more data as needed
];
const data2 = [
  {
    img: 'https://via.placeholder.com/150',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Frontend Developer',
    lastActivity: '3 May, 2023'
  },
  {
    img: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Backend Developer',
    lastActivity: '5 April, 2023'
  },
  {
    img: 'https://via.placeholder.com/150',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'UI/UX Designer',
    lastActivity: '12 March, 2023'
  },
  {
    img: 'https://via.placeholder.com/150',
    name: 'Bob Williams',
    email: 'bob@example.com',
    role: 'Full Stack Developer',
    lastActivity: '20 February, 2023'
  },
  {
    img: 'https://via.placeholder.com/150',
    name: 'Emily Davis',
    email: 'emily@example.com',
    role: 'Software Engineer',
    lastActivity: '8 January, 2023'
  },
  {
    img: 'https://via.placeholder.com/150',
    name: 'Michael Brown',
    email: 'michael@example.com',
    role: 'Data Scientist',
    lastActivity: '15 December, 2022'
  },
  {
    img: 'https://via.placeholder.com/150',
    name: 'Sophia Wilson',
    email: 'sophia@example.com',
    role: 'Project Manager',
    lastActivity: '1 November, 2022'
  },
  {
    img: 'https://via.placeholder.com/150',
    name: 'Sophia Wilson',
    email: 'sophia@example.com',
    role: 'Project Manager',
    lastActivity: '1 November, 2022'
  },
  {
    img: 'https://via.placeholder.com/150',
    name: 'Sophia Wilson',
    email: 'sophia@example.com',
    role: 'Project Manager',
    lastActivity: '1 November, 2022'
  },
  {
    img: 'https://via.placeholder.com/150',
    name: 'Sophia Wilson',
    email: 'sophia@example.com',
    role: 'Project Manager',
    lastActivity: '1 November, 2022'
  }
];
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

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} />
      <Main
        open={open}
        sx={{ height: "100vh", backgroundColor: "#f1f5f9", color: "black" }}
      >
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
                style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}
              >
                Projects
              </div>
              <div>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow rounded-md">
                  Create New Project
                </button>
              </div>
            </div>
            <div className="pt-2">
              <Cards />
            </div>
            <Table />
            <div className="grid grid-cols-1 md:grid-cols-10 gap-5 p-4">
              <div className="col-span-1 md:col-span-5 mb-5 bg-white shadow-md rounded-md">
                <Table1 data={data} />
              </div>
              <div className="col-span-1 md:col-span-5 mb-5 bg-white shadow-md rounded-md">
                <Table2 data={data2} />
              </div>
            </div>
          </div>
        </div>
      </Main>
    </Box>
  );
}
