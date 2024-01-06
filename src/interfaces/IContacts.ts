import type { IMessage } from '@/interfaces/IMessage'

export interface IContact {
  id: string;
  name: string;
  lastMessage: IMessage;
  avatar: string;
}
