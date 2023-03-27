import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { handleToggleCart } from '../../redux/actions/cart'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { cart } = useSelector((state: RootState) => state)

  return (
    <div
      className={`absolute bg-overlay w-screen h-screen duration-300 
      translate-x-full top-0 left-0 z-30 backdrop-blur-xl
        ${cart.cartOpen ? '-translate-x-0' : ''}`}>
      <span className="block text-center text-gray-300 text-xl p-4">Cart</span>
      <div
        className="absolute bg-[rgba(255,255,255,.2)] w-5/6 h-4/5 
      top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-30 
      backdrop-blur-xl rounded-lg p-4 overflow-y-scroll lg:w-3/4">
        <div className="relative">
          <button
            onClick={() => dispatch(handleToggleCart())}
            className="absolute top-0 left-[90%] lg:left-[98%]">
            <Icon path={mdiClose} size={1.5} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
