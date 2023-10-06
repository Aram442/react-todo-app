import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={todo.completed ? "completed" : "li"}>
      <div className="input-p">
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p onClick={() => toggleComplete(todo)}>{todo.text}</p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
}

export default Todo;
