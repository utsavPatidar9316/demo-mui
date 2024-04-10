import React from "react";

const Cards = () => {
  const data = [
    {
      title: "Projects",
      number: "18",
      completed: "2 Completed",
    },
    {
      title: "Active Task",
      number: "132",
      completed: "28 Completed",
    },
    {
      title: "Teams",
      number: "12",
      completed: "1 Completed",
    },
    {
      title: "Productivity",
      number: "76%",
      completed: "5% Completed",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((x, key) => (
        <div
          key={key}
          className="w-full sm:w-1/2 md:w-2/4 lg:w-2/4 xl:w-1/4 p-4"
        >
          <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div className="card-body">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h4 className="mb-0 text-xl font-semibold">{x.title}</h4>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16 7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7zM6 5a4 4 0 00-4 4v10a4 4 0 004 4h8a4 4 0 004-4V9a2 2 0 00-2-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="leading-tight">
                <h1 className="text-3xl font-bold mb-2">{x.number}</h1>
                <p className="text-gray-600">
                  <span className="text-dark me-2 font-semibold">
                    {x.completed}
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
