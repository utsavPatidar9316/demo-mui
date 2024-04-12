import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import Image from "next/image";
import { useDarkMode } from "../context/Darkmode";
import { theme } from "../utils/theme";
const Table = () => {
  const { darkMode } = useDarkMode();
  const data = [
    {
      p_name: "Dropbox Design System",
      priority: "Medium",
      progress: "15%",
      chipColor: "primary",
      src: "logo1.svg",
      hrs: 34,
    },
    {
      p_name: "Slack Team UI Design",
      priority: "High",
      progress: "35%",
      chipColor: "secondary",
      src: "logo2.svg",
      hrs: 47,
    },
    {
      p_name: "GitHub Satellite",
      priority: "Low",
      progress: "75%",
      chipColor: "error",
      src: "logo3.svg",
      hrs: 120,
    },
    {
      p_name: "3D Character Modelling",
      priority: "Medium",
      progress: "63%",
      chipColor: "warning",
      src: "logo4.svg",
      hrs: 89,
    },
    {
      p_name: "Webapp Design System",
      priority: "Track",
      progress: "100%",
      chipColor: "info",
      src: "logo5.svg",
      hrs: 108,
    },
    {
      p_name: "Github Event Design",
      priority: "Low",
      progress: "75%",
      chipColor: "success",
      src: "logo6.svg",
      hrs: 120,
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
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-5">
        <div className="col-span-1 md:col-span-7 mb-5">
          {/* card  */}
          <div
            className="shadow-md rounded-md"
            style={{
              backgroundColor: darkMode ? theme.darkmodeBg : theme.lightmodeBg,
              color: darkMode ? theme.cardDarkmodeColor : theme.lightmodeClr,
            }}
          >
            {/* card header  */}
            <div className="px-4 py-3 border-b">
              <h4 className="font-semibold">Active Projects</h4>
            </div>
            {/* table  */}
            <div className="overflow-x-auto">
              <table className="w-full table-auto text-left">
                <thead>
                  <tr
                    className={`${
                      darkMode ? "bg-gray-600" : "bg-gray-100"
                    } font-medium`}
                  >
                    <th className="px-4 py-2">Project name</th>
                    <th className="px-4 py-2">Hours</th>
                    <th className="px-4 py-2">Priority</th>
                    <th className="px-4 py-2">Members</th>
                    <th className="px-4 py-2">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((x, key) => {
                    let priorityClass = "";
                    switch (x.priority) {
                      case "Medium":
                        priorityClass = "priority-medium";
                        break;
                      case "High":
                        priorityClass = "priority-high";
                        break;
                      case "Low":
                        priorityClass = "priority-low";
                        break;
                      case "Track":
                        priorityClass = "priority-track";
                        break;
                      default:
                        break;
                    }
                    return (
                      <tr
                        key={key}
                        className={`${
                          darkMode ? "hover:bg-blue-950" : "hover:bg-gray-100"
                        } text-sm`}
                      >
                        <td className="px-4 py-3">
                          <div className="flex gap-2 text-center">
                            <Image
                              src={x.src}
                              width={30}
                              height={30}
                              alt={x.p_name}
                            />{" "}
                            <div className="pt-1">{x.p_name}</div>
                          </div>
                        </td>
                        <td className="px-4 py-3">{x.hrs}</td>
                        <td className="px-4 py-3">
                          <span className={`priority-text ${priorityClass}`}>
                            {x.priority}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <AvatarGroup className="float-left">
                            {[0, 1, 2, 3].map((number, index) => (
                              <Avatar
                                key={number}
                                alt={`Avatar ${number}`}
                                src={`https://i.pravatar.cc/300?img=${number}`}
                                sx={{
                                  width: 30,
                                  height: 30,
                                  position: "relative",
                                  zIndex: index + 1,
                                  left: `${
                                    index === 0 ? 0 : -((index - 1) * 6)
                                  }px`, // Adjust the value as needed for desired overlap
                                }}
                              />
                            ))}
                            <Avatar
                              sx={{
                                width: 30,
                                height: 30,
                                position: "relative",
                                zIndex: 10,
                                left: "-24px", // Adjust the value as needed for desired overlap
                                backgroundColor: "blue",
                                fontSize: "12px",
                              }}
                            >
                              <span>5+</span>
                            </Avatar>
                          </AvatarGroup>
                        </td>
                        <td className="px-4 py-3 text-dark">
                          <div className="flex w-24">
                            <span>{x.progress}</span>
                            <div className="m-1.5 w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-300">
                              <div
                                className={`h-1.5 rounded-full ${
                                  x.progress === "100%"
                                    ? "bg-green-700"
                                    : "bg-blue-600"
                                }`}
                                style={{ width: `${x.progress}` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* card footer  */}
            <div className="px-3 py-2 border-t text-center">
              <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow rounded-md">
                View All Projects
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-span-1 md:col-span-3 mb-5 shadow-md rounded-md"
          style={{
            backgroundColor: darkMode ? theme.darkmodeBg : theme.lightmodeBg,
            color: darkMode ? theme.cardDarkmodeColor : theme.lightmodeClr,
          }}
        >
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
            <Image src="chart.svg" alt="Example SVG" width={700} height={700} />
          </div>
          <div className="px-3 pt-5 pb-10">
            <div className="flex items-center justify-around md:flex-wrap">
              <div className="text-center flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-check-circle icon-sm text-success"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h1 className="text-2xl mb-0 ">76%</h1>
                <p>Completed</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-trending-up icon-sm text-warning"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <h1 className="text-2xl mb-0 ">32%</h1>
                <p>In-Progress</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-trending-down icon-sm text-danger"
                >
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
  );
};

export default Table;
