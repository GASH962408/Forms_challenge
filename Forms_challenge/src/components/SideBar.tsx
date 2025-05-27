import TaskForm from "./TaskForm";
import "./SideBar.css";
import { useTaskStore } from "../store/useTaskStore";
import { FaSearch } from "react-icons/fa";


interface SidebarProps {
  onSubmitTask: (task: any) => void;
}

export default function Sidebar({ onSubmitTask }: SidebarProps) {
  const setSearchTerm = useTaskStore((state) => state.setSearchTerm);
  return (
    <aside className="sidebar">
      <h1>Search your task</h1>
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search tasks..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <TaskForm onSubmitTask={onSubmitTask} />
    </aside>
  );
}
