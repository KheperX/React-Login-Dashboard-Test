import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      console.log("Login successful");

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loginTime", Date.now().toString());
      localStorage.setItem("username", username);

      navigate("/dashboard");
    } else {
      console.log("Invalid credentials");
      setError(true); 

     
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.3)] w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={`w-full p-2 border ${
              error ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={`w-full p-2 border ${
              error ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
          />
        </div>
        {error && (
          <div className="text-red-500 mb-4">
            username หรือ password ผิดพลาด
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-red-400 text-black p-2 rounded-lg hover:bg-red-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
