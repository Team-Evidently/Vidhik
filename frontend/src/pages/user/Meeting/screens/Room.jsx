import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "../service/peer";
import { useSocket } from "../context/SocketProvider";
import { Avatar, Button, Card, Paper, Skeleton, Typography } from "@mui/material";
import Avatar1 from "../../../../assets/avatar1.png";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";


const socketChat = io("http://localhost:8000");

const RoomPage = () => {
  

  const navigate = useNavigate();
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [messages, setMessages] = useState([]); // Chat state
  const [newMessage, setNewMessage] = useState(""); // Chat state

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log("User Joined");
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  const handleEndCall = () => {
    // Close the peer connection
    if(remoteSocketId){
      peer.peer.close();

      // Stop the local stream tracks
      myStream.getTracks().forEach((track) => {
        track.stop();
      });
  
      // Optionally, you can reset the state variables
      setRemoteSocketId(null);
      setMyStream(null);
      setRemoteStream(null);
  
      // Add any additional logic you need to end the call gracefully
      navigate(-1);
    }
    else{
      navigate(-1);
    }
    
  };

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    socketChat.emit("chat:message", { message: newMessage });
    setNewMessage("");
  };

  // Function to handle incoming messages
  const handleIncomingMessage = useCallback((messageData) => {
    const { message, sender } = messageData;
    setMessages((prevMessages) => [...prevMessages, { sender, message }]);
  }, []);

  // Subscribe to chat events when the component mounts
  useEffect(() => {
    socketChat.on("chat:message", handleIncomingMessage);
    return () => {
      // Unsubscribe from chat events when the component unmounts
      socketChat.off("chat:message", handleIncomingMessage);
    };
  }, [handleIncomingMessage]);

  return (
    <div className="bg-[#212121] h-screen w-screen flex  flex-col gap-5 justify-center items-center" >
      <div className="flex flex-col items-center gap-3">
        <Typography variant="h4" color="white">{remoteSocketId ? "Connected" : "Connecting to the participant...."}</Typography>
       { !remoteSocketId?
       <Avatar
              name={"milind"}
              size={100}
              round={true}
              src={Avatar1} // Use the avatar URL as the source
              sx={{
                marginRight: "10px",
                height: "200px",
                width: "200px",

              }}

            />
          :
          ""}
      </div>
      <div className="flex flex-row justify-center gap-10 items-center w-full">
      {myStream ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white">My Stream</h1>
          <ReactPlayer
            playing
            muted
            height="350px"
            width="600px"
            url={myStream}
          />
        </div>
      ): (
        <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h4" color="primary">
        Video Call
      </Typography>
      <Skeleton variant="circle" width={200} height={200} style={{ margin: "20px auto" }} />
      <Skeleton width={200} style={{ margin: "0 auto" }} />
      <Skeleton width={200} style={{ margin: "0 auto" }} />
    </Paper>
      )}
      {remoteStream ?(
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white">Remote Stream</h1>
          <ReactPlayer
            playing
            muted
            height="350px"
            width="600px"
            url={remoteStream}
          />
        </div>
      ):
      (
        <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h4" color="primary">
        Video Call
      </Typography>
      <Skeleton variant="circle" width={200} height={200} style={{ margin: "20px auto" }} />
      <Skeleton width={200} style={{ margin: "0 auto" }} />
      <Skeleton width={200} style={{ margin: "0 auto" }} />
    </Paper>
      )}
      </div>
      
      {myStream && <Button variant="contained" color="success" onClick={sendStreams}>Share your Camera</Button >}
      {remoteSocketId && <Button variant="contained" color="primary" onClick={handleCallUser}>CALL</Button>}
      {<Button color="error" onClick={handleEndCall} variant="contained">End Call</Button>}
   
    </div>

  );
};

export default RoomPage;
