import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LawyerCarousel from "../../../components/LawyerCarousel";
import Drawer from "../../../components/Drawer";
import Herobg from "../../../assets/clientherobg.png";
import {
  Autocomplete,
  Card,
  Container,
  Divider,
  Grid,
  ListItem,
  PaginationItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { CardContent } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Avatar1 from "../../../assets/avatar01.png";
import Avatar2 from "../../../assets/avatar2.png";
import nodoc from "../../../assets/nodoc.jpg";
import nodata from "../../../assets/nodata.webp";
import { useNavigate } from "react-router-dom";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import handshake from "../../../assets/handshake.png";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidHelpCircle } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import "./udashboard.css";
import LSPCard from "../../../components/LSPCard/LSPCard";
import FindLSP from "../../lsp/FindLSP/FindLSP";
import { AnimatedCard } from "../../../components/animatedCard";

const LawyersPerPage = 10; // Number of lawyers to display per page

const dummyLawyers = [
  {
    id: 1,
    name: "Lawyer 1",
    courtsPracticing: ["High Court", "District Court"],
    starRating: 4,
    winningPercentage: 75,
    caseType: ["Civil", "Criminal"],
    fees: "10k-20k",
    photoUrl: Avatar1,
  },
  {
    id: 2,
    name: "Lawyer 2",
    courtsPracticing: ["District Court"],
    starRating: 7,
    winningPercentage: 80,
    caseType: ["Custody"],
    fees: "10k-20k",
    photoUrl: Avatar2,
  },
  {
    id: 3,
    name: "Lawyer 3",
    courtsPracticing: ["High Court", "District Court"],
    starRating: 5,
    winningPercentage: 90,
    caseType: ["Civil", "Criminal", "Custody"],
    fees: "10k-20k",
    photoUrl: Avatar1,
  },
  {
    id: 4,
    name: "Lawyer 4",
    courtsPracticing: ["High Court"],
    starRating: 4,
    winningPercentage: 70,
    caseType: ["Criminal"],
    fees: "10k-20k",
    photoUrl: Avatar1,
  },
  {
    id: 5,
    name: "Lawyer 5",
    courtsPracticing: ["District Court"],
    starRating: 3,
    winningPercentage: 85,
    caseType: ["Civil"],
    fees: "10k-20k",
    photoUrl: Avatar1,
  },
  {
    id: 6,
    name: "Lawyer 6",
    courtsPracticing: ["High Court", "Magistate"],
    starRating: 4,
    winningPercentage: 60,
    caseType: ["Civil", "Criminal", "Family Dispute"],
    fees: "10k-20k",
    photoUrl: Avatar2,
  },
  {
    id: 7,
    name: "Lawyer 7",
    courtsPracticing: ["High Court", "District Court"],
    starRating: 5,
    winningPercentage: 92,
    caseType: ["Civil", "Criminal", "Custody", "Murder"],
    fees: "10k-20k",
    photoUrl: Avatar1,
  },
  {
    id: 8,
    name: "Lawyer 8",
    courtsPracticing: ["District Court"],
    starRating: 3,
    winningPercentage: 78,
    caseType: ["Custody", "Murder"],
    fees: "10k-20k",
    photoUrl: Avatar1,
  },
  {
    id: 9,
    name: "Lawyer 9",
    courtsPracticing: ["Family Court", "District Court"],
    starRating: 4,
    winningPercentage: 72,
    caseType: ["Civil", "Criminal"],
    fees: "20k-30k",
    photoUrl: Avatar2,
  },
  {
    id: 10,
    name: "Lawyer 10",
    courtsPracticing: ["High Court", "Supreme Court"],
    starRating: 3,
    winningPercentage: 87,
    caseType: ["Civil"],
    fees: "10k-20k",
    photoUrl: Avatar1,
  },
  {
    id: 10,
    name: "Lawyer 10",
    courtsPracticing: ["High Court"],
    starRating: 5,
    winningPercentage: 87,
    caseType: ["Civil"],
    fees: "30k-40k",
    photoUrl: Avatar1,
  },
  {
    id: 11,
    name: "Lawyer 11",
    courtsPracticing: ["Supreme Court"],
    starRating: 5,
    winningPercentage: 87,
    caseType: ["Civil"],
    fees: "30k-40k",
    photoUrl: Avatar1,
  },
];

const UDashboard = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { userName, loyaltyScore } = props;
  const [filters, setFilters] = useState({
    court: "",
    starRating: "",
    caseType: "",
    avgfees: "", // Added fees filter
    // Add more filter criteria as needed
  });

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  // Calculate the range of lawyers to display on the current page
  const startIndex = (currentPage - 1) * LawyersPerPage;
  const endIndex = startIndex + LawyersPerPage;

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
    console.log(filters);
  };

  const filterLawyers = (lawyers) => {
    return lawyers.filter((lawyer) => {
      let isMatch = true;

      if (filters.court && !lawyer.courtsPracticing.includes(filters.court)) {
        isMatch = false;
      }

      if (
        filters.starRating &&
        lawyer.starRating !== parseInt(filters.starRating)
      ) {
        isMatch = false;
      }

      if (filters.caseType && !lawyer.caseType.includes(filters.caseType)) {
        isMatch = false;
      }

      if (filters.avgfees && lawyer.fees !== filters.avgfees) {
        isMatch = false;
      }

      return isMatch;
    });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const filteredLawyers = filterLawyers(dummyLawyers);
    console.log(filteredLawyers);
  };

  const lawyersToDisplay = filterLawyers(dummyLawyers).slice(
    startIndex,
    endIndex
  );
  return (
    <div className="">
      {/* <Navbar setIsOpen={setIsOpen} isOpen={isOpen}></Navbar> */}
      {/* <div className=" items-center text-center flex gap-16 absolute right-3">
            <button className="flex items-center">
              <IoMdNotifications className="text-[#a0a0a0] text-4xl hover:text-black" />
              <div className="text-[#a0a0a0] text-xl ml-2 hover:text-black">Alerts</div>
            </button>

            <button className="flex items-center">
              <BiSolidHelpCircle className="text-[#a0a0a0] text-4xl hover:text-black" />
              <div className="text-[#a0a0a0] text-xl ml-2 hover:text-black">Help</div>
            </button>

            <button className="flex items-center">
              <AiFillSetting className="text-[#a0a0a0] text-4xl hover:text-black" />
              <div className="text-[#a0a0a0] text-xl ml-2 hover:text-black">Settings</div>
            </button>
  </div> */}
      <div
        className=" h-[900px] overflow-hidden flex flex-col items-center pt-3 gap-3"
        style={{
          backgroundImage: `url(${Herobg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          scale: "0.9",
          // backgroundBlendMode: "overlay",
        }}
      >


     <Button
          variant="contained"
          onClick={() => {
            // Scroll to the "Get a Lawyer for You" section
            // const getLawyerSection =
            //   document.getElementById("getLawyerSection");
            // if (getLawyerSection) {
            //   getLawyerSection.scrollIntoView({ behavior: "smooth" });
            // }
            navigate("/UFindLSP");
          }}

          className=" px-10 py-2  "
          style={{background: "rgba(50, 157, 144, 0.25)", color: "#329D90", width: "220px",
          height: "50px",
          borderRadius: "10px" ,position:'absolute',top:'600px',fontSize: "18px",}} // Added custom styles

        >
          Need a Lawyer ?
        </Button>
      </div>

      <h3 className="text-5xl text-darkcolor font-titleFont  headingtext ml-20">
            Our Top Lawyers
          </h3>

          
          <AnimatedCard>
          </AnimatedCard>
          <h3 className="text-5xl text-darkcolor font-titleFont mb-4 headingtext mt-40 ml-20">
            Our Top Arbritrators
          </h3>

          {/* <LawyerCarousel></LawyerCarousel> */}
          <AnimatedCard />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Avatar
          src={Avatar1}
          sx={{ width: 100, height: 100, margin: "0 auto" }}
        />
        <div className="text-center">
          <h1 className="text-[30px] text-darkcolor mt-2">User Name</h1>
          <p className="text-customgrey text-[20px]">Your Loyalty Score: 100</p>
          <Button
            className="bg-darkcolor text-white rounded-lg px-4 py-2 mt-4"
            onClick={() => {
              navigate(`editProfile/${sessionStorage.getItem("userId")}`);
            }}
          >
            Edit Profile
          </Button>
        </div>
        <Divider className="my-4" />
        <div className="flex flex-col space-y-4">
          <ListItem button className="text-[20px] text-darkcolor flex ">
            <VideoCameraFrontIcon className="mr-2 text-4xl" />
            <Typography variant="h5"> Start a Meeting</Typography>
          </ListItem>
          <ListItem button className="text-[20px] text-darkcolor">
            <NotificationsIcon className="mr-2 text-4xl" />
            <Typography variant="h5"> Notifications</Typography>
          </ListItem>
          <ListItem button className="text-[20px] text-darkcolor">
            <PersonIcon className="mr-2 text-4xl" />
            <Typography variant="h5"> Profile</Typography>
          </ListItem>
          <ListItem button className="text-[20px] text-darkcolor">
            <LogoutIcon className="mr-2 text-4xl" />
            <Typography variant="h5"> Logout</Typography>
          </ListItem>
        </div>
      </Drawer>
    </div>
  );
};

export default UDashboard;
