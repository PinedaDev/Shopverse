import MenuBtn from '../menuBtn/MenuBtn'

type DropdownMenuProps = {
  changeMenuState: () => void
  menuState: boolean
}

const DropdownMenu = ({ changeMenuState, menuState }: DropdownMenuProps) => {
  const hidden = {
    opacity: '0',
    transform: 'translateY(-100%)'
  }

  const visible = {
    opacity: '1',
    transform: 'translateY(0)'
  }
  return (
    <div
      style={!menuState ? hidden : visible}
      className="absolute top-0 left-0  min-h-screen w-screen bg-white duration-300 ease-in-out">
      <MenuBtn menuState={menuState} onClick={changeMenuState} />
    </div>
  )
}
export default DropdownMenu
