import { GoogleUser } from '../../types'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

export function login(user: GoogleUser) {
  const administrators = [
    'abraham.pineda@integrify.io',
    'abrahampineda818@gmail.com',
    'juha.svahn@tietoevry.com'
  ]
  const newUser = {
    ...user,
    role: administrators.includes(user.email) ? 'ADMIN' : 'USER'
  }
  return {
    type: USER_LOGIN,
    payload: newUser
  }
}

export function logout() {
  return {
    type: USER_LOGOUT,
    payload: null
  }
}
