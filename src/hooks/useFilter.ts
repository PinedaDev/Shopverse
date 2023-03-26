import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

import { Product } from '../types'

export type FilterStateProps = {
  isFiltering: boolean
  criteria: {
    price: number
  }
  filteredProducts: {
    byPrice: Product[]
    all: Product[]
  }
}
const initialFilterState: FilterStateProps = {
  isFiltering: false,
  criteria: {
    price: 0
  },
  filteredProducts: {
    byPrice: [],
    all: []
  }
}
export function useFilter() {
  const [filter, setFilter] = useState<FilterStateProps>(initialFilterState)
  const { products } = useSelector((state: RootState) => state)

  const filterByPrice = () => {
    const filteredByPrice: Product[] = products.all.filter((product: Product) =>
      product.price <= filter.criteria.price ? true : ''
    )
    setFilter({
      ...filter,
      filteredProducts: { all: [...filteredByPrice], byPrice: filteredByPrice }
    })
  }

  useEffect(() => {
    if (filter.isFiltering) {
      filterByPrice()
    }
  }, [filter.isFiltering, filter.criteria])
  return { filter, setFilter }
}
