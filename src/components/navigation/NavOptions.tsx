import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import { logout } from '../../redux/actions/user'

import CartLink from '../cart/CartLink'
import MenuBtn from './MenuBtn'
import Icon from '../global/Icon'

type NavOptionsProps = {
  menuState: boolean
  changeMenuState: () => void
}

const NavOptions = ({ menuState, changeMenuState }: NavOptionsProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { user } = useSelector((state: RootState) => state)
  return (
    <div className="items-center text-gray-300 mr-2 flex justify-around lg:space-x-3 xl:space-x-12">
      {user.id != '' ? (
        <>
          <div className="hidden lg:flex items-center">
            <span className="ml-3 text-2xl">{user.username}</span>
          </div>
          <button className="hidden text-2xl lg:inline" onClick={() => dispatch(logout())}>
            Signout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="hidden text-2xl lg:inline">
            Login
          </Link>
          <Link to="/signup" className="hidden text-2xl lg:inline">
            Signup
          </Link>
        </>
      )}
      <CartLink />
      <MenuBtn menuState={menuState} onClick={changeMenuState} />
      {user && user.role === 'ADMIN' ? (
        <Link className="hidden lg:inline" to="/dashboard">
          <Icon iconRef="mdi-cog" />
        </Link>
      ) : (
        ''
      )}
    </div>
  )
}

export default NavOptions
