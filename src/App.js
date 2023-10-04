import { AiOutlinePlus } from "react-icons/ai";

function App() {
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
        <ul></ul>
      </div>
    </div>
  );
}

export default App;
