<template>
  <div :class="message.type" class="message">
    <span v-if="firstMessage" :class="message.type">{{ message.userName }}</span>
    <div :class="firstMessage ? 'arrow-bubble' : ''" class="bubble"
         @mouseleave="hover = false"
         @mouseover="hover = true">
      <span v-if="!message.media">{{ message.text }}</span>
      <div v-else class="column q-gutter-xs">
        <img v-if="message.media.type === 'image'" :src="message.media.url" alt="Media">
        <video v-if="message.media.type === 'video'" controls width="100%">
          <source :src="message.media.url">
        </video>
        <span v-if="message.media.type !== 'audio'">{{ message.text }}</span>
        <audio v-if="message.media.type === 'audio'" :src="message.media.url" controls></audio>
      </div>

      <transition name="fade">
        <div v-show="hover || openMenu" style="position: absolute; right: 2px; top: 2px;">
          <q-btn :style="{'background-color': message.type === 'sent' ? '#DCF8C6' : '#fff'}" class="btn-no-hover"
                 dense icon="expand_more" round size="sm" text-color="black" unelevated>
            <q-menu v-model="openMenu" transition-hide="jump-up" transition-show="jump-down">
              <q-list style="min-width: 100px">
                <q-item clickable disable>
                  <q-item-section>Responder</q-item-section>
                </q-item>
                <q-item clickable disable>
                  <q-item-section>Reagir</q-item-section>
                </q-item>
                <q-item clickable disable>
                  <q-item-section>Encaminhar</q-item-section>
                </q-item>
                <q-item clickable disable>
                  <q-item-section>Fixar</q-item-section>
                </q-item>
                <q-item clickable disable>
                  <q-item-section>Favoritar</q-item-section>
                </q-item>
                <q-item clickable disable>
                  <q-item-section>Denunciar</q-item-section>
                </q-item>
                <q-item clickable disable>
                  <q-item-section>Apagar</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </transition>
    </div>
    <span :class="`${message.type}`" class="message-time">
       {{ message.timestamp ? DateTime.fromSeconds(message.timestamp).toFormat('HH:mm') : '' }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { IMessage } from '@/interfaces/IMessage'
import { ref } from 'vue'
import { DateTime } from 'luxon'

defineProps<{ message: IMessage, firstMessage: boolean }>()

const hover = ref(false)
const openMenu = ref(false)
</script>

<style scoped>
.message {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  animation: fadeIn 0.5s ease-in-out;
}

.bubble {
  position: relative;
  border-radius: 7px;
  padding: 4px 8px;
  max-width: 70%;
}

.sent > .arrow-bubble::before {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  border-left: 8px solid #DCF8C6;
  border-right: 8px solid transparent;
  border-top: 8px solid #DCF8C6;
  border-bottom: 8px solid transparent;
  right: -9px;
  top: 0;
}

.received > .arrow-bubble::before {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  border-left: 8px solid transparent;
  border-right: 8px solid #fff;
  border-top: 8px solid #fff;
  border-bottom: 8px solid transparent;
  left: -9px;
  top: 0;
}

.sent {
  align-self: flex-end;
}

.sent .bubble {
  background-color: #DCF8C6;
  color: #000;
  align-self: flex-end;
}

.received .bubble {
  background-color: #fff;
  color: #000;
  align-self: flex-start;
}

.message-time {
  color: #888;
  font-size: 12px;
  margin-top: 5px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
