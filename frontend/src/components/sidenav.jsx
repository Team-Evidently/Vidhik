import React, { useState } from "react";
import { Link } from "react-router-dom";
import {BiSolidDashboard, BiLogOut} from "react-icons/bi";
import {MdHub, MdPersonSearch} from "react-icons/md";
import {BsListCheck, BsRobot} from "react-icons/bs";
import lawyer from "../assets/lawyerprofile9.jpeg";
const Sidebar = () => {
  const [activeButton, setActiveButton] = useState("dashboard");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <aside
      className={`bg-[#1450A3] fixed my-4 ml-4 h-[calc(100vh-32px)] w-[300px] rounded-2xl transition-transform duration-300 xl:translate-x-0`}
    >
      <div className="relative flex flex-col items-center mt-6 h-full w-auto">
        <img
          className="w-36 h-36 rounded-full mb-2"
          src={lawyer}
          alt="Profile"
        />
        <div className="text-white text-lg font-extrabold font-['Inter'] mb-1">
          Adv. Amit Sharma
        </div>
        <div className="text-white text-lg font-light font-['Inter'] mb-4">
          Lawyer
        </div>
        

        <Link to="/provider/profile/:id">
          <button
            type="button"
            className="cursor-pointer bg-white border-none text-[#1450A3] text-sm font-semibold rounded-md mt-6 p-1"
          >
            View Profile
          </button>
        </Link>
        <div className="mt-10 flex flex-col w-full">
          <Link to ="./LDashboard">
          <button
            type="button"
            className={`cursor-pointer ${
              activeButton === "dashboard"
                ? "bg-[#F5F5F5] text-[#1450A3]"
                : "text-[#BCBCBC]"
            } text-sm font-semibold rounded-l-md mt-2 p-3 pl-10 ml-10 w-[260px] text-justify`}
            onClick={() => handleButtonClick("dashboard")}
          >
            <BiSolidDashboard className="inline-block text-2xl mr-5"/>
            Dashboard
          </button>
          </Link>
            <Link to ="./LSchedule">
          <button
            type="button"
            className={`cursor-pointer ${
              activeButton === "schedule"
                ? "bg-[#F5F5F5] text-[#1450A3]"
                : "text-[#BCBCBC]"
            } text-sm font-semibold rounded-l-md mt-2 p-3 pl-6 ml-10 w-[260px] text-justify`}
            onClick={() => handleButtonClick("schedule")}
          >
            <BsListCheck className="inline-block font-semibold text-2xl mr-5"/>
            Schedule & clients
          </button>
          </Link>
          <Link to ="./FindLSP">
          <button
            type="button"
            className={`cursor-pointer ${
              activeButton === "lawyers"
                ? "bg-[#F5F5F5] text-[#1450A3]"
                : "text-[#BCBCBC]"
            } text-sm font-semibold rounded-l-md mt-2 p-3 pl-10 ml-10 w-[260px] text-justify`}
            onClick={() => handleButtonClick("lawyers")}
          >
            <MdPersonSearch className="inline-block text-2xl mr-6"/>
            Lawyers
          </button> 
          </Link>
          
          <Link to ="./LegalHub">
          <button
            type="button"
            className={`cursor-pointer ${
              activeButton === "LegalHub"
                ? "bg-[#F5F5F5] text-[#1450A3]"
                : "text-[#BCBCBC]"
            } text-sm font-semibold rounded-l-md mt-2 p-3 pl-10 ml-10 w-[260px] text-justify`}
            onClick={() => handleButtonClick("LegalHub")}
          >
            <MdHub className="inline-block text-2xl mr-6"/>
            LegalHub
          </button> 
          </Link>
          <Link to ="./LegalBot">
          <button
            type="button"
            className={`cursor-pointer ${
              activeButton === "Legal Bot"
                ? "bg-[#F5F5F5] text-[#1450A3]"
                : "text-[#BCBCBC]"
            } text-sm font-semibold rounded-l-md mt-2 p-3 pl-10 ml-10 w-[260px] text-justify`}
            onClick={() => handleButtonClick("Legal Bot")}
          >
            <BsRobot className="inline-block text-2xl mr-6"/>
            Legal Bot
          </button> 
          </Link>
        </div>
            
           
        <button
            type="button"
            className={`cursor-pointer ${
              activeButton === "logout"
                ? "text-white"
                : "text-[#BCBCBC]"
            } text-sm font-semibold rounded-md mt-2 bottom-14 absolute`}
            onClick={() => handleButtonClick("logout")}
            > <Link to ="/">
            
            <BiLogOut className="inline-block text-2xl mr-2"/>
            Logout
            </Link>
          </button>
          
      </div>
    </aside>
  );
};

export default Sidebar;
