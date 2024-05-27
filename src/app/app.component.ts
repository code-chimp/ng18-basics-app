import { Component, signal } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { IUser } from './@interfaces/IUser';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { dummyUsers } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected currentUser = signal<IUser | null>(null);

  protected users: IUser[] = dummyUsers;

  handleUserSelected(user: IUser) {
    this.currentUser.set(user);
  }
}
