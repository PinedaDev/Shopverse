import { Order } from '../../types'

export type CartAction = ReturnType<typeof handleAddToCart>

export const CART_PRODUCT_ADD = 'CART_PRODUCT_ADD'
export const CART_PRODUCT_REMOVE = 'CART_PRODUCT_REMOVE'
export const CART_PRODUCT_INCREASE_AMOUNT = 'CART_PRODUCT_INCREASE_AMOUNT'
export const CART_PRODUCT_DECREASE_AMOUNT = 'CART_PRODUCT_DECREASE_AMOUNT'
export const CART_TOGGLE = 'CART_TOGGLE'

export function handleAddToCart(order: Order) {
  return {
    type: CART_PRODUCT_ADD,
    payload: order
  }
}

export function handleRemoveFromCart(id: number) {
  return {
    type: CART_PRODUCT_REMOVE,
    payload: id
  }
}

export function handleIncreaseAmount(id: number) {
  return {
    type: CART_PRODUCT_INCREASE_AMOUNT,
    payload: id
  }
}

export function handleDecreaseAmount(id: number) {
  return {
    type: CART_PRODUCT_DECREASE_AMOUNT,
    payload: id
  }
}

export function handleToggleCart() {
  return {
    type: CART_TOGGLE
  }
}
