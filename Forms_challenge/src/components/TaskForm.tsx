import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "../validation/taskSchema";
import type { Task } from "../types/task";
import { useState } from "react";
import "./TaskForm.css"

export default function TaskForm({
  onSubmitTask,
}: {
  onSubmitTask: (task: Task) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Task>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: Task) => {
    onSubmitTask(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Task Name</label>
        <input id="name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <select id="priority" {...register("priority")}>
          <option value="">Select...</option>
          <option value="Urgent">Urgent</option>
          <option value="High">High</option>
          <option value="Normal">Normal</option>
          <option value="Low">Low</option>
        </select>
        {errors.priority && <p>{errors.priority.message}</p>}
      </div>

      <div>
        <label htmlFor="storyPoints">Story Points</label>
        <input
          id="storyPoints"
          type="number"
          {...register("storyPoints", { valueAsNumber: true })}
        />
        {errors.storyPoints && <p>{errors.storyPoints.message}</p>}
      </div>

      <div>
        <label htmlFor="assignee">Assignee</label>
        <input id="assignee" {...register("assignee")} />
        {errors.assignee && <p>{errors.assignee.message}</p>}
      </div>

      <div>
        <label htmlFor="dueDate">Due Date</label>
        <input id="dueDate" type="date" {...register("dueDate")} />
        {errors.dueDate && <p>{errors.dueDate.message}</p>}
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
}
