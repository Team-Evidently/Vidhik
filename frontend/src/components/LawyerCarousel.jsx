import React from "react";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import Avatar1 from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.png";
import { useNavigate } from "react-router-dom";


const LawyerCarousel = () => {
  const navigate = useNavigate();
  const lawyers = [
    {
      id: 1,
      name: "Lawyer 1",
      rank: "Senior Counsel",
      stars: 4,
      casesWon: 85,
      winningPercentage: 75,
      avatar: Avatar1,
    },
    {
      id: 2,
      name: "Lawyer 2",
      rank: "Junior Counsel",
      stars: 3,
      casesWon: 62,
      winningPercentage: 60,
      avatar: Avatar2,
    },
    {
      id: 3,
      name: "Lawyer 3",
      rank: "Senior Counsel",
      stars: 5,
      casesWon: 120,
      winningPercentage: 90,
      avatar: Avatar1
    },
    {
      id: 4,
      name: "Lawyer 4",
      rank: "Junior Counsel",
      stars: 3,
      casesWon: 58,
      winningPercentage: 55,
      avatar: Avatar1
    },
    {
      id: 5,
      name: "Lawyer 5",
      rank: "Senior Counsel",
      stars: 4,
      casesWon: 95,
      winningPercentage: 80,
      avatar: Avatar1
    },
    {
      id: 6,
      name: "Lawyer 6",
      rank: "Junior Counsel",
      stars: 3,
      casesWon: 64,
      winningPercentage: 65,
      avatar: Avatar1
    },
    {
      id: 7,
      name: "Lawyer 7",
      rank: "Senior Counsel",
      stars: 5,
      casesWon: 110,
      winningPercentage: 88,
      avatar: Avatar1
    },
    {
      id: 8,
      name: "Lawyer 8",
      rank: "Junior Counsel",
      stars: 3,
      casesWon: 72,
      winningPercentage: 70,
      avatar: Avatar1
    },
    {
      id: 9,
      name: "Lawyer 9",
      rank: "Senior Counsel",
      stars: 4,
      casesWon: 98,
      winningPercentage: 78,
      avatar: Avatar1
    },
    {
      id: 10,
      name: "Lawyer 10",
      rank: "Junior Counsel",
      stars: 3,
      casesWon: 60,
      winningPercentage: 58,
      avatar: Avatar1,
    },
    // Add more lawyer objects as needed
  ];

  return (
    <div className="overflow-x-scroll bg-2White py-4 px-2">
      <div className="flex space-x-4">
        {lawyers.map((lawyer) => (
          <div key={lawyer.id}
          className="flex-shrink-0"
          onClick={() => {
            navigate(`/lawyer/profile/${lawyer.id}`);
          }}
          style={{
            height: "100%",
            transition: "transform 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Avatar
                alt={lawyer.name}
                src={lawyer.avatar} // Use the avatar path for each lawyer
                sx={{ width: 100, height: 100, margin: "0 auto" }}
              />
              <h2 className="text-lg text-darkcolor mt-2">{lawyer.name}</h2>
              <p className="text-customgrey">Rank: {lawyer.rank}</p>
              <div className="flex items-center text-customgrey">
                Stars:{" "}
                {Array.from({ length: lawyer.stars }).map((_, index) => (
                  <StarIcon key={index} sx={{color:"#FFD700"}} />
                ))}
              </div>
              <p className="text-customgrey">
                Cases Won: {lawyer.casesWon} | Winning Percentage:{" "}
                {lawyer.winningPercentage}%
              </p>
              {/* Add more lawyer details as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawyerCarousel;
