import { useSelector } from 'react-redux'
import Icon from '../global/Icon'

import { AppDispatch, RootState } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { handleToggleCart } from '../../redux/actions/cart'
import { CartOrder } from '../../types'

const CartLink = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { cart } = useSelector((state: RootState) => state)

  const itemsInCart = (ordersList: CartOrder[]): number => {
    let totalOrders = 0
    ordersList.forEach((order) => {
      totalOrders += order.quantity
    })
    return totalOrders
  }

  const showCount = () => {
    return (
      <span
        className={`hidden items-center justify-center 
          absolute top-0 -left-2 h-4 w-4 bg-red-500 
          rounded-full text-white z-0 lg:flex`}>
        {cart && itemsInCart(cart.orders)}
      </span>
    )
  }
  return (
    <button onClick={() => dispatch(handleToggleCart())}>
      <div className="hidden relative items-center lg:flex">
        {cart && cart.orders.length > 0 && showCount()}
        <Icon iconRef="mdi-cart" />
      </div>
    </button>
  )
}

export default CartLink
