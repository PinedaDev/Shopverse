import { useState } from 'react'

import Logo from '../../logo/Logo'
import NavOptions from '../navOptions/NavOptions'
import DropdownMenu from '../dropDown/DropDown'

const NavBar = () => {
  const [menuState, setMenuState] = useState<boolean>(false)

  const changeMenuState = (): void => {
    setMenuState((prevState) => !prevState)
  }
  return (
    <div className="relative flex justify-between p-2 items-center">
      <Logo />
      <span className="text-gray-300 md:hidden">SHOPVERSE</span>
      <DropdownMenu menuState={menuState} changeMenuState={changeMenuState} />
      <NavOptions menuState={menuState} changeMenuState={changeMenuState} />
    </div>
  )
}

export default NavBar
