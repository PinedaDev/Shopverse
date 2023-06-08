import axios from 'axios'
import { Dispatch } from 'redux'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

export function login(token: string) {
  return {
    type: USER_LOGIN,
    payload: token
  }
}

export function logout() {
  return {
    type: USER_LOGOUT,
    payload: null
  }
}

export const signinUserThunk =
  (data: { username: string; password: string }) => async (dispatch: Dispatch) => {
    try {
      const req = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/api/v1/users/signin`, data)
      const res = req.data
      console.log(res)
      if (req.status !== 200) throw res
      alert('Logged in')
      dispatch(login(res.token))
      localStorage.setItem('token', res.token)
    } catch (error) {
      console.log(error)
      console.log('Something is wrong')
    }
  }
