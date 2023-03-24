import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

import { Product } from '../types'

type SearchProps = {
  searchValue: string
}

export function useSearch({ searchValue }: SearchProps) {
  const { products } = useSelector((state: RootState) => state)
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [searchResult, setSearchResult] = useState<Product[]>([])

  const searchHandler = () => {
    setIsSearching(true)
    const results = products.all.filter((product: Product) =>
      product.name.toLowerCase().search(searchValue.toLowerCase()) == -1 ? '' : true
    )
    setSearchResult(results)
  }
  const stopSearch = () => {
    setIsSearching(false)
    setSearchResult([])
    console.log('SEARCH STOPED')
  }

  useEffect(() => {
    searchValue === '' ? stopSearch() : searchHandler()
    console.log(searchValue)
    console.log(searchResult)
  }, [searchValue])
  return { isSearching, searchResult }
}
