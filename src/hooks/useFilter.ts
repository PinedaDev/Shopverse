import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

import { Product } from '../types'

type Filter = {
  price: number
}

export function useFilter({ price }: Filter) {
  const { products } = useSelector((state: RootState) => state)

  const initialFilter: Filter = {
    price: 0
  }

  const [filter, setFilter] = useState<Filter>(initialFilter)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  const handleFilters = (): void => {
    const newProducts = products.all.filter((product: Product) =>
      product.price < filter.price ? true : ''
    )
    setFilteredProducts(newProducts)
  }

  const clearFilters = (): void => {
    setFilter(initialFilter)
    setFilteredProducts([])
  }

  useEffect(() => {
    setFilter({ price })
  }, [price])
  return { filteredProducts, handleFilters, clearFilters }
}
