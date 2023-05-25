const url = import.meta.env.VITE_BASE_API_URL + 'products'
const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}

export const productsConfig = {
  url: url,
  config: config
}
