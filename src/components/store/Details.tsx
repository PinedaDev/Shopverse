import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { CartOrder } from '../../types'
import { RootState } from '../../redux/store'
import { Product } from '../../types'

import Icon from '../global/Icon'
import VariantSelector from './VariantSelector'
import CartBtn from '../cart/CartBtn'

type DetailsProps = {
  detailsState: { productID: string; detailsOpen: boolean }
  closeDetails: () => void
}

const Details = ({ detailsState, closeDetails }: DetailsProps) => {
  const { products } = useSelector((state: RootState) => state)
  const { cart } = useSelector((state: RootState) => state)
  const details: Product = products.all.find(
    (product: Product) => product.id === detailsState.productID
  )
  const [size, setSize] = useState<number>(0)
  const [color, setColor] = useState<string>('')

  const [cartOrder, setCartOrder] = useState<CartOrder>({
    id: '',
    productId: '',
    name: '',
    img: '',
    size: 0,
    color: '',
    price: 0,
    quantity: 0
  })

  useEffect(() => {
    if (detailsState.productID !== '') {
      setCartOrder({
        id: details.id,
        productId: details.id,
        name: details.name,
        img: details.img,
        size: details.sizes[0],
        color: details.colors[0],
        price: details.price,
        quantity: 1
      })
    }
  }, [detailsState.productID])

  useEffect(() => {
    setCartOrder({ ...cartOrder, size: size })
  }, [size])
  useEffect(() => {
    setCartOrder({ ...cartOrder, color: color })
  }, [color])

  const [addedAlert, setAddedAlert] = useState(false)

  useEffect(() => {
    if (cart.orders.length > 0) {
      setAddedAlert(true)
      setTimeout(() => setAddedAlert(false), 1000)
    }
  }, [cart.orders])
  const handleSizeChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setSize(Number(event.currentTarget.value))
  }
  const handleColorChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setColor(event.currentTarget.value)
  }

  const showDetails = () => {
    const showStars = Array(details.stars)
      .fill('')
      .map((_, i) => <Icon key={i} iconRef="mdi-star-outline" />)

    return (
      <>
        {/* First Details Column */}
        <div className="relative grid place-items-center">
          <span className="w-full text-center text-xl lg:text-4xl">{details.name}</span>
          <img width="279px" height="279px" className="w-2/4 mt-3 mb-3" src={details.img} />
          <span className="flex justify-around items-center lg:text-xl">
            user ratings: {details.reviews}
            <Icon iconRef="mdi-account-multiple" />
          </span>

          <div className="flex justify-around items-center mt-3 mb-3 w-[70%] lg:w-[50%]">
            {showStars}
          </div>

          <div className=" mt-3 justify-around w-full hidden lg:flex">
            <VariantSelector
              variantState={color}
              handleVariant={handleColorChange}
              title="Color"
              variants={details.colors}
            />
            <VariantSelector
              variantState={size}
              handleVariant={handleSizeChange}
              title="Size"
              variants={details.sizes}
            />
          </div>
        </div>

        {/* Second Details Column */}
        <div className="grid place-items-center">
          {/* Alert that the Item has been added */}
          <div
            className={`absolute top-2/4 left-2/4 duration-300 -translate-x-2/4 text-center text-2xl text-gray-900 p-2 font-bold rounded-xl bg-cyan-500 ${
              addedAlert ? 'opacity-1' : 'opacity-0'
            }`}>
            Added to the cart
          </div>
          <span className="block mt-3 mb-3">Description:</span>
          <p className="lg:text-2xl">{details.description}</p>
          <span className="mt-3 text-3xl lg:text-3xl">{details.price}.00 €</span>
          <div className="flex mt-3 justify-around w-full lg:hidden">
            <VariantSelector
              variantState={color}
              handleVariant={handleColorChange}
              title="Color"
              variants={details.colors}
            />
            <VariantSelector
              variantState={size}
              handleVariant={handleSizeChange}
              title="Size"
              variants={details.sizes}
            />
          </div>

          <div className="grid gap-3 place-items-center mt-3 pb-3 lg:flex">
            <CartBtn order={cartOrder} />
          </div>
        </div>
      </>
    )
  }

  return (
    <div
      className={`absolute bg-[rgba(255,255,255,.1)] w-5/6 h-4/5 
      top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-30 
      backdrop-blur-xl rounded-lg p-4 overflow-y-auto lg:h-max lg:w-7/12
      ${detailsState.detailsOpen ? 'visible' : 'hidden'}`}>
      {/* Details Content Container */}
      <div className="relative grid place-items-center text-gray-300">
        <button className="absolute top-0 left-[95%] lg:left-[95%] z-40" onClick={closeDetails}>
          <Icon iconRef="mdi-close" />
        </button>
        <div className="grid lg:grid-cols-2">
          {detailsState.productID !== '' ? showDetails() : ''}
        </div>
      </div>
    </div>
  )
}

export default Details
