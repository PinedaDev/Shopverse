import { AnyAction } from 'redux'

import { Product } from '../../types'
import { CART_PRODUCT_ADD } from '../actions/cart'

type CartState = {
  cartProducts: Product[]
}

type GetProductProps = {
  id: number
  allProducts: Product[]
}

const initialState: CartState = {
  cartProducts: []
}

export function cartReducer(state = initialState, action: AnyAction) {
  // Get the product to add to the cart
  function getProduct({ id, allProducts }: GetProductProps): Product {
    const target = allProducts.filter((product: Product) => (product.id === id ? true : ''))
    return target[0]
  }
  switch (action.type) {
    case CART_PRODUCT_ADD: {
      const targetProduct: Product = getProduct({
        id: action.payload.productID,
        allProducts: action.payload.products
      })
      const newCartProducts: Product[] = [...state.cartProducts, targetProduct]
      return {
        cartProducts: newCartProducts
      }
    }
    default:
      return state
  }
}
