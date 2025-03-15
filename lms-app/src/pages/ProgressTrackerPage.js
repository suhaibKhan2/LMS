import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProgressTrackerPage = () => {
  const navigate = useNavigate();

  // Sample progress data (this can be fetched from an API later)
  const [progress, setProgress] = useState([
    { course: "Java Basics", completedLessons: 5, totalLessons: 10, percentage: 50 },
    { course: "Spring Boot", completedLessons: 8, totalLessons: 12, percentage: 67 },
    { course: "React.js", completedLessons: 3, totalLessons: 8, percentage: 38 },
  ]);

  useEffect(() => {
    // Here, you can fetch real progress data from the backend API
  }, []);

  return (
    <div>
      <h1>Track Your Learning Progress</h1>
      <p>View how much of each course you have completed.</p>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Lessons Completed</th>
            <th>Total Lessons</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {progress.map((course, index) => (
            <tr key={index}>
              <td>{course.course}</td>
              <td>{course.completedLessons}</td>
              <td>{course.totalLessons}</td>
              <td>
                <progress value={course.percentage} max="100"></progress> {course.percentage}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
    </div>
  );
};

export default ProgressTrackerPage;
