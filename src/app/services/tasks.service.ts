import { Injectable, signal } from '@angular/core';

import { ITask } from '../@interfaces/ITask';
import { dummyTasks } from '../dummy-tasks';

/**
 * @class TasksService
 * @description This service is responsible for managing tasks in the application.
 */
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  /**
   * @private
   * @type {Signal<ITask[]>}
   * @description A signal that holds the current state of tasks.
   */
  private _tasks = signal<ITask[]>([]);

  constructor() {
    // Initialize the tasks with dummy data
    this._tasks.set(dummyTasks.slice());
  }

  /**
   * @method getUserTasks
   * @param {string} userId - The ID of the user.
   * @returns {ITask[]} - The tasks associated with the user.
   * @description This method returns the tasks associated with a specific user, sorted by due date.
   */
  getUserTasks(userId: string): ITask[] {
    return this._tasks()
      .filter(task => task.userId === userId)
      .sort((a, b) => {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      });
  }

  /**
   * @method completeTask
   * @param {ITask} task - The task to be completed.
   * @description This method removes a task from the current state.
   */
  completeTask(task: ITask) {
    this._tasks.set(this._tasks().filter(t => t.id !== task.id));
  }

  /**
   * @method addTask
   * @param {Omit<ITask, 'userId' | 'id'>} taskBody - The body of the new task.
   * @param {string} userId - The ID of the user.
   * @description This method adds a new task to the current state.
   */
  addTask(taskBody: Omit<ITask, 'userId' | 'id'>, userId: string) {
    const maxId = this._tasks().reduce((max, task) => Math.max(max, +task.id.slice(1)), 0);

    this._tasks.set([
      ...this._tasks(),
      {
        ...taskBody,
        id: `t${maxId + 1}`,
        userId,
      },
    ]);
  }
}
