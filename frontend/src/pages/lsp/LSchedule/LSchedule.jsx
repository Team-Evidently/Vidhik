import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import calender from "../../../assets/calender.svg";
import schedule from "../../../assets/schedule.svg";
import avatar from "../../../assets/avatar-icon.png";
import vikram from "../../../assets/clientprofile.jpeg";

const LSchedule = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen flex">
      {/* <Sidenav /> */}
      <div className=" p-4 w-full">
        <div className="text-[#f5f5f5] text-3xl font-4 mb-4">
          <img src={logo} alt="" className="w-[200px] h-auto" />
        </div>
        <p
          style={{
            color: "#000000",
            fontFamily: "inter",
            fontSize: "28px",
            fontWeight: "500px",
          }}
          className="mt-7 ml-4"
        >
          My Schedule
        </p>
        <div className="flex flex-row">
          <div className="h-[260px] w-[350px] bg-white rounded-xl m-4 mt-1">
            <img
              src={calender}
              alt="Your SVG Image"
              width="100%"
              height="100%"
            />
          </div>
          <div className="h-[320px] w-[1100px] bg-white rounded-xl m-4 ml-8 mt-0">
            <img
              src={schedule}
              alt="Your SVG Image"
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <p
          style={{
            color: "#000000",
            fontFamily: "inter",
            fontSize: "28px",
            fontWeight: "500px",
          }}
          className="mt-9 ml-4 "
        >
          My Clients
        </p>
        <div className="flex flex-row  mr-10">
          <div
            style={{ position: "relative", borderRadius: "15px" }}
            className="h-[240px] w-[550px] bg-white "
          >
            <img
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                height: "100px",
                width: "100px",
              }}
              src={vikram}
              alt="Avatar"
              className=" rounded-full object-cover"
            />
            <p
              style={{
                position: "absolute",
                left: "120px",
                top: "20px",
                color: "#329D90",
                fontFamily: "Inter",
                fontSize: "28px",
                fontWeight: "800",
              }}
              className=""
            >
              Vikram Singh
            </p>
            <p
              style={{
                position: "absolute",
                left: "122px",
                top: "53px",
                color: "rgba(0, 0, 0, 0.50)",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "300",
              }}
              className=""
            >
              vikram.singh@mail.com
            </p>
            <p
              style={{
                position: "absolute",
                left: "120px",
                top: "75px",
                color: "rgba(0, 0, 0, 0.50)",
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "300",
              }}
              className=""
            >
              8245789651
            </p>
            <p
              style={{
                position: "absolute",
                left: "30px",
                top: "115px",
                color: "#000",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "800",
              }}
              className=""
            >
              1450A3
            </p>
            <p
              style={{
                position: "absolute",
                left: "30px",
                top: "140px",
                lineHeight: "normal",
                color: "#000000",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "50",
                width: "300px",
              }}
              className=""
            >
           Legal battle over a piece of land
            </p>
            <button
              style={{
                position: "absolute",
                left: "10px",
                bottom: "10px  ",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "800",
                color: "#1450A3",
                width: "122px",
                height: "31px",
                borderRadius: "15px",
                background: "rgba(20, 80, 163, 0.25)",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="  "
            >
              General
            </button>
            <button
              style={{
                position: "absolute",
                left: "140px",
                bottom: "10px  ",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "800",
                color: "#329D90",
                width: "122px",
                height: "30px",
                borderRadius: "15px",
                background: "rgba(50, 157, 144, 0.25)",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
              className=" "
            >
              Gujurati
            </button>
            <Link to="/LCRoom">
              <button
                style={{
                  position: "absolute",
                  right: "10px",
                  bottom: "10px  ",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#FFFFFF",
                  width: "148px",
                  height: "50px",
                  borderRadius: "10px",
                  background: "#1450A3",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="  "
              >
                Client Room
              </button>
            </Link>
            <button
              style={{
                position: "absolute",
                right: "20px",
                top: "20px  ",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "800",
                color: "#4F4F4F",
                width: "90px",
                height: "65px",
                borderRadius: "15px",
                background: "#F7F7F7",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="  "
            >
              140 Loyalty
            </button>
          </div>
          {/* <div
            style={{ position: "relative", borderRadius: "15px" }}
            className="h-[240px] w-[550px] bg-white ml-9 "
          >
            <img
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                height: "100px",
                width: "100px",
              }}
              src={avatar}
              alt="Avatar"
              className=" rounded-full"
            />
            <p
              style={{
                position: "absolute",
                left: "120px",
                top: "20px",
                color: "#329D90",
                fontFamily: "Inter",
                fontSize: "28px",
                fontWeight: "800",
              }}
              className=""
            >
              John Doe
            </p>
            <p
              style={{
                position: "absolute",
                left: "122px",
                top: "53px",
                color: "rgba(0, 0, 0, 0.50)",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "300",
              }}
              className=""
            >
              john.doe@mail.com
            </p>
            <p
              style={{
                position: "absolute",
                left: "120px",
                top: "75px",
                color: "rgba(0, 0, 0, 0.50)",
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "300",
              }}
              className=""
            >
              5465238659
            </p>
            <p
              style={{
                position: "absolute",
                left: "30px",
                top: "115px",
                color: "#000",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "800",
              }}
              className=""
            >
              1450A3
            </p>
            <p
              style={{
                position: "absolute",
                left: "30px",
                top: "140px",
                lineHeight: "normal",
                color: "#000000",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "500",
                width: "300px",
              }}
              className=""
            >
             Drug case in the court
            </p>
            <button
              style={{
                position: "absolute",
                left: "10px",
                bottom: "10px  ",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "800",
                color: "#1450A3",
                width: "122px",
                height: "31px",
                borderRadius: "15px",
                background: "rgba(20, 80, 163, 0.25)",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="  "
            >
              General
            </button>
            <button
              style={{
                position: "absolute",
                left: "140px",
                bottom: "10px  ",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "800",
                color: "#329D90",
                width: "122px",
                height: "30px",
                borderRadius: "15px",
                background: "rgba(50, 157, 144, 0.25)",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
              className=" "
            >
              Christian
            </button>
            <Link to="/LCRoom">
              <button
                style={{
                  position: "absolute",
                  right: "10px",
                  bottom: "10px  ",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#FFFFFF",
                  width: "148px",
                  height: "50px",
                  borderRadius: "10px",
                  background: "#1450A3",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="  "
              >
                Client Room
              </button>
            </Link>
            <button
              style={{
                position: "absolute",
                right: "20px",
                top: "20px  ",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "800",
                color: "#4F4F4F",
                width: "90px",
                height: "65px",
                borderRadius: "15px",
                background: "#F7F7F7",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="  "
            >
              140 Loyalty
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LSchedule;
