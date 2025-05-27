export interface Task {
  id: string;
  name: string;
  priority: 'Urgent' | 'High' | 'Normal' | 'Low';
  storyPoints: number;
  assignee: string;
  dueDate: Date;
  completed: boolean;
}
