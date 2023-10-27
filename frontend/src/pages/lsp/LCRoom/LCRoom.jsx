import React from "react";
import logo from "../../../assets/logo.png";
import Loyalty from "../../../assets/Loyalty.png";
import documents from "../../../assets/documents.png";
import loyaltyimg from "../../../assets/loyaltyimg.png";
import Playstore from "../../../assets/Playstore.png";
import Meetingcard from "../../../components/MeetingCard/Meetingcard";
import avatar from "../../../assets/avatar-icon.png";
import PastHearing from "../../../components/PastHearing/PastHearing";
import MainNote from "../../../components/MainNote/MainNote";
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';

const LCRoom = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen flex">
      
      <div className=" p-4 w-full">
        <div style={{position:'relative',height:"75px"}}className=" text-3xl font-4 mb-4">
          <img style={{position:'absolute',left:'0px'}}src={logo} alt="" className="w-[200px] h-auto" />
          <img style={{position:'absolute',right:'0px'}}src={avatar} alt="" className="w-[75px] h-auto" />
          <p style={{position:'absolute',right:'100px',top:'15px',color:'#329D90',fontSize:'28px',fontWeight:'800'}}>Vikram Singh</p>

        </div>

        <div
          style={{ position:'relative' }}
          className="bg-gray-100 flex flex-row "
        >
         
           <div className="h-[150px] w-[40%] bg-white rounded-xl m-4 hover:bg-[#a0a0a0] hover:bg-opacity-25 hover:border-black hover:border">
            <div className="flex flex-col w-full relative">
              <button
                type="button"
                className={` cursor-default text-sm font-semibold rounded-md mt-2 p-3 w-[100%] text-justify flex items-center bg-inherit`}
               
              >
                <div className="flex items-center justify-start w-full">
                <img src={Loyalty} alt="" className="inline-block text-6xl m-3 bg-[#FFC7EA] bg-opacity-50 p-1 border border-black rounded-lg" />
                 
                  <div className="flex flex-col">
                    <div className="justify-center content-center text-start text-btnColor font-bold text-lg">
                      Loyalty Score
                    </div>
                  </div>
                </div>
                <button className="flex items-center px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-5xl">
                  45
                </button>
              </button>
            </div>
          </div>
         
          <div className="h-[150px] w-[40%] bg-white rounded-xl m-4 hover:bg-[#a0a0a0] hover:bg-opacity-25 hover:border-black hover:border">
            <div className="flex flex-col w-full relative">
              <button
                type="button"
                className={`cursor-default text-sm font-semibold rounded-md mt-2 p-3 w-[100%] text-justify bg-inherit flex items-center`}
              >
                <div className="flex items-center justify-start w-full">
                  
                  <img src={Playstore} alt="" className="inline-block text-6xl m-3 bg-[#C8FFE0] bg-opacity-50 p-1 border border-black rounded-lg" />
                  <div className="flex flex-col">
                    <div className="justify-center content-center text-start text-btnColor font-bold text-lg">
                      Service
                    </div>
                  </div>
                </div>
                <button className="flex items-center px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-2xl">
                General
                </button>
              </button>
            </div>
          </div>
        
           <div className="h-[150px] w-[40%] bg-white rounded-xl m-4 hover:bg-[#a0a0a0] hover:bg-opacity-25 hover:border-black hover:border">
            <div className="flex flex-col w-full relative">
              <button
                type="button"
                className={`cursor-default text-sm font-semibold rounded-md mt-2 p-3 w-[100%] text-justify bg-inherit flex items-center`}
                
              >
                <div className="flex items-center justify-start w-full">
                 
                  <img src={documents} alt="" className="inline-block text-6xl m-3 bg-[#F6E6C2] bg-opacity-50 p-1 border border-black rounded-lg" />
                  <div className="flex flex-col">
                    <div className="justify-center content-center text-start text-btnColor font-bold text-lg">
                      Documents
                    </div>
                  </div>
                </div>
                <button style={{
              
                color: "#000",
                borderRadius: "15px",
                background: "rgba(50, 157, 144, 0.25)",
                
                
                
              }}className="flex items-center px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-2xl">
                  View
                </button>
              </button>
            </div>
          </div>
         
           
           <div className="h-[150px] w-[40%] bg-white rounded-xl m-4 hover:bg-[#a0a0a0] hover:bg-opacity-25 hover:border-black hover:border">
            <div className="flex flex-col w-full relative">
              <button
                type="button"
                className={`cursor-default text-sm font-semibold rounded-md mt-2 p-3 w-[100%] text-justify bg-inherit flex items-center`}
                
              >
                <div className="flex items-center justify-start w-full">
                 
                  <img src={loyaltyimg} alt="" className="inline-block text-6xl m-3 bg-[#85CDFD] bg-opacity-50 p-1 border border-black rounded-lg"  />
                  <div className="flex flex-col">
                    <div className="justify-center content-center text-start text-btnColor font-bold text-lg">
                      Next Hearing
                    </div>
                  </div>
                </div>
                <button className="flex items-center px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-2xl">
                  26 OCT
                </button>
              </button>
            </div>
          </div>
          
         
        </div>
        <div className=' ml-[15px] mt-[10px] relative '>
        <Typography variant="h2" style={{ color: '#000', fontFamily: 'Poppins', fontSize: '25px', fontWeight: '700' }}>
          Case Details
        </Typography>
        <div style={{ borderRadius: '15px', width: '1100px', height: '350px', background: 'white', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='flex flex-col items-center'>
              <Typography variant="h4">Land Dispute Settlement</Typography>
              <div className='absolute left-10'>Case Number: XYZ123</div>
              <Typography variant="h5">Vikram Singh vs Defendant</Typography>
            </div>
          </div>
          <Divider style={{ margin: '15px 0' }} />

          <h2 className='text__para text-[15px]'>
            Description: In this Indian land dispute case, Vikram Singh, the plaintiff, and the defendant are entangled in a legal battle over a piece of land situated in a rural area near Jaipur, Rajasthan. The dispute revolves around conflicting claims regarding the ownership and boundaries of the land, adding complexity to the case.
          </h2>
          <h2 className='text__para text-[15px]'>
            Vikram Singh asserts his rightful ownership based on ancestral documents and traditional land records, while the defendant challenges these claims, presenting alternative historical evidence. The court aims to navigate through the intricacies of Indian land laws and cultural nuances to arrive at a fair and just resolution that respects the legal rights of both parties involved.
          </h2>
        </div>
      </div>
        <Meetingcard> </Meetingcard>
        {/* <PastHearing></PastHearing> */}

       
    
    <MainNote>  </MainNote>
      </div>
    </div>
  );
};

export default LCRoom;
