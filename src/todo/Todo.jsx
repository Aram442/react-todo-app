import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function Todo({ todo }) {
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
