import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

import { handleAddToCart } from '../../../redux/actions/cart'
import Icon from '@mdi/react'
import { mdiCartPlus } from '@mdi/js'
import { AppDispatch } from '../../../redux/store'

type CartBtnProps = {
  productID: number
}

const CartBtn = ({ productID }: CartBtnProps) => {
  const { products } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <button onClick={() => dispatch(handleAddToCart(productID, products.all))}>
      <span>Cart</span>
      <Icon className="text-gray-300" path={mdiCartPlus} size={2} />
    </button>
  )
}

export default CartBtn
