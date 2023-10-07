import UHome from "./user/UHome/UHome";
import ULogin from "./user/ULogin/ULogin";
import USignup from "./user/USignup/USignup";
import LDashboard from "./lsp/LDashboard/LDashboard";
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
];

export default pagesData;
