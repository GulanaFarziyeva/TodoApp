import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/todo";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const removeHandle = () => {
    dispatch(deleteTodo(todo.id));
  };

  const editHandle = () => {};

  return (
    <li className="todo__list__inner__item">
      <div className="todo__list__inner__item__title">
        <div className="todo__list__inner__item__title__circle">
          <FaRegCircle />
        </div>
        <div style={{ textDecoration: todo.done ? "line-through" : false }}>
          {todo.title}
        </div>
      </div>
      <div>
        <button
          className="todo__list__inner__item__btn edit-btn"
          onClick={editHandle}
        >
          <FaPencilAlt />
        </button>
        <button
          className="todo__list__inner__item__btn delete-btn"
          onClick={removeHandle}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
