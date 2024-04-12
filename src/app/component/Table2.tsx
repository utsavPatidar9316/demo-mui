import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';
import { useDarkMode } from '../context/Darkmode';
import { theme } from "../utils/theme";
import { table2 } from '../utils/data';
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
const TableActivity = ({ data }: any) => {
    const { darkMode } = useDarkMode();
    return (
            <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-10 gap-5">
                    <div className="col-span-1 md:col-span-5 mb-5">
                        {/* card  */}
                        <div
                            className="shadow-md rounded-md"
                            style={{
                                backgroundColor: darkMode ? theme.darkmodeBg : theme.lightmodeBg,
                                color: darkMode ? theme.cardDarkmodeColor : theme.lightmodeClr,
                            }}
                        >
                            {/* card header  */}
                            <div className="px-4 py-3 border-b border-gray-300">
                                <h4 className="font-semibold">Teams</h4>
                            </div>


                            <div className="overflow-x-auto">
                                <table className="w-full table-auto text-left">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="px-4 py-2 border-b  border-gray-300">Name</th>
                                            <th className="px-4 py-2 border-b  border-gray-300">Role</th>
                                            <th className="px-4 py-2 border-b  border-gray-300">Activity</th>
                                            <th className="px-4 py-2 border-b  border-gray-300"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {table2.map((x: any, key: any) => {
                                            return (
                                                <tr key={key} >
                                                    <td>
                                                        <div className="flex items-center mx-5">
                                                            <div>
                                                                <Avatar src={x.img} style={{ marginRight: '5px' }} />
                                                            </div>
                                                            <div className="ms-2 ">
                                                                <h5 >{x.name}</h5>
                                                                <p >{x.email}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3">{x.role}</td>
                                                    <td className="px-4 py-3">{x.lastActivity}</td>
                                                    <MoreVertSharpIcon />
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-5 mb-5">
                        {/* card  */}
                        <div
                            className="shadow-md rounded-md"
                            style={{
                                backgroundColor: darkMode ? theme.darkmodeBg : theme.lightmodeBg,
                                color: darkMode ? theme.cardDarkmodeColor : theme.lightmodeClr,
                            }}
                        >
                            {/* card header  */}
                            <div className="px-4 py-3 border-b border-gray-300">
                                <h4 className="font-semibold">Teams</h4>
                            </div>


                            <div className="overflow-x-auto">
                                <table className="w-full table-auto text-left">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="px-4 py-2 border-b  border-gray-300">Name</th>
                                            <th className="px-4 py-2 border-b  border-gray-300">Role</th>
                                            <th className="px-4 py-2 border-b  border-gray-300">Activity</th>
                                            <th className="px-4 py-2 border-b  border-gray-300"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {table2.map((x: any, key: any) => {
                                            return (
                                                <tr key={key} >
                                                    <td>
                                                        <div className="flex items-center mx-5">
                                                            <div>
                                                                <Avatar src={x.img} style={{ marginRight: '5px' }} />
                                                            </div>
                                                            <div className="ms-2 ">
                                                                <h5 >{x.name}</h5>
                                                                <p >{x.email}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3">{x.role}</td>
                                                    <td className="px-4 py-3">{x.lastActivity}</td>
                                                    <MoreVertSharpIcon />
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

</div>
                        </div>
                    </div>
            </div>
    );
};

export default TableActivity;
