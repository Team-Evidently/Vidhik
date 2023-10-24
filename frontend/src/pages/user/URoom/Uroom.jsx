import React, { useState } from 'react';
import logo from "../../../assets/logo.png";
import Loyalty from "../../../assets/Loyalty.png";
import documents from "../../../assets/documents.png";
import loyaltyimg from "../../../assets/loyaltyimg.png";
import Playstore from "../../../assets/Playstore.png";
import Meetingcard from "../../../components/MeetingCard/Meetingcard";
import avatar from "../../../assets/avatar-icon.png";
// import PastHearing from "../../../components/PastHearing/PastHearing";
import MainNote from "../../../components/MainNote/MainNote";
// import PastHearing from "../../../components/PastHearing/PastHearing";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button } from 'react-scroll';







const Uroom = () => {
  const hearingDates = [
    { serialNumber: 9, hearingNumber: 'Hearing 009', date: '2024-03-05' },
    { serialNumber: 8, hearingNumber: 'Hearing 008', date: '2024-02-15' },
    { serialNumber: 7, hearingNumber: 'Hearing 007', date: '2024-02-05' },
    { serialNumber: 6, hearingNumber: 'Hearing 006', date: '2024-01-15' },
    { serialNumber: 5, hearingNumber: 'Hearing 005', date: '2024-01-05' },
    { serialNumber: 4, hearingNumber: 'Hearing 004', date: '2023-12-15' },
    { serialNumber: 3, hearingNumber: 'Hearing 003', date: '2023-12-05' },
    { serialNumber: 2, hearingNumber: 'Hearing 002', date: '2023-11-15' },
    { serialNumber: 1, hearingNumber: 'Hearing 001', date: '2023-11-01' },
  ];

  const nextMeeting = {
    date: '2024-03-20',
    topic: 'Project Update and Planning',
  };

  const handleJoinMeeting = () => {
    // Add logic for joining the meeting
    console.log('Joining the meeting...');
  };

  const additionalContent = [
    'Agenda:',
    '1. Project updates and milestones',
    '2. Discussion on upcoming tasks',
    '3. Q&A session with the team',
  ];

  const notices = [
    { title: 'Important Notice 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Important Notice 2', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Important Notice 3', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    // Add more notices as needed
  ];

  const handleViewNotice = (index) => {
    // Add logic for viewing the notice
    console.log(`Viewing Notice ${index + 1}`);
  };



  return <div className="bg-[#F5F5F5] min-h-screen flex">
    <div className=" p-4 w-full flex flex-col gap-4">
      <div style={{ position: 'relative', height: "75px" }} className=" text-3xl font-4 mb-4">
        <img style={{ position: 'absolute', left: '0px' }} src={logo} alt="" className="w-[200px] h-auto" />
        <img style={{ position: 'absolute', right: '0px' }} src={avatar} alt="" className="w-[75px] h-auto" />
        <p style={{ position: 'absolute', right: '100px', top: '5px', color: '#329D90', fontSize: '22px', fontWeight: '800' }}>Adv. Parth Gala</p>
        <button style={{

          color: "#000",
          borderRadius: "15px",
          background: "rgba(20, 80, 163, 0.25)",
          fontSize: "16px",
          position: 'absolute',
          right: '90px',
          top: '45px'

        }} className="flex items-center px-3 py-2 rounded-md w-[60px] h-[30px] justify-center ">
          View
        </button>
      </div>
      <div
        style={{ position: 'relative' }}
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
                    Lawyer Ranking
                  </div>
                </div>
              </div>
              <button className="flex items-center px-3 py-2 rounded-md w-[120px] h-[60px] justify-center text-5xl">
                2
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
                marginTop: '45px',
                marginRight: '-90px'



              }} className="flex items-center px-3 py-2 rounded-md w-[110px] h-[30px] justify-center text-xl">
                View
              </button>
              <button style={{

                color: "#000",
                borderRadius: "15px",
                background: "rgba(50, 157, 144, 0.25)",
                marginTop: '-30px',



              }} className="flex items-center px-3 py-2 rounded-md w-[90px] h-[30px] justify-center text-xl">
                Upload
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

                <img src={loyaltyimg} alt="" className="inline-block text-6xl m-3 bg-[#85CDFD] bg-opacity-50 p-1 border border-black rounded-lg" />
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
      <div className='ml-[35px] relative '>
        <Typography variant="h2" style={{ color: '#000', fontFamily: 'Poppins', fontSize: '25px', fontWeight: '700' }}>
          Case Details
        </Typography>
        <div style={{ borderRadius: '15px', width: '75vw', height: '350px', background: 'white', padding: '20px' }}>
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
      <div className='flex'>
        <div className='ml-[35px] relative mt-[20px] '>
          <Typography variant="h2" style={{ color: '#000', fontFamily: 'Poppins', fontSize: '25px', fontWeight: '700' }}>
            Case Hearings
          </Typography>
          <Paper style={{ borderRadius: '15px', width: '25vw', height: '350px', background: 'white', padding: '20px' }}>
            <List style={{ overflowY: 'auto', height: '100%' }}>
              {hearingDates.map((hearing, index) => (
                <div key={index}>
                  <ListItem>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <div className='flex gap-3'>
                        <Typography variant="body1">{hearing.serialNumber}.</Typography>
                        <Typography variant="body1">{hearing.hearingNumber}</Typography>
                      </div>
                      <div style={{ borderRadius: '8px', background: '#f0f0f0', padding: '5px 10px' }}>
                        <Typography variant="body2">{hearing.date}</Typography>
                      </div>
                    </div>
                  </ListItem>
                  {index < hearingDates.length - 1 && <Divider />}
                </div>
              ))}
            </List>
          </Paper>
        </div>
        <div className='ml-[35px] relative mt-[20px] '>
          <Typography variant="h2" style={{ color: '#000', fontFamily: 'Poppins', fontSize: '25px', fontWeight: '700', }}>
            Next Meeting Scheduled
          </Typography>
          <Paper style={{ borderRadius: '15px', width: '25vw', background: 'white', padding: '20px', textAlign: 'center', height: '350px' }}>
           
            <Typography variant="h4" style={{ marginTop: '10px' }}>
              Date: {nextMeeting.date}
            </Typography>
            <Typography variant="h5" style={{ margin: '10px 0' }}>
              Topic: {nextMeeting.topic}
            </Typography>
            <Typography variant="h6" style={{ marginBottom: '15px', textAlign: 'left', fontSize: '16px' }}>
              {additionalContent.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: '#4CAF50', color: 'white', borderRadius: '8px', marginTop: '20px', padding: '15px 30px', fontSize: '18px' }}
              onClick={handleJoinMeeting}
            >
              Join
            </Button>
          </Paper>
        </div>
        <div className='ml-[35px] relative mt-[20px]'>
          <Typography variant="h2" style={{ color: '#000', fontFamily: 'Poppins', fontSize: '25px', fontWeight: '700' }}>
            Recent Notices
          </Typography>
          <Paper style={{ borderRadius: '15px', width: '25vw', height: '350px', background: 'white', padding: '20px' }}>
            <List style={{ overflowY: 'auto', height: '100%' }}>
              {notices.map((notice, index) => (
                <div key={index}>
                  <ListItem>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <div className='flex gap-3'>
                        <Typography variant="h6">{notice.title}</Typography>
                      </div>
                    </div>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <div>
                        <Typography variant="body1">{notice.content}</Typography>
                      </div>
                      <div>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: '#2196F3', color: 'white', borderRadius: '8px', padding: '8px' }}
                          onClick={() => handleViewNotice(index)}
                        >
                          View Notice
                        </Button>
                      </div>
                    </div>
                  </ListItem>
                  {index < notices.length - 1 && <Divider />}
                </div>
              ))}
            </List>
          </Paper>
        </div>
      </div>

    </div>


  </div>;
};

export default Uroom;
