import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import Chip from '@mui/material/Chip';
const TableComponent = ({ data }: any) => {
  return (
    <TableContainer component={Paper} sx={{ padding: "10px" }}>
      <div className='flex justify-between items-center p-6'>
        <h1 className='font-bold'>My Task</h1>
        <h1>My Task</h1>
      </div>
      <hr />
      <div style={{ overflowX: 'scroll' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f1f5f9", padding: '4px', fontWeight: "bold", fontSize: "0.875rem" }}>

              <TableCell>Name</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell>Status</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any, key: any) => (
              <TableRow key={key}>


                <TableCell sx={{ padding: '4px', minWidth: "200px" }}> <Checkbox />{row.name}</TableCell>
                <TableCell sx={{ padding: '4px', minWidth: "200px" }}>{row.Deadline}</TableCell>
                <TableCell sx={{ padding: '4px', minWidth: "200px" ,fontWeight:"bold"}}><Chip color={row.Status === 'Pending' ? 'warning' : 'success'}label={row.Status}/></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TableContainer>
  );
};

export default TableComponent;
