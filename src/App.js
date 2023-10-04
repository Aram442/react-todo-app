import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./todo/Todo.jsx";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["Learn React", "Learn Fierbase"]);
  
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
          {todos.map((todo, index) => {
            <Todo key={index} todo={todo} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
