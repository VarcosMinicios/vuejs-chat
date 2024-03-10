import type { IUser } from '@/interfaces/IUser'
import type { ILoginData } from '@/interfaces/ILoginData'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

const getInitialState = () => ({
  user: localStorage.getItem('user'),
  access_token: localStorage.getItem('access_token'),
  refresh_token: localStorage.getItem('refresh_token')
})

export const useAuthStore = defineStore('auth', () => {
  const state = getInitialState()
  const user = ref<IUser | null>(state.user ? JSON.parse(state.user) : null)
  const access_token = ref<string | null>(state.access_token)
  const refresh_token = ref<string | null>(state.refresh_token)

  const setUser = (userData: IUser) => {
    localStorage.setItem('user', JSON.stringify(userData))
    user.value = userData
  }

  const setAccessToken = (token: string) => {
    localStorage.setItem('access_token', token)
    access_token.value = token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  const setRefreshToken = (token: string) => {
    localStorage.setItem('refresh_token', token)
    refresh_token.value = token
  }

  const login = (data: ILoginData) => {
    setUser(data.user)
    setAccessToken(data.access_token)
    setRefreshToken(data.refresh_token)
  }

  const isLoggedIn = computed(() => !!user.value && !!access_token.value)

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    user.value = null
    access_token.value = null
    refresh_token.value = null
  }

  const refreshToken = async () => {
    return axios.post('/auth/refresh', { refresh: refresh_token.value })
      .then(({ data }) => {
        setAccessToken(data.access_token)
        return true
      })
      .catch(() => {
        logout()
        return false
      })
  }

  const checkAuth = async () => {
    return axios.get('/auth/verify')
      .then(({ data }) => {
        setUser(data)
        return true
      })
      .catch(() => {
        logout()
        return false
      })
  }

  return {
    user,
    isLoggedIn,
    refresh_token,
    access_token,
    setUser,
    setAccessToken,
    setRefreshToken,
    login,
    logout,
    refreshToken,
    checkAuth
  }
})
