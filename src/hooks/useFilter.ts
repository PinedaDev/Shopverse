import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

import { Product } from '../types'

type Filter = {
  price: number
}
const initialFilterState: Filter = {
  price: 0
}
export function useFilter({ price }: Filter) {
  const { products } = useSelector((state: RootState) => state)
  const [isFiltered, setIsFiltered] = useState<boolean>(false)
  const [filter, setFilter] = useState<Filter>(initialFilterState)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  const handleFilters = (): void => {
    const newProducts = products.all.filter((product: Product) =>
      product.price < filter.price ? true : ''
    )
    setIsFiltered(true)
    setFilteredProducts(newProducts)
  }

  const clearFilters = (): void => {
    setIsFiltered(false)
    setFilter(initialFilterState)
    setFilteredProducts([])
  }

  useEffect(() => {
    setFilter({ price })
  }, [price])
  return { filteredProducts, handleFilters, clearFilters, isFiltered }
}
