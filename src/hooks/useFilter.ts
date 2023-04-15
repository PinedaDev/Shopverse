import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

import { Product } from '../types'

export type FilterStateProps = {
  isFiltering: boolean
  criteria: {
    price: number
    tags: string[]
  }
  filteredProducts: {
    byPrice: Product[]
    byTag: Product[]
    all: Product[]
  }
}

export function useFilter() {
  const { products } = useSelector((state: RootState) => state)

  const initialFilterState: FilterStateProps = {
    isFiltering: false,
    criteria: {
      price: Math.min(...products.all.map((product: Product) => product.price)),
      tags: []
    },
    filteredProducts: {
      byPrice: [],
      byTag: [],
      all: []
    }
  }

  const [filter, setFilter] = useState<FilterStateProps>(initialFilterState)

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

  const filterByTag = () => {
    const filteredByTag: Product[] = products.all.filter((product: Product) =>
      filter.criteria.tags.includes(product.categories[0]) ? true : ''
    )
    setFilter({
      ...filter,
      filteredProducts: {
        ...filter.filteredProducts,
        all: [...filteredByTag],
        byTag: filteredByTag
      }
    })
  }

  useEffect(() => {
    if (filter.isFiltering) {
      filterByPrice()
      filter.criteria.tags.length > 0 ? filterByTag() : ''
    }
  }, [filter.isFiltering, filter.criteria])
  return { filter, setFilter }
}
