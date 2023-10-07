import React from 'react'
import logo from "../../../assets/logo.png";

const LCRoom = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen flex">
    {/* <Sidenav /> */}
    <div className=" p-4 w-full"> 
      <div className="text-[#f5f5f5] text-3xl font-4 mb-4">
        <img src={logo} alt="" className="w-[100px] h-auto" />
      </div>

      <div className="flex flex-row justify-between"> 
        <div className="h-[150px] w-[48%] bg-white rounded-xl m-4"></div> 
        <div className="h-[150px] w-[48%] bg-white rounded-xl m-4"></div> 
        <div className="h-[150px] w-[48%] bg-white rounded-xl m-4"></div> 
        <div className="h-[150px] w-[48%] bg-white rounded-xl m-4"></div> 
      </div>

      <div className="flex flex-wrap justify-between"> 
      ongoing
        <div className="h-[450px] w-[48%] bg-white rounded-xl mb-4">

        </div>
        <div className="h-[450px] w-[48%] bg-white rounded-xl mb-4"></div>
        heelooo
        <div className="h-[450px] w-[48%] bg-white rounded-xl mb-4"></div>
        <div className="h-[450px] w-[48%] bg-white rounded-xl mb-4"></div>
      </div>
    </div>
  </div>
  )
}

export default LCRoom