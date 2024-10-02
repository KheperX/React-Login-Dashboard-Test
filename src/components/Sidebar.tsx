import React, { useState } from "react";
import { LuBox, LuUser, LuMessageSquare, LuCalendar } from 'react-icons/lu';
import { Link, useNavigate } from "react-router-dom";

const SIDEBAR_LINKS = [
  {
    name: "Dashboard",
    icon: () => <LuBox size={24} />,
    path: "/dashboard",
  },
  {
    name: "About",
    icon: () => <LuUser size={24} />,
    path: "/about",
  },
  
];

const Sidebar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number | null>(0);
  const navigate = useNavigate();

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
  };

  const handleLogout = () => {
    
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("loginTime");

    navigate("/");
  };

  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white">
      {/* Logo Section */}
      <div className="mb-8 flex justify-center">
        <img src="/vite.svg" alt="logo" className="w-20 hidden md:flex" />
        <img src="/vite.svg" alt="logo" className="w-10 flex md:hidden" />
      </div>

      {/* Navigation Links */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            onClick={() => handleLinkClick(index)}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-red-500 ${
              activeLink === index ? "bg-gray-100 text-red-500" : ""
            }`}
          >
            <Link to={link.path} className="flex justify-center md:justify-start items-center md:space-x-5">
              <span>{link.icon()}</span>
              <span className="text-sm hidden md:flex">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="w-full absolute bottom-5 left-0 px-0 md:px-4 py-2 cursor-pointer text-center">
        <p
          onClick={handleLogout}
          className="flex justify-center items-center space-x-2 text-xs text-white py-2 md:px-5 px-0 bg-gradient-to-r from-red-500 to-violet-600 rounded-full"
        >
          <span className="hidden md:inline">Logout</span>
          <span className="md:hidden !ml-0">Out</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
