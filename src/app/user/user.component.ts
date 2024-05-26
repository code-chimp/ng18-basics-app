import { Component, computed, signal } from '@angular/core';

import { IUser } from '../../@interfaces/IUser';
import { dummyUsers } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  protected selectedUser = signal<IUser>(dummyUsers[4]);
  protected avatarPath = computed(() => `users/${this.selectedUser().avatar}`);
  protected avatarAltText = computed(() => `${this.selectedUser().name}'s avatar`);

  handleUserClick() {
    this.selectedUser.set(dummyUsers[Math.floor(Math.random() * dummyUsers.length)]);
  }
}
