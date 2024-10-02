import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./page/Login";
import Dashboard from "./page/Dashboard";
import About from "./page/About";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout"; 

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
