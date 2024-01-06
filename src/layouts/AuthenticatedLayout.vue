<template>
  <q-layout view="lHh Lpr lff">
    <q-ajax-bar color="amber-10" size="md" />
    <q-header class="q-pa-md row flex-center">
      <q-toolbar :style="!screen.lt.xl ? 'max-width: 70%' : ''" class="row justify-end">
        <div class="q-gutter-md">
          <q-btn :icon="dark.isActive ? 'light_mode' : 'mode_night'" dense flat round
                 @click="toggleDarkMode()">
            <q-tooltip :offset="[10, 10]" class="shadow-4" transition-hide="flip-left" transition-show="flip-right">
              {{ dark.isActive ? 'Modo claro' : 'Modo escuro' }}
            </q-tooltip>
          </q-btn>
          <q-btn flat icon="person" round>
            <q-menu :offset="[0, 5]" anchor="bottom middle" self="top middle">
              <q-list>
                <q-item v-close-popup clickable @click="singOut">
                  <q-item-section>Logout</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" :breakpoint="500" :class="dark.isActive ? 'bg-grey-9' : 'bg-grey-3'" :mini="miniState"
              :width="300" bordered mini-to-overlay show-if-above @mouseout="miniState = true"
              @mouseover="miniState = false">
      <q-scroll-area :horizontal-thumb-style="{ opacity: 0 }" class="fit">
        <q-list padding>
          <q-item v-ripple :active="router.currentRoute.value.name === 'home'" clickable to="/">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>
              Home
            </q-item-section>
          </q-item>

          <q-item v-ripple :active="router.currentRoute.value.name === 'chat'" clickable to="/chat">
            <q-item-section avatar>
              <q-icon name="chat" />
            </q-item-section>

            <q-item-section>
              Chat
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <q-page :style="!screen.lt.xl ? 'max-width: 70%' : ''" class="row justify-center q-mx-auto">
        <div class="full-width q-pa-md">
          <router-view />
        </div>
      </q-page>

      <q-page-scroller position="bottom">
        <q-btn color="primary" fab icon="keyboard_arrow_up" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar'
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const { dark, screen } = useQuasar()

const { logout } = useAuthStore()
const router = useRouter()

const drawer = ref(false)
const miniState = ref(true)

const singOut = () => {
  logout()
  router.replace({ name: 'login' })
}

const toggleDarkMode = () => {
  dark.toggle()
}

onMounted(() => {
  dark.set('auto')
})
</script>
