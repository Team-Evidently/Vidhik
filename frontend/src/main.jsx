import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
 
import { ThemeProvider } from "@material-tailwind/react";
import { SocketProvider } from "./pages/user/Meeting/context/SocketProvider";
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SocketProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </SocketProvider>
  </React.StrictMode>
);