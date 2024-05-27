import { Component, inject, input } from '@angular/core';

import { ITask } from '../../@interfaces/ITask';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  public task = input.required<ITask>();

  private _tasksService = inject(TasksService);

  handleCompleteClick() {
    this._tasksService.completeTask(this.task());
  }
}
