import "./App.css";
import TaskForm from "./components/TaskForm";
import { useTaskStore } from "./store/useTaskStore";
import { FaTrash } from "react-icons/fa";
import CompletedTaskList from "./components/CompletedTaskList";
import TodoList from "./components/TodoList";

function App() {
  const addTask = useTaskStore((state) => state.addTask);
  const tasks = useTaskStore((state) => state.tasks);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <div className="app">
      <header className="navbar">RAVN TODO TASK</header>

      <div className="main-layout">
        <aside className="sidebar">
          <h1>Search your task</h1>
          <div className="search-box"></div>
          <TaskForm onSubmitTask={addTask} />
        </aside>
        <TodoList />
        <CompletedTaskList />
      </div>
    </div>
  );
}
export default App;
