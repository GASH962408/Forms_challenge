import { z } from "zod";

export const taskSchema = z.object({
  name: z
    .string({
      required_error: "Task name is required",
    })
    .min(5, { message: "Task name must be at least 5 characters" })
    .max(30, { message: "Task name must be at most 30 characters" }),

  priority: z.enum(["Urgent", "High", "Normal", "Low"], {
    errorMap: () => ({ message: "Please select a valid priority" }),
  }),

  storyPoints: z
    .number({
      required_error: "Story points are required",
      invalid_type_error: "Story points must be a number",
    })
    .int({ message: "Story points must be an integer" })
    .min(1, { message: "Minimum 1 point required" })
    .max(20, { message: "Maximum 20 points allowed" }),

  assignee: z
    .string({
      required_error: "Assignee name is required",
    })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Only letters and spaces allowed",
    }),

  dueDate: z.coerce
    .date({
      errorMap: () => ({ message: "Please select a valid date" }),
    })
    .refine((date) => date > new Date(), {
      message: "Due date must be in the future",
    }),
});

export type Task = z.infer<typeof taskSchema>;
