import TaskForm from "./TaskForm";
import "./SideBar.css"

interface SidebarProps {
  onSubmitTask: (task: any) => void;
}

export default function Sidebar({ onSubmitTask }: SidebarProps) {
  return (
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
      <TaskForm onSubmitTask={onSubmitTask} />
    </aside>
  );
}
