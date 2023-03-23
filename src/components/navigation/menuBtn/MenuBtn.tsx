import Icon from '@mdi/react'
import { mdiMenu, mdiClose } from '@mdi/js'

type MenuBtnProps = {
  menuState: boolean
  onClick: () => void
}

const MenuBtn = ({ onClick, menuState }: MenuBtnProps) => {
  return (
    <button onClick={onClick} className="lg:hidden">
      <Icon path={menuState === false ? mdiMenu : mdiClose} size={1} />
    </button>
  )
}
export default MenuBtn
