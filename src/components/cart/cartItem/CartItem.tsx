import React from 'react'
import Amount from '../amount/Amount'

type CartItemProps = {
  id: number
  name: string
  img: string
  price: number
  size: number
  color: string
  quantity: number
}

const CartItem = ({ id, name, img, price, size, color, quantity }: CartItemProps) => {
  return (
    <div>
      {/* first section wrapper */}
      <div>
        <div>
          <span>{name}</span>
          <span className="hidden lg:block">Product</span>
          <img src={`../../../productImgs/${img}`} alt="" />
        </div>
        <div>
          <span>Name</span>
          <span>{name}</span>
        </div>
      </div>
      {/* second section wrapper */}
      <div>
        <div>
          <span>Price</span>
          <span>{price}</span>
        </div>

        <div>
          <span>Amount</span>
          <Amount value={quantity} />
        </div>

        <div>
          <span>Color</span>
          <span>{color}</span>
        </div>

        <div>
          <span>Size</span>
          <span>{size}</span>
        </div>
      </div>
    </div>
  )
}

export default CartItem
