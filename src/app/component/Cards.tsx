import React from "react";
import Image from "next/image";
import { useDarkMode } from "../context/Darkmode";
import { theme } from "../utils/theme";
const Cards = () => {
  const { darkMode } = useDarkMode();
  const data = [
    {
      title: "Projects",
      number: "18",
      completed: "2",
      src: "projectIcon.svg",
    },
    {
      title: "Active Task",
      number: "132",
      completed: "28",
      src: "activeTask.svg",
    },
    {
      title: "Teams",
      number: "12",
      completed: "1",
      src: "termsIcon.svg",
    },
    {
      title: "Productivity",
      number: "76%",
      completed: "5%",
      src: "productivityIcon.svg",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((x, key) => (
        <div
          key={key}
          className="w-full sm:w-1/2 md:w-2/4 lg:w-2/4 xl:w-1/4 p-4"
        >
          <div
            className="rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            style={{
              backgroundColor: darkMode ? theme.darkmodeBg : theme.lightmodeBg,
              color: darkMode ? theme.cardDarkmodeColor : theme.lightmodeClr,
            }}
          >
            <div className="card-body">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h4 className="mb-0 text-xl font-semibold">{x.title}</h4>
                </div>
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-600 p-2"
                  style={{
                    backgroundColor: "rgba(98,75,255,.3)",
                    color: "rgba(98,75,255,1)",
                    filter: darkMode ? "brightness(0) invert(1)" : "",
                  }}
                >
                  <Image src={x.src} alt={x.title} width={150} height={150} />
                </div>
              </div>
              <div className="leading-tight">
                <h1 className="text-3xl font-bold mb-2">{x.number}</h1>
                <p className="text-gray-600 text-sm">
                  <span>
                    <span className={`${darkMode ? "text-white" : ""}`}>
                      {" "}
                      {x.completed}
                    </span>{" "}
                    completed
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
