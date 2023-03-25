import { mdiAccountMultiple } from '@mdi/js'
import Icon from '@mdi/react'

import { Product } from '../../../types'

import DetailsBtn from '../detailsBtn/DetailsBtn'

const ProductCard = ({ name, price, reviews }: Product) => {
  return (
    <div className="text-gray-300 bg-slate-500">
      {/* Top section */}
      <div>
        <DetailsBtn />
      </div>
      {/* Midle section */}
      <div>
        <span>{name}</span> <br />
        <span>price:{price}</span>
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
