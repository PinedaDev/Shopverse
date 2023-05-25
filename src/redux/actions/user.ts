import { GoogleUser } from '../../types'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { AppDispatch } from '../store'

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
      const req = await axios.post(`${import.meta.env.VITE_BASE_API_URL}signin`, data)
      const res = req.data
      if (req.status != 200) throw res
      console.log('sucess', res)
      dispatch(login(res.token))
      localStorage.setItem('token', res.token)
    } catch (error) {
      console.log(error)
    }
  }
