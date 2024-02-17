import type { IContextInfo } from '@/interfaces/api/message/IContextInfo'

export interface ILocationMessage {
  degreesLatitude?: number | null;
  degreesLongitude?: number | null;
  name?: string | null;
  address?: string | null;
  url?: string | null;
  isLive?: boolean | null;
  accuracyInMeters?: number | null;
  speedInMps?: number | null;
  degreesClockwiseFromMagneticNorth?: number | null;
  comment?: string | null;
  jpegThumbnail?: Uint8Array | null;
  contextInfo?: IContextInfo | null;
}
