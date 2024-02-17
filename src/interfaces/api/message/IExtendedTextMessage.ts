import type { IContextInfo } from '@/interfaces/api/message/IContextInfo'

enum FontType {
  SANS_SERIF = 0,
  SERIF = 1,
  NORICAN_REGULAR = 2,
  BRYNDAN_WRITE = 3,
  BEBASNEUE_REGULAR = 4,
  OSWALD_HEAVY = 5,
  SYSTEM_BOLD = 6,
  MORNINGBREEZE_REGULAR = 7,
  CALISTOGA_REGULAR = 8,
  EXO2_EXTRABOLD = 9,
  COURIERPRIME_BOLD = 10
}

enum InviteLinkGroupType {
  DEFAULT = 0,
  PARENT = 1,
  SUB = 2,
  DEFAULT_SUB = 3
}

enum PreviewType {
  NONE = 0,
  VIDEO = 1
}

export interface IExtendedTextMessage {
  text?: string | null;
  matchedText?: string | null;
  canonicalUrl?: string | null;
  description?: string | null;
  title?: string | null;
  textArgb?: number | null;
  backgroundArgb?: number | null;
  font?: FontType | null;
  previewType?: PreviewType | null;
  jpegThumbnail?: Uint8Array | null;
  contextInfo?: IContextInfo | null;
  doNotPlayInline?: boolean | null;
  thumbnailDirectPath?: string | null;
  thumbnailSha256?: Uint8Array | null;
  thumbnailEncSha256?: Uint8Array | null;
  mediaKey?: Uint8Array | null;
  mediaKeyTimestamp?: number | null;
  thumbnailHeight?: number | null;
  thumbnailWidth?: number | null;
  inviteLinkGroupType?: InviteLinkGroupType | null;
  inviteLinkParentGroupSubjectV2?: string | null;
  inviteLinkParentGroupThumbnailV2?: Uint8Array | null;
  inviteLinkGroupTypeV2?: InviteLinkGroupType | null;
  viewOnce?: boolean | null;
}
