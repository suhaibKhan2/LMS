import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "./CourseService";

function CreateCoursePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    await CourseService.createCourse({ title, description });
    navigate("/");
  };

  return (
    <div>
      <h2>Create Course</h2>
      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Course Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button className="btn btn-primary" onClick={handleCreate}>
        Create
      </button>
    </div>
  );
}

export default CreateCoursePage;
