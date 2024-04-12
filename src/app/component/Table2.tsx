import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';

const TableActivity = ({ data }: any) => {
    return (
        <div>
            <TableContainer >
                <div className="px-2 m-3">
                    <h4 className="font-semibold">Teams</h4>
                </div>
                <hr />
                   <div className='h-[400px]'>
                   <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#f1f5f9", padding: '4px', fontSize: "0.875rem" }}>
                                <TableCell>Name</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>Last Activity</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row: any, key: any) => (
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
                   </div>
            </TableContainer>
        </div>
    );
};

export default TableActivity;
