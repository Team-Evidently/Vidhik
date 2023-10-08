import React from "react";
import logo from "../../../assets/logo.png";
import Loyalty from "../../../assets/Loyalty.png";
import documents from "../../../assets/documents.png";
import loyaltyimg from "../../../assets/loyaltyimg.png";
import Playstore from "../../../assets/Playstore.png";
import Meetingcard from "../../../components/MeetingCard/Meetingcard";
import avatar from "../../../assets/avatar-icon.png";

const LCRoom = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen flex">
      
      <div className=" p-4 w-full">
        <div style={{position:'relative',height:"75px"}}className=" text-3xl font-4 mb-4">
          <img style={{position:'absolute',left:'0px'}}src={logo} alt="" className="w-[200px] h-auto" />
          <img style={{position:'absolute',right:'0px'}}src={avatar} alt="" className="w-[75px] h-auto" />
          <p style={{position:'absolute',right:'100px',top:'15px',color:'#329D90',fontSize:'28px',fontWeight:'800'}}>John Doe</p>

        </div>

        <div
          style={{ position:'relative' }}
          className="bg-gray-100 flex flex-row "
        >
          <div
            style={{ position: "relative" }}
            className="h-[150px] w-[220px] bg-white  rounded-xl m-4 mt-9"
          >
            <img src={Loyalty} alt="" className="w-[60px] h-auto" />
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
            className="h-[150px] w-[220px] bg-white rounded-xl m-4 mt-9"
          >
            <img src={Playstore} alt="" className="w-[60px] h-auto" />
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
            className="h-[150px] w-[220px] bg-white  rounded-xl m-4 mt-9"
          >
            <img src={documents} alt="" className="w-[60px] h-auto" />
            <button
              style={{
                position: "absolute",
                top: "20px",
                right: "15px",
                fontFamily: "Inter",
                fontSize: "22px",
                fontWeight: "400",
                color: "#329D90",
                width: "80px",
                height: "30px",
                borderRadius: "15px",
                background: "rgba(50, 157, 144, 0.25)",
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
            className="h-[150px] w-[220px] bg-white rounded-xl m-4 mt-9"
          >
            <img src={loyaltyimg} alt="" className="w-[60px] h-auto" />
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
          {/* <div
            style={{ position: "relative" }}
            className="h-[240px] w-[30%] rounded-xl  justify-center  items-center flex "
          >
         
              <img
              style={{height:"200px",width:"200px"}}
                src={avatar}
                alt="Avatar"
                className=" rounded-full"
              />
           
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
          </div> */}
          <Meetingcard></Meetingcard>
        </div>

        <div
          style={{
            
            height: "1000px",
            position: "relative",
          }}
          className=" flex flex-row justify-between"

          
        >
          
        
            
        </div>
      </div>
    </div>
  );
};

export default LCRoom;
