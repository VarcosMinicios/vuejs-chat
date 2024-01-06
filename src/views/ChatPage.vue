<template>
  <ChatContainer :contacts="contacts" :messages="messages" />
</template>

<script lang="ts" setup>
import type { IMessage } from '@/interfaces/IMessage'
import type { IContact } from '@/interfaces/IContacts'
import ChatContainer from '@/components/chat/ChatContainer.vue'

const contacts: IContact[] = []

const messages: IMessage[] = []

</script>
