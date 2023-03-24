import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

import { Product } from '../types'

type Filter = {
  price: number
}

export function useFilter({ price }: Filter) {
  const { products } = useSelector((state: RootState) => state)

  const [filter, setFilter] = useState<Filter>({ price: 0 })
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  const handleFilters = (): void => {
    const newProducts = products.all.filter((product: Product) =>
      product.price < filter.price ? true : ''
    )
    setFilteredProducts(newProducts)
  }
  useEffect(() => {
    setFilter({ price })
  }, [price])

  useEffect(() => {
    console.log(filteredProducts)
  }, [filteredProducts])
  return { filteredProducts, handleFilters }
}
