import React, { useState } from "react";
import "../styles/CoursePage.css";

const CoursePage = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Java Basics",
      description: "Learn Java from scratch!",
      enrolled: false,
      materials: {
        notes: "Java is an object-oriented programming language...",
        video: "https://www.youtube.com/embed/eIrMbAQSU34", // Example video
      },
    },
    {
      id: 2,
      title: "Spring Boot",
      description: "Master Spring Boot for backend development.",
      enrolled: false,
      materials: {
        notes: "Spring Boot makes it easy to create stand-alone applications...",
        video: "https://www.youtube.com/embed/35EQXmHKZYs",
      },
    },
    {
      id: 3,
      title: "React.js Fundamentals",
      description: "Build dynamic web applications with React.js!",
      enrolled: false,
      materials: {
        notes: "React.js is a JavaScript library for building user interfaces...",
        video: "https://www.youtube.com/embed/Ke90Tje7VS0", // Example React.js video
      },
    },
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newMaterial, setNewMaterial] = useState({ notes: "", video: "" });
  const role = localStorage.getItem("role"); // Check if user is a Student or Teacher

  // Handle Course Enrollment (For Students)
  const handleEnroll = (id) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, enrolled: true } : course
      )
    );
  };

  // Show Course Details
  const handleViewDetails = (course) => {
    setSelectedCourse(course);
  };

  // Handle Adding Course Materials (For Teachers)
  const handleAddMaterial = (e) => {
    e.preventDefault();
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === selectedCourse.id
          ? { ...course, materials: newMaterial }
          : course
      )
    );
    setNewMaterial({ notes: "", video: "" });
  };

  return (
    <div className="course-container">
      <h1>Available Courses</h1>

      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            {role === "student" && (
              <button
                className="enroll-btn"
                onClick={() => handleEnroll(course.id)}
                disabled={course.enrolled}
              >
                {course.enrolled ? "Enrolled" : "Enroll"}
              </button>
            )}
            <button className="details-btn" onClick={() => handleViewDetails(course)}>
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Display Course Materials */}
      {selectedCourse && (
        <div className="course-materials">
          <h2>Course Materials - {selectedCourse.title}</h2>
          <p>
            <strong>Notes:</strong> {selectedCourse.materials.notes}
          </p>
          <h3>Video Tutorial:</h3>
          <iframe
            src={selectedCourse.materials.video}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>

          {/* Only Teachers Can Add Course Materials */}
          {role === "teacher" && (
            <div className="add-material">
              <h3>Add New Course Material</h3>
              <form onSubmit={handleAddMaterial}>
                <textarea
                  placeholder="Enter Notes"
                  value={newMaterial.notes}
                  onChange={(e) => setNewMaterial({ ...newMaterial, notes: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Enter YouTube Video URL"
                  value={newMaterial.video}
                  onChange={(e) => setNewMaterial({ ...newMaterial, video: e.target.value })}
                  required
                />
                <button type="submit">Add Material</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CoursePage;