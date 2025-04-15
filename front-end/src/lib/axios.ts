import axios from 'axios'

import { env } from '../env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, // vai fazer com que os cookies sejam enviados junto com a requisição para o backend
})
