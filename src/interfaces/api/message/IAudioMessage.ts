import type { IContextInfo } from '@/interfaces/api/message/IContextInfo'

export interface IAudioMessage {
  url?: string | null;
  mimetype?: string | null;
  fileSha256?: Uint8Array | null;
  fileLength?: number | null;
  seconds?: number | null;
  ptt?: boolean | null;
  mediaKey?: Uint8Array | null;
  fileEncSha256?: Uint8Array | null;
  directPath?: string | null;
  mediaKeyTimestamp?: number | null;
  contextInfo?: IContextInfo | null;
  streamingSidecar?: Uint8Array | null;
  waveform?: Uint8Array | null;
  backgroundArgb?: number | null;
  viewOnce?: boolean | null;
}
