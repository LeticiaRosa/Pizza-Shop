import axios from 'axios'

import { env } from '../env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, // vai fazer com que os cookies sejam enviados junto com a requisição para o backend
})

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 2000)) // 2 segundo de delay
    return config
  })
}

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      // Redirecionar para a página de login
      window.location.href = '/sign-in'
    }
    return Promise.reject(error)
  },
)
