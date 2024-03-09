<template>
  <ChatContainer :contacts="contacts" :messages="messages"
                 @loadContacts="getListContacts"
                 @loadMessages="getContactMessages"
                 @onChangeCurrentConversation="resetChat"
                 @onSearch="onSearchContacts" />
</template>

<script lang="ts" setup>
import type { IMessage } from '@/interfaces/IMessage'
import type { IContact } from '@/interfaces/IContact'
import ChatContainer from '@/components/chat/ChatContainer.vue'
import socket from '@/services/chat/socket.service'
import { getContacts } from '@/services/chat/contact.service'
import { ref } from 'vue'
import { getMessages } from '@/services/chat/message.service'

socket.on('message', (message: IMessage) => {
  // messages.push(message)
})

const contacts = ref<IContact[]>([])
const messages = ref<IMessage[]>([])

const whatsappId = '553399445415@s.whatsapp.net'

const resetChat = () => {
  messages.value = []
}

const getContactMessages = (contactId: string, done: (stop?: boolean) => void, index: number) => {
  getMessages(contactId, whatsappId, index - 1)
    .then((data) => {
      messages.value = data.concat(messages.value)
      done(data.length < 30)
    })
}

const getListContacts = (done: (stop?: boolean) => void, index: number) => {
  getContacts(whatsappId, index - 1)
    .then((data) => {
      contacts.value = contacts.value.concat(data)
      done(data.length < 30)
    })
}

const onSearchContacts = (value?: string | undefined) => {
  getContacts(whatsappId, 0, value)
    .then((data) => contacts.value = data)
}

</script>
