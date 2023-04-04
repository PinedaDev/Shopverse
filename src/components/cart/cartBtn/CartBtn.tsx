import { useDispatch } from 'react-redux'

import { handleAddToCart } from '../../../redux/actions/cart'
import { AppDispatch } from '../../../redux/store'
import { Order } from '../../../types'

type CartBtnProps = {
  order: Order
}

const CartBtn = ({ order }: CartBtnProps) => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div>
      <button
        className="flex justify-around items-center duration-300 
        ease-in-out bg-gray-900 hover:bg-black 
        rounded-lg p-1 lg:p-2 min-w-[6rem] lg:min-w-fit"
        onClick={() => dispatch(handleAddToCart(order))}>
        <span className="text-xl lg:text-2xl">Add</span>
      </button>
    </div>
  )
}

export default CartBtn
