import { useState } from 'react'

const NavBar = () => {
  const linkNames = ['Home', 'Services', 'Blogs', 'Contact']
  const [menuState, setMenuState] = useState(false)

  const changeMenuState = (): void => {
    setMenuState((prevState) => !prevState)
  }
  return <div>NavBar</div>
}

export default NavBar
