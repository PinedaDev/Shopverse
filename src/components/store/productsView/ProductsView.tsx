import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import ProductCard from '../productCard/ProductCard'
import { Product } from '../../../types'

const ProductsView = () => {
  const { products } = useSelector((state: RootState) => state)

  return (
    <>
      {!products.isLoading ? (
        products.all.map((product: Product) => (
          <ProductCard key={product.name} {...product}></ProductCard>
        ))
      ) : (
        <h2>Loading</h2>
      )}
    </>
  )
}

export default ProductsView
