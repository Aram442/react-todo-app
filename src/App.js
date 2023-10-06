import { AiOutlinePlus } from "react-icons/ai";

import Todo from "./Todo.jsx";
import { useState, useEffect } from "react";
import "./style.css";

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

function App() {
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
      text: input,
      completed: false,
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

  //-------------------------- DELETE TODO---------------------------------//
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="container">
      <div className="sub-container">
        <header>
          <h1>Todo App</h1>
          <form id="new-task-form" onSubmit={createTodo}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Add Todo"
            />
            <button id="new-task-submit">
              <AiOutlinePlus size={30} />
            </button>
          </form>
        </header>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>

        {todos.length < 1 ? null : <p>{`You have ${todos.length} Todos`}</p>}
      </div>
    </div>
  );
}

export default App;
