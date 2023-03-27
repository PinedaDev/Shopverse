import { mdiClose } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { Product } from '../../../types'

type DetailsProps = {
  details: { productID: number; detailsOpen: boolean }
  closeDetails: () => void
}

const Details = ({ details, closeDetails }: DetailsProps) => {
  const { products } = useSelector((state: RootState) => state)

  const getProdductDetails: Product[] = products.all.filter((product: Product) =>
    product.id === details.productID ? true : ''
  )

  const productDetails: Product = getProdductDetails[0]

  const showDetails = () => {
    return (
      <>
        <span>{productDetails.name}</span>
      </>
    )
  }

  return (
    <div
      className={`absolute bg-[rgba(255,255,255,.1)] w-5/6 h-4/5 
      top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-30 
      backdrop-blur-xl rounded-lg
      ${details.detailsOpen ? 'visible' : 'hidden'}`}>
      <div>
        <button onClick={closeDetails}>
          <Icon path={mdiClose} size={1} className="text-gray-300" />
        </button>
        {details.productID !== 0 ? showDetails() : ''}
      </div>
    </div>
  )
}

export default Details
