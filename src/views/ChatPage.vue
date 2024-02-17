<template>
  <ChatContainer :contacts="contacts" :messages="messages" @changeCurrentContact="getContactMessages"
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

getContacts(whatsappId).then((data) => contacts.value = data)

const getContactMessages = (contactId: string) => {
  getMessages(contactId, whatsappId).then((data) => messages.value = data)
}

const onSearchContacts = (value: string) => {
  getContacts(whatsappId, value).then((data) => contacts.value = data)
}

</script>
