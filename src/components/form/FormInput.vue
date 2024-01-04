<template>
  <q-input v-model="value" :error="!!errors || !!errorMessage" :error-message="errors|| errorMessage" outlined>
    <template v-slot:append>
      <slot name="append"></slot>
    </template>
  </q-input>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate'

const props = defineProps<{
  name: string,
  errors?: string,
}>()

const { value, errorMessage } = useField<string>(() => props.name)
</script>
