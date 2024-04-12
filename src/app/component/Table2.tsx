import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';
import { useDarkMode } from '../context/Darkmode';
import { theme } from "../utils/theme";
import { table2 } from '../utils/data';
const TableActivity = ({ data }: any) => {
    const { darkMode } = useDarkMode();
    return (
        <div>
            <TableContainer sx={{
                backgroundColor: darkMode ? theme.darkmodeBg : theme.lightmodeBg,
                color: darkMode ? theme.darkmodeClr : theme.lightmodeClr,
                "& .MuiTableCell-root": {
                    color: darkMode ? theme.cardDarkmodeColor : theme.lightmodeClr,
                    bgcolor: darkMode ? theme.darkmodeBg : theme.lightmodeBg,
                },
            }}>
                <div className="px-2 m-3">
                    <h4 className="font-semibold">Teams</h4>
                </div>
                <hr />
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#f1f5f9", padding: '4px', fontSize: "0.875rem" }}>
                            <TableCell>Name</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Last Activity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {table2.map((row: any, key: any) => (
                            <TableRow key={key}>
                                <TableCell sx={{ padding: '4px', minWidth: "200px", display: 'flex', alignItems: 'center' }}>
                                    <Avatar src={row.img} style={{ marginRight: '10px' }} />
                                    <div>
                                        <div>{row.name}</div>
                                        <div>{row.email}</div>
                                    </div>
                                </TableCell>
                                <TableCell sx={{ padding: '4px', minWidth: "200px" }}>{row.role}</TableCell>
                                <TableCell sx={{ padding: '4px', minWidth: "200px" }}>{row.lastActivity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default TableActivity;
