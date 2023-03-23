import { AnyAction } from 'redux'
import { Product } from '../../types'

import {
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS
} from '../actions/products'

type ProductsState = {
  isLoading: boolean
  error: null | string
  all: Product[]
}

const initialState: ProductsState = {
  isLoading: false,
  error: null,
  all: []
}

export function productsReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST: {
      console.log('REQUEST CASE...')
      return {
        ...state,
        isLoading: true
      }
    }
    case FETCH_PRODUCTS_SUCCESS: {
      console.log('SUCCESS')
      return {
        ...state,
        isLoading: false,
        all: action.payload
      }
    }
    case FETCH_PRODUCTS_FAILED: {
      console.log('ERROR')
      return {
        ...state,
        isLoading: false,
        error: 'something is wrong'
      }
    }
    default:
      return state
  }
}
