import React, { useEffect, useState } from "react";
import { GoBell } from "react-icons/go";

const Header: React.FC = () => {
  const [username, setUsername] = useState<string | null>("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  return (
    <div className="flex justify-between items-center p-4 bg-red-100 sticky top-0">
      <div className="text-xl font-semibold">
        {username && <h2>username: {username}</h2>}
      </div>

      <div className="flex items-center space-x-5">
        <div className="hidden md:flex">
          
        </div>
        <div className="flex items-center space-x-5">
          <button className="relative text-2xl text-gray-600">
            <GoBell size={32}/>
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-red-600 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">9</span>
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default Header;
