const productsURL = import.meta.env.VITE_BASE_API_URL + '/api/v1/products'
const orderURL = import.meta.env.VITE_BASE_API_URL + '/api/v1/orders'
const usersURL = import.meta.env.VITE_BASE_API_URL + '/api/v1/users'

let accessToken: string | null = null

function getToken() {
  accessToken = localStorage.getItem('accessToken')
}

getToken()

let config = {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
}
function entitiesConfig() {
  return config
}
export function updateAxiosConfig() {
  getToken()

  if (accessToken !== null) {
    const updatedConfig = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }

    config = updatedConfig
    return
  }
}
export const productsConfig = {
  url: productsURL,
  config: entitiesConfig()
}

export const orderConfig = {
  url: orderURL,
  config: entitiesConfig()
}

export const userConfig = {
  url: usersURL,
  config: entitiesConfig()
}
