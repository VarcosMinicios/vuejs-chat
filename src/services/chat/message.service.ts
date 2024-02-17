import axios from 'axios'
import type { IMessage } from '@/interfaces/IMessage'
import type { IMessageDataApi } from '@/interfaces/api/message/IMessageDataApi'

export const getMessages = async (contactId: string, whatsappId: string) => {
  const { data } = await axios.get(`/messages/${whatsappId}/${contactId}`)
  return formatMessages(data)
}

export const formatMessages = (messages: IMessageDataApi[]): IMessage[] => {
  return messages.map((message) => ({
    id: message.key.id || '',
    timestamp: message.messageTimestamp || undefined,
    type: message.key.fromMe ? 'sent' : 'received',
    userName: message.pushName || '',
    status: message.status || 0,
    text: message.message?.conversation || ''
  }))
}
