import UHome from "./user/UHome/UHome";
import ULogin from "./user/ULogin/ULogin";
import USignup from "./user/USignup/USignup";
import LDashboard from "./lsp/LDashboard/LDashboard";
import Profile from "./lsp/LSP_Profile/Profile";
import UDashboard from "./user/UDashboard/UDashboard";

import LSPLogin from "./lsp/LSP_Login/LSPLogin";
import { BiLogoSpotify } from "react-icons/bi";
import LSPSignUp from "./lsp/LSP_Signup/LSPSignUp";
import LSchedule from "./lsp/LSchedule/LSchedule";
import FindLSP from "./lsp/FindLSP/FindLSP";
import LegalHub from "./lsp/LegalHub/LegalHub";
import LegalBot from "./lsp/LegalBot/LegalBot";
import LCRoom from "./lsp/LCRoom/LCRoom";
const pagesData = [
    {
        path:"/",
        element: <UHome />,
        title: "UHome"
    },
    {
        path:"/UDashboard",
        element: <UDashboard />,
        title: "UDashboard"
    },
    {
        path:"/Ulogin",
        element: <ULogin />,
        title: "Ulogin"
    },
    {
        path:"/USignup",
        element: <USignup />,
        title: "Ulogin"
    },
    {
        path:"/LDashboard",
        element: <LDashboard />,
        title: "LDashboard"
    },
    {
        path:"/provider/profile/:id",
        element: <Profile />,
        title: "SP"
    },
    {
        path:"/provider/login",
        element: <LSPLogin />,
        title: "LSP_Login"
    },
    {
        path:"/provider/signup",
        element: <LSPSignUp />,
        title: "LSP_Signup"
    },
    {
        path:"/LSchedule",
        element: <LSchedule />,
        title: "LSP_Signup"
    },
    {
        path:"/FindLSP",
        element: <FindLSP    />,
        title: "LSP_Signup"
    },
    {
        path:"/LegalHub",
        element: <LegalHub  />,
        title: "LSP_Signup"
    },
    {
        path:"/LegalBot",
        element: <LegalBot  />,
        title: "LSP_Signup"
    },
    {
        path:"/LCRoom",
        element: <LCRoom />,
        title: "LSP_Signup"
    },

];

export default pagesData;
