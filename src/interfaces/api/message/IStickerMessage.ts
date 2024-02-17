import type { IContextInfo } from '@/interfaces/api/message/IContextInfo'

export interface IStickerMessage {
  url?: string | null;
  fileSha256?: Uint8Array | null;
  fileEncSha256?: Uint8Array | null;
  mediaKey?: Uint8Array | null;
  mimetype?: string | null;
  height?: number | null;
  width?: number | null;
  directPath?: string | null;
  fileLength?: number | null;
  mediaKeyTimestamp?: number | null;
  firstFrameLength?: number | null;
  firstFrameSidecar?: Uint8Array | null;
  isAnimated?: boolean | null;
  pngThumbnail?: Uint8Array | null;
  contextInfo?: IContextInfo | null;
  stickerSentTs?: number | null;
  isAvatar?: boolean | null;
}
