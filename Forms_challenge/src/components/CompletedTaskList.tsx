import { useTaskStore } from "../store/useTaskStore";
import "./CompletedTaskList.css"

export default function CompletedTaskList() {
  const tasks = useTaskStore((state) => state.tasks);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <section className="completed-list">
      <h2 className="section-title">Completed</h2>
      <ul className="completed-task-list">
        {completedTasks.map((task) => (
          <li key={task.id} className="completed-task-row">
            <span className="completed-task-name">{task.name}</span>
            <span className="completed-task-date">
              {new Date(task.dueDate).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
