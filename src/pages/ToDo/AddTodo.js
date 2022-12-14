import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todo";
import { nanoid } from "@reduxjs/toolkit";

function AddTodo({ setTodos }) {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const submitHandle = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        title: todo,
        id: nanoid(),
        done: false,
      })
    );

    setTodo("");
  };

  return (
    <div className="todo__add">
      <form onSubmit={submitHandle} className="todo__add__form">
        <input
          className="todo__add__form__input"
          type="text"
          value={todo}
          placeholder="Add To Do"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" disabled={!todo} className="todo__add__form__btn">
          <FaPlusSquare />
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
