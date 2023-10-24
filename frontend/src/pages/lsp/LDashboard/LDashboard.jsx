import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaClipboardList } from "react-icons/fa";
import avatar from "../../../assets/avatar-icon.png";
import {
  AiFillCloseCircle,
  AiFillCheckCircle,
  AiFillSetting,
} from "react-icons/ai";
import { RiAuctionFill } from "react-icons/ri";
import { PiMedalFill } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidHelpCircle } from "react-icons/bi";
import { CustomLine } from "../../../components/Charts/Line";

const LDashboard = () => {
  const [activeButton, setActiveButton] = useState("case1");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="bg-[#F5F5F5] min-h-screen flex">
      {/* <Sidenav /> */}
      <div className=" p-4 w-full">
        <div className="mb-1 flex justify-between items-center text-center">
          <img src={logo} alt="" className="w-[200px] h-[75px]" />
          <div className=" items-center text-center flex gap-16">
            <button className="flex items-center  hover:text-black">
              <IoMdNotifications className="text-[#a0a0a0] text-4xl " />
              <div className="text-[#a0a0a0] text-xl ml-2">Alerts</div>
            </button>

            <button className="flex items-center">
              <BiSolidHelpCircle className="text-[#a0a0a0] text-4xl hover:text-black" />
              <div className="text-[#a0a0a0] text-xl ml-2 hover:text-black">Help</div>
            </button>

            <button className="flex items-center">
              <AiFillSetting className="text-[#a0a0a0] text-4xl hover:text-black" />
              <div className="text-[#a0a0a0] text-xl ml-2 hover:text-black">Settings</div>
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="h-[150px] w-[40%] bg-white rounded-xl m-4 hover:bg-[#a0a0a0] hover:bg-opacity-25 hover:border-black hover:border">
            <div className="flex flex-col w-full relative">
              <button
                type="button"
                className={` cursor-default text-sm font-semibold rounded-md mt-2 p-3 w-[100%] text-justify flex items-center bg-inherit`}
                onClick={() => handleButtonClick("case1")}
              >
                <div className="flex items-center justify-start w-full">
                  <RiAuctionFill className="inline-block text-6xl m-3 bg-[#3B329D] bg-opacity-50 p-1 border border-black rounded-lg" />
                  <div className="flex flex-col">
                    <div className="justify-center content-center text-start text-btnColor font-bold text-lg">
                      Cases Fought
                    </div>
                  </div>
                </div>
                <button className="flex items-center px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-5xl">
                  30
                </button>
              </button>
            </div>
          </div>

          <div className="h-[150px] w-[40%] bg-white rounded-xl m-4 hover:bg-[#a0a0a0] hover:bg-opacity-25 hover:border-black hover:border">
            <div className="flex flex-col w-full relative">
              <button
                type="button"
                className={`cursor-default text-sm font-semibold rounded-md mt-2 p-3 w-[100%] text-justify bg-inherit flex items-center`}
                onClick={() => handleButtonClick("case1")}>
                <div className="flex items-center justify-start w-full">
                  <PiMedalFill className="inline-block text-6xl m-3 bg-[#47E52E] bg-opacity-50 p-1 border border-black rounded-lg" />
                  <div className="flex flex-col">
                    <div className="justify-center content-center text-start text-btnColor font-bold text-lg">
                      Cases Won
                    </div>
                  </div>
                </div>
                <button className="flex items-center px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-5xl">
                  20
                </button>
              </button>
            </div>
          </div>

          <div className="h-[150px] w-[40%] bg-white rounded-xl m-4 hover:bg-[#a0a0a0] hover:bg-opacity-25 hover:border-black hover:border">
            <div className="flex flex-col w-full relative">
              <button
                type="button"
                className={`cursor-default text-sm font-semibold rounded-md mt-2 p-3 w-[100%] text-justify bg-inherit flex items-center`}
                onClick={() => handleButtonClick("case1")}
              >
                <div className="flex items-center justify-start w-full">
                  <MdGroups className="inline-block text-6xl m-3 bg-[#3dc5c3] bg-opacity-50 p-1 border border-black rounded-lg" />
                  <div className="flex flex-col">
                    <div className="justify-center content-center text-start text-btnColor font-bold text-lg">
                      Connections
                    </div>
                  </div>
                </div>
                <button className="flex items-center px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-5xl">
                  235
                </button>
              </button>
            </div>
          </div>

          <div className="h-[150px] w-[40%] bg-white rounded-xl m-4 hover:bg-[#a0a0a0] hover:bg-opacity-25 hover:border-black hover:border">
            <div className="flex flex-col w-full relative">
              <button
                type="button"
                className={`cursor-default text-sm font-semibold rounded-md mt-2 p-3 w-[100%] text-justify bg-inherit flex items-center`}
                onClick={() => handleButtonClick("case1")}
              >
                <div className="flex items-center justify-start w-full">
                  <IoDiamond className="inline-block text-6xl m-3 bg-[#e3b23f] bg-opacity-50 p-1 border border-black rounded-lg" />
                  <div className="flex flex-col">
                    <div className="justify-center content-center text-start text-btnColor font-bold text-lg">
                      Endorsement
                    </div>
                  </div>
                </div>
                <button className="flex items-center px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-5xl">
                  26
                </button>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between">
          {/* Ongoing Cases */}
          <div className="h-[450px] w-[48%] bg-white rounded-xl mb-4">
            <div className="bg-[#f5f5f5] text-xl font-bold p-3 -ml-5">
              Ongoing Cases
            </div>
            <div className="flex flex-col w-full relative">
              <button
                type="button"
                className={`cursor-pointer bg-white text-sm font-semibold rounded-md mt-2 p-3 w-[100%] text-justify hover:bg-[#1450A3] hover:bg-opacity-25 flex items-center`}
                onClick={() => handleButtonClick("case1")}
              >
                <div className="flex items-center justify-start w-full">
                  <FaClipboardList className="inline-block text-4xl m-3" />
                  <div className="flex flex-col">
                    <div className="flex items-center text-lg">
                      <span className="font-semibold text-lg text-btnColor">
                        CNR NO:
                      </span>{" "}
                      <span className="font-extralight pl-1">kb23rt57678</span>
                    </div>
                    <div className="justify-center content-center text-start text-btnColor font-bold text-lg">
                      Criminal Case
                    </div>
                  </div>
                </div>
                <button className="flex items-center bg-gray-200 px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-lg">
                  View
                </button>
              </button>
            </div>

            <div className="flex flex-col w-full relative">
              <button
                type="button"
                className={`cursor-pointer bg-white text-sm font-semibold rounded-md mt-2 p-3 w-[100%] text-justify hover:bg-[#1450A3] hover:bg-opacity-25 flex items-center`}
                onClick={() => handleButtonClick("case1")}
              >
                <div className="flex items-center justify-start w-full">
                  <FaClipboardList className="inline-block text-4xl m-3" />
                  <div className="flex flex-col">
                    <div className="flex items-center text-lg">
                      <span className="font-semibold text-lg text-btnColor">
                        CNR NO:
                      </span>{" "}
                      <span className="font-extralight pl-1">kb34fr534</span>
                    </div>
                    <div className="justify-center content-center text-start text-btnColor font-bold text-lg">
                      Family Law Case
                    </div>
                  </div>
                </div>
                <button className="flex items-center bg-gray-200 px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-lg">
                  View
                </button>
              </button>
            </div>

            <div className="flex flex-col w-full relative">
              <button
                type="button"
                className={`cursor-pointer bg-white text-sm font-semibold rounded-md mt-2 p-3 w-[100%] text-justify hover:bg-[#1450A3] hover:bg-opacity-25 flex items-center`}
                onClick={() => handleButtonClick("case1")}
              >
                <div className="flex items-center justify-start w-full">
                  <FaClipboardList className="inline-block text-4xl m-3" />
                  <div className="flex flex-col">
                    <div className="flex items-center text-lg">
                      <span className="font-semibold text-lg text-btnColor">
                        CNR NO:
                      </span>{" "}
                      <span className="font-extralight pl-1">asfs3dg538</span>
                    </div>
                    <div className="justify-center content-center text-start text-btnColor font-bold text-lg">
                      Civil Case
                    </div>
                  </div>
                </div>
                <button className="flex items-center bg-gray-200 px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-lg">
                  View
                </button>
              </button>
            </div>
          </div>

          {/* Today Meeting */}
          <div className="h-[450px] w-[48%] bg-white rounded-xl mb-4">
            <div className="bg-[#f5f5f5] text-xl font-bold p-3 -ml-5">
              Today Meeting
            </div>
            <div className="flex flex-col w-full relative">
              <button
                type="button"
                className={`cursor-pointer bg-white text-sm font-semibold rounded-md mt-2 p-3 w-[100%] text-justify hover:bg-[#329D90] hover:bg-opacity-25 flex items-center`}
                onClick={() => handleButtonClick("case1")}
              >
                <div className="flex items-center justify-start w-full">
                  <img
                    className="inline-block text-4xl m-3 w-14 h-14 rounded-full mb-2"
                    src={avatar}
                    alt="Profile"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center text-lg">
                      <span className="font-semibold text-lg text-iconColor">
                        Parth Gala
                      </span>
                    </div>
                    <div className="justify-center content-center text-start text-iconColor font-thin text-base">
                      Home Affairs
                    </div>
                  </div>
                </div>
                <button className="flex items-center px-3 py-2 text-iconColor rounded-md w-[120px] h-[60px] justify-center text-lg">
                  Now
                </button>
                <button className="flex items-center bg-[#f7f7f7] px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-lg">
                  Join
                </button>
              </button>
            </div>

            <div className="flex flex-col w-full relative">
              <button
                type="button"
                className={`cursor-pointer bg-white text-sm font-semibold rounded-md mt-2 p-3 w-[100%] text-justify hover:bg-[#329D90] hover:bg-opacity-25 flex items-center`}
                onClick={() => handleButtonClick("case1")}
              >
                <div className="flex items-center justify-start w-full">
                  <img
                    className="inline-block text-4xl m-3 w-14 h-14 rounded-full mb-2"
                    src={avatar}
                    alt="Profile"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center text-lg">
                      <span className="font-semibold text-lg text-iconColor">
                        Milind Nair
                      </span>
                    </div>
                    <div className="justify-center content-center text-start text-iconColor font-thin text-base">
                      Home Affairs
                    </div>
                  </div>
                </div>
                <button className="flex items-center px-3 py-2 text-iconColor rounded-md w-[120px] h-[60px] justify-center text-lg">
                  12:30
                </button>
                <button className="flex items-center bg-[#f7f7f7] px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-lg">
                  Join
                </button>
              </button>
            </div>

            <div className="flex flex-col w-full relative">
              <button
                type="button"
                className={`cursor-pointer bg-white text-sm font-semibold rounded-md mt-2 p-3 w-[100%] text-justify hover:bg-[#329D90] hover:bg-opacity-25 flex items-center`}
                onClick={() => handleButtonClick("case1")}
              >
                <div className="flex items-center justify-start w-full">
                  <img
                    className="inline-block text-4xl m-3 w-14 h-14 rounded-full mb-2"
                    src={avatar}
                    alt="Profile"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center text-lg">
                      <span className="font-semibold text-lg text-iconColor">
                        Meet Gala
                      </span>
                    </div>
                    <div className="justify-center content-center text-start text-iconColor font-thin text-base">
                      Home Affairs
                    </div>
                  </div>
                </div>
                <button className="flex items-center px-3 py-2 text-iconColor rounded-md w-[120px] h-[60px] justify-center text-lg">
                  6:00
                </button>
                <button className="flex items-center bg-[#f7f7f7] px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-lg">
                  Join
                </button>
              </button>
            </div>
          </div>

          {/* Rating Progression */}
          <div className="h-[450px] w-[48%] bg-white rounded-xl m-4">
            <div className="bg-[#f5f5f5] text-xl font-bold p-3 -ml-5">
              Progression Chart
            </div>
            <div>
              <CustomLine/>
            </div>
          </div>

          {/* Requests */}
          <div className="h-[450px] w-[48%] bg-white rounded-xl mb-4">
            <div className="bg-[#f5f5f5] text-xl font-bold p-3 -ml-5">
              Pending Requests
            </div>

            <div className="flex flex-col w-full relative">
              <button
                type="button"
                className={` cursor-default bg-white text-sm font-semibold rounded-md mt-2 p-3 w-[100%] text-justify hover:bg-[#329D90] hover:bg-opacity-25 flex items-center`}
                onClick={() => handleButtonClick("case1")}
              >
                <div className="flex items-center justify-start w-full">
                  <img
                    className="inline-block text-4xl m-3 w-14 h-14 rounded-full mb-2"
                    src={avatar}
                    alt="Profile"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center text-lg">
                      <span className="font-semibold text-lg text-iconColor">
                        Vatsal Sanchala
                      </span>
                    </div>
                    <div className="justify-center content-center text-start text-iconColor font-thin text-base">
                      Home Affairs
                    </div>
                  </div>
                </div>
                <button className="flex items-center bg-[#f7f7f7] px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-lg m-2">
                  View
                </button>
                <button className="justify-center m-2">
                  <AiFillCheckCircle className="text-green-500 text-5xl" />
                </button>
                <button className="justify-center m-2">
                  <AiFillCloseCircle className="text-red-500 text-5xl" />
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LDashboard;
