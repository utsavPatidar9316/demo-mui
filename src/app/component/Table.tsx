import React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import Image from 'next/image';
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
        <div className="col-span-1 md:col-span-3 mb-5 bg-white shadow-md rounded-md">
          {/* card  */}
          <div className="">
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
              </div>
            </div>
            <div className="mt-3">
              <Image src="chart.svg" alt="Example SVG" width={500} height={500} />
            </div>
            <div className="px-3 pt-5 pb-10">
            <div className="flex items-center justify-around md:flex-wrap">
            <div className="text-center flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle icon-sm text-success">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h1 className="text-2xl mb-0 ">76%</h1>
                <p>Completed</p>
            </div>
            <div className="text-center flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trending-up icon-sm text-warning">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <h1 className="text-2xl mb-0 ">32%</h1>
                <p>In-Progress</p>
            </div>
            <div className="text-center flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trending-down icon-sm text-danger">
                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                    <polyline points="17 18 23 18 23 12"></polyline>
                </svg>
                <h1 className="text-2xl mb-0 ">13%</h1>
                <p>Behind</p>
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
