import { api } from '../lib/axios'

export interface signInProps {
  email: string
}

export async function signIn({ email }: signInProps) {
  await api.post('/authenticate', { email })
}
