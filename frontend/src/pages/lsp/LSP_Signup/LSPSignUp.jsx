import React, { useState } from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Modal from "react-modal"; // Import the Modal component
import loadingGif from"../../../assets/green-tick.gif"; // Replace with the path to your loading GIF

Modal.setAppElement("#root"); // Set the app element for the Modal component

const LSPSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    barCouncilNumber: "",
    mobileNumber: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleVerify = () => {
    // Display the verification modal
    setIsVerifying(true);

    // Simulate loading the verification
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 3000); // Adjust the timeout based on your GIF loading time
  };

  const handleLogin = (e) => {
    e.preventDefault();

    window.location.href = "/LDashboard";
  };

  const handleSignup = () => {
    // Handle the final signup process here

    // Redirect to /provider/Login
    window.location.href = "/provider/Login";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="hero__section">
      <h2
        style={{
          fontFamily: "Inter",
          fontSize: "25px",
          fontWeight: "600",
          color: "#000",
        }}
        className="flex items-center justify-center mb-4 mt-0"
      >
        FOR LSP
      </h2>
      <div className="flex items-center justify-center bg-White">
        <Box
          sx={{
            backgroundColor: "#F7F7F7",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            width: "500px",
            height: "750px",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              color: "#000",
              fontSize: "40px",
              fontFamily: "poppins",
              fontWeight: "700",
              letterSpacing: "0.9px",
            }}
            className="mb-6"
          >
            {isVerified ? "Verified" : "Sign Up"}
          </h2>
          <div
            style={{
              marginLeft: "-20px",
              height: "3px",
              width: "500px",
              background: "#ffffff",
            }}
          ></div>

          {isVerified ? (
            <form >
              <TextField
                label="Full Name"
                fullWidth
                variant="outlined"
                margin="normal"
                name="fullName"
                value={formData.fullName}
                InputProps={{
                  startAdornment: <PersonIcon style={{ color: "black" }} />,
                }}
                disabled
              />
              <TextField
                label="Email Address"
                fullWidth
                variant="outlined"
                margin="normal"
                name="email"
                value={formData.email}
                InputProps={{
                  startAdornment: <EmailIcon style={{ color: "black" }} />,
                }}
                disabled
              />
              <TextField
                label="Bar Council Number"
                fullWidth
                variant="outlined"
                margin="normal"
                name="barCouncilNumber"
                value={formData.barCouncilNumber}
                InputProps={{
                  startAdornment: (
                    <AccountCircleIcon style={{ color: "black" }} />
                  ),
                }}
                disabled
              />
              <TextField
                label="Mobile Number"
                placeholder="Enter Your Mobile Number"
                type="tel"
                fullWidth
                variant="outlined"
                margin="normal"
                name="mobileNumber"
                onChange={handleInputChange}
                value={formData.mobileNumber}
              />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                variant="outlined"
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <VisibilityIcon style={{ color: "black" }} />
                      ) : (
                        <VisibilityOffIcon style={{ color: "black" }} />
                      )}
                    </div>
                  ),
                }}
              />
              <Link to ="/provider/login">
              <Button
                
                variant="contained"
                color="primary"
                className="mt-6"
                style={{
                  width: "350px",
                  height: "50px",
                  borderRadius: "15px",
                  marginTop: "20px",
                }}
              >
                Sign Up
              </Button>
              </Link>
            </form>
          ) : (
            <form >
              <TextField
                label="Full Name"
                placeholder="Enter Your Full Name"
                fullWidth
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: <PersonIcon style={{ color: "black" }} />,
                }}
              />
              <TextField
                label="Email Address"
                placeholder="Enter Your Email Address"
                type="email"
                fullWidth
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: <EmailIcon style={{ color: "black" }} />,
                }}
              />
              <TextField
                label="Bar Council Number"
                placeholder="Enter Your Bar Council Number"
                fullWidth
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <AccountCircleIcon style={{ color: "black" }} />
                  ),
                }}
              />
              <p
                style={{
                  marginLeft: "360px",
                  marginTop: "-8px",
                  marginBottom: "10px",
                }}
                className="mt-1 text-Grey"
              >
                <button
                  type="button"
                  onClick={handleVerify}
                  disabled={isVerifying}
                >
                  {isVerifying ? "Verifying..." : "Verify"}
                </button>
              </p>
              <TextField
                label="Mobile Number"
                placeholder="Enter Your Mobile Number"
                type="tel"
                fullWidth
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: <PhoneIcon style={{ color: "black" }} />,
                }}
              />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                variant="outlined"
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <VisibilityIcon style={{ color: "black" }} />
                      ) : (
                        <VisibilityOffIcon style={{ color: "black" }} />
                      )}
                    </div>
                  ),
                }}
              />
              <Link to="/provider/login">
              <Button
                
                variant="contained"
                color="primary"
                className="mt-6"
                style={{
                  width: "350px",
                  height: "50px",
                  borderRadius: "15px",
                  marginTop: "20px",
                }}
              >
                Sign Up
              </Button>
              </Link>
            </form>
          )}
          <div
            style={{
              width: "350px",
              border: "1px solid black",
              padding: "10px",
              backgroundColor: "#F7F7F7",
              borderRadius: "10px",
              marginTop: "20px",
              marginLeft: "55px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              to="/provider/login"
              style={{ textDecoration: "none", color: "#000" }}
            >
              Already have an account? Log in
            </Link>
          </div>
        </Box>
      </div>

      {/* Verification Modal */}
      <Modal
        isOpen={isVerifying}
        contentLabel="Verification Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          },
        }}
      >
        <h2>Verifying...</h2>
        <img src={loadingGif} alt="Loading" />
      </Modal>
    </div>
  );
};

export default LSPSignup;
