import { mdiAccountMultiple } from '@mdi/js'
import { mdiStarOutline } from '@mdi/js'

import DetailsBtn from '../detailsBtn/DetailsBtn'
import BuyBtn from '../buyBtn/BuyBtn'
import AddBtn from '../addBtn/AddBtn'
import Icon from '@mdi/react'

type ProductProps = {
  id: number
  name: string
  price: number
  reviews: number
  stars: number
}

const ProductCard = ({ id, name, price, reviews, stars }: ProductProps) => {
  return (
    <div className="text-gray-300 bg-slate-500">
      {/* Top section */}
      <div>
        <DetailsBtn />
        <BuyBtn />
        <AddBtn />
      </div>
      {/* Midle section */}
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      {/* Bottom section */}
      <div>
        <span>
          user rating:
          <Icon className="text-gray-300" path={mdiAccountMultiple} size={2} />
          {reviews}
        </span>
        {/* Stars Count */}
        <div></div>
      </div>
    </div>
  )
}

export default ProductCard
