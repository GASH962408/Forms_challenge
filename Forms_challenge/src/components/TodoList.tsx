import { useTaskStore } from "../store/useTaskStore";
import {
  FaTrash,
  FaFlag,
  FaUser,
  FaListOl,
  FaRegCalendarAlt,
} from "react-icons/fa";
import "./TodoList.css";

export default function TodoList() {
  const tasks = useTaskStore((state) => state.tasks);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const searchTerm = useTaskStore((state) => state.searchTerm);

  const activeTasks = tasks
    .filter((task) => !task.completed)
    .filter((task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <section className="todo-list">
      <h2 className="section-title">To Do</h2>
      <ul className="task-list">
        {activeTasks.length === 0 ? (
          <p className="no-tasks">Task not found</p>
        ) : (
          activeTasks.map((task) => (
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
                <p className="detail-row">
                  <div className="detail-left">
                    <FaFlag className="icon-detail" />
                    <span className="detail-label">Priority</span>
                  </div>
                  <span
                    className={`priority-value ${task.priority.toLowerCase()}`}
                  >
                    {task.priority}
                  </span>
                </p>

                <p className="detail-row">
                  <div className="detail-left">
                    <FaListOl className="icon-detail" />
                    <span className="detail-label">Points</span>
                  </div>
                  <span className="detail-value">{task.storyPoints}</span>
                </p>

                <p className="detail-row">
                  <div className="detail-left">
                    <FaUser className="icon-detail" />
                    <span className="detail-label">Assignee</span>
                  </div>
                  <span className="detail-value">{task.assignee}</span>
                </p>

                <p className="detail-row">
                  <div className="detail-left">
                    <FaRegCalendarAlt className="icon-detail" />
                    <span className="detail-label">Due</span>
                  </div>
                  <span className="detail-value">
                    {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                </p>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
