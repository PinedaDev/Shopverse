const productsURL = import.meta.env.VITE_BASE_API_URL + '/api/v1/products'
const orderURL = import.meta.env.VITE_BASE_API_URL + '/api/v1/orders'
const usersURL = import.meta.env.VITE_BASE_API_URL + '/api/v1/users'

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}

export const productsConfig = {
  url: productsURL,
  config: config
}

export const orderConfig = {
  url: orderURL,
  config: config
}

export const userConfig = {
  url: usersURL,
  config: config
}
