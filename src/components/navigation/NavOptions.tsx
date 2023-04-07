import CartLink from '../cart/CartLink'
import MenuBtn from './MenuBtn'

type NavOptionsProps = {
  menuState: boolean
  changeMenuState: () => void
}

const NavOptions = ({ menuState, changeMenuState }: NavOptionsProps) => {
  return (
    <div className="items-center text-gray-300 mr-2 flex ">
      <button className="hidden text-2xl lg:inline">Login</button>
      <CartLink />
      <MenuBtn menuState={menuState} onClick={changeMenuState} />
    </div>
  )
}

export default NavOptions
