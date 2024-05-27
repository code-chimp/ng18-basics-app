import { Component, inject, input, signal } from '@angular/core';

import { EditTaskComponent } from './edit-task/edit-task.component';
import { ITask } from '../@interfaces/ITask';
import { IUser } from '../@interfaces/IUser';
import { TaskComponent } from './task/task.component';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, EditTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  private _tasksService = inject(TasksService);

  public user = input.required<IUser>();
  protected adding = signal<boolean>(false);

  get tasks(): ITask[] {
    return this._tasksService.getUserTasks(this.user().id);
  }

  handleAddTaskClick() {
    this.adding.set(true);
  }

  handleAddTaskCancel(cancelled: boolean) {
    this.adding.set(!cancelled);
  }

  handleAddTask(taskBody: Omit<ITask, 'userId' | 'id'>) {
    this._tasksService.addTask(taskBody, this.user().id);
  }
}
