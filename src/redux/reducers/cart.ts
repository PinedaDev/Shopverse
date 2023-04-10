import { AnyAction } from 'redux'
import { CartItem } from '../../types'

import {
  CART_CLEAR,
  CART_PRODUCT_ADD,
  CART_PRODUCT_DECREASE_AMOUNT,
  CART_PRODUCT_INCREASE_AMOUNT,
  CART_PRODUCT_REMOVE,
  CART_TOGGLE
} from '../actions/cart'

type CartState = {
  cartOpen: boolean
  orders: CartItem[]
}

const initialState: CartState = {
  cartOpen: false,
  orders: []
}

export function cartReducer(state = initialState, action: AnyAction) {
  function checkMatch(currentOrder: CartItem) {
    let equals = false
    const match = state.orders.find(
      (order) =>
        currentOrder.productID === order.productID &&
        currentOrder.color === order.color &&
        currentOrder.size === order.size
    )
    if (match) {
      console.log('found in cart')
      equals = true
      return equals
    }
    return equals
  }
  // Get the product to add to the cart
  switch (action.type) {
    case CART_PRODUCT_ADD: {
      const productID: number = action.payload.id
      const orderID = new Date().getTime() + productID
      const newOrder: CartItem = { ...action.payload, id: orderID, productID: productID }

      const matchOrder = checkMatch(newOrder)

      if (!matchOrder) {
        return {
          ...state,
          orders: [...state.orders, newOrder]
        }
      }

      const updatedOrders = state.orders.map((order) => {
        if (order.productID === newOrder.productID) {
          const updatedOrder = { ...order }
          updatedOrder.quantity += 1
          return updatedOrder
        }
        return order
      })
      return {
        ...state,
        orders: updatedOrders
      }
    }
    case CART_PRODUCT_REMOVE: {
      const updatedOrders = state.orders.filter((order) => order.id !== action.payload)
      return {
        ...state,
        orders: updatedOrders
      }
    }
    case CART_PRODUCT_INCREASE_AMOUNT: {
      const updatedOrders = state.orders.map((order) => {
        if (order.id === action.payload) {
          const updatedOrder = { ...order }
          updatedOrder.quantity += 1
          return updatedOrder
        }
        return order
      })

      return {
        ...state,
        orders: updatedOrders
      }
    }
    case CART_PRODUCT_DECREASE_AMOUNT: {
      const updatedOrders = state.orders.map((order) => {
        if (order.quantity < 1) {
          return order
        }
        if (order.id === action.payload) {
          const updatedOrder = { ...order }
          updatedOrder.quantity -= 1
          return updatedOrder
        }
        return order
      })

      return {
        ...state,
        orders: updatedOrders
      }
    }
    case CART_CLEAR: {
      return {
        ...state,
        orders: []
      }
    }
    case CART_TOGGLE: {
      return {
        ...state,
        cartOpen: !state.cartOpen
      }
    }
    default:
      return state
  }
}
