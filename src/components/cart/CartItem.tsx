import { useDispatch } from 'react-redux'

import { handleRemoveFromCart } from '../../redux/actions/cart'
import Amount from './Amount'
import Icon from '../global/Icon'
import { AppDispatch } from '../../redux/store'

type CartItemProps = {
  id: string
  name: string
  img: string
  price: number
  size: number
  color: string
  quantity: number
}

const CartItem = ({ id, name, img, price, size, color, quantity }: CartItemProps) => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div
      className="bg-[rgba(0,0,0,0.45)] p-1 rounded-xl h-fit
      lg:grid lg:place-items-center lg:grid-cols-4 lg:p-3 min-w-full">
      {/* first section wrapper */}
      <div className="lg:flex">
        <div className="grid place-items-center text-lg">
          <span className="lg:hidden">{name}</span>
          <img height="100px" width="80px" src={img} alt="" />
        </div>
      </div>
      {/* second section wrapper */}
      <div className="flex justify-around lg:grid lg:grid-cols-6 lg:col-span-3 w-full">
        <div className={`hidden lg:${columnStyles}`}>
          <span>Name</span>
          <span>{name}</span>
        </div>
        <div className={`${columnStyles}`}>
          <span>Price</span>
          <span>{price}.00€</span>
        </div>

        <div className={`${columnStyles}`}>
          <span>Amount</span>
          <Amount id={id} value={quantity} />
        </div>

        <div className={`${columnStyles}`}>
          <span>Color</span>
          <span>{color}</span>
        </div>

        <div className={`${columnStyles}`}>
          <span>Size</span>
          <span>{size}</span>
        </div>
        <div className={`${columnStyles}`}>
          <button
            className="hover:text-red-500 duration-300"
            onClick={() => dispatch(handleRemoveFromCart(id))}>
            <Icon iconRef="mdi-trash-can-outline" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem

const columnStyles = 'grid place-items-center m-auto'
