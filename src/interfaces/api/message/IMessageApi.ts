import type { IImageMessage } from '@/interfaces/api/message/IImageMessage'
import type { IAudioMessage } from '@/interfaces/api/message/IAudioMessage'
import type { IVideoMessage } from '@/interfaces/api/message/IVideoMessage'
import type { IDocumentMessage } from '@/interfaces/api/message/IDocumentMessage'
import type { IContactMessage } from '@/interfaces/api/message/IContactMessage'
import type { ILocationMessage } from '@/interfaces/api/message/ILocationMessage'
import type { IExtendedTextMessage } from '@/interfaces/api/message/IExtendedTextMessage'
import type { IStickerMessage } from '@/interfaces/api/message/IStickerMessage'
import type { IReactionMessage } from '@/interfaces/api/message/IReactionMessage'

export interface IMessageApi {
  conversation?: string | null;
  imageMessage?: IImageMessage | null;
  contactMessage?: IContactMessage | null;
  locationMessage?: ILocationMessage | null;
  extendedTextMessage?: IExtendedTextMessage | null;
  documentMessage?: IDocumentMessage | null;
  audioMessage?: IAudioMessage | null;
  videoMessage?: IVideoMessage | null;
  stickerMessage?: IStickerMessage | null;
  reactionMessage?: IReactionMessage | null;
}
