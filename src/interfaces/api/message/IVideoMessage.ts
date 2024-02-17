import type { IContextInfo } from '@/interfaces/api/message/IContextInfo'

enum Attribution {
  NONE = 0,
  GIPHY = 1,
  TENOR = 2
}

export interface IVideoMessage {
  url?: string | null;
  mimetype?: string | null;
  fileSha256?: Uint8Array | null;
  fileLength?: number | null;
  seconds?: number | null;
  mediaKey?: Uint8Array | null;
  caption?: string | null;
  gifPlayback?: boolean | null;
  height?: number | null;
  width?: number | null;
  fileEncSha256?: Uint8Array | null;
  directPath?: string | null;
  mediaKeyTimestamp?: number | null;
  jpegThumbnail?: Uint8Array | null;
  contextInfo?: IContextInfo | null;
  streamingSidecar?: Uint8Array | null;
  gifAttribution?: Attribution | null;
  viewOnce?: boolean | null;
  thumbnailDirectPath?: string | null;
  thumbnailSha256?: Uint8Array | null;
  thumbnailEncSha256?: Uint8Array | null;
  staticUrl?: string | null;
}
