import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const loginTime = localStorage.getItem("loginTime");

  useEffect(() => {
    
    if (loginTime) {
      const currentTime = Date.now();
      const sessionDuration = 10000000; // 10000 วินาที เซตเวลาsessionที่ตรงนี้ครับ

      
      if (currentTime - parseInt(loginTime) > sessionDuration) {
        localStorage.removeItem("isLoggedIn"); 
        localStorage.removeItem("loginTime");
        window.location.href = "/"; 
      }
    }
  }, [loginTime]);


  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
