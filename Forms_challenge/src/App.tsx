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
          <h2>To Do</h2>
          <ul className="task-list">
            {activeTasks.map((task, index) => (
              <li key={index} className="task-card">
                <div className="task-card-header">
                  <input
                    type="checkbox"
                    checked={false}
                    onChange={() => toggleTask(index)}
                  />
                  <strong>{task.name}</strong>
                </div>
                <div className="task-card-details">
                  <p>
                    <FaFlag /> Priority: {task.priority}
                  </p>
                  <p>
                    <FaUser /> Assignee: {task.assignee}
                  </p>
                  <p>
                    <FaBullseye /> Story Points: {task.storyPoints}
                  </p>
                  <p>
                    <FaCalendarAlt /> Due:{" "}
                    {new Date(task.dueDate).toLocaleDateString()}
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
