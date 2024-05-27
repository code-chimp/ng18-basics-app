/**
 * @interface IUser
 * @description This interface represents a user in the application.
 */
export interface IUser {
  /**
   * @property {string} id - The unique identifier of the user.
   */
  id: string;

  /**
   * @property {string} name - The name of the user.
   */
  name: string;

  /**
   * @property {string} avatar - The avatar URL of the user.
   */
  avatar: string;
}
