import { create } from "zustand";
import type { Task } from "../types/task";
import { saveTasks, loadTasks } from "../utils/localStorage";

interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (index: number) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: loadTasks(),

  addTask: (task) =>
    set((state) => {
      const taskWithCompleted = { ...task, completed: false };
      const updated = [...state.tasks, taskWithCompleted];
      saveTasks(updated);
      return { tasks: updated };
    }),


toggleTask: (index: number) =>
  set((state) => {
    const updated = [...state.tasks];
    updated[index].completed = !updated[index].completed;
    saveTasks(updated);
    return { tasks: updated };
  }),
}));

