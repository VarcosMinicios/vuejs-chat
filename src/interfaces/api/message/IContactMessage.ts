import type { IContextInfo } from '@/interfaces/api/IContextInfo'

export interface IContactMessage {
  displayName?: string | null;
  vcard?: string | null;
  contextInfo?: IContextInfo | null;
}
