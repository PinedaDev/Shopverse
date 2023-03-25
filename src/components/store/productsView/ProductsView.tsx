import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../../redux/store'
import { fetchProducts } from '../../../redux/actions/products'
import { useFilter } from '../../../hooks/useFilter'
import { Product } from '../../../types'

import Filter from '../filter/Filter'
import ProductCard from '../productCard/ProductCard'

const ProductsView = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { products } = useSelector((state: RootState) => state)

  const { filter, setFilter } = useFilter()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const showProducts = () => {
    if (!filter.isFiltering) {
      return products.all.map((product: Product) => (
        <ProductCard key={`${product.name}${product.id}`} {...product} />
      ))
    }
    if (filter.isFiltering && filter.filteredProducts.all.length > 0) {
      return filter.filteredProducts.all.map((product: Product) => (
        <ProductCard key={`${product.name}${product.id}`} {...product} />
      ))
    }
  }
  return (
    <div className="w-full ">
      <Filter filter={filter} setFilter={setFilter} />
      <div className="w-9/12 grid gap-2 h-[80vh] overflow-y-scroll ">
        {!products.isLoading ? showProducts() : <h2>Loading</h2>}
      </div>
    </div>
  )
}

export default ProductsView
