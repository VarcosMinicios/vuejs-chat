import type { IMessageDataApi } from '@/interfaces/api/message/IMessageDataApi'

export interface IHistorySyncMsg {
  message?: IMessageDataApi | null;
  msgOrderId?: number | null;
}
