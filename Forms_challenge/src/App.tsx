import "./App.css";
import { useTaskStore } from "./store/useTaskStore";
import CompletedTaskList from "./components/CompletedTaskList";
import TodoList from "./components/TodoList";
import Sidebar from "./components/SideBar";

function App() {
  const addTask = useTaskStore((state) => state.addTask);


  return (
    <div className="app">
      <header className="navbar">RAVN TODO TASK</header>

      <div className="main-layout">
        <Sidebar onSubmitTask={addTask} />
        <TodoList />
        <CompletedTaskList />
      </div>
    </div>
  );
}
export default App;
