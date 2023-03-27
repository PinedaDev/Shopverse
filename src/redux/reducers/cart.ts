import { AnyAction } from 'redux'
import { Product } from '../../types'

import { CART_PRODUCT_ADD, CART_PRODUCT_REMOVE } from '../actions/cart'

type CartState = {
  cartOpen: boolean
  cartProducts: Product[]
}

type GetProductProps = {
  id: number
  allProducts: Product[]
}

const initialState: CartState = {
  cartOpen: false,
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
      const updatedCart: Product[] = [...state.cartProducts, targetProduct]
      return {
        cartProducts: updatedCart
      }
    }
    case CART_PRODUCT_REMOVE: {
      const targetProduct: Product = getProduct({
        id: action.payload.productID,
        allProducts: action.payload.products
      })

      const updatedCartProducts: Product[] = state.cartProducts.filter((product: Product) =>
        product.id === targetProduct.id ? '' : true
      )
      return {
        cartProducts: updatedCartProducts
      }
    }
    default:
      return state
  }
}
