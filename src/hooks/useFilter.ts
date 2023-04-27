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
        byPrice: filteredByPrice
      }
    })
  }

  const filterByTag = (productsArray: Product[]) => {
    const filteredProductsByTag: Product[] = []
    productsArray.forEach((product: Product) => {
      product.categories.forEach((category) => {
        if (filter.criteria.tags.includes(category)) {
          filteredProductsByTag.push(product)
        }
      })
    })
    setFilter({
      ...filter,
      filteredProducts: {
        ...filter.filteredProducts,
        byTag: filteredProductsByTag
      }
    })
    return filteredProductsByTag
  }

  const filterCombiner = () => {
    const productsByTag = filter.filteredProducts.byTag
    const productByPrice = filter.filteredProducts.byPrice
    const tagCriteria = filter.criteria.tags
    const priceCriteria = filter.criteria.price
    const minPrice = Math.min(...products.all.map((product: Product) => product.price))

    // Handler in case of applied multiple filtering with results
    if (priceCriteria >= minPrice && tagCriteria.length > 0) {
      const filteredProductsUnion = productsByTag.filter(
        (product) => product.price <= filter.criteria.price
      )
      setFilter({
        ...filter,
        filteredProducts: {
          ...filter.filteredProducts,
          all: filteredProductsUnion
        }
      })
      return
    }
    setFilter({
      ...filter,
      filteredProducts: {
        ...filter.filteredProducts,
        all: []
      }
    })
  }

  const applyFilters = () => {
    setFilter({ ...filter, isFiltering: true })
    filterCombiner()
  }

  useEffect(() => {
    filterByPrice()
  }, [filter.criteria.price])
  useEffect(() => {
    filterByTag(products.all)
  }, [filter.criteria.tags])
  return { filter, setFilter, applyFilters }
}
