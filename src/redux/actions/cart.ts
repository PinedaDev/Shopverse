import { Order } from '../../types'

export type CartAction = ReturnType<typeof handleAddToCart>

export const CART_PRODUCT_ADD = 'CART_PRODUCT_ADD'
export const CART_PRODUCT_REMOVE = 'CART_PRODUCT_REMOVE'
export const CART_TOGGLE = 'CART_TOGGLE'

export function handleAddToCart(order: Order) {
  return {
    type: CART_PRODUCT_ADD,
    payload: order
  }
}

export function handleToggleCart() {
  return {
    type: CART_TOGGLE
  }
}
