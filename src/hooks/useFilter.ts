import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

import { Product } from '../types'

export type FilterStateProps = {
  isFiltering: boolean
  criteria: {
    price: number
    categories: string[]
  }
  filteredProducts: {
    byPrice: Product[]
    byCategory: Product[]
    all: Product[]
  }
}
const initialFilterState: FilterStateProps = {
  isFiltering: false,
  criteria: {
    price: 0,
    categories: []
  },
  filteredProducts: {
    byPrice: [],
    byCategory: [],
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
      filteredProducts: {
        ...filter.filteredProducts,
        all: [...filteredByPrice],
        byPrice: filteredByPrice
      }
    })
  }

  const filterByCategory = () => {
    const filteredByCategory: Product[] = products.all.filter((product: Product) =>
      filter.criteria.categories.includes(product.categories[0]) ? true : ''
    )
    setFilter({
      ...filter,
      filteredProducts: {
        ...filter.filteredProducts,
        all: [...filteredByCategory],
        byCategory: filteredByCategory
      }
    })
  }

  useEffect(() => {
    if (filter.isFiltering) {
      filterByPrice()
      filter.criteria.categories.length > 0 ? filterByCategory() : ''
    }
  }, [filter.isFiltering, filter.criteria])
  return { filter, setFilter }
}
