import type { IContextInfo } from '@/interfaces/api/message/IContextInfo'

export interface IImageMessage {
  url?: (string | null);
  mimetype?: (string | null);
  caption?: (string | null);
  fileSha256?: (Uint8Array | null);
  fileLength?: (number | null);
  height?: (number | null);
  width?: (number | null);
  mediaKey?: (Uint8Array | null);
  fileEncSha256?: (Uint8Array | null);
  directPath?: (string | null);
  mediaKeyTimestamp?: (number | null);
  jpegThumbnail?: (Uint8Array | null);
  contextInfo?: (IContextInfo | null);
  firstScanSidecar?: (Uint8Array | null);
  firstScanLength?: (number | null);
  experimentGroupId?: (number | null);
  scansSidecar?: (Uint8Array | null);
  scanLengths?: (number[] | null);
  midQualityFileSha256?: (Uint8Array | null);
  midQualityFileEncSha256?: (Uint8Array | null);
  viewOnce?: (boolean | null);
  thumbnailDirectPath?: (string | null);
  thumbnailSha256?: (Uint8Array | null);
  thumbnailEncSha256?: (Uint8Array | null);
  staticUrl?: (string | null);
}
