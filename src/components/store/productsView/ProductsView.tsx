import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import Filter from '../filter/Filter'

const ProductsView = () => {
  const { products } = useSelector((state: RootState) => state)

  return (
    <div className="grid gap-2 overflow-y-scroll w-full h-[80vh]">
      {!products.isLoading ? <Filter /> : <h2>Loading</h2>}
    </div>
  )
}

export default ProductsView
