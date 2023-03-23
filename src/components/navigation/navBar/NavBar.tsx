import { useState } from 'react'

import Logo from '../../logo/Logo'
import NavOptions from '../navOptions/NavOptions'
import DropdownMenu from '../dropDown/DropDown'
import MenuBtn from '../menuBtn/MenuBtn'

const NavBar = () => {
  const [menuState, setMenuState] = useState<boolean>(false)

  const changeMenuState = (): void => {
    setMenuState((prevState) => !prevState)
  }
  return (
    <div className="relative flex justify-between p-2 items-center">
      <Logo />
      <span className="font-light text-2xl text-gray-300 lg:hidden">SHOPVERSE</span>
      <MenuBtn menuState={menuState} onClick={changeMenuState} />
      <DropdownMenu menuState={menuState} changeMenuState={changeMenuState} />
      <NavOptions menuState={menuState} />
    </div>
  )
}

export default NavBar
