import { useState } from 'react'

import Logo from '../../logo/Logo'
import DropdownMenu from '../dropDown/DropDown'
import MenuBtn from '../menuBtn/MenuBtn'

const NavBar = () => {
  const [menuState, setMenuState] = useState<boolean>(false)

  const changeMenuState = (): void => {
    setMenuState((prevState) => !prevState)
  }
  return (
    <div>
      <Logo />
      <MenuBtn menuState={menuState} onClick={changeMenuState} />
      <DropdownMenu menuState={menuState} changeMenuState={changeMenuState} />
    </div>
  )
}

export default NavBar
