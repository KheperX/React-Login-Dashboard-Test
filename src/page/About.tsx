import React, { useEffect, useState } from "react";

const About: React.FC = () => {
  const [username, setUsername] = useState<string | null>("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        สวัสดีครับนี้เป็นเว็ปไซต์สำหรับทำ Test ของบริษัท SolidiThai Co., Ltd. <br /> โดยผู้สมัคร Nateetorn Puangbubpa
      </h1>
    </div>
  );
}

export default About;
