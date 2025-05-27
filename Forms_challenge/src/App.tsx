import "./App.css";
import TaskForm from "./components/TaskForm";
import type { Task } from "./types/task";
import { useTaskStore } from "./store/useTaskStore";

function App() {
  const addTask = useTaskStore((state) => state.addTask);
  const tasks = useTaskStore((state) => state.tasks);
  return (
    <main>
      <h1>Create Task</h1>
      <TaskForm onSubmitTask={addTask} />

      <section>
        <h2>Tasks</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.name}</strong> - {task.priority} - {task.assignee}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
export default App;
