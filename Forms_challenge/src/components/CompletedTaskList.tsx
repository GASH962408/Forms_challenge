import { useTaskStore } from "../store/useTaskStore";

export default function CompletedTaskList() {
  const tasks = useTaskStore((state) => state.tasks);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <section className="completed-list">
      <h2 className="section-title">Completed</h2>
      <ul className="task-list">
        {completedTasks.map((task, index) => (
          <li key={`done-${index}`} className="task-card">
            <div className="task-card-header">
              <span className="task-title">{task.name}</span>
            </div>
            <div className="task-card-details">
              <p><span>Priority:</span> <span>{task.priority}</span></p>
              <p><span>Assignee:</span> <span>{task.assignee}</span></p>
              <p><span>Story Points:</span> <span>{task.storyPoints}</span></p>
              <p><span>Due:</span> <span>{new Date(task.dueDate).toLocaleDateString()}</span></p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
