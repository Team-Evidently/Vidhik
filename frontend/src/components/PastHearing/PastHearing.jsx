import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PastHearing() {
  const [pastCases, setPastCases] = useState([
    { hearingNumber: 'Hearing 1', date: 'Oct 1, 2023' },
    { hearingNumber: 'Hearing 2', date: 'Sep 28, 2023' },
    { hearingNumber: 'Hearing 3', date: 'Sep 20, 2023' },
    { hearingNumber: 'Hearing 4', date: 'Sep 15, 2023' },
    { hearingNumber: 'Hearing 5', date: 'Sep 10, 2023' },
    { hearingNumber: 'Hearing 6', date: 'Sep 5, 2023' },
    { hearingNumber: 'Hearing 7', date: 'Aug 30, 2023' },
    { hearingNumber: 'Hearing 8', date: 'Aug 25, 2023' },
    { hearingNumber: 'Hearing 9', date: 'Aug 20, 2023' },
    { hearingNumber: 'Hearing 10', date: 'Aug 15, 2023' },
  ]);

  return (
    <div>
          <h1
        style={{
          position: 'absolute',
          right: '650px',
          color: '#000',
          fontFamily: 'Poppins',
          fontSize: '25px', 
          fontWeight: '700',
          marginTop: '10px',
        }}
        className=""
      >
        Past Hearings
      </h1>

    <div
      style={{
        borderRadius: '15px',
        position: 'absolute',
        right: '460px',
        top: '340px',
      }}
      className="w-[360px] bg-white"
    >
      

      <div
        style={{
          height: '200px',
          overflowY: 'auto',
          background: 'white',
          borderRadius: '15px',
          
        }}
        className="mt-2"
      > <div  
      className="">
        <ul
          style={{
            listStyle: 'none',
            padding: '0',
          }}
        >
          {pastCases.map((caseData, index) => (
            <li
              key={index}
              className="flex justify-between border-b border-gray-300 py-2"
            >
              <span>{caseData.hearingNumber}</span>
              <span>{caseData.date}</span>
            </li>
          ))}
        </ul>
        </div>
      </div>

      <div className="flex justify-center mt-auto">
        <Link to="/meeting">
          
        </Link>
      </div>
    </div>
    </div>
  );
}

export default PastHearing;
