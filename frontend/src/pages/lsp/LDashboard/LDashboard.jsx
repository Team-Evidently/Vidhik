// import Sidenav from "../../../components/sidenav";
// import React from "react";
// import logo from "../../../assets/logo.png";
// const LDashboard = () => {
//   return (
//     <div className="bg-[#F5F5F5] min-h-screen">
//       <Sidenav />
//       <div>
//         <div className="text-[#f5f5f5] text-xl font-sm ml-[340px]">
//           <img src={logo} alt="" className=" w-[100px] h-auto" />
//         </div>
//       </div>
//       <div className="ml-[360px] flex items-center mt-10">
//         <div className="h-[100px] w-[260px] bg-white mx-2 rounded-xl"></div>
//         <div className="h-[100px] w-[260px] bg-white mx-2 rounded-xl"></div>
//         <div className="h-[100px] w-[260px] bg-white mx-2 rounded-xl"></div>
//         <div className="h-[100px] w-[260px] bg-white mx-2 rounded-xl"></div>
//       </div>

//       <div className="ml-[360px] flex flex-col items-center mt-10 w-50vh h-[calc(100vh-30vh)] bg-red-500">
//         <div className="flex flex-row w-1/2 h-1/2 m-10">
//           <div className="h-[450px] w-[600px] bg-white mx-2 rounded-xl"></div>
//           <div className="h-[450px] w-[600px] bg-white mx-2 rounded-xl"></div>
//         </div>
//         <div className="flex flex-row w-1/2 h-1/2 m-10">
//           <div className="h-[450px] w-[600px] bg-white mx-2 rounded-xl"></div>
//           <div className="h-[450px] w-[600px] bg-white mx-2 rounded-xl"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LDashboard;


import Sidenav from "../../../components/sidenav";
import React from "react";
import logo from "../../../assets/logo.png";

const LDashboard = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen flex">
      <Sidenav />
      <div className="ml-[340px] p-4 w-full"> 
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
  );
};

export default LDashboard;
