import type { IMessageKey } from '@/interfaces/api/message/IMessageKey'
import type { IMessageApi } from '@/interfaces/api/message/IMessageApi'
import type { IUserReceipt } from '@/interfaces/api/message/IUserReceipt'
import type { IReaction } from '@/interfaces/api/message/IReaction'

export interface IMessageDataApi {
  userId: string;
  whatsappId?: string;
  key: IMessageKey;
  message?: IMessageApi | null;
  messageTimestamp?: number | null;
  status?: 0 | 1 | 2 | 3 | 4 | 5 | null;
  participant?: string | null;
  messageC2STimestamp?: number | null;
  ignore?: boolean | null;
  starred?: boolean | null;
  broadcast?: boolean | null;
  pushName?: string | null;
  mediaCiphertextSha256?: Uint8Array | null;
  multicast?: boolean | null;
  urlText?: boolean | null;
  urlNumber?: boolean | null;
  messageStubType?: number | null;
  clearMedia?: boolean | null;
  messageStubParameters?: string[] | null;
  duration?: number | null;
  labels?: string[] | null;
  ephemeralStartTimestamp?: number | null;
  ephemeralDuration?: number | null;
  ephemeralOffToOn?: boolean | null;
  ephemeralOutOfSync?: boolean | null;
  verifiedBizName?: string | null;
  userReceipt?: IUserReceipt[] | null;
  reactions?: IReaction[] | null;
  futureproofData?: Uint8Array | null;
  agentId?: string | null;
  statusAlreadyViewed?: boolean | null;
  messageSecret?: Uint8Array | null;
  originalSelfAuthorUserJidString?: string | null;
  revokeMessageTimestamp?: number | null;
  createdAt: Date;
  updatedAt: Date;
}
