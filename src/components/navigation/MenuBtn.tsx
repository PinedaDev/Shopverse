import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'

import Icon from '../global/Icon'

type MenuBtnProps = {
  menuState: boolean
  onClick: () => void
}

const MenuBtn = ({ onClick, menuState }: MenuBtnProps) => {
  const { cart } = useSelector((state: RootState) => state)
  return (
    <button onClick={onClick} className="relative lg:hidden">
      {cart && cart.orders.length > 0 && !menuState && (
        <span
          className="flex items-center justify-center 
          absolute top-0 -left-2 h-4 w-4 bg-white 
          rounded-full text-white z-0"></span>
      )}
      {/* <Icon path={menuState === false ? mdiMenu : mdiClose} color="#fff" size={1.5} /> */}
      <Icon iconRef={`${menuState === false ? 'mdi-menu' : 'mdi-close'}`} />
    </button>
  )
}
export default MenuBtn
