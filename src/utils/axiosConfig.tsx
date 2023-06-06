const url = import.meta.env.VITE_BASE_API_URL + '/api/v1/products'
const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}

export const productsConfig = {
  url: url,
  config: config
}
