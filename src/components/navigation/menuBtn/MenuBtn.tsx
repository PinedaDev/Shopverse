import Icon from '@mdi/react'
import { mdiMenu, mdiClose } from '@mdi/js'

type MenuBtnProps = {
  menuState: boolean
  onClick: () => void
}

const MenuBtn = ({ onClick, menuState }: MenuBtnProps) => {
  return (
    <button onClick={onClick} className="ml-4 lg:hidden">
      <Icon
        path={menuState === false ? mdiMenu : mdiClose}
        color={menuState === false ? '#fff' : '#000'}
        size={1.5}
      />
    </button>
  )
}
export default MenuBtn
