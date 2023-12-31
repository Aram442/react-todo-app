import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";
import Todo from "./Todo.jsx";
import { signOut } from "firebase/auth";
import { auth } from "./firebase.js";

import { db } from "./firebase.js";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[800px] w-full m-auto rounded-md shadow-xl p-4`, // Increased max-width for computers
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};

function AddTodos() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // console.log(input);

  //----------------------------- CREATE TODO -----------------------------//

  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input, // This is a Field in my Database
      completed: false, // This is a Field in my Database
    });
    setInput(""); // after writing Todo Clear The input Field
  };

  //-----------------------READ TODO FROM FIREBASE ------------------------//

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  //----------------------- UPDATE TODO IN FIREBASE -----------------------//

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  //--------------------------  UPDATE TODO---------------------------------//
  const handleEdit = async (todo, text) => {
    await updateDoc(doc(db, "todos", todo.id), { text: text });
  };

  //-------------------------- DELETE TODO---------------------------------//
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  //----------------------------- SIGN OUT -----------------------------------//
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out Successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className={style.bg}>
        <div className={style.container}>
          <h3 className={style.heading}>Todo App</h3>
          <form onSubmit={createTodo} className={style.form}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={style.input}
              type="text"
              placeholder="Add Todo"
            />
            <button className={style.button}>
              <AiOutlinePlus size={30} />
            </button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                handleEdit={handleEdit}
              />
            ))}
          </ul>
          {todos.length < 1 ? null : (
            <p className={style.count}>{`You have ${todos.length} todos`}</p>
          )}
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 mt-2rounded"
            onClick={userSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodos;
