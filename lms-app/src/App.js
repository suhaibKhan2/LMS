import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseListPage from "./CourseListPage";
import CreateCoursePage from "./CreateCoursePage";
import EditCoursePage from "./EditCoursePage";
import ViewCoursePage from "./ViewCoursePage";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Course Management System</h1>
        <Routes>
          <Route path="/" element={<CourseListPage />} />
          <Route path="/create" element={<CreateCoursePage />} />
          <Route path="/edit/:id" element={<EditCoursePage />} />
          <Route path="/view/:id" element={<ViewCoursePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
