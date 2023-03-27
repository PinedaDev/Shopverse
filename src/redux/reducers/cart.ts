import { Product } from '../../types'
import { CartAction } from '../actions/cart'

import { CART_PRODUCT_ADD, CART_PRODUCT_REMOVE } from '../actions/cart'

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

export function cartReducer(state = initialState, action: CartAction) {
  // Get the product to add to the cart
  function getProduct({ id, allProducts }: GetProductProps): Product {
    const target = allProducts.filter((product: Product) => (product.id === id ? true : ''))
    return target[0]
  }
  switch (action.type) {
    case CART_PRODUCT_ADD: {
      console.log('hi from add')
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
      console.log('hi from remove')
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
