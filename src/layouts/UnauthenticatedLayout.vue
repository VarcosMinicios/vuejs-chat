<template>
  <q-layout view="lHh Lpr lff">
    <q-ajax-bar color="amber-10" size="md" />

    <q-page-container>
      <q-page class="row flex-center">
        <router-view></router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar'
import { onMounted } from 'vue'

const { dark } = useQuasar()

onMounted(() => {
  dark.set('auto')
})
</script>
