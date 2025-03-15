import React, { useState } from "react";

const StudentProgressPage = () => {
  const [students] = useState([
    { name: "Suhaib Khan", progress: "80%" },
    { name: "Satish", progress: "95%" },
    { name: "Raghul", progress: "90%" },
    { name: "Shashank", progress: "90%" },
  ]);

  return (
    <div>
      <h1>Monitor Student Progress</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name}: {student.progress} completed
          </li>
        ))}
      </ul>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default StudentProgressPage;
