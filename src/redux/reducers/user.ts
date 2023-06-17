import { AnyAction } from 'redux'
import { GoogleUser } from '../../types'
import { USER_LOGIN, USER_LOGOUT } from '../actions/user'
import jwtDecode from 'jwt-decode'

type UserState = {
  id: string
  username: string
  role: 'ADMIN' | 'USER' | null
}

type DecodedInfo = {
  exp: number
  iat: number
  role: 'ADMIN' | 'USER'
  sub: string
  user_id: string
  username: string
}

export const initialUserState: UserState = {
  id: '',
  username: '',
  role: null
}

export function userReducer(state = initialUserState, action: AnyAction) {
  switch (action.type) {
    case USER_LOGIN: {
      const accessToken: string = action.payload
      const decodedInfo: DecodedInfo = jwtDecode(accessToken)
      return {
        ...state,
        id: decodedInfo.user_id,
        username: decodedInfo.username,
        role: decodedInfo.role
      }
    }
    case USER_LOGOUT: {
      localStorage.clear()
      return {
        ...initialUserState
      }
    }
    default:
      return state
  }
}
