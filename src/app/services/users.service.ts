import { Injectable, signal, WritableSignal } from '@angular/core';

import { IUser } from '../@interfaces/IUser';
import { seedUsers } from '../seed-data';

/**
 * @class UsersService
 * @description This service is responsible for managing users in the application.
 */
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  /**
   * @private
   * @type {Signal<IUser[]>}
   * @description A signal that holds the current state of users.
   */
  private _users = signal<IUser[]>([]);

  constructor() {
    const rawUsers = localStorage.getItem('users');

    // Initialize the users with data from local storage or seed data
    this._users.set(rawUsers ? JSON.parse(rawUsers) : seedUsers.slice());
  }

  /**
   * @method users
   * @returns {WritableSignal<IUser[]>} - The current state of users.
   * @description This method returns a writable signal that represents the current state of users.
   */
  get users(): WritableSignal<IUser[]> {
    return this._users;
  }
}
