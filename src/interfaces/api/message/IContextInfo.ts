import type { IMessageApi } from '@/interfaces/api/message/IMessageApi'
import type { IMessageKey } from '@/interfaces/api/message/IMessageKey'

export interface IContextInfo {
  stanzaId?: string | null;
  participant?: string | null;
  quotedMessage?: IMessageApi | null;
  remoteJid?: string | null;
  mentionedJid?: string[] | null;
  conversionSource?: string | null;
  conversionData?: Uint8Array | null;
  conversionDelaySeconds?: number | null;
  forwardingScore?: number | null;
  isForwarded?: boolean | null;
  placeholderKey?: IMessageKey | null;
  expiration?: number | null;
  ephemeralSettingTimestamp?: number | null;
  ephemeralSharedSecret?: Uint8Array | null;
  entryPointConversionSource?: string | null;
  entryPointConversionApp?: string | null;
  entryPointConversionDelaySeconds?: number | null;
  groupSubject?: string | null;
  parentGroupJid?: string | null;
  trustBannerType?: string | null;
  trustBannerAction?: number | null;
  isSampled?: boolean | null;
}
