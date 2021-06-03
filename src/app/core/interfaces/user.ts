import { UserRoles } from '../enums/user-roles';

export interface User {
  _id?: string;
  username?: string;
  avatarUrl: string;
  role?: UserRoles;
}
