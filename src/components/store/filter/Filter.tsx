import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { useState } from 'react'
import Icon from '@mdi/react'
import { mdiTune } from '@mdi/js'

import { useFilter } from '../../../hooks/useFilter'
import { useSearch } from '../../../hooks/useSearch'
import { Product } from '../../../types'
import ProductCard from '../productCard/ProductCard'
import SearchField from '../../searchField/SearchField'

const Filter = () => {
  const { products } = useSelector((state: RootState) => state)

  const [search, setSearch] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const { isSearching, searchResult } = useSearch({ searchValue: search })
  const { filteredProducts, handleFilters, clearFilters, isFiltered } = useFilter({ price })

  const priceHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPrice(Number(event.currentTarget.value))
  }

  const searchHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }
  const handleApply = () => {
    handleFilters()
  }
  const handleClear = () => {
    setPrice(0)
    clearFilters()
  }

  const showProducts = () => {
    if (!isFiltered && !isSearching) {
      return products.all.map((product: Product) => (
        <ProductCard key={`${product.id}${product.name}`} {...product} />
      ))
    }
    if (isSearching && searchResult.length > 0) {
      return searchResult.map((product: Product) => (
        <ProductCard key={`${product.id}${product.name}`} {...product} />
      ))
    }
    if (isFiltered && filteredProducts.length > 0) {
      return filteredProducts.map((product: Product) => (
        <ProductCard key={`${product.id}${product.name}`} {...product} />
      ))
    }
  }

  return (
    <div>
      <SearchField searchValue={search} handleSearch={searchHandler} />
      <span>Filter</span>
      <Icon className="text-gray-50" path={mdiTune} size={2} />
      {/* Filters */}
      <div className="text-gray-300">
        <input value={price} onChange={priceHandler} type="range" min="1" max="200" />
        <span className="text-gray-300">{price}€</span>
        <button onClick={handleApply}>Apply</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      {/* Products */}
      <div className="grid gap-3">
        {isFiltered && filteredProducts.length < 1 && <h1>No match</h1>}
        {showProducts()}
      </div>
    </div>
  )
}

export default Filter
