import { useSelector } from 'react-redux'

import Icon from '@mdi/react'
import { mdiClose, mdiAccountMultiple, mdiStarOutline } from '@mdi/js'

import { RootState } from '../../../redux/store'
import { Product } from '../../../types'

import VariantSelector from '../../variantSelector/VariantSelector'
import CartBtn from '../../cart/cartBtn/CartBtn'
import BuyBtn from '../buyBtn/BuyBtn'

type DetailsProps = {
  details: { productID: number; detailsOpen: boolean }
  closeDetails: () => void
}

const Details = ({ details, closeDetails }: DetailsProps) => {
  const { products } = useSelector((state: RootState) => state)

  const showDetails = () => {
    const getProdductDetails: Product[] = products.all.filter((product: Product) =>
      product.id === details.productID ? true : ''
    )

    const productDetails: Product = getProdductDetails[0]

    const showStars = Array(productDetails.stars)
      .fill('')
      .map((_, i) => <Icon key={i} path={mdiStarOutline} size={1} />)
    return (
      <>
        {/* First Details Column */}
        <div className="grid place-items-center">
          <span className="w-full text-center text-xl lg:text-4xl">{productDetails.name}</span>
          <img
            width="279px"
            height="279px"
            className="w-2/4 mt-3 mb-3"
            src={`../../../productImgs/${productDetails.img}`}
          />
          <span className="flex justify-around items-center lg:text-xl">
            user ratings: {productDetails.reviews}
            <Icon className="text-gray-300 ml-2 mr-2" path={mdiAccountMultiple} size={1} />
          </span>
          <div className="flex justify-around items-center mt-3 mb-3 w-[70%] lg:w-[50%]">
            {showStars}
          </div>
          <div className=" mt-3 justify-around w-full hidden lg:flex">
            <VariantSelector title="Color" variants={productDetails.variants} />
            <VariantSelector title="Size" variants={productDetails.sizes} />
          </div>
        </div>
        {/* Second Details Column */}
        <div className="grid place-items-center">
          <span className="block mt-3 mb-3">description:</span>
          <p className="lg:text-2xl">{productDetails.description}</p>
          <span className="mt-3 text-3xl lg:text-3xl">{productDetails.price}.99 €</span>
          <div className="flex mt-3 justify-around w-full lg:hidden">
            <VariantSelector title="Color" variants={productDetails.variants} />
            <VariantSelector title="Size" variants={productDetails.sizes} />
          </div>
          <div className="grid gap-3 place-items-center mt-3 pb-3 lg:flex">
            <BuyBtn />
            <CartBtn productID={productDetails.id} />
          </div>
        </div>
      </>
    )
  }

  return (
    <div
      className={`absolute bg-[rgba(255,255,255,.1)] w-5/6 h-4/5 
      top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-30 
      backdrop-blur-xl rounded-lg p-4 overflow-y-scroll lg:h-max lg:w-2/4
      ${details.detailsOpen ? 'visible' : 'hidden'}`}>
      {/* Details Content Container */}
      <div className="relative grid place-items-center text-gray-300">
        <button className="absolute top-0 left-[90%] lg:left-[95%]" onClick={closeDetails}>
          <Icon path={mdiClose} size={1.5} className="text-gray-300 lg:text-3xl" />
        </button>
        <div className="grid lg:grid-cols-2">{details.productID !== 0 ? showDetails() : ''}</div>
      </div>
    </div>
  )
}

export default Details
