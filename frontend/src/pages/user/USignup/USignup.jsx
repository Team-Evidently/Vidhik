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
import logo from "../../../assets/logo.png";

const USignup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = (e) => {
    e.preventDefault();

  
    window.location.href = "/LDashboard";
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
           
          >
            Client Register
          </h2>
          <h3
          style={{
            color: "#004080",
            fontSize: "30px",
            fontFamily: "poppins",
            fontWeight: "400",
            letterSpacing: "0.9px",
            marginBottom: "20px",
          }}
           className="mb-6"
        >
          Elevate Your Practice
        </h3>
          <div
            style={{
              marginLeft: "-20px",
              height: "3px",
              width: "500px",
              background: "#ffffff",
            }}
          ></div>

          <form onSubmit={handleLogin}>
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
              label="PAN Number"
              placeholder="Enter Your PAN Number"
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: <AccountCircleIcon style={{ color: "black" }} />,
              }}
            />
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
              label="Photo URL"
              placeholder="   Enter Your Photo URL"
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <img
                    src="https://img.icons8.com/ios/20/000000/camera--v2.png"
                    alt="Photo Icon"
                  />
                ),
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

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mt-6"
              style={{ width: "350px", height: "50px", borderRadius: "15px" }}
            >
              Sign Up
            </Button>
          </form>
          <div
            style={{
              width: "350px",
              border: "1px solid black",
              padding: "10px",
              backgroundColor: "#F7F7F7",
              borderRadius: "10px",
              marginTop: "20px",
              marginLeft:"55px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              to="/ULogin"
              style={{ textDecoration: "none", color: "#000" }}
            >
              Already have an account? Log in
            </Link>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default USignup;
