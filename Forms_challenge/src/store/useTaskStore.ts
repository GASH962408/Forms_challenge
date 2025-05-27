import { create } from 'zustand';
import type { Task } from '../types/task';
import { saveTasks, loadTasks } from '../utils/localStorage';

interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: loadTasks(),

  addTask: (task) =>
    set((state) => {
      const updated = [...state.tasks, task];
      saveTasks(updated);
      return { tasks: updated };
    }),
}));
