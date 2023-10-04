import React from "react";
import "./todo.scss";
import { FaRegTrashAlt } from "react-icons/fa";

function Todo({ todo }) {
  return (
    <li className={todo.completed ? "completed" : "li"}>
      <div>
        <input type="checkbox" />
        <p>{todo.text}</p>
      </div>
      <button>{<FaRegTrashAlt />}</button>
    </li>
  );
}

export default Todo;
