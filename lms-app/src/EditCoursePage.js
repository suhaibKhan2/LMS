import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CourseService from "./CourseService";

//page for editing the existing courses
function EditCoursePage() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    CourseService.getCourseById(id).then((course) => {
      setTitle(course.title);
      setDescription(course.description);
    });
  }, [id]);

  const handleUpdate = async () => {
    await CourseService.updateCourse(id, { title, description });
    navigate("/");
  };

  return (
    <div>
      <h2> Edit Course </h2>{" "}
      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <textarea
        placeholder="Course Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>{" "}
      <button className="btn btn-primary" onClick={handleUpdate}>
        Update{" "}
      </button>{" "}
    </div>
  );
}

export default EditCoursePage;
