import { useState } from "react";
import {FaPlusSquare} from "react-icons/fa";


function AddTodo({ setTodos }) {
  const [todo, setTodo] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();

    setTodos((prevState) => [
      {
        title: todo,
        id: prevState ? prevState.length + 1 : 1,
        done: false,
      },
      ...prevState,
    ]);

    setTodo("");
  };

  return (
    <div className="todo__add">
      <form onSubmit={submitHandle} className ="todo__add__form">
        <input
          className="todo__add__form__input"
          type="text"
          value={todo}
          placeholder="Add To Do"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" disabled={!todo} className='todo__add__form__btn'>
            <FaPlusSquare />
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
