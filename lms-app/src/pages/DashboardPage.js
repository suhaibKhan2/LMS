import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DashboardPage.css";
const DashboardPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(localStorage.getItem("role") || "student"); // Default role is 'student'

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    localStorage.setItem("role", newRole); // Store role in local storage
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("role");
    navigate("/login");
  };
  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <h2>Dashboard</h2>

        <button 
          className={role === "student" ? "active" : ""}
          onClick={() => handleRoleChange("student")}
        >
          Student
        </button>
        <button 
          className={role === "teacher" ? "active" : ""}
          onClick={() => handleRoleChange("teacher")}
        >
          Teacher
        </button>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to the Dashboard</h1>

        {/* Student Dashboard Section */}
        {role === "student" && (
          <div className="dashboard-section">
            <h2>Student Panel</h2>
            <button onClick={() => navigate("/course/1")}>View Courses</button>
            <button onClick={() => navigate("/quiz")}>Take a Quiz</button>
            <button onClick={() => navigate("/progress")}>Track Progress</button>
            <button onClick={() => navigate("/forum")}>Join Discussion Forum</button>
          </div>
        )}

        {/* Teacher Dashboard Section */}
        {role === "teacher" && (
          <div className="dashboard-section">
            <h2>Teacher Panel</h2>
            <button onClick={() => navigate("/manage-courses")}>Manage Courses</button>
            <button onClick={() => navigate("/add-lesson")}>Add Lessons</button>
            <button onClick={() => navigate("/assignments")}>Create Assignments</button>
            <button onClick={() => navigate("/students")}>Monitor Student Progress</button>
            <button onClick={() => navigate("/courses")}>View Courses</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;