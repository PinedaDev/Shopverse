import { AnyAction } from 'redux'
import { CartOrder } from '../../types'

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
  orders: CartOrder[]
}

const initialState: CartState = {
  cartOpen: false,
  orders: []
}

export function cartReducer(state = initialState, action: AnyAction) {
  function checkMatch(currentOrder: CartOrder) {
    let equals = false
    const match = state.orders.find(
      (order) =>
        currentOrder.productId === order.productId &&
        currentOrder.color === order.color &&
        currentOrder.size === order.size
    )
    if (match) {
      equals = true
      return equals
    }
    return equals
  }
  // Get the product to add to the cart
  switch (action.type) {
    case CART_PRODUCT_ADD: {
      const productId: number = action.payload.id
      const orderID = new Date().getTime() + productId
      const newOrder: CartOrder = { ...action.payload, id: orderID, productId: productId }

      const matchOrder = checkMatch(newOrder)

      if (!matchOrder) {
        return {
          ...state,
          orders: [...state.orders, newOrder]
        }
      }

      const updatedOrders = state.orders.map((order) => {
        if (order.productId === newOrder.productId) {
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
