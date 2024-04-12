import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import { useDarkMode } from '../context/Darkmode';
import { theme } from "../utils/theme";
import { table1 } from '../utils/data';
const TableComponent = () => {
  const { darkMode } = useDarkMode();

  return (
    <TableContainer component={Paper} sx={{
      backgroundColor: darkMode ? theme.darkmodeBg : theme.lightmodeBg,
      color: darkMode ? theme.darkmodeClr : theme.lightmodeClr,
      "& .MuiTableCell-root": {
        color: darkMode ? theme.cardDarkmodeColor : theme.lightmodeClr,
        bgcolor: darkMode ? theme.darkmodeBg : theme.lightmodeBg,
      },
    }}>
      <div className='flex justify-between items-center p-3'>
        <div className="px-2 ">
          <h4 className="font-semibold ">My Tasks</h4>
        </div>
        <h1>My Task</h1>
      </div>
      <hr />
      <Table sx={{ overflowX: 'scroll', }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f1f5f9", padding: '4px', fontWeight: "bold", fontSize: "0.875rem" }}>
            <TableCell>Name</TableCell>
            <TableCell>Deadline</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table1?.map((row: any, key: any) => (
            <TableRow key={key}>
              <TableCell sx={{ padding: '4px', minWidth: "200px" }}> <Checkbox />{row.name}</TableCell>
              <TableCell sx={{ padding: '4px', minWidth: "200px" }}>{row.Deadline}</TableCell>
              <TableCell sx={{ padding: '4px', minWidth: "200px" }}> {row.Status === "Approved" ? (
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  dark:text-green-800">
                  {row.Status}
                </span>
              ) : (
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  dark:text-yellow-800">
                  {row.Status}
                </span>
              )}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
