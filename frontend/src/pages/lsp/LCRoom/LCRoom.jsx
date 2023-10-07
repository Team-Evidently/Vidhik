import React from "react";
import logo from "../../../assets/logo.png";
import Loyalty from "../../../assets/Loyalty.png";
import documents from "../../../assets/documents.png";
import loyaltyimg from "../../../assets/loyaltyimg.png";
import Playstore from "../../../assets/Playstore.png";
import Meetingcard from "../../../components/MeetingCard/Meetingcard";

const LCRoom = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen flex">
      {/* <Sidenav /> */}
      <div className=" p-4 w-full">
        <div className="text-[#f5f5f5] text-3xl font-4 mb-4">
          <img src={logo} alt="" className="w-[200px] h-auto" />
        </div>

        <div
          style={{ borderRadius: "15px" }}
          className="bg-white flex flex-row justify-between"
        >
          <div
            style={{ position: "relative" }}
            className="h-[150px] w-[20%] bg-gray-100  rounded-xl m-4 mt-9"
          >
            <img src={Loyalty} alt="" className="w-[70px] h-auto" />
            <p
              style={{
                position: "absolute",
                right: "15px",
                top: "2px",
                color: "#000",
                fontFamily: "Inter",
                fontSize: "45px",
                fontWeight: "600",
              }}
              className=""
            >
              {" "}
              45
            </p>
            <p
              style={{
                position: "absolute",
                left: "5px",
                bottom: "15px",
                color: "#000",
                fontFamily: "Inter",
                fontSize: "22px",
                fontWeight: "300",
              }}
              className=""
            >
              {" "}
              Loyalty Score
            </p>
          </div>
          <div
            style={{ position: "relative" }}
            className="h-[150px] w-[20%] bg-gray-100  rounded-xl m-4 mt-9"
          >
            <img src={Playstore} alt="" className="w-[70px] h-auto" />
            <p
              style={{
                position: "absolute",
                right: "15px",
                top: "15px",
                color: "#000",
                fontFamily: "Inter",
                fontSize: "22px",
                fontWeight: "600",
              }}
              className=""
            >
              {" "}
              General
            </p>
            <p
              style={{
                position: "absolute",
                left: "5px",
                bottom: "15px",
                color: "#000",
                fontFamily: "Inter",
                fontSize: "22px",
                fontWeight: "300",
              }}
              className=""
            >
              {" "}
              Service Type
            </p>
          </div>
          <div
            style={{ position: "relative" }}
            className="h-[150px] w-[20%] bg-gray-100  rounded-xl m-4 mt-9"
          >
            <img src={documents} alt="" className="w-[70px] h-auto" />
            <button
              style={{
                position: "absolute",
                top: "20px",
                right: "15px",
                fontFamily: "Inter",
                fontSize: "22px",
                fontWeight: "400",
                color: "#000000",
                width: "80px",
                height: "30px",
                borderRadius: "15px",
                background: "#FFFFFF",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="  "
            >
              View
            </button>
            <p
              style={{
                position: "absolute",
                left: "5px",
                bottom: "15px",
                color: "#000",
                fontFamily: "Inter",
                fontSize: "22px",
                fontWeight: "300",
              }}
              className=""
            >
              {" "}
              Documents
            </p>
          </div>
          <div
            style={{ position: "relative" }}
            className="h-[150px] w-[20%] bg-gray-100 rounded-xl m-4 mt-9"
          >
            <img src={loyaltyimg} alt="" className="w-[70px] h-auto" />
            <p
              style={{
                position: "absolute",
                right: "15px",
                top: "2px",
                color: "#000",
                fontFamily: "Inter",
                fontSize: "45px",
                fontWeight: "600",
              }}
              className=""
            >
              8
            </p>
            <p
              style={{
                position: "absolute",
                right: "15px",
                top: "55px",
                color: "#000",
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: "600",
              }}
              className=""
            >
              OCT
            </p>
            <p
              style={{
                position: "absolute",
                left: "5px",
                bottom: "15px",
                color: "#000",
                fontFamily: "Inter",
                fontSize: "22px",
                fontWeight: "300",
              }}
              className=""
            >
              {" "}
              Next hearing
            </p>
          </div>
          <div
            style={{ position: "relative" }}
            className="h-[240px] w-[30%] rounded-xl  justify-center  items-center flex "
          >
            <div className=" w-40 h-40 rounded-full bg-gray-500 flex items-center justify-center">
              <img
                src="avatar.png"
                alt="Avatar"
                className="w-30 h-30 rounded-full"
              />
            </div>
            <p
              style={{
                position: "absolute",
                bottom: "0px",
                color: "#329D90",
                fontFamily: "Inter",
                fontSize: "28px",
                fontWeight: "800",
              }}
            >
              John Doe{" "}
            </p>
          </div>
        </div>

        <div
          style={{
            borderRadius: "15px",
            height: "1000px",
            position: "relative",
          }}
          className=" flex flex-row justify-between"

          
        >
          
            <Meetingcard></Meetingcard>
            
        </div>
      </div>
    </div>
  );
};

export default LCRoom;
