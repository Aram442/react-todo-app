import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function Todo() {
  return (
    <li>
      <div>
        <input />
        <p></p>
      </div>
      <button>{<FaRegTrashAlt />}</button>
    </li>
  );
}

export default Todo;
