import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidDashboard, BiLogOut } from "react-icons/bi";
import { MdHub, MdPersonSearch } from "react-icons/md";
import { BsListCheck, BsRobot } from "react-icons/bs";
import client from "../assets/clientprofile.jpeg";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidHelpCircle } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";

const Clientnav = () => {
  const [activeButton, setActiveButton] = useState("dashboard");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <aside className={`bg-[#329D90] fixed my-4 ml-4 h-[calc(100vh-32px)] w-[300px] rounded-2xl transition-transform duration-300 xl:translate-x-0`}>
      <div className="relative flex flex-col items-center mt-6 h-full w-auto">
        <img className="w-36 h-36 rounded-full mb-2" style={{ objectFit: 'cover' }} src={client} alt="Profile" />

        <div className="text-white text-lg font-extrabold font-['Inter'] mb-1">
          Mr. Vikram Singh
        </div>
        <div className="text-white text-lg font-light font-['Inter'] mb-4">
          Client
        </div>
        <div className="text-white text-lg font-light font-['Inter'] mb-4">
          Loyalty Score: 140
        </div>


        <div className="mt-10 flex flex-col w-full">
          <Link to="./UDashboard">
            <button
              type="button"
              className={`cursor-pointer ${
                activeButton === "dashboard"
                  ? "bg-[#F5F5F5] text-[#329D90]"
                  : "text-[#BCBCBC]"
              } text-sm font-semibold rounded-l-md mt-2 p-3 pl-10 ml-10 w-[260px] text-justify`}
              onClick={() => handleButtonClick("dashboard")}
            >
              <BiSolidDashboard className="inline-block text-2xl mr-5" />
              Dashboard
            </button>
          </Link>
          <Link to="/Uroom">
            <button
              type="button"
              className={`cursor-pointer ${
                activeButton === "schedule"
                  ? "bg-[#F5F5F5] text-[#329D90]"
                  : "text-[#BCBCBC]"
              } text-sm font-semibold rounded-l-md mt-2 p-3 pl-6 ml-14 w-[260px] text-justify`}
              onClick={() => handleButtonClick("schedule")}
            >
              <BsListCheck className="inline-block font-semibold text-2xl mr-5" />
              Room
            </button>
          </Link>
          <Link to="./UFindLSP">
            <button
              type="button"
              className={`cursor-pointer ${
                activeButton === "lawyers"
                  ? "bg-[#F5F5F5] text-[#329D90]"
                  : "text-[#BCBCBC]"
              } text-sm font-semibold rounded-l-md mt-2 p-3 pl-10 ml-10 w-[260px] text-justify`}
              onClick={() => handleButtonClick("lawyers")}
            >
              <MdPersonSearch className="inline-block text-2xl mr-6" />
              Lawyers
            </button>
          </Link>
          <Link to="./FindArbritrator">
            <button
              type="button"
              className={`cursor-pointer ${
                activeButton === "arbritrator"
                  ? "bg-[#F5F5F5] text-[#329D90]"
                  : "text-[#BCBCBC]"
              } text-sm font-semibold rounded-l-md mt-2 p-3 pl-10 ml-10 w-[260px] text-justify`}
              onClick={() => handleButtonClick("arbritrator")}
            >
              <MdPersonSearch className="inline-block text-2xl mr-6" />
              File for arbritration
            </button>
          </Link>
          <Link to="/LegalBot">
          <button
            type="button"
            className={`cursor-pointer ${
              activeButton === "legalBot"
                ? "bg-[#F5F5F5] text-[#329D90]"
                : "text-[#BCBCBC]"
            } text-sm font-semibold rounded-l-md mt-2 p-3 pl-10 ml-10 w-[260px] text-justify`}
            onClick={() => handleButtonClick("legalBot")}
          >
            <BsRobot className="inline-block text-2xl mr-6" />
            Legal Bot
          </button>
          </Link>

          <button
            type="button"
            className={`cursor-pointer ${
              activeButton === "notifications"
                ? "bg-[#F5F5F5] text-[#329D90]"
                : "text-[#BCBCBC]"
            } text-sm font-semibold rounded-l-md mt-2 p-3 pl-10 ml-10 w-[260px] text-justify`}
            onClick={() => handleButtonClick("notifications")}
          >
            <IoMdNotifications className="inline-block text-2xl mr-6" />
            Alert
          </button>

          <button
            type="button"
            className={`cursor-pointer ${
              activeButton === "help"
                ? "bg-[#F5F5F5] text-[#329D90]"
                : "text-[#BCBCBC]"
            } text-sm font-semibold rounded-l-md mt-2 p-3 pl-10 ml-10 w-[260px] text-justify`}
            onClick={() => handleButtonClick("help")}
          >
            <BiSolidHelpCircle className="inline-block text-2xl mr-6" />
            Help
          </button>

          <button
            type="button"
            className={`cursor-pointer ${
              activeButton === "settings"
                ? "bg-[#F5F5F5] text-[#329D90]"
                : "text-[#BCBCBC]"
            } text-sm font-semibold rounded-l-md mt-2 p-3 pl-10 ml-10 w-[260px] text-justify`}
            onClick={() => handleButtonClick("settings")}
          >
            <AiFillSetting className="inline-block text-2xl mr-6" />
            Settings
          </button>

        </div>

        <button
          type="button"
          className={`cursor-pointer ${
            activeButton === "logout"
              ? "text-white"
              : "text-[#BCBCBC]"
          } text-sm font-semibold rounded-md mt-2 bottom-14 absolute`}
          onClick={() => handleButtonClick("logout")}
        >
          <Link to="/">
            <BiLogOut className="inline-block text-2xl mr-2" />
            Logout
          </Link>
        </button>

      </div>
    </aside>
  );
};

export default Clientnav;
