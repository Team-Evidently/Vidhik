import React, { useState } from "react";
import { Link } from "react-router-dom";
import {BiSolidDashboard} from "react-icons/bi";
// import {FaListCheck} from "react-icons/fa";
import {MdPersonSearch} from "react-icons/md";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState("dashboard");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <aside
      className={`bg-[#1450A3] fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-[300px] rounded-2xl transition-transform duration-300 xl:translate-x-0`}
    >
      <div className="relative flex flex-col items-center mt-6 h-full">
        <img
          className="w-36 h-36 rounded-full mb-2"
          src="https://via.placeholder.com/152x150"
          alt="Profile"
        />
        <div className="text-white text-lg font-extrabold font-['Inter'] mb-1">
          Adv. Parth Gala
        </div>
        <div className="text-white text-lg font-light font-['Inter'] mb-4">
          Lawyer
        </div>

        <Link to="/">
          <button
            type="button"
            className="cursor-pointer bg-white border-none text-[#1450A3] text-sm font-semibold rounded-md mt-6 p-1"
          >
            View Profile
          </button>
        </Link>
        <div className="mt-10 flex flex-col">
          <button
            type="button"
            className={`cursor-pointer ${
              activeButton === "dashboard"
                ? "bg-white text-[#1450A3]"
                : "text-[#BCBCBC]"
            } text-sm font-semibold rounded-md mt-2 p-3 ml-10 w-[300px]`}
            onClick={() => handleButtonClick("dashboard")}
          >
            Dashboard
          </button>
          <button
            type="button"
            className={`cursor-pointer ${
              activeButton === "schedule"
                ? "bg-white text-[#1450A3]"
                : "text-[#BCBCBC]"
            } text-sm font-semibold rounded-md mt-2 p-3 ml-10 w-[300px]`}
            onClick={() => handleButtonClick("schedule")}
          >
            Schedule & clients
          </button>
          <div className="flex flex-row">
          <button
            type="button"
            className={`cursor-pointer ${
              activeButton === "lawyers"
                ? "bg-white text-[#1450A3]"
                : "text-[#BCBCBC]"
            } text-sm font-semibold rounded-md mt-2 p-3 ml-10 w-[300px]`}
            onClick={() => handleButtonClick("lawyers")}
          >
            <MdPersonSearch className={`cursor-pointer ${
              activeButton === "lawyers"
                ? "bg-red-600 text-[#000000]"
                : "text-[#BCBCBC]"
            } text-sm font-semibold rounded-md mt-2 p-3 ml-10 w-[300px]`}
            onClick={() => handleButtonClick("lawyers")}/>
            Lawyers
          </button>
          </div>
        </div>

        <button
            type="button"
            className={`cursor-pointer ${
              activeButton === "logout"
                ? "bg-white text-[#1450A3]"
                : "text-[#BCBCBC]"
            } text-sm font-semibold rounded-md mt-2 bottom-14 absolute`}
            onClick={() => handleButtonClick("logout")}
            >
            Logout
          </button>
      </div>
    </aside>
  );
};

export default Sidebar;
