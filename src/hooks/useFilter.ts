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
  let minPrice = 0
  useEffect(() => {
    minPrice = Math.min(...products.all.map((product: Product) => product.price))
    setFilter({ ...filter, criteria: { ...filter.criteria, price: minPrice } })
  }, [products.all])

  const initialFilterState: FilterStateProps = {
    isFiltering: false,
    criteria: {
      price: minPrice,
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
          if (!filteredProductsByTag.find((target) => target.id === product.id)) {
            filteredProductsByTag.push(product)
          }
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
  }

  const filterCombiner = () => {
    const productsByTag = filter.filteredProducts.byTag
    const productByPrice = filter.filteredProducts.byPrice
    const tagCriteria = filter.criteria.tags
    const priceCriteria = filter.criteria.price

    // Handler in case of applied multiple filtering with results
    if (tagCriteria.length > 0) {
      const filteredProductsUnion = productsByTag.filter(
        (product) => product.price <= filter.criteria.price
      )
      console.log('multiple filters applied:')
      console.log(filteredProductsUnion)

      setFilter({
        ...filter,
        filteredProducts: {
          ...filter.filteredProducts,
          all: filteredProductsUnion
        }
      })
    }
    if (priceCriteria >= 75 && tagCriteria.length < 1) {
      filterByPrice()
      console.log('only price filter applied:')
      console.log(filter.filteredProducts.byPrice)
    }
  }

  const applyFilters = () => {
    setFilter({ ...filter, isFiltering: true })
    filterCombiner()
    console.log('All filtered products:')
    console.log(filter.filteredProducts.all)
  }

  useEffect(() => {
    filterByPrice()
  }, [filter.criteria.price])
  useEffect(() => {
    filterByTag(products.all)
  }, [filter.criteria.tags])
  useEffect(() => {
    console.log('All filtered products:')
    console.log(filter.filteredProducts.all)
  }, [filter.filteredProducts.all])
  return { filter, setFilter, applyFilters }
}
