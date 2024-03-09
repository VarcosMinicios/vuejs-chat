<template>
  <q-layout class="shadow-3" container style="height: 100%;" view="lHr LpR lFr">
    <q-header elevated>
      <q-toolbar :class="!dark.isActive ? 'bg-grey-2 text-black': ''"
                 :style="`background-color: var(${dark.isActive ? '--q-dark' : ''})`">
        <q-btn class="q-mr-sm" flat icon="keyboard_arrow_left" round @click="toggleLeftDrawer" />

        <q-btn align="left" class="btn--no-hover full-width" disable flat no-caps @click="toggleRightDrawer">
          <q-avatar>
            <img :src="currentConversation?.avatar || ''" alt="Foto de perfil" @error="setErrorImg">
          </q-avatar>
          <span class="q-subtitle-1 q-pl-md">{{ currentConversation?.name }}</span>
        </q-btn>

        <q-btn disable flat icon="search" round />
        <q-btn disable flat icon="more_vert" round>
          <q-menu :offset="[110, 0]" auto-close>
            <q-list style="min-width: 150px">
              <q-item clickable>
                <q-item-section>Dados do contato</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Bloquear</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Selecionar mensagens</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Silenciar</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Limpar mensagens</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Apagar mensagens</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" :breakpoint="690" bordered show-if-above>
      <ContactList :contacts="contacts"
                   @loadContacts="(done, index) => $emit('loadContacts', done, index)"
                   @onChangeCurrentChat="(chatId: string) => currentConversationId = chatId"
                   @onSearch="(value: string) => search(value)" />
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" :breakpoint="690" bordered side="right">
    </q-drawer>

    <q-page-container>
      <q-page class="row">
        <q-infinite-scroll ref="infiniteScroll" class="full-width q-px-md q-pt-md"
                           reverse
                           @load="(index, done) => $emit('loadMessages', currentConversationId, done, index)">
          <template v-slot:loading>
            <div class="row justify-center q-my-md">
              <q-spinner-dots color="primary" size="40px" />
            </div>
          </template>

          <div v-for="(group, groupIndex) in groupedMessages" :key="groupIndex">
            <div :class="group.type">
              <MessageArea v-for="(message, index) in group.messages" :key="message.id" :first-message="index === 0"
                           :message="message"></MessageArea>
            </div>
          </div>
        </q-infinite-scroll>
      </q-page>
    </q-page-container>

    <q-footer>
      <q-toolbar :class="!dark.isActive ? 'bg-grey-2 text-black': ''"
                 :style="`background-color: var(${dark.isActive ? '--q-dark' : ''})`" class="row">
        <q-btn class="q-mr-sm" dense disable flat icon="insert_emoticon" round />
        <q-btn class="q-mr-sm" dense disable flat icon="add" round />
        <q-input v-model="message" autofocus class="col-grow q-mr-sm" dense
                 outlined
                 placeholder="Digite uma mensagem" rounded />
        <q-btn v-if="!message" disable flat icon="mic" round />
        <q-btn v-else flat icon="send" round />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import type { IContact } from '@/interfaces/IContact'
import type { IMessage } from '@/interfaces/IMessage'
import { type QInfiniteScroll, useQuasar } from 'quasar'
import { computed, ref, watch } from 'vue'
import { setErrorImg } from '@/services/chat/chat.service'
import MessageArea from '@/components/chat/MessageContainer.vue'
import ContactList from '@/components/chat/ContactList.vue'

const props = defineProps<{
  contacts: IContact[];
  messages: IMessage[];
}>()

const emit = defineEmits<{
  (e: 'onSearch', value?: string): void;
  (e: 'loadMessages', id: string, done: (stop?: boolean) => void, index: number): void;
  (e: 'loadContacts', done: (stop?: boolean) => void, index: number): void;
  (e: 'onChangeCurrentConversation'): void;
}>()

const { dark } = useQuasar()

const infiniteScroll = ref<QInfiniteScroll>()

const message = ref('')
const currentConversationId = ref('')

const leftDrawerOpen = ref(true)
const rightDrawerOpen = ref(false)

const currentConversation = computed(() => {
  return props.contacts.find(contact => contact.id === currentConversationId.value) || props.contacts[0]
})

const groupedMessages = computed(() => {
  return props.messages.reduce<{ type: string, messages: IMessage[] }[]>((acc, message) => {
    const lastMessage = acc[acc.length - 1]
    if (lastMessage && lastMessage.type === message.type) {
      lastMessage.messages.push(message)
    } else {
      acc.push({ type: message.type, messages: [message] })
    }

    return acc
  }, [])
})

watch(currentConversationId, () => {
  emit('onChangeCurrentConversation')
  infiniteScroll.value?.reset()
  infiniteScroll.value?.resume()
})

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const search = (value?: string) => {
  emit('onSearch', value?.trim())
}

</script>

<style scoped>
:deep(.q-btn.btn--no-hover .q-focus-helper) {
  display: none;
}
</style>
