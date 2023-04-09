import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import ProductRow from './ProductRow'
import { Product } from '../../../types'

const DashProducts = () => {
  const { products } = useSelector((state: RootState) => state)
  return (
    <div>
      {products.all.length > 0 &&
        products.all.map((product: Product) => <ProductRow key={product.id} {...product} />)}
    </div>
  )
}

export default DashProducts
