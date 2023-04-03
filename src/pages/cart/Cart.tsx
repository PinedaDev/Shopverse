import { AppDispatch, RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'

import { handleToggleCart } from '../../redux/actions/cart'
import { Order } from '../../types'
import CartItem from '../../components/cart/cartItem/CartItem'

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { cart } = useSelector((state: RootState) => state)
  const [total, setTotal] = useState<number>(0)
  function getTotal(orders: Order[]): number {
    let sum = 0
    if (orders) {
      orders.forEach((order) => {
        sum += order.price * order.quantity
      })
    }
    return sum
  }
  const showOrders = () => {
    return (
      <ul className="grid gap-3 list-none lg:mx-10 overflow-y-auto">
        {cart.orders.map((order: Order) => (
          <li key={`${order.id}${order.name}`}>
            <CartItem {...order} />
          </li>
        ))}
      </ul>
    )
  }
  const showTotal = () => {
    return <span className="text-lg block text-center lg:text-2xl">TOTAL : {total} €</span>
  }
  useEffect(() => {
    setTotal(getTotal(cart.orders))
  }, [cart.orders])
  return (
    <div
      className={`absolute w-screen h-screen duration-300 
       top-0 left-0 z-30 bg-[rgba(0,0,0,.84)]
        ${cart && cart.cartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <span className="block text-center text-gray-300 text-xl p-4">CART</span>
      <div
        className="absolute  w-[95%] h-[85%]
      top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-30  text-white
      backdrop-blur-xl backdrop-brightness-[2.7] rounded-lg p-4 overflow-y-auto lg:h-4/5 lg:w-[90%]
      
      lg:flex lg:flex-row-reverse lg:justify-center lg:py-20">
        <button
          onClick={() => dispatch(handleToggleCart())}
          className="absolute top-2 left-[90%] lg:left-[97%] z-40">
          <Icon path={mdiClose} size={1.5} color="#fff" />
        </button>
        <div className="relative lg:mx-10">
          {cart.orders.length > 0 && showTotal()}
          <hr className="w-11/12 my-3 mx-auto lg:hidden" />
        </div>
        {cart.orders.length > 0 ? showOrders() : <h1>cart is empty</h1>}
      </div>
    </div>
  )
}

export default Cart
