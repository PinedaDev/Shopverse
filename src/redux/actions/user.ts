import { GoogleUser } from '../../types'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

export function login(user: GoogleUser) {
  const newUser = {
    ...user,
    role: user.email === 'abrahampineda818@gmail.com' ? 'ADMIN' : 'USER'
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
