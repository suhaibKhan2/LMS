import React, { useState } from "react";

const ManageCoursesPage = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "Java Basics" },
    { id: 2, title: "Spring Boot" },
    { id: 3, title: "React.js" },
  ]);

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div>
      <h1>Manage Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.title} 
            <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default ManageCoursesPage;
