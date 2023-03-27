import Icon from '@mdi/react'
import { mdiDotsVertical } from '@mdi/js'

type DetailsBtnProps = {
  productID: number
  openDetails: (productID: number) => void
}

const DetailsBtn = ({ openDetails, productID }: DetailsBtnProps) => {
  return (
    <button onClick={() => openDetails(productID)} className="flex">
      <Icon path={mdiDotsVertical} size={1}></Icon>
      Details
    </button>
  )
}

export default DetailsBtn
