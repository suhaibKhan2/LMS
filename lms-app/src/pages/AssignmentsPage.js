import React, { useState } from "react";

const AssignmentsPage = () => {
  const [assignment, setAssignment] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Assignment Created:", assignment);
    setAssignment({ title: "", description: "" });
  };

  return (
    <div>
      <h1>Create a New Assignment</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Assignment Title" 
          value={assignment.title} 
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} 
          required 
        />
        <textarea 
          placeholder="Assignment Description" 
          value={assignment.description} 
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} 
          required 
        />
        <button type="submit">Create Assignment</button>
      </form>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default AssignmentsPage;
