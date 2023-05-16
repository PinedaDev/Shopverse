import { Dispatch } from 'redux'
import { Product } from '../../types'
import axios from 'axios'

export type ProductsAction =
  | ReturnType<typeof handleProductsRequest>
  | ReturnType<typeof handleProductsSuccess>
  | ReturnType<typeof handleProductsFailed>
  | ReturnType<typeof handleProductDelete>
  | ReturnType<typeof handleProductUpdate>

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED'
export const PRODUCT_DELETE = 'PRODUCT_DELETE'
export const PRODUCT_UPDATE = 'PRODUCT_UPDATE'

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

export function handleProductDelete(id: number) {
  return {
    type: PRODUCT_DELETE,
    payload: id
  }
}

export function handleProductUpdate({
  id,
  changes
}: {
  id: number
  changes: { name: string; price: number; description: string }
}) {
  return {
    type: PRODUCT_UPDATE,
    payload: { id, changes }
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
      const req = await axios.get(`${import.meta.env.VITE_BASE_API_URL}products`)
      const res = req.data
      if (req.status != 200) throw res
      dispatch(handleProductsSuccess(res))
    } catch (error) {
      dispatch(handleProductsFailed())
    }
  }
}
