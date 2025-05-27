import { create } from "zustand";
import type { Task } from "../types/task";
import { saveTasks, loadTasks } from "../utils/localStorage";
import { v4 as uuidv4 } from "uuid";

interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  clearCompleted: () => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: loadTasks(),

  addTask: (task) =>
    set((state) => {
      const taskWithId = { ...task, id: uuidv4(), completed: false };
      const updated = [...state.tasks, taskWithId];
      saveTasks(updated);
      return { tasks: updated };
    }),

  toggleTask: (id) =>
    set((state) => {
      const updated = state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      saveTasks(updated);
      return { tasks: updated };
    }),

  deleteTask: (id: string) =>
    set((state) => {
      const updated = state.tasks.filter((task) => task.id !== id);
      saveTasks(updated);
      return { tasks: updated };
    }),

  clearCompleted: () =>
    set((state) => {
      const updated = state.tasks.filter((task) => !task.completed);
      saveTasks(updated); 
      return { tasks: updated };
    }),
}));
