import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseService from "./CourseService";
import styles from "./styles.css"; // Importing CSS Module

//page for displaying available courses
function CourseListPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    CourseService.getCourses().then((data) => setCourses(data));
  }, []);

  const handleDelete = async (id) => {
    await CourseService.deleteCourse(id);
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div>
      <h2> Courses </h2>{" "}
      <Link to="/create">
        <button className={styles.btnPrimary}> Create Course </button>{" "}
      </Link>{" "}
      <ul className={styles.courseList}>
        {" "}
        {courses.map((course) => (
          <li key={course.id} className={styles.courseItem}>
            <h3> {course.title} </h3> <p> {course.description} </p>{" "}
            <div className={styles.btnGroup}>
              <Link to={`/view/${course.id}`}>
                <button className={styles.btnView}> View </button>{" "}
              </Link>{" "}
              <Link to={`/edit/${course.id}`}>
                <button className={styles.btnEdit}> Edit </button>{" "}
              </Link>{" "}
              <button
                className={styles.btnDelete}
                onClick={() => handleDelete(course.id)}
              >
                Delete{" "}
              </button>{" "}
            </div>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
}

export default CourseListPage;
