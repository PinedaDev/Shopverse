import CartLink from '../../cart/cartLink/CartLink'

type NavOptionsProps = {
  menuState: boolean
}

const NavOptions = ({ menuState }: NavOptionsProps) => {
  return (
    <div className="hidden items-center text-gray-300 mr-2 lg:flex ">
      <button className="text-2xl">Login</button>
      <CartLink menuState={menuState} />
    </div>
  )
}

export default NavOptions
