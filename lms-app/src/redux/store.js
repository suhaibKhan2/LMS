import { createStore } from "redux";

const initialState = {
  user: null,
  courses: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_COURSES":
      return { ...state, courses: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
