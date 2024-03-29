import { AnyAction } from 'redux'
import { Product } from '../../types'

import {
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  PRODUCT_CREATE,
  PRODUCT_DELETE,
  PRODUCT_UPDATE
} from '../actions/products'

export type ProductsState = {
  isLoading: boolean
  error: null | string
  all: Product[] | undefined
}

const initialState: ProductsState = {
  isLoading: false,
  error: null,
  all: []
}

export function productsReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        all: action.payload
      }
    }
    case FETCH_PRODUCTS_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: 'something is wrong'
      }
    }
    case PRODUCT_CREATE: {
      const newProduct: Product = action.payload
      const newProductsData: Product[] = [...(<[]>state.all), newProduct]
      return {
        ...state,
        all: newProductsData
      }
    }
    case PRODUCT_DELETE: {
      const updatedOrders = state.all
        ? state.all.filter((product) => product.id !== action.payload)
        : ''
      return {
        ...state,
        all: updatedOrders
      }
    }
    case PRODUCT_UPDATE: {
      const updatedProducts = state.all
        ? state.all.map((product) => {
            if (product.id === action.payload.id) {
              const updatedProduct = {
                ...action.payload.updatedData
              }
              return updatedProduct
            }
            return product
          })
        : ''
      return {
        ...state,
        all: updatedProducts
      }
    }
    default:
      return state
  }
}
