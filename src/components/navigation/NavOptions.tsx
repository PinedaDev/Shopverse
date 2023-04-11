import { useSelector } from 'react-redux'
import CartLink from '../cart/CartLink'
import MenuBtn from './MenuBtn'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/user'
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
      {user.info ? (
        <>
          <div className="hidden lg:flex items-center">
            <img className=" rounded-full max-w-[40px] border-2" src={user?.info?.picture} alt="" />
            <span className="ml-3 text-2xl">{user?.info?.given_name}</span>
          </div>
          <button className="hidden text-2xl lg:inline" onClick={() => dispatch(logout())}>
            Signout
          </button>
        </>
      ) : (
        <Link to="/login" className="hidden text-2xl lg:inline">
          Login
        </Link>
      )}
      <CartLink />
      <MenuBtn menuState={menuState} onClick={changeMenuState} />
      {user.info && user.info.role === 'ADMIN' ? (
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
