import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./Todo.jsx";
import Login from "./auth/Login.jsx";
import LinkTo from "./LinkTo.jsx";
import AddTodos from "./AddTodos.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
        {/* <LinkTo /> */}
        <Login />
        <AddTodos />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
