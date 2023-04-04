import { Dispatch } from 'redux'
import { Product } from '../../types'

export type ProductsAction =
  | ReturnType<typeof handleProductsRequest>
  | ReturnType<typeof handleProductsSuccess>
  | ReturnType<typeof handleProductsFailed>

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED'

export function handleProductsRequest() {
  return {
    type: FETCH_PRODUCTS_REQUEST
  }
}

export function handleProductsSuccess(products: Product[]) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

export function handleProductsFailed() {
  return {
    type: FETCH_PRODUCTS_FAILED,
    payload: 'Something went wrong'
  }
}

export function fetchProducts() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(handleProductsRequest())
      const req = await fetch('http://localhost:5173/products.json')
      const res = await req.json()
      const products = res.data
      if (!req.ok) throw products

      dispatch(handleProductsSuccess(products))
    } catch (error) {
      dispatch(handleProductsFailed())
    }
  }
}
