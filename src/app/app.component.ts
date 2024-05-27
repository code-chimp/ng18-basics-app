import { Component, inject, OnInit, signal } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { IUser } from './@interfaces/IUser';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private _usersService = inject(UsersService);

  protected users: IUser[] = [];
  protected currentUser = signal<IUser | null>(null);

  ngOnInit() {
    this.users = this._usersService.users();
  }

  handleUserSelected(user: IUser) {
    this.currentUser.set(user);
  }
}
