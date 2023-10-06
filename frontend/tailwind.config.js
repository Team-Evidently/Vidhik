/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT(
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          bgprimaryColor : '#FFFF',
          bgsecondaryColor : '#F7F7F7',
          btnColor: '#1450A3',
          iconColor: "#329D90"
        },
  
        boxShadow: {
          panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
        },
      },
    },
    plugins: [],
}
);