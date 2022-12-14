import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoPage() {
  return (
    <div className="todo">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default TodoPage;
