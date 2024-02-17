export type IMessage = {
  id: string;
  timestamp?: number;
  type: 'sent' | 'received';
  userName: string;
  userAvatar?: string;
  status: 0 | 1 | 2 | 3 | 4 | 5;
} & ({
  text: string;
  media?: undefined;
} | {
  text?: string;
  media: {
    type: 'image' | 'video' | 'audio' | 'document';
    thumbnail?: string;
    duration?: number;
    url: string;
  }
});
