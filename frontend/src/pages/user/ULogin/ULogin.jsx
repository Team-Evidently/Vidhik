import React, { useState } from "react";
import { Link  } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import logo from "../../../assets/logo.png";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const ULogin = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

  
    setOpenSnackbar(true);

  
    window.location.href = "/LDashboard";
  };
  return (
    <div className="h-[900px] overflow-y-hidden hero__section">
      <h2
        style={{
          fontFamily: "Inter",
          fontSize: "25px",
          fontWeight: "600px",
          color: "#000000",
        }}
        className="flex items-center justify-center mb-4 mt-0 heading"
      >
        FOR CLIENT
      </h2>
      <div className=" flex items-center justify-center bg-White ">
        <Box
          sx={{
            backgroundColor: "#F7F7F7",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            width: "500px",
            height: "550px",
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
            className="  mb-6"
          >
            Login
          </h2>
          <div
            style={{
              marginLeft: "-20px",
              height: "3px",
              width: "500px",
              background: "#ffffff",
            }}
          ></div>

          <Box
            style={{
              height: "45px",
              width: "350px",
              background: "#FFFFFF",
              borderRadius: "15px",
              marginLeft: "50px",
            }}
            className="mt-6 flex items-center justify-center"
          >
            <img src="https://img.icons8.com/fluency/33/000000/google-logo.png" />
            <p
              style={{
                fontFamily: "poppins",
                fontSize: "18px",
                fontWeight: "600px",
                color: "#000000",
                letterSpacing: "0.9",
              }}
              className="ml-2"
            >
              Continue with Google
            </p>
          </Box>
          <p style={{ textAlign: "center" }}>or</p>
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              placeholder="    Enter Your Email"
              type="email"
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{
                
                startAdornment: <EmailIcon style={{ color: "grey" }} />,
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
                      <VisibilityIcon style={{ color: "grey" }} />
                    ) : (
                      <VisibilityOffIcon style={{ color: "grey" }} />
                    )}
                  </div>
                ),
              }}
            />

            <p
              style={{
                marginLeft: "320px",
                marginTop: "-8px",
                marginBottom: "20px",
              }}
              className="mt-2 text-Grey"
            >
              <Link to="/forgotPassword">Forgot Password?</Link>
            </p>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mt-6"
              style={{ width: "350px", height: "50px", borderRadius: "15px" }}
            >
              Login
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "55px",
            }}
          >
            <Link
              to="/USignup"
              style={{ textDecoration: "none", color: "#000" }}
            >
              Don't have an account? Sign up
            </Link>
          </div>
        </Box>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={30000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={handleCloseSnackbar}
        >
          Client logged in successfully
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default ULogin;
