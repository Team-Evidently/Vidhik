import UHome from "./user/UHome/UHome";
import ULogin from "./user/UHome/ULogin/ULogin";
import USignup from "./user/UHome/USignup/USignup";

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
];

export default pagesData;
