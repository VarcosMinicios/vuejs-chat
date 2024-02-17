import type { IHistorySyncMsg } from '@/interfaces/api/IHistorySyncMsg'

export interface IContactApi {
  _id: string;
  userId: string;
  whatsappId?: string;
  id: string;
  imgUrl?: string | null;
  messages?: IHistorySyncMsg[] | null;
  newJid?: string | null;
  oldJid?: string | null;
  lastMsgTimestamp?: number | null;
  unreadCount?: number | null;
  readOnly?: boolean | null;
  endOfHistoryTransfer?: boolean | null;
  ephemeralExpiration?: number | null;
  ephemeralSettingTimestamp?: number | null;
  conversationTimestamp?: number | null;
  name?: string | null;
  pHash?: string | null;
  notSpam?: boolean | null;
  archived?: boolean | null;
  unreadMentionCount?: number | null;
  markedAsUnread?: boolean | null;
  tcToken?: Uint8Array | null;
  tcTokenTimestamp?: number | null;
  contactPrimaryIdentityKey?: Uint8Array | null;
  pinned?: number | null;
  muteEndTime?: number | null;
  suspended?: boolean | null;
  terminated?: boolean | null;
  createdAt?: number | null;
  createdBy?: string | null;
  description?: string | null;
  support?: boolean | null;
  isParentGroup?: boolean | null;
  parentGroupId?: string | null;
  isDefaultSubgroup?: boolean | null;
  displayName?: string | null;
  pnJid?: string | null;
  shareOwnPn?: boolean | null;
  pnhDuplicateLidThread?: boolean | null;
  lidJid?: string | null;
  lastMessageRecvTimestamp?: number;
  createdAtDefault: Date;
  updatedAt: Date;
}
