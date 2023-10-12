import { AiOutlinePlus } from "react-icons/ai";
import Login from "./auth/Login.jsx";
import AddTodos from "./AddTodos.jsx";
import SignUp from "./auth/SignUp.jsx";
import AuthDatails from "./auth/AuthDatails.jsx";

function App() {
  return (
    <div>
      <Login />
      <SignUp />
      <AuthDatails />
      <AddTodos />
    </div>
  );
}

export default App;
