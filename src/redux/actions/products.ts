import { Dispatch } from 'redux'
import { Product } from '../../types'
import axios from 'axios'

import { productsConfig } from '../../utils/axiosConfig'

export type ProductsAction =
  | ReturnType<typeof handleProductsRequest>
  | ReturnType<typeof handleProductsSuccess>
  | ReturnType<typeof handleProductsFailed>
  | ReturnType<typeof handleProductDelete>
  | ReturnType<typeof handleProductUpdate>

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED'
export const PRODUCT_CREATE = 'PRODUCT_CREATE'
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

export function handleProductCreate(product: Product) {
  return {
    type: PRODUCT_CREATE,
    payload: product
  }
}

export function handleProductDelete(id: string) {
  return {
    type: PRODUCT_DELETE,
    payload: id
  }
}

export function handleProductUpdate({ id, updatedData }: { id: string; updatedData: Product }) {
  return {
    type: PRODUCT_UPDATE,
    payload: { id, updatedData }
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
      const req = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/api/v1/products`)
      const res = req.data
      if (req.status != 200) throw res
      dispatch(handleProductsSuccess(res))
    } catch (error) {
      dispatch(handleProductsFailed())
    }
  }
}

export const createProductThunk = (data: Product) => async (dispatch: Dispatch) => {
  const newProductData: Partial<Product> = { ...data }
  newProductData.id ? delete newProductData.id : ''
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }
  try {
    const req = await axios.post(
      `${import.meta.env.VITE_BASE_API_URL}/api/v1/products`,
      newProductData,
      config
    )
    const res = req.data
    res.createdAt ? delete res.createdAt : ''
    console.log(res)
    if (req.status != 201) throw res
    dispatch(handleProductCreate(res))
  } catch (error) {
    console.log(error)
  }
}

export const deleteProductThunk = (id: string) => async (dispatch: Dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }
  try {
    const req = await axios.delete(
      `${import.meta.env.VITE_BASE_API_URL}/api/v1/products/${id}`,
      config
    )
    const res = req.data
    if (req.status != 200) throw res
    dispatch(handleProductDelete(id))
  } catch (error) {
    console.log(error)
  }
}

export const updateProductThunk = (id: string, data: Product) => async (dispatch: Dispatch) => {
  const updatedData: Partial<Product> = { ...data }
  updatedData.id ? delete updatedData.id : ''
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }
  try {
    const req = await axios.patch(
      `${import.meta.env.VITE_BASE_API_URL}/api/v1/products/${id}`,
      updatedData,
      config
    )
    const res = req.data
    console.log(productsConfig.config)
    console.log('hi')
    if (req.status != 200) throw res
    dispatch(handleProductUpdate({ id, updatedData: data }))
  } catch (error) {
    console.log(error)
  }
}
