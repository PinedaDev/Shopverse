import { useSelector } from 'react-redux'

import { RootState } from '../../../redux/store'
import { useFilter } from '../../../hooks/useFilter'
import { Product } from '../../../types'

import Filter from '../filter/Filter'
import ProductCard from '../productCard/ProductCard'
import { useSearch } from '../../../hooks/useSearch'
import SearchField from '../../searchField/SearchField'

const ProductsView = () => {
  const { products } = useSelector((state: RootState) => state)

  const { filter, setFilter } = useFilter()
  const { search, setSearch } = useSearch({ productCollection: filter.filteredProducts.all })

  const showProducts = () => {
    if (!filter.isFiltering && !search.isSearching) {
      return products.all.map((product: Product) => (
        <ProductCard key={`${product.name}${product.id}`} {...product} />
      ))
    }
    if (search.isSearching && filter.isFiltering) {
      return search.searchResult.map((product: Product) => (
        <ProductCard key={`${product.name}${product.id}`} {...product} />
      ))
    }
    if (search.isSearching && search.searchResult.length > 0) {
      return search.searchResult.map((product: Product) => (
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
    <div className="w-full">
      <SearchField search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} />
      <div className="w-9/12 grid gap-2 h-[80vh] overflow-y-scroll ">
        {!products.isLoading ? showProducts() : <h2>Loading</h2>}
      </div>
    </div>
  )
}

export default ProductsView
