import React, { useState } from "react";

const AddLessonPage = () => {
  const [lesson, setLesson] = useState({ title: "", content: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Lesson Added:", lesson);
    setLesson({ title: "", content: "" });
  };

  return (
    <div>
      <h1>Add a New Lesson</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Lesson Title" 
          value={lesson.title} 
          onChange={(e) => setLesson({ ...lesson, title: e.target.value })} 
          required 
        />
        <textarea 
          placeholder="Lesson Content" 
          value={lesson.content} 
          onChange={(e) => setLesson({ ...lesson, content: e.target.value })} 
          required 
        />
        <button type="submit">Add Lesson</button>
      </form>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default AddLessonPage;
