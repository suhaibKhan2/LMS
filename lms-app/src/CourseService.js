const courses = [
  {
    id: 1,
    title: "React Basics",
    description:
      "React is a JavaScript library for building user interfaces. It uses a component-based architecture, allowing developers to create reusable UI elements. Key concepts include JSX (JavaScript XML), state management, props for passing data, and a virtual DOM for efficient updates. React simplifies building dynamic, interactive web applications with a declarative syntax.",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description:
      "Advanced JavaScript includes concepts like closures, promises, async/await, and ES6+ features (arrow functions, destructuring, modules). It leverages prototypal inheritance, higher-order functions, and functional programming principles. Advanced topics also cover event loops, memory management, and performance optimization. Frameworks like React and Node.js rely on these concepts. Mastery of JavaScript enables building scalable, efficient, and maintainable applications, both on the client and server sides.",
  },
];

const CourseService = {
  getCourses: () => Promise.resolve([...courses]),

  getCourseById: (id) =>
    Promise.resolve(courses.find((course) => course.id === Number(id))),

  createCourse: (newCourse) => {
    newCourse.id = courses.length + 1;
    courses.push(newCourse);
    return Promise.resolve();
  },

  updateCourse: (id, updatedCourse) => {
    const index = courses.findIndex((course) => course.id === Number(id));
    if (index !== -1) {
      courses[index] = { id: Number(id), ...updatedCourse };
    }
    return Promise.resolve();
  },

  deleteCourse: (id) => {
    const index = courses.findIndex((course) => course.id === Number(id));
    if (index !== -1) {
      courses.splice(index, 1);
    }
    return Promise.resolve();
  },
};

export default CourseService;
