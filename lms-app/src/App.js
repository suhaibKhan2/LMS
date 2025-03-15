import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseListPage from "./CourseListPage";
import CreateCoursePage from "./CreateCoursePage";
import EditCoursePage from "./EditCoursePage";
import ViewCoursePage from "./ViewCoursePage";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload.{" "}
        </p>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
