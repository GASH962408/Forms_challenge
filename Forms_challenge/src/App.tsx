import "./App.css";
import TaskForm from "./components/TaskForm";
import type { Task } from "./types/task";
import { useTaskStore } from "./store/useTaskStore";

function App() {
  const addTask = useTaskStore((state) => state.addTask);
  const tasks = useTaskStore((state) => state.tasks);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <main>
      <h1>Create Task</h1>
      <TaskForm onSubmitTask={addTask} />

      <section>
        <h2>Active Tasks</h2>
        <ul>
          {activeTasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={false}
                onChange={() => toggleTask(index)}
              />
              <strong>{task.name}</strong> - {task.priority} - {task.assignee}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Completed Tasks</h2>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={`done-${index}`}>
              ✅ <strong>{task.name}</strong> - {task.priority} -{" "}
              {task.assignee}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
export default App;
