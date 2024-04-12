import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import { useDarkMode } from '../context/Darkmode';
import { theme } from "../utils/theme";
import { table1 } from '../utils/data';
const TableComponent = () => {
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
                  {table1.map((x: any, key: any) => {
                    let priorityClass = "";
                    switch (x.Status) {
                      case "Approved":
                        priorityClass = "priority-track";
                        break;
                      case "Pending":
                        priorityClass = "priority-high";

                      default:
                        break;
                    }
                    return (
                      <tr key={key} >


                        <td className="px-4 py-3 flex align-middle gap-2"> <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />{x.name}</td>
                        <td className="px-4 py-3">{x.Deadline}</td>
                        <td className="px-4 py-3">
                          <span className={`priority-text ${priorityClass}`}>
                            {x.Status}
                          </span>
                        </td>
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


export default TableComponent;
