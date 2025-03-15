import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import QuizPage from "./pages/QuizPage"; 
import CoursePage from "./pages/CoursePage";
import "bootstrap/dist/css/bootstrap.min.css";
import DiscussionForumPage from "./pages/DiscussionForumPage";
import ManageCoursesPage from "./pages/ManageCoursesPage";
import AddLessonPage from "./pages/AddLessonPage";
import AssignmentsPage from "./pages/AssignmentsPage";
import StudentProgressPage from "./pages/StudentProgressPage";

import ProgressTrackerPage from "./pages/ProgressTrackerPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(loggedIn);
  }, []);

  return (
    <Routes>
    <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
    <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
    <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />
    <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
    <Route path="/courses" element={isAuthenticated ? <CoursePage /> : <Navigate to="/login" />} />
    <Route path="/course/:id" element={isAuthenticated ? <CoursePage /> : <Navigate to="/login" />} />
    <Route path="/quiz" element={isAuthenticated ? <QuizPage /> : <Navigate to="/login" />} /> {/* ✅ Updated */}
    <Route path="/progress" element={isAuthenticated ? <ProgressTrackerPage /> : <Navigate to="/login" />} />
    <Route path="/forum" element={isAuthenticated ? <DiscussionForumPage /> : <Navigate to="/login" />} />
    <Route path="/manage-courses" element={isAuthenticated ? <ManageCoursesPage /> : <Navigate to="/login" />} />
    <Route path="/add-lesson" element={isAuthenticated ? <AddLessonPage /> : <Navigate to="/login" />} />
    <Route path="/assignments" element={isAuthenticated ? <AssignmentsPage /> : <Navigate to="/login" />} />
    <Route path="/students" element={isAuthenticated ? <StudentProgressPage /> : <Navigate to="/login" />} />
    <Route path="/progress" element={isAuthenticated ? <ProgressTrackerPage /> : <Navigate to="/login" />} />  
  </Routes>
  );
};

export default App;
