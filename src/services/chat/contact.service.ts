import type { IContactApi } from '@/interfaces/api/IContactApi'
import type { IContact } from '@/interfaces/IContact'
import axios from 'axios'

export const getContacts = async (whatsappId: string, search?: string) => {
  const { data } = await axios.get(`/contacts/${whatsappId}`, { params: { search } })
  return formatContacts(data)
}

export const formatContacts = (contacts: IContactApi[]): IContact[] => {
  return contacts.map((contact) => {
    const { id, messages, imgUrl, ...rest } = contact
    const lastMessage = messages?.[messages.length - 1]

    return {
      name: rest.name || rest.displayName || id || '',
      id: id,
      avatar: imgUrl || '',
      lastMessage: {
        id: lastMessage?.message?.key.id || '',
        timestamp: lastMessage?.message?.messageTimestamp || undefined,
        type: lastMessage?.message?.key?.fromMe ? 'sent' : 'received',
        userName: lastMessage?.message?.pushName || '',
        status: lastMessage?.message?.status || 0,
        text: lastMessage?.message?.message?.conversation || ''
      }
    }
  })
}
