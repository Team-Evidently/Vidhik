import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MeetingCard() {
  const [meetings, setMeetings] = useState([
    { topic: 'Predefined Meeting 1', time: '10:00 AM' },
    { topic: 'Predefined Meeting 2', time: '2:00 PM' },
  ]);
  const [topic, setTopic] = useState('');
  const [time, setTime] = useState('');

  const handleCreateMeeting = () => {
    const newMeeting = { topic, time };
    setMeetings([...meetings, newMeeting]);
    setTopic('');
    setTime('');
  };

  return (
    <div
      style={{
        borderRadius: '15px',
        position: 'absolute',
        right: '26px',
        top: '340px',
      }}
      className="h-[500px] w-[360px] bg-white"
    >
      <h1
        style={{
          position: 'absolute',
          right: '100px',
          color: '#000',
          fontFamily: 'Poppins',
          fontSize: '35px',
          fontWeight: '700',
        }}
        className=""
      >
        Meetings
      </h1>

      <div
        style={{ background: '#F7F7F7', height: '50px', marginTop: '75px', width: '80%', marginLeft: '35px', borderRadius: '15px' }}
        className="flex"
      >
        <input
          style={{
            position: 'absolute',
            top: '80px',
            left: '60px',
            height: '35px',
            width: '105px',
            borderRadius: '15px',
            border: '1px solid #329D90',
            color: '#329D90',
            fontFamily: 'Inter',
            fontSize: '16px',
            fontWeight: '800px',
          }}
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="mr-2 p-2 border border-gray-400 rounded-md flex-grow"
        />
        <input
          style={{
            position: 'absolute',
            top: '80px',
            right: '60px',
            height: '35px',
            width: '105px',
            borderRadius: '15px',
            border: '1px solid #329D90',
            color: '#329D90',
            fontFamily: 'Inter',
            fontSize: '16px',
            fontWeight: '800px',
          }}
          type="text"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="mr-2 p-2 border border-gray-400 rounded-md flex-grow"
        />
      </div>
      <button
        onClick={handleCreateMeeting}
        style={{
          position: 'absolute',
          top: '120px',
          left: '130px',
          fontFamily: 'inter',
          fontSize: '16px',
          fontWeight: '800px',
          width: '80px',
          height: '30px',
          borderRadius: '15px',
          color: '#329D90',
          background: 'rgba(50, 157, 144, 0.25)',
        }}
        className="mt-2 text-center"
      >
        Create
      </button>

      <ul
        className="mt-24 p-4"
        style={{
          listStyle: 'none',
          border: '1px solid #E5E5E5',
          borderRadius: '15px',
          background: "rgba(20, 80, 163, 0.25)",
          margin: '35px',
          marginTop:'50px'
        
        }}
      >
        {meetings.map((meeting, index) => (
          <li
            key={index}
            className="flex justify-between border-b border-gray-300 py-2"
          >
            <span>{meeting.topic}</span>
            <span>{meeting.time}</span>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-auto">
        <Link to="/meeting">
          <button
            style={{ position: 'absolute', bottom: '20px', left: '130px' }}
            className="bg-blue-500 text-white rounded-md p-2"
          >
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MeetingCard;
