import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Remove login state
    navigate("/login"); // Redirect to Login Page
  };

  return (
    <div>
      <h1>Welcome to the Learning Management System</h1>
      <p>Explore available courses and start learning!</p>

      {/* Navigation Links */}
      <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
      <button onClick={() => navigate("/course/1")}>View Course</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
