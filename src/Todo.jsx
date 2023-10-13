import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const style = {
  li: `flex flex-col md:flex-row justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex flex-col md:flex-row justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-3 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center text-gray-600 hover:text-gray-900`,
};

const buttonStyle = {
  backgroundColor: "#e2e8f0",
  border: "none",
  padding: "0rem 1rem",
  marginRight: "0.5rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0.25rem",
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
            className="ml-3 p-2 border border-gray-300 rounded-md w-80"
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
          <button
            onClick={handleSaveClick}
            style={buttonStyle}
            className="mt-3 md:mt-0 md:mr-3"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            style={buttonStyle}
            className="mt-3 md:mt-0 md:mr-3"
          >
            <AiFillEdit /> Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          style={buttonStyle}
          className="mt-3 md:mt-0"
        >
          <FaRegTrashAlt /> Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
