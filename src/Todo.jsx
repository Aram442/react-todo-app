import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer ml-4 flex items-center`,
};

const Todo = ({ todo, toggleComplete, deleteTodo, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleInputChange = (e) => {
    setNewText(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    handleEdit(todo, newText);
  };

  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={handleInputChange}
            className="ml-3"
          />
        ) : (
          <p
            onClick={() => toggleComplete(todo)}
            className={todo.completed ? style.textComplete : style.text}
          >
            {todo.text}
          </p>
        )}
      </div>
      <div className={style.button}>
        {isEditing ? (
          <button onClick={handleSaveClick} className="mr-3">
            Save
          </button>
        ) : (
          <button onClick={handleEditClick} className="mr-3">
            {<AiFillEdit />}
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="ml-3">
          {<FaRegTrashAlt />}
        </button>
      </div>
    </li>
  );
};

export default Todo;
