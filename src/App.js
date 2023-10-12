import { AiOutlinePlus } from "react-icons/ai";
import Login from "./auth/Login.jsx";
import AddTodos from "./AddTodos.jsx";
import SignUp from "./auth/SignUp.jsx";

function App() {
  return (
    <div>
      <Login />
      <SignUp />
      <AddTodos />
    </div>
  );
}

export default App;
