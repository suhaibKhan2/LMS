import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourseService from "./CourseService";
import "./styles.css"; // Import the CSS file

//page for viewing the available courses
function ViewCoursePage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    CourseService.getCourseById(id).then((data) => setCourse(data));
  }, [id]);

  if (!course) return <p className="loading"> Loading... </p>;

  return (
    <div className="view-container">
      <h2> {course.title} </h2>{" "}
      <p className="course-description"> {course.description} </p>{" "}
      <button className="btn-primary" onClick={() => navigate("/")}>
        Back to Courses{" "}
      </button>{" "}
    </div>
  );
}

export default ViewCoursePage;
