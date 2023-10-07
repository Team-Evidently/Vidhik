import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function MeetingCard() {
  const [meetings, setMeetings] = useState([]);
  const [topic, setTopic] = useState('');
  const [time, setTime] = useState('');

  const handleCreateMeeting = () => {
    
    setMeetings([...meetings, { topic, time }]);
    
    setTopic('');
    setTime('');
  };

  return (
    <div style={{ borderRadius:'15px',position: 'absolute', right: '20px', top: '20px' }} className="h-[400px] w-[30%] bg-white">
      
      <h1 className=" heading text-center mt-4">Meetings</h1>

     
      <div className="flex mt-4">
        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="mr-2 p-2 border border-gray-400 rounded-md flex-grow"
        />
        <input
          type="text"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="mr-2 p-2 border border-gray-400 rounded-md flex-grow"
        />
        <></>
        
      </div>
      <button onClick={handleCreateMeeting} style={{ fontFamily:'inter',fontSize:'16px',fontWeight:'800px',width:'80px',height:'30px',borderRadius: '15px',color: '#329D90',background: 'rgba(50, 157, 144, 0.25)'}} className="mt-2 text-center">
          Create
        </button>

      
      <ul className="mt-4">
        {meetings.map((meeting, index) => (
          <li key={index} className="flex justify-between border-b border-gray-300 py-2">
            <span>{meeting.topic}</span>
            <span>{meeting.time}</span>
          </li>
        ))}
      </ul>

      {/* 4. Join Now button */}
      <div className="flex justify-center mt-auto">
        <Link to="/meeting">
        <button className="bg-blue-500 text-white rounded-md p-2 mt-4">Join Now</button>
       </Link>
      </div>
    </div>
  );
}

export default MeetingCard;
