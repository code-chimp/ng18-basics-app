import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ITask } from '../../@interfaces/ITask';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss',
})
export class EditTaskComponent {
  taskForm = new FormGroup({
    title: new FormControl<string>('', Validators.required),
    summary: new FormControl<string>('', Validators.required),
    dueDate: new FormControl<string>('', Validators.required),
  });

  add = output<Omit<ITask, 'userId' | 'id'>>();
  cancel = output<boolean>();

  handleCancelClick() {
    this.cancel.emit(true);
  }

  handleSubmit() {
    if (this.taskForm.valid) {
      this.add.emit(this.taskForm.value as Omit<ITask, 'userId' | 'id'>);

      this.handleCancelClick();
    }
  }
}
