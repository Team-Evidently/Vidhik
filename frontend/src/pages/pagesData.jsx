import UHome from "./user/UHome/UHome";
import ULogin from "./user/ULogin/ULogin";
import USignup from "./user/USignup/USignup";
import LDashboard from "./lsp/LDashboard/LDashboard";
import Profile from "./lsp/LSP_Profile/Profile";
import Login from "./lsp/LSP_Login/Login";
import SignUp from "./lsp/LSP_Signup/SignUp";
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
        element: <Login />,
        title: "LSP_Login"
    },
    {
        path:"/provider/signup",
        element: <SignUp />,
        title: "LSP_Signup"
    }
];

export default pagesData;
