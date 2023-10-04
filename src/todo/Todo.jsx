import React from "react";
import "./todo.scss";
import { FaRegTrashAlt } from "react-icons/fa";

function Todo({ todo, toggleComplete }) {
  return (
    <li className={todo.completed ? "completed" : "li"}>
      <div>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p onClick={() => toggleComplete(todo)}>{todo.text}</p>
      </div>
      <button>{<FaRegTrashAlt />}</button>
    </li>
  );
}

export default Todo;
