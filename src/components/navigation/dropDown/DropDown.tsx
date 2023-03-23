import MenuBtn from '../menuBtn/MenuBtn'

type DropdownMenuProps = {
  changeMenuState: () => void
  menuState: boolean
}

const DropdownMenu = ({ changeMenuState, menuState }: DropdownMenuProps) => {
  const hidden = {
    opacity: '0',
    translate: '(-100%, 0)'
  }

  const visible = {
    opacity: '1',
    translate: '(0, 0)'
  }
  return (
    <div style={!menuState ? hidden : visible} className="min-h-screen bg-white">
      <MenuBtn menuState={menuState} onClick={changeMenuState} />
    </div>
  )
}
export default DropdownMenu
