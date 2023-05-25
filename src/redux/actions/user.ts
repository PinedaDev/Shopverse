import { GoogleUser } from '../../types'
import axios from 'axios'
import { Dispatch } from 'redux'

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

export const signinUserThunk = (data: { username: string; password: string }) => async () => {
  try {
    const req = await axios.post(`${import.meta.env.VITE_BASE_API_URL}signin`, data)
    const res = req.data
    if (req.status != 200) throw res
    localStorage.setItem('access_token', res.token)
  } catch (error) {
    console.log(error)
  }
}
