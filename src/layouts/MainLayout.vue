<template>
  <q-layout
    view="lHh Lpr lff"
  >
    <q-ajax-bar color="amber-10" size="md" />
    <q-header class="q-pa-md row flex-center">
      <q-toolbar :style="!screen.lt.xl ? 'max-width: 70%' : ''" class="row justify-end">
        <q-btn :icon="dark.isActive ? 'sym_o_light_mode' : 'sym_o_mode_night'" dense flat round
               @click="toggleDarkMode()">
          <q-tooltip :offset="[10, 10]" class="shadow-4" transition-hide="flip-left" transition-show="flip-right">
            {{ dark.isActive ? 'Modo claro' : 'Modo escuro' }}
          </q-tooltip>
        </q-btn>
      </q-toolbar>

    </q-header>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <q-page :style="!screen.lt.xl ? 'max-width: 70%' : ''" class="row justify-center q-mx-auto">
        <div class="full-width q-pa-md">
          <slot />
        </div>
      </q-page>

      <q-page-scroller position="bottom">
        <q-btn color="primary" fab icon="sym_o_keyboard_arrow_up" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar'
import { onMounted } from 'vue'

const { dark, screen } = useQuasar()

function toggleDarkMode() {
  dark.toggle()
}

onMounted(() => {
  dark.set('auto')
})
</script>
