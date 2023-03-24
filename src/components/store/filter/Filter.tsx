import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { useState } from 'react'
import Icon from '@mdi/react'
import { mdiTune } from '@mdi/js'

import { useFilter } from '../../../hooks/useFilter'
import { Product } from '../../../types'
import ProductCard from '../productCard/ProductCard'

const Filter = () => {
  const { products } = useSelector((state: RootState) => state)
  const [price, setPrice] = useState<number>(0)
  const { filteredProducts, handleFilters, clearFilters } = useFilter({ price })

  const priceHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPrice(Number(event.currentTarget.value))
  }

  const handleApply = () => {
    handleFilters()
  }
  const handleClear = () => {
    setPrice(0)
    clearFilters()
  }

  return (
    <div>
      <span>Filter</span>
      <Icon className="text-gray-50" path={mdiTune} size={2} />
      {/* Filters */}
      <div>
        <input value={price} onChange={priceHandler} type="number" />
        <button onClick={handleApply}>Apply</button>
        <button onClick={handleClear}>Clear Filters</button>
      </div>
      {/* Products */}
      <div>
        {filteredProducts.length > 0
          ? filteredProducts.map((product: Product) => (
              <ProductCard key={`${product.id}+${product.name}`} {...product} />
            ))
          : products.all.map((product: Product) => (
              <ProductCard key={`${product.id}+${product.name}`} {...product} />
            ))}
      </div>
    </div>
  )
}

export default Filter
