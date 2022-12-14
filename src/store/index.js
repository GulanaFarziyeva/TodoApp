import { configureStore } from "@reduxjs/toolkit";
import todo from "./todo.js";

const store = configureStore({
  reducer: {
    todo,
  },
});

export default store;
