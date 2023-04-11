import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from '../../redux/actions/user'
import { handleToggleCart } from '../../redux/actions/cart'
import { AppDispatch, RootState } from '../../redux/store'

import MenuBtn from './MenuBtn'

type DropdownMenuProps = {
  changeMenuState: () => void
  menuState: boolean
}

const DropdownMenu = ({ changeMenuState, menuState }: DropdownMenuProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { cart } = useSelector((state: RootState) => state)
  const { user } = useSelector((state: RootState) => state)

  function menuItemHandler() {
    return new Promise<void>((resolve) => {
      resolve(changeMenuState())
    })
  }
  const hidden = 'opacity-0 invisible'
  const visible = 'opacity-1 visible'

  return (
    <div
      className={`absolute grid gap-12 p-4 place-items-center top-0 left-0 text-gray-300  
      backdrop-blur-xl min-h-screen w-screen bg-[rgba(0,0,0,.8)] duration-300 ease-in-out z-50 ${
        !menuState ? hidden : visible
      }`}>
      <span className="absolute top-3 left-[82%]">
        <MenuBtn menuState={menuState} onClick={changeMenuState} />
      </span>

      <ul className="text-2xl grid gap-12 text-center">
        {user.info ? (
          <li>
            <div className="flex items-center">
              <img
                className=" rounded-full max-w-[40px] border-2"
                src={user?.info?.picture}
                alt=""
              />
              <span className="ml-3 text-2xl">{user?.info?.name}</span>
            </div>
          </li>
        ) : (
          ''
        )}
        <li className="relative">
          <button
            className="relative"
            onClick={() => menuItemHandler().then(() => dispatch(handleToggleCart()))}>
            {cart && cart.orders.length > 0 ? (
              <span
                className={`flex items-center justify-center 
                  absolute top-0 -left-4 h-4 w-4 bg-red-500 
                  rounded-full text-white z-0`}>
                {cart.orders.length}
              </span>
            ) : (
              ''
            )}
            Cart
          </button>
        </li>
        {!user.info ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <button className="text-2xl" onClick={() => dispatch(logout())}>
            Signout
          </button>
        )}
      </ul>
    </div>
  )
}
export default DropdownMenu
