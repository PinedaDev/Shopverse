import { useDispatch } from 'react-redux'
import { Product } from '../../../types'
import { AppDispatch } from '../../../redux/store'
import { deleteProduct } from '../../../redux/actions/products'

type ProductRowProps = {
  id: number
  name: string
  categories: string[]
  price: number
  color: string[]
  size: number[]
}
const ProductRow = ({ id, name, categories, price, color, size }: ProductRowProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const showProductRow = () => {
    return (
      <>
        <span className="grid place-items-center">{id}</span>
        <span className="grid place-items-center">{name}</span>
        <span className="grid place-items-center">{categories.map((category) => category)}</span>
        <span className="grid place-items-center">{price}</span>
        <span className="grid place-items-center">{color.map((color) => `${color},`)}</span>
        <span className="grid place-items-center">{size.map((size) => `${size},`)}</span>
        <div className="flex justify-around space-x-3">
          <button>edit</button>
          <button onClick={() => dispatch(deleteProduct(id))}>delete</button>
        </div>
      </>
    )
  }
  return (
    <div
      className="grid grid-cols-[1fr_repeat(6,_1fr)] 
        p-3 list-none border-t-2 border-b-2 border-secondary
        text-third place-items-center">
      {showProductRow()}
    </div>
  )
}

export default ProductRow
