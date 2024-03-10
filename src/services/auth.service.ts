import type { IUser } from '@/interfaces/IUser'
import { useAuthStore } from '@/stores/auth'
import axios from 'axios'

const useAuth = useAuthStore()

export const register = async (data: Omit<IUser, 'id'> & { password: string }) => {
  return axios.post('/auth/register', data)
    .then(({ data }) => {
      useAuth.login(data)
    })
}

export const login = async (data: { email: string, password: string }) => {
  return axios.post('/auth/login', data)
    .then(({ data }) => {
      useAuth.login(data)
    })
}
