import type { IMessageKey } from '@/interfaces/api/message/IMessageKey'

export interface IReactionMessage {
  key?: IMessageKey | null;
  text?: string | null;
  groupingKey?: string | null;
  senderTimestampMs?: number | null;
}
