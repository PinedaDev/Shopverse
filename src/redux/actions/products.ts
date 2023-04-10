import { Dispatch } from 'redux'
import { Product } from '../../types'

export type ProductsAction =
  | ReturnType<typeof handleProductsRequest>
  | ReturnType<typeof handleProductsSuccess>
  | ReturnType<typeof handleProductsFailed>

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

export function deleteProduct(id: number) {
  return {
    type: PRODUCT_DELETE,
    payload: id
  }
}

export function updateProduct({
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
      const req = await fetch('../products.json')
      const res = await req.json()
      const products = res.data
      if (!req.ok) throw products

      dispatch(handleProductsSuccess(products))
    } catch (error) {
      dispatch(handleProductsFailed())
    }
  }
}
