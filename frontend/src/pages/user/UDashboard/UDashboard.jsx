import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LawyerCarousel from "../../../components/LawyerCarousel";
import Drawer from "../../../components/Drawer";
import Herobg from "../../../assets/mesh-gradient.png";
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
import Avatar1 from "../../../assets/avatar1.png";
import Avatar2 from "../../../assets/avatar2.png";
import nodoc from "../../../assets/nodoc.jpg";
import nodata from "../../../assets/nodata.webp";
import { useNavigate } from "react-router-dom";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import handshake from "../../../assets/handshake.png";

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

      <div
        className=" h-[55vh] overflow-hidden flex flex-col items-center pt-3 gap-3"
        style={{
          backgroundImage: `url(${Herobg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          {" "}
          {/* Add a container div */}
          <Typography className="font-bodyFont mt-3" variant="h3">
            Connecting Legal Excellence
          </Typography>
          <Typography variant="h5" className="font-bodyFont mt-3">
            Your Marketplace for Top-tier Lawyers
          </Typography>
        </div>
        <img
          src={handshake}
          alt="Lawyer Image"
          className=""
          style={{ height: "200px", width: "150px" }}
        />
        <Button
          variant="contained"
          onClick={() => {
            // Scroll to the "Get a Lawyer for You" section
            const getLawyerSection =
              document.getElementById("getLawyerSection");
            if (getLawyerSection) {
              getLawyerSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-white text-[#a0a0a0] rounded-xl px-10 py-2 mb-1"
          // color="secondary"
          // color={"#a0a0a0"}
        >
          Need a Lawyer ?
        </Button>
      </div>

      <div className="min-h-screen bg-bgcolor flex items-center  ">
        <div
          className="w-[100%] p-4 px-10 "
          style={{ maxHeight: "calc(100vh - 64px)" }}
        >
          {/* Heading for Top Lawyers */}
          <h3 className="text-5xl text-darkcolor font-titleFont mb-4">
            Our Top Lawyers
          </h3>

          <LawyerCarousel></LawyerCarousel>

          {/* Search Bar and Filters Section */}
          <div className="mt-6 flex justify-between items-center pt-20">
            <h3
              className="text-4xl text-darkcolor font-bodyFont mb-2 "
              id="getLawyerSection"
            >
              Get a Lawyer for You
            </h3>
            <div className="mt-4">
              <Pagination
                count={Math.ceil(dummyLawyers.length / LawyersPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="secondary"
                size="large"
                renderItem={(item) => (
                  <PaginationItem
                    component="button"
                    onClick={() => handlePageChange(item.page)}
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
              />
            </div>
          </div>

          {/* Filter Options */}
          <div className="flex h-full gap-[35px] relative">
            <div
              className="w-[30%] border-l border-r  shadow-lg rounded-md h-full"
              style={{ position: "sticky", top: 0 }}
            >
              <form className="mt-4 p-5  " onSubmit={handleFilterSubmit}>
                <h4 className="text-xl text-darkcolor mb-2">Apply Filters</h4>
                <FormControl fullWidth variant="outlined" className="mb-2 my-5">
                  <InputLabel htmlFor="court">Court Practicing In</InputLabel>
                  <Select
                    id="court"
                    name="court"
                    value={filters.court}
                    onChange={handleFilterChange}
                    label="Court Practicing In"
                  >
                    <MenuItem value="">All</MenuItem>

                    <MenuItem value="Supreme Court">Supreme Court</MenuItem>
                    <MenuItem value="High Court">High Court</MenuItem>
                    <MenuItem value="District Court">District Court</MenuItem>
                    <MenuItem value="Magistate Court">Magistate</MenuItem>
                    <MenuItem value="Family Court">Family Court</MenuItem>
                    <MenuItem value="Fast Track Court">
                      Fast Track Court
                    </MenuItem>
                    {/* Add more court options as needed */}
                  </Select>
                </FormControl>
                <FormControl fullWidth variant="outlined" className="mb-2 my-5">
                  <InputLabel htmlFor="starRating">Star Rating</InputLabel>
                  <Select
                    id="starRating"
                    name="starRating"
                    value={filters.starRating}
                    onChange={handleFilterChange}
                    label="Star Rating"
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="1">
                      <StarIcon color={"primary"} />
                    </MenuItem>
                    <MenuItem value="2">
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                    </MenuItem>
                    <MenuItem value="3">
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                    </MenuItem>
                    <MenuItem value="4">
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                    </MenuItem>
                    <MenuItem value="5">
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                    </MenuItem>
                    <MenuItem value="6">
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                    </MenuItem>
                    <MenuItem value="7">
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                      <StarIcon color="primary" />
                    </MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth variant="outlined" className="mb-2 my-5">
                  <InputLabel htmlFor="caseType">Case Type</InputLabel>
                  <Select
                    id="caseType"
                    name="caseType"
                    value={filters.caseType}
                    onChange={handleFilterChange}
                    label="Case Type"
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Criminal">Criminal</MenuItem>
                    <MenuItem value="Family Dispute">Family Dispute</MenuItem>
                    <MenuItem value="Civil">Civil</MenuItem>
                    <MenuItem value="Custody">Custody</MenuItem>
                    <MenuItem value="Murder">Murder</MenuItem>
                    {/* Add more case type options as needed */}
                  </Select>
                </FormControl>
                <FormControl fullWidth variant="outlined" className="mb-2 my-5">
                  <InputLabel htmlFor="avgfees">Fees</InputLabel>
                  <Select
                    id="avgfees"
                    name="avgfees"
                    value={filters.avgfees}
                    onChange={handleFilterChange}
                    label="Fees"
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="10k-20k">10k-20k</MenuItem>
                    <MenuItem value="20k-30k">20k-30k</MenuItem>
                    <MenuItem value="30k-40k">30k-40k</MenuItem>
                    <MenuItem value="40k-50k">40k-50k</MenuItem>
                    <MenuItem value="50k-60k">50k-60k</MenuItem>
                    {/* Add more fees options as needed */}
                  </Select>
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  className=" text-white rounded-lg px-4 py-2 my-3"
                >
                  Apply Filters
                </Button>
              </form>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className="w-[65%]">
              {lawyersToDisplay.length === 0 ? (
                <div style={{ textAlign: "center" }}>
                  <img
                    src={nodata}
                    alt="No Lawyers Found"
                    style={{ width: 300, height: 300 }}
                  />
                  <Typography variant="h5" className="font-bodyFont mt-3">
                    No Lawyers Found
                  </Typography>
                </div>
              ) : (
                <Grid container spacing={4}>
                  {lawyersToDisplay.map((lawyer) => (
                    <Grid item xs={12} sm={6} key={lawyer.id}>
                      <Card
                        onClick={() => {
                          navigate(`/lawyer/profile/${lawyer.id}`);
                        }}
                        sx={{
                          height: "100%",
                          transition: "transform 0.2s",
                          ":hover": {
                            transform: "scale(1.05)",
                            cursor: "pointer", // Adjust the scale factor as needed
                          },
                        }}
                      >
                        <CardContent
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          <Avatar
                            src={lawyer.photoUrl}
                            sx={{ width: 100, height: 100, marginBottom: 2 }}
                          />
                          <Typography variant="h6" gutterBottom>
                            {lawyer.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Courts Practicing:{" "}
                            {lawyer.courtsPracticing.join(", ")}
                          </Typography>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Typography variant="body2" color="textSecondary">
                              Star Rating:
                            </Typography>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginLeft: 4,
                              }}
                            >
                              {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star}>
                                  {star <= lawyer.starRating ? (
                                    <StarIcon color="primary" />
                                  ) : (
                                    <StarBorderIcon color="primary" />
                                  )}
                                </span>
                              ))}
                            </div>
                          </div>
                          <Typography variant="body2" color="textSecondary">
                            Winning Percentage: {lawyer.winningPercentage}%
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Case Type: {lawyer.caseType.join(", ")}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Fees: {lawyer.fees}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
            </div>
          </div>
        </div>
      </div>
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
