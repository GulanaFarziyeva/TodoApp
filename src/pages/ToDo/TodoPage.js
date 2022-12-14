import { useState } from "react";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoPage() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo">
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoPage;
