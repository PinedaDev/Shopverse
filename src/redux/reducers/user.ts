import { AnyAction } from 'redux'
import { GoogleUser } from '../../types'
import { USER_LOGIN, USER_LOGOUT } from '../actions/user'

type UserState = {
  info: GoogleUser | null
}

export const initialUserState: UserState = {
  info: null
}

export function userReducer(state = initialUserState, action: AnyAction) {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        info: action.payload
      }
    }
    case USER_LOGOUT: {
      return {
        ...state,
        info: null
      }
    }
    default:
      return state
  }
}
