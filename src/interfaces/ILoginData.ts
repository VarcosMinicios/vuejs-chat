import type { IUser } from '@/interfaces/IUser'

export interface ILoginData {
  user: IUser;
  access_token: string;
  refresh_token: string;
}
