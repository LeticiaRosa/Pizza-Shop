import { api } from '../lib/axios'

export interface CancelOrderParams {
  orderId: string
}

export async function cancelOrder(orderId: string) {
  await api.patch(`/orders/${orderId}/cancel`)
}
