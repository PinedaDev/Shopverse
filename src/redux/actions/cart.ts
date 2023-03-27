import { Product } from '../../types'

export type CartAction =
  | ReturnType<typeof handleAddToCart>
  | ReturnType<typeof handleRemoveFromCart>

export const CART_PRODUCT_ADD = 'CART_PRODUCT_ADD'
export const CART_PRODUCT_REMOVE = 'CART_PRODUCT_REMOVE'

export function handleAddToCart(productID: number, products: Product[]) {
  return {
    type: CART_PRODUCT_ADD,
    payload: { productID, products }
  }
}

export function handleRemoveFromCart(productID: number, products: Product[]) {
  return {
    type: CART_PRODUCT_REMOVE,
    payload: { productID, products }
  }
}
