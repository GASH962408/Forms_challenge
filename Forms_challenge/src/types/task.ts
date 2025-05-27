export interface Task {
  name: string;
  priority: "Urgent" | "High" | "Normal" | "Low";
  storyPoints: number;
  assignee: string;
  dueDate: Date;
}
