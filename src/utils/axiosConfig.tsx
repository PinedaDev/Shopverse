const productsURL = import.meta.env.VITE_BASE_API_URL + '/api/v1/products'
const orderURL = import.meta.env.VITE_BASE_API_URL + '/api/v1/orders'
const usersURL = import.meta.env.VITE_BASE_API_URL + '/api/v1/users'

let accessToken = localStorage.getItem('token')

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
}

window.addEventListener('storage', function (event) {
  if (event.key === 'token') {
    // Update the variable if the local storage item changes
    accessToken = event.newValue
    console.log('Variable updated:', accessToken)
    config.headers.Authorization = `Bearer ${accessToken}` // Update the authorization header in the config
  }
})

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
