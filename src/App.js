import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./todo/Todo.jsx";
import { useState, useEffect } from "react";

import { db } from "./firebase.js";
import { query, collection , onSnapshot } from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);

  //----------------------------- CREATE TODO -----------------------------//
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
  //-------------------------- DELETE TODO---------------------------------//
  return (
    <div>
      <div>
        <h3>Todo App</h3>
        <form>
          <input type="text" placeholder="Add Todo" />
          <button>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
        <p>You have 2 todos</p>
      </div>
    </div>
  );
}

export default App;
