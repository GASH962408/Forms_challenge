import "./App.css";
import TaskForm from "./components/TaskForm";
import type { Task } from "./types/task";
import { useTaskStore } from "./store/useTaskStore";
import { FaUser, FaFlag, FaCalendarAlt, FaBullseye } from "react-icons/fa";

function App() {
  const addTask = useTaskStore((state) => state.addTask);
  const tasks = useTaskStore((state) => state.tasks);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="app">
      <header className="navbar">RAVN TODO TASK</header>

      <div className="main-layout">
        <aside className="sidebar">
          <h1>Search your task</h1>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search tasks..."
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </div>
          <TaskForm onSubmitTask={addTask} />
        </aside>

        <section className="todo-list">
          <h2 className="section-title">To Do</h2>
          <ul className="task-list">
            {activeTasks.map((task, index) => (
              <li key={index} className="task-card">
                <div className="task-card-header">
                  <span className="task-title">{task.name}</span>
                  <div className="task-options">
                    <input type="checkbox" />
                    <button>erase</button>
                  </div>
                </div>
                <div className="task-card-details">
                  <p>
                    <span>Priority:</span> <span>{task.priority}</span>
                  </p>
                  <p>
                    <span>Assignee:</span> <span>{task.assignee}</span>
                  </p>
                  <p>
                    <span>Story Points:</span> <span>{task.storyPoints}</span>
                  </p>
                  <p>
                    <span>Due:</span>{" "}
                    <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="completed-list">
          <h2>Completed</h2>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={`done-${index}`}>
                ✅ <strong>{task.name}</strong> - {task.priority}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
export default App;
