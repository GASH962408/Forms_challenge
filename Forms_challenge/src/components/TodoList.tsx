import { useTaskStore } from "../store/useTaskStore";
import { FaTrash } from "react-icons/fa";
import "./TodoList.css"

export default function TodoList() {
  const tasks = useTaskStore((state) => state.tasks);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const activeTasks = tasks.filter((task) => !task.completed);

  return (
    <section className="todo-list">
      <h2 className="section-title">To Do</h2>
      <ul className="task-list">
        {activeTasks.map((task) => (
          <li key={task.id} className="task-card">
            <div className="task-card-header">
              <span className="task-title">{task.name}</span>
              <div className="task-options">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  title="Mark as completed"
                />
                <button
                  className="icon-button"
                  onClick={() => deleteTask(task.id)}
                  title="Delete task"
                >
                  <FaTrash />
                </button>
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
  );
}
