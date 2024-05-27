import { Injectable, signal } from '@angular/core';

import { ITask } from '../@interfaces/ITask';
import { seedTasks } from '../seed-data';

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
    const rawTasks = localStorage.getItem('tasks');

    this._tasks.set(rawTasks ? JSON.parse(rawTasks) : seedTasks.slice());
  }

  /**
   * @private
   * @method _saveTasks
   * @description This method saves the current state of tasks to local storage.
   */
  private _saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this._tasks()));
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
    this._saveTasks();
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

    this._saveTasks();
  }
}
