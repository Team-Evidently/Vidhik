import UHome from "./user/UHome/UHome";
import ULogin from "./user/ULogin/ULogin";
import USignup from "./user/USignup/USignup";
import LDashboard from "./lsp/LDashboard/LDashboard";
import Profile from "./lsp/LSP_Profile/Profile";


import LSPLogin from "./lsp/LSP_Login/LSPLogin";
import { BiLogoSpotify } from "react-icons/bi";
import LSPSignUp from "./lsp/LSP_Signup/LSPSignUp";
const pagesData = [
    {
        path:"/",
        element: <UHome />,
        title: "UHome"
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
    }
];

export default pagesData;
