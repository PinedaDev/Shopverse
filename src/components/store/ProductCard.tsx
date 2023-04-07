import Icon from '../global/Icon'

import { Product } from '../../types'

import DetailsBtn from './DetailsBtn'

type ProductCardProps = {
  product: Product
  openDetails: (productID: number) => void
}

const ProductCard = ({ product, openDetails }: ProductCardProps) => {
  const showStars = Array(product.stars)
    .fill('')
    .map((_, i) => <Icon key={i} iconRef="mdi-star-outline" />)
  return (
    <div className=" text-gray-300 backdrop-blur-lg p-4 backdrop-brightness-125 duration-300 ease-in-out rounded-xl shadow-md hover:shadow-gray-400">
      {/* Top section */}
      <div>
        <DetailsBtn productID={product.id} openDetails={openDetails} />
      </div>
      {/* Midle section */}
      <div className="grid place-items-center">
        <span className="w-full text-center text-xl">{product.name}</span> <br />
        <img
          width="279px"
          height="279px"
          className="w-2/4"
          src={`../../../productImgs/${product.img}`}
        />
        <span className="text-xl">{product.price}.00 €</span>
      </div>
      {/* Bottom section */}
      <div className="grid place-items-center">
        <span className="flex justify-around items-center">
          user ratings: {product.reviews}
          <Icon iconRef="mdi-account-multiple" />
        </span>
        {/* Stars Count */}
        <div className="flex justify-around items-center w-[70%]">{showStars}</div>
      </div>
    </div>
  )
}

export default ProductCard
