import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

import { handleAddToCart } from '../../../redux/actions/cart'
import { handleRemoveFromCart } from '../../../redux/actions/cart'
import Icon from '@mdi/react'
import { mdiCartPlus } from '@mdi/js'
import { mdiCartMinus } from '@mdi/js'
import { AppDispatch } from '../../../redux/store'

type CartBtnProps = {
  productID: number
}

const CartBtn = ({ productID }: CartBtnProps) => {
  const { products } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div>
      <button onClick={() => dispatch(handleAddToCart(productID, products.all))}>
        <span>Add</span>
        <Icon className="text-gray-300" path={mdiCartPlus} size={2} />
      </button>
      <button onClick={() => dispatch(handleRemoveFromCart(productID, products.all))}>
        <span>Remove</span>
        <Icon className="text-gray-300" path={mdiCartMinus} size={2} />
      </button>
    </div>
  )
}

export default CartBtn
