import { Component, computed, input, output } from '@angular/core';

import { IUser } from '../@interfaces/IUser';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = input.required<IUser>();
  selected = input.required<boolean>();
  select = output<IUser>();

  protected avatarPath = computed(() => `users/${this.user().avatar}`);
  protected avatarAltText = computed(() => `${this.user().name}'s avatar`);

  handleUserClick() {
    this.select.emit(this.user());
  }
}
