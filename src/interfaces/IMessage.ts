import type { StatusMessage } from '@/types/StatusMessage'

export type IMessage = {
  id: string;
  timestamp: string;
  type: 'sent' | 'received';
  userName: string;
  userAvatar?: string;
  status: StatusMessage;
} & ({
  text: string;
  media?: never;
} | {
  text?: string;
  media: {
    type: 'image' | 'video' | 'audio' | 'document';
    thumbnail?: string;
    duration?: number;
    url: string;
  }
});
