import UHome from "./user/UHome/UHome";
import LDashboard from "./lsp/LDashboard/LDashboard";
const pagesData = [
    {
        path:"/",
        element: <UHome />,
        title: "UHome"
    },

    {
        path:"/ldashboard",
        element: <LDashboard />,
        title: "LDashboard"
    },
    
];

export default pagesData;
