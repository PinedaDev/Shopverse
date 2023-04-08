import { useSelector } from 'react-redux'
import CartLink from '../cart/CartLink'
import MenuBtn from './MenuBtn'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/user'

type NavOptionsProps = {
  menuState: boolean
  changeMenuState: () => void
}

const NavOptions = ({ menuState, changeMenuState }: NavOptionsProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { user } = useSelector((state: RootState) => state)
  return (
    <div className="items-center text-gray-300 mr-2 flex justify-around space-x-12">
      {user.info ? (
        <>
          <span className="text-2xl">{`${user.info.given_name} ${user.info.family_name}`}</span>
          <button className="text-2xl" onClick={() => dispatch(logout())}>
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
    </div>
  )
}

export default NavOptions
