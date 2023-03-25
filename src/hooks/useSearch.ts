import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

import { Product } from '../types'

export type SearchStateProps = {
  isSearching: boolean
  searchValue: string
  searchResult: Product[]
}

type UseSearchProps = {
  productCollection: Product[]
}

const initialSearchState: SearchStateProps = {
  isSearching: false,
  searchValue: '',
  searchResult: []
}

export function useSearch({ productCollection }: UseSearchProps) {
  const [search, setSearch] = useState<SearchStateProps>(initialSearchState)
  const { products } = useSelector((state: RootState) => state)

  const searchProductByName = () => {
    if (productCollection.length > 0) {
      const productsByName: Product[] = productCollection.filter((product: Product) =>
        product.name.toLowerCase().search(search.searchValue.toLowerCase()) == -1 ? '' : true
      )
      setSearch({ ...search, isSearching: true, searchResult: productsByName })
    } else {
      const productsByName: Product[] = products.all.filter((product: Product) =>
        product.name.toLowerCase().search(search.searchValue.toLowerCase()) == -1 ? '' : true
      )
      setSearch({ ...search, isSearching: true, searchResult: productsByName })
    }
  }

  useEffect(() => {
    if (search.searchValue.length > 0) {
      searchProductByName()
    }
    if (search.searchValue === '') {
      setSearch(initialSearchState)
    }
  }, [search.searchValue])
  return { search, setSearch }
}
