import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const LSchedule = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen flex">
      {/* <Sidenav /> */}
      <div className=" p-4 w-full">
        <div className="text-[#f5f5f5] text-3xl font-4 mb-4">
          <img src={logo} alt="" className="w-[100px] h-auto" />
        </div>
        <p className="mt-11 heading">My Schedule</p>
        <div className="flex flex-row justify-between ">
          <div className="h-[150px] w-[25%] bg-white rounded-xl m-4"></div>
          <div className="h-[150px] w-[70%] bg-white rounded-xl m-4"></div>
        </div>

        <p className="mt-20 heading">My Clients</p>
        <div className="flex flex-row justify-between  mr-24">
          <div className="h-[300px] w-[40%] bg-white rounded-xl">
            <div className="flex items-center justify-between">
            
              <div className="ml-8 w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center">
                <img
                  src="avatar.png"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </div>
             
              <div className="mr-32 ml-2">
                <p style={{ color:"#329D90",fontFamily: 'Inter',fontSize:'28px',fontWeight:'800'}}className="">John Doe</p>
                <p style ={{color:"rgba(0, 0, 0, 0.50);",fontFamily: 'Inter',fontSize:'18px',fontWeight:'300'}}className="">john.doe@example.com</p>
                <p style ={{color:"rgba(0, 0, 0, 0.50);",fontFamily: 'Inter',fontSize:'18px',fontWeight:'300'}}className="">123-456-7890</p>
              </div>
              <div className=" flex items-center justify-end">
              <div style={{background: '#F7F7F7',width:'90px',height:'60px'}}className="mr-4  p-2">
                Loyalty : 25
              </div>
            </div>
            </div>
          
            <p style={{color: '#000',fontFamily: 'Inter',fontSize:'18px',fontWeight:'800'}}className="mt-4">Client ID: 12345</p>
            
            <p style={{color: '#000',fontFamily: 'Inter',fontSize:'16px',fontWeight:'600',width:'300px'}}className="mt-2">A line giving brief description of the case and a note maybe.</p>
            
            
            <div className="mt-4 flex justify-between">
              <button style={{marginTop:'10px',fontFamily: 'Inter',fontSize:'18px',fontWeight:'800',color: '#1450A3', width:'122px',height:'30px',borderRadius:'15px',background:'rgba(20, 80, 163, 0.25)',textAlign:'center',alignItems:'center',justifyContent:'center'}}className="  ">
                General
              </button>
              <button style={{marginTop:'10px',marginRight:'200px',fontFamily: 'Inter',fontSize:'18px',fontWeight:'800',color: '#329D90', width:'122px',height:'30px',borderRadius:'15px',background:'rgba(50, 157, 144, 0.25)',textAlign:'center',alignItems:'center',justifyContent:'center'}}className=" ">
                Guju
              </button>
              <Link to ="/LCRoom">
              <button style={{fontFamily: 'Inter',fontSize:'20px',fontWeight:'400',color: '#FFF', width:'152px',height:'50px',borderRadius:'10px',background:'#1450A3',textAlign:'center',alignItems:'center',justifyContent:'center'}}className="  ">
                Room
              </button>
              </Link>
            </div>
          
          </div>
          <div className="h-[300px] w-[40%] bg-white rounded-xl">
            <div className="flex items-center justify-between">
            
              <div className="ml-8 w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center">
                <img
                  src="avatar.png"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </div>
             
              <div className="mr-32 ml-2">
                <p style={{ color:"#329D90",fontFamily: 'Inter',fontSize:'28px',fontWeight:'800'}}className="">John Doe</p>
                <p style ={{color:"rgba(0, 0, 0, 0.50);",fontFamily: 'Inter',fontSize:'18px',fontWeight:'300'}}className="">john.doe@example.com</p>
                <p style ={{color:"rgba(0, 0, 0, 0.50);",fontFamily: 'Inter',fontSize:'18px',fontWeight:'300'}}className="">123-456-7890</p>
              </div>
              <div className=" flex items-center justify-end">
              <div style={{background: '#F7F7F7',width:'90px',height:'60px'}}className="mr-4  p-2">
                Loyalty : 25
              </div>
            </div>
            </div>
          
            <p style={{color: '#000',fontFamily: 'Inter',fontSize:'18px',fontWeight:'800'}}className="mt-4">Client ID: 12345</p>
            
            <p style={{color: '#000',fontFamily: 'Inter',fontSize:'16px',fontWeight:'600',width:'300px'}}className="mt-2">A line giving brief description of the case and a note maybe.</p>
            
            
            <div className="mt-4 flex justify-between">
              <button style={{marginTop:'10px',fontFamily: 'Inter',fontSize:'18px',fontWeight:'800',color: '#1450A3', width:'122px',height:'30px',borderRadius:'15px',background:'rgba(20, 80, 163, 0.25)',textAlign:'center',alignItems:'center',justifyContent:'center'}}className="  ">
                General
              </button>
              <button style={{marginTop:'10px',marginRight:'200px',fontFamily: 'Inter',fontSize:'18px',fontWeight:'800',color: '#329D90', width:'122px',height:'30px',borderRadius:'15px',background:'rgba(50, 157, 144, 0.25)',textAlign:'center',alignItems:'center',justifyContent:'center'}}className=" ">
                Guju
              </button>
              <Link to ="/LCRoom">
              <button style={{fontFamily: 'Inter',fontSize:'20px',fontWeight:'400',color: '#FFF', width:'152px',height:'50px',borderRadius:'10px',background:'#1450A3',textAlign:'center',alignItems:'center',justifyContent:'center'}}className="  ">
                Room
              </button>
              </Link>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default LSchedule;
