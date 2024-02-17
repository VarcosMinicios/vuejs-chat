<template>
  <q-toolbar>
    <q-avatar>
      <img alt="Foto de perfil" src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
    </q-avatar>

    <q-space />

    <q-btn disable flat icon="sym_o_chat_add_on" round>
      <q-tooltip :offset="[10, 10]" transition-hide="flip-left" transition-show="flip-right">
        Nova conversa
      </q-tooltip>
    </q-btn>
    <q-btn disable flat icon="more_vert" round>
      <q-menu :offset="[110, 8]" auto-close>
        <q-list style="min-width: 150px">
          <q-item clickable>
            <q-item-section>Novo Grupo</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Perfil</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Mensagens favoritas</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Configurações</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Desconectar</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-toolbar>

  <q-toolbar>
    <q-input v-model="contactSearch" class="full-width" clearable debounce="500" dense
             outlined placeholder="Pesquisar ou começar uma nova conversa"
             rounded @update:model-value="$emit('onSearch', contactSearch)">
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
  </q-toolbar>

  <q-scroll-area style="height: calc(100% - 100px); max-width: 300px">
    <q-list separator style="max-width: 300px">
      <q-item v-for="contact in contacts" :key="contact.id" v-ripple clickable
              @click="$emit('onChangeCurrentChat', contact.id)">
        <q-item-section avatar>
          <q-avatar>
            <img :src="contact.avatar" alt="Foto de perfil" @error="setErrorImg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">
            {{ contact.name }}
          </q-item-label>
          <q-item-label caption lines="1">
            <q-icon v-if="contact.lastMessage?.status" name="check" />
            {{ contact.lastMessage.text }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label caption>
            {{
              contact.lastMessage.timestamp ? DateTime.fromSeconds(contact.lastMessage.timestamp).toFormat('dd/MM/yyyy') : ''
            }}
          </q-item-label>
          <q-icon name="keyboard_arrow_down" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script lang="ts" setup>
import type { IContact } from '@/interfaces/IContact'
import { ref } from 'vue'
import { setErrorImg } from '@/services/chat/chat.service'
import { DateTime } from 'luxon'

defineProps<{
  contacts: IContact[];
}>()

defineEmits<{
  (e: 'onChangeCurrentChat', id: string): void;
  (e: 'onSearch', value: string): void;
}>()

const contactSearch = ref('')
</script>
