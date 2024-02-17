import type { IContextInfo } from '@/interfaces/api/message/IContextInfo'

export interface IDocumentMessage {
  url?: string | null;
  mimetype?: string | null;
  title?: string | null;
  fileSha256?: Uint8Array | null;
  fileLength?: number | null;
  pageCount?: number | null;
  mediaKey?: Uint8Array | null;
  fileName?: string | null;
  fileEncSha256?: Uint8Array | null;
  directPath?: string | null;
  mediaKeyTimestamp?: number | null;
  contactVcard?: boolean | null;
  thumbnailDirectPath?: string | null;
  thumbnailSha256?: Uint8Array | null;
  thumbnailEncSha256?: Uint8Array | null;
  jpegThumbnail?: Uint8Array | null;
  contextInfo?: IContextInfo | null;
  thumbnailHeight?: number | null;
  thumbnailWidth?: number | null;
  caption?: string | null;
}
