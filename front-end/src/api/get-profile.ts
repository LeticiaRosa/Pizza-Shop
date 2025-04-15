import { api } from '../lib/axios'

interface GetProfileResponse {
  id: string
  name: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile(): Promise<GetProfileResponse> {
  console.log('getProfile')
  const cookies = document.cookie

  console.log('aqui', cookies)

  const response = await api.get('/me')
  return response.data
}
