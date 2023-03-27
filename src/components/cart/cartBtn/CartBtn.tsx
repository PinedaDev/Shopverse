import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

import { handleAddToCart } from '../../../redux/actions/cart'
import { AppDispatch } from '../../../redux/store'

type CartBtnProps = {
  productID: number
}

const CartBtn = ({ productID }: CartBtnProps) => {
  const { products } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div>
      <button
        className="flex justify-around items-center duration-300 
        ease-in-out bg-gray-900 hover:bg-black 
        rounded-lg p-1 lg:p-2 min-w-[6rem] lg:min-w-fit"
        onClick={() => dispatch(handleAddToCart(productID, products.all))}>
        <span className="text-xl lg:text-2xl">Add</span>
      </button>
    </div>
  )
}

export default CartBtn
