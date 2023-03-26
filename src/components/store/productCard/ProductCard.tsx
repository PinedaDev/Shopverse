import Icon from '@mdi/react'
import { mdiAccountMultiple } from '@mdi/js'
import { mdiStarOutline } from '@mdi/js'

import { Product } from '../../../types'

import DetailsBtn from '../detailsBtn/DetailsBtn'

const ProductCard = ({ name, price, reviews, img, stars }: Product) => {
  const showStars = Array(stars)
    .fill('')
    .map((_, i) => <Icon key={i} path={mdiStarOutline} size={1} />)

  return (
    <div className="relative text-gray-300 backdrop-blur-lg p-4 backdrop-brightness-125 rounded-xl">
      {/* Top section */}
      <div>
        <DetailsBtn />
      </div>
      {/* Midle section */}
      <div className="grid place-items-center">
        <span className="w-full text-center text-xl">{name}</span> <br />
        <img width="279px" height="279px" className="w-2/4" src={`../../../productImgs/${img}`} />
        <span className="text-xl">{price}.00 €</span>
      </div>
      {/* Bottom section */}
      <div className="grid place-items-center">
        <span className="flex justify-around items-center">
          user ratings: {reviews}
          <Icon className="text-gray-300 ml-2 mr-2" path={mdiAccountMultiple} size={1} />
        </span>
        {/* Stars Count */}
        <div className="flex justify-around items-center w-[70%]">{showStars}</div>
      </div>
    </div>
  )
}

export default ProductCard
