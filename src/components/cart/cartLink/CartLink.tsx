import Icon from '@mdi/react'
import { Link } from 'react-router-dom'
import { mdiCart } from '@mdi/js'

const CartLink = () => {
  return (
    <Link to="/cart">
      <div className="hidden relative items-center ml-10 lg:flex">
        {/* <span
          className="flex items-center justify-center 
          absolute top-0 -left-2 h-4 w-4 bg-red-500 
          rounded-full text-white z-0"></span> */}
        <Icon path={mdiCart} color="#fff" size={1.5} />
      </div>
    </Link>
  )
}

export default CartLink
