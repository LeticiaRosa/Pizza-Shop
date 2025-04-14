import { api } from '../lib/axios'

export interface registerRestaurant {
  restaurantName: string
  phone: string
  // restaurantCNPJ: string
  managerName: string
  email: string
}

export async function registerRestaurant({
  restaurantName,
  phone,
  managerName,
  email,
}: registerRestaurant) {
  await api.post('/restaurants', {
    restaurantName,
    phone,
    managerName,
    email,
  })
}
