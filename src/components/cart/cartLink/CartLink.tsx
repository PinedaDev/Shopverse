import Icon from '@mdi/react'
import { Link } from 'react-router-dom'
import { mdiCart } from '@mdi/js'

type CartLinkProps = {
  menuState: boolean
}

const CartLink = ({ menuState }: CartLinkProps) => {
  return (
    <Link to="/cart">
      <div className="relative flex items-center ml-10">
        <span
          className="flex items-center justify-center 
          absolute top-0 -left-2 h-4 w-4 bg-red-500 
          rounded-full text-white">
          3
        </span>
        <Icon path={mdiCart} color={menuState === false ? '#fff' : '#000'} size={1.5} />
      </div>
    </Link>
  )
}

export default CartLink
