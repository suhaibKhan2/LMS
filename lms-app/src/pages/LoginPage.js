import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role: Student
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "password") {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("role", role); // Save role in storage
      setIsAuthenticated(true);
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      alert("Invalid credentials! Try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="app-title-container">
        <h1 className="app-title">Learning Management System</h1> {/* App title at the top center */}
      </div>
      <div className="login-box">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Select Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
