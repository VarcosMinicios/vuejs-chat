import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useChatStore = defineStore('auth', () => {
  const whatsappId = ref<string>('553399445415@s.whatsapp.net')
  return { whatsappId }
})
