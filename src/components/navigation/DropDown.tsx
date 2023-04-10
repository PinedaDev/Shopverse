import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { handleToggleCart } from '../../redux/actions/cart'
import { AppDispatch, RootState } from '../../redux/store'
import { Link } from 'react-router-dom'
import Icon from '../global/Icon'
import MenuBtn from './MenuBtn'

type DropdownMenuProps = {
  changeMenuState: () => void
  menuState: boolean
}

const DropdownMenu = ({ changeMenuState, menuState }: DropdownMenuProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { cart } = useSelector((state: RootState) => state)

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
        <li className="relative">
          {cart && cart.orders.length > 0 ? (
            <span
              className={`flex items-center justify-center 
          absolute top-0 -left-2 h-4 w-4 bg-red-500 
          rounded-full text-white z-0`}>
              {cart.orders.length}
            </span>
          ) : (
            ''
          )}
          <button onClick={() => menuItemHandler().then(() => dispatch(handleToggleCart()))}>
            Cart
          </button>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  )
}
export default DropdownMenu
