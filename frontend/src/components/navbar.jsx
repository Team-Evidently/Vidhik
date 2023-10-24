import React from 'react'
import logo from "../assets/logo.png";
import { IoMdNotifications } from 'react-icons/io';
import { BiSolidHelpCircle } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';

const Navbar = (props) => {
  return (
    <div className="mb-1 flex justify-between items-center text-center">
      <img src={logo} alt="" className="w-[200px] h-[75px]" />
      <div className="items-center text-center flex gap-16">
        <button className={`flex items-center hover:text-black ${props.active === 'alerts' ? 'text-black' : ''}`}>
          <IoMdNotifications className={`text-[#a0a0a0] text-4xl ${props.active === 'alerts' ? 'text-black' : 'hover:text-black'}`} />
          <div className={`text-xl ml-2 ${props.active === 'alerts' ? 'text-black' : 'text-[#171616] hover:text-black'}`}>Alerts</div>
        </button>

        <button className={`flex items-center hover:text-black ${props.active === 'help' ? 'text-black' : ''}`}>
          <BiSolidHelpCircle className={`text-[#a0a0a0] text-4xl ${props.active === 'help' ? 'text-black' : 'hover:text-black'}`} />
          <div className={`text-xl ml-2 ${props.active === 'help' ? 'text-black' : 'text-[#a0a0a0] hover:text-black'}`}>Help</div>
        </button>

        <button className={`flex items-center hover:text-black ${props.active === 'settings' ? 'text-black' : ''}`}>
          <AiFillSetting className={`text-[#a0a0a0] text-4xl ${props.active === 'settings' ? 'text-black' : 'hover:text-black'}`} />
          <div className={`text-xl ml-2 ${props.active === 'settings' ? 'text-black' : 'text-[#a0a0a0] hover:text-black'}`}>Settings</div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;