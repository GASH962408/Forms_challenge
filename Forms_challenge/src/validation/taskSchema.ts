import { z } from 'zod';

export const taskSchema = z.object({
  name: z.string().min(5).max(30),
  priority: z.enum(['Urgent', 'High', 'Normal', 'Low']),
  storyPoints: z.number().int().min(1).max(20),
  assignee: z.string().regex(/^[A-Za-z\s]+$/, 'Only letters and spaces allowed'),
  dueDate: z.coerce.date().refine((date) => date > new Date(), {
    message: 'Due date must be in the future',
  }),
});

export type Task = z.infer<typeof taskSchema>;
