import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  const { todos } = useSelector((state) => state.todo);
  return (
    <div className="todo__list">
      <div className="todo__list__title">
        <h4>Your To Do's</h4>
        <div className="todo__list__title__btn-container">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>

      <div>
        {todos.length === 0 ? (
          "There are no tasks"
        ) : (
          <ul className="todo__list__inner">
            {todos.map((todo, key) => (
              <TodoItem key={key} todo={todo} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoList;
