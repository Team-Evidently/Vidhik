import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar1 from "../../../assets/avatar1.png";
import Avatar2 from "../../../assets/avatar2.png";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Fab,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
} from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import EventIcon from "@mui/icons-material/Event";
import CloseIcon from "@mui/icons-material/Close";
// import { createNotification, getNotificationsBySubscriberID } from "../../../utils/Firebase/functions";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
 const [openDialog, setOpenDialog] = useState(false); // State to control the dialog
 const [selectedDate, setSelectedDate] = useState(new Date());
 const [content, setContent] = useState("");
 const [selectedTime, setSelectedTime] = useState("00:00");

  const socket = useSocket();
  const navigate = useNavigate();

  useEffect(() => {
    setEmail(sessionStorage.getItem("email_id"));
    let room = 456;
    setRoom(room);
  }, []);

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    socket.on("chat:message", handleNewChatMessage);
    socket.on("participants:update", handleParticipantsUpdate);

    return () => {
      socket.off("room:join", handleJoinRoom);
      socket.off("chat:message", handleNewChatMessage);
      socket.off("participants:update", handleParticipantsUpdate);
    };
  }, [socket]);

 const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room, participants } = data;
      navigate(`/room/${room}`);
      setParticipants(participants);
    },
    [navigate]
  );

  const handleNewChatMessage = useCallback(
    (data) => {
      const { message, sender } = data;
      setChatMessages([...chatMessages, { sender, message }]);
    },
    [chatMessages]
  );

  const handleParticipantsUpdate = useCallback((data) => {
    setParticipants(data.participants);
  }, []);

  const handleSendMessage = () => {
    if (chatMessage.trim() !== "") {
      socket.emit("chat:message", {
        message: chatMessage,
        sender: email,
        room,
      });
      setChatMessage("");
    }
  };

 const handleOpenDialog = () => {
   setOpenDialog(true);
 };

 const handleCloseDialog = () => {
   setOpenDialog(false);
 };

 const handleDateChange = (date) => {
   setSelectedDate(date);
 };

 const handleContentChange = (e) => {
   setContent(e.target.value);
 };



 const handleTimeChange = (e) => {
  setSelectedTime(e.target.value);
};

const notification = {
  userID: "user1-uid",
  createdBy: "user2-uid",
  links: {
    meeting: "https://meet.google.com/abc-def-ghi",
    profile: "https://example.com/user-profile",
  },
  status: "open",
  subscribers: ["user1-uid", "user2-uid"],
  content: "You have a meetibjhkhhjng with John Doe in 15 minutes.",
};


const handleCreateNotification = async () => {
  try {
    
    await createNotification(notification);
    console.log('Notification created successfully!');
    handleCloseDialog();
  } catch (error) {
    console.error('Error creating notification:', error);

  }
};


const getAllNotifications = async () => {
  const notifications = await getNotificationsBySubscriberID("user2-uid");
  for (const notification of notifications) {
  console.log(notification);
}
};

  return (
    <div className="pt-5 w-[100vw] ">
      <Container className="w-[100%] h-screen bg-[#F6F5F5] pt-5 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar
              name={"milind"}
              size={40}
              round={true}
              src={Avatar1}
              sx={{
                marginRight: "10px",
              }}
            />
            <Typography variant="h5" fontFamily={"monospace"}>
              Milind
            </Typography>
          </div>

          <Fab color="primary" aria-label="add" onClick={handleSubmitForm}>
            <VideocamIcon sx={{ fontSize: 40 }} />
          </Fab>
         <IconButton color="primary" aria-label="add" onClick={handleOpenDialog}>
           <EventIcon sx={{ fontSize: 40 }} />
         </IconButton>
        </div>
        <TextField
          label="Chat"
          variant="outlined"
          fullWidth
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          className="absolute bottom-0  w-[90%] pb-4"
        />

        <List>
          {chatMessages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText primary={msg.sender} secondary={msg.message} />
            </ListItem>
          ))}
        </List>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel htmlFor="date">Date</InputLabel>
            <TextField
              id="date"
              type="date"
              value={selectedDate.toISOString().split("T")[0]}
              onChange={(e) => handleDateChange(new Date(e.target.value))}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="time">Time</InputLabel>
            <TextField
              id="time"
              type="time"
              value={selectedTime}
              onChange={handleTimeChange}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextareaAutosize
              minRows={3}
              placeholder="Enter Content"
              value={content}
              onChange={handleContentChange}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          {/* <Button onClick={handleCreateNotification} color="primary">
            Submit
          </Button> */}

          <Button onClick={getAllNotifications} color="primary">
            Get Notifications
          </Button>
        </DialogActions>
      </Dialog>
      </Container>
    </div>
  );
};

export default LobbyScreen;
