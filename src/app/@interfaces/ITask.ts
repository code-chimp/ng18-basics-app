/**
 * @interface ITask
 * @description This interface represents a task in the application.
 */
export interface ITask {
  /**
   * @property {string} id - The unique identifier of the task.
   */
  id: string;

  /**
   * @property {string} userId - The unique identifier of the user to whom the task is assigned.
   */
  userId: string;

  /**
   * @property {string} title - The title of the task.
   */
  title: string;

  /**
   * @property {string} summary - A brief summary of the task.
   */
  summary: string;

  /**
   * @property {string} dueDate - The due date of the task in ISO 8601 format (YYYY-MM-DD).
   */
  dueDate: string;
}
