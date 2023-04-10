import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { deleteProduct } from '../../../redux/actions/products'
import Icon from '../../global/Icon'

type ProductRowProps = {
  id: number
  name: string
  categories: string[]
  price: number
  colors: string[]
  sizes: number[]
  edit: (id: number) => void
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
        <div className="flex justify-around space-x-3">
          <button onClick={() => edit(id)}>
            <Icon iconRef="mdi-pencil" />
          </button>
          <button onClick={() => dispatch(deleteProduct(id))}>
            <span className="mdi mdi-trash-can-outline hover:text-red-600 text-2xl"></span>
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
