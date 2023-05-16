import { useDispatch } from 'react-redux'

import { AppDispatch } from '../../../redux/store'
import { handleProductDelete } from '../../../redux/actions/products'

import Icon from '../../global/Icon'

type ProductRowProps = {
  id: string
  name: string
  categories: string[]
  price: number
  colors: string[]
  sizes: number[]
  edit: (id: string) => void
}
const ProductRow = ({ id, name, categories, price, colors, sizes, edit }: ProductRowProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const showInfo = () => {
    return (
      <>
        <span className="grid place-items-center text-accent font-bold">{id}</span>
        <span className="grid place-items-center">{name}</span>
        <span className="grid place-items-center">{categories.map((category) => category)}</span>
        <span className="grid place-items-center text-accent text-xl font-bold">{price}.00€</span>
        <span className="grid place-items-center font-bold">
          {colors.map((color) => `${color}, `)}
        </span>
        <span className="grid place-items-center font-bold">{sizes.map((size) => `${size} `)}</span>
        <div className="flex justify-around space-x-3 font-bold">
          <button
            className="flex space-x-2 items-center text-xl 
          bg-secondary py-2 px-4 rounded-sm duration-300 hover:text-accent"
            onClick={() => edit(id)}>
            <Icon iconRef="mdi-pencil" />
            <span>Edit</span>
          </button>
          <button
            className="flex space-x-2 items-center text-xl 
          bg-secondary py-2 px-4 rounded-sm duration-300 hover:text-red-500"
            onClick={() => dispatch(handleProductDelete(id))}>
            <span className="mdi mdi-trash-can-outline"></span>
            <span>Delete</span>
          </button>
        </div>
      </>
    )
  }
  return (
    <div
      className="grid grid-cols-[1fr_repeat(6,_1fr)] 
        p-3 list-none border-t-2 border-b-2 border-secondary
        text-third place-items-center">
      {showInfo()}
    </div>
  )
}

export default ProductRow
