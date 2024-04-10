import React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
const Table = () => {
  const data = [
    {
      p_name: "Dropbox Design System",
      priority: "Medium",
      progress: "15%",
      chipColor: "primary",
    },
    {
      p_name: "Slack Team UI Design",
      priority: "High",
      progress: "35%",
      chipColor: "secondary",
    },
    {
      p_name: "GitHub Satellite",
      priority: "Low",
      progress: "75%",
      chipColor: "error",
    },
    {
      p_name: "3D Character Modelling",
      priority: "Medium",
      progress: "63%",
      chipColor: "warning",
    },
    {
      p_name: "Webapp Design System",
      priority: "Track",
      progress: "100%",
      chipColor: "info",
    },
    {
      p_name: "Github Event Design",
      priority: "Low",
      progress: "75%",
      chipColor: "success",
    },
  ];
  type ProjectData = {
    p_name: string;
    priority: string;
    progress: string;
    chipColor:
      | "primary"
      | "secondary"
      | "error"
      | "warning"
      | "info"
      | "success";
  };

  // Define the ChipProps type
  type ChipProps = {
    data: ProjectData;
  };
  return (
    <div className="p-4" style={{ backgroundColor: "#f1f5f9" }}>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-5 ">
        <div className="col-span-1 md:col-span-7 mb-5">
          {/* card  */}
          <div className="shadow-md rounded-md bg-white">
            {/* card header  */}
            <div className="px-4 py-3 border-b">
              <h4 className="text-lg font-semibold">Active Projects</h4>
            </div>
            {/* table  */}
            <div className="overflow-x-auto">
              <table className="w-full table-auto text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2">Project name</th>
                    <th className="px-4 py-2">Hours</th>
                    <th className="px-4 py-2">Priority</th>
                    <th className="px-4 py-2">Members</th>
                    <th className="px-4 py-2">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((x, key) => {
                    return (
                      <tr key={key} className="hover:bg-gray-100 text-sm">
                        <td className="px-4 py-3">{x.p_name}</td>
                        <td className="px-4 py-3"></td>
                        <td className="px-4 py-3">
                          <Chip label={x.priority} size="small" color="info" />
                        </td>
                        <td className="px-4 py-3">
                          <Avatar sx={{ bgcolor: "deepPurple[500]" }}>
                            {x.p_name.charAt(0)}
                          </Avatar>
                        </td>
                        <td className="px-4 py-3 text-dark">{x.progress}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* card footer  */}
            <div className="px-4 py-3 border-t text-center">
              <a href="#" className="btn btn-primary">
                View All Projects
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3 mb-5">
          {/* card  */}
          <div className="bg-white shadow-md rounded-md">
            {/* card body  */}
            <div className="px-4 py-3 border-b flex justify-between items-center">
              <h4 className="text-lg font-semibold">Tasks Performance</h4>
              {/* dropdown  */}
              <div className="relative">
                <button
                  className="btn btn-ghost btn-sm rounded-full"
                  id="dropdownTask"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <MoreVertSharpIcon />
                </button>
                <div
                  className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg hidden"
                  aria-labelledby="dropdownTask"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Action
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Another action
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4">
              {/* icon with content  */}
              <div className="flex justify-around">
                <div className="text-center">
                  <h1 className="text-4xl font-semibold mb-1">76%</h1>
                  <p className="text-gray-500">Completed</p>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-semibold mb-1">32%</h1>
                  <p className="text-gray-500">In-Progress</p>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-semibold mb-1">13%</h1>
                  <p className="text-gray-500">Behind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
