import { useSelector } from 'react-redux'
import { useState } from 'react'

import { RootState } from '../../../redux/store'
import { useFilter } from '../../../hooks/useFilter'
import { Product } from '../../../types'

import Filter from '../filter/Filter'
import ProductCard from '../productCard/ProductCard'
import { useSearch } from '../../../hooks/useSearch'
import SearchField from '../../searchField/SearchField'
import Details from '../productCard/Details'

type DetailsState = {
  detailsOpen: boolean
  productID: number
}
const initialDetails = {
  detailsOpen: false,
  productID: 0
}

const ProductsView = () => {
  const { products } = useSelector((state: RootState) => state)
  //Custom hook to manage the filter values
  const { filter, setFilter } = useFilter()
  //Hook to manage the seach value along side with the filter
  const { search, setSearch } = useSearch({ productCollection: filter.filteredProducts.all })
  //State for the finlter window interface
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false)

  const [details, setDetails] = useState<DetailsState>(initialDetails)

  const toggleFilter = () => {
    setFilterIsOpen((prev) => !prev)
  }
  const openDetails = (productID: number) => {
    setDetails({ productID, detailsOpen: true })
  }
  const closeDetails = () => {
    setDetails({ ...details, detailsOpen: false })
  }

  const showProducts = () => {
    if (!filter.isFiltering && !search.isSearching) {
      return products.all.map((product: Product) => (
        <ProductCard
          key={`${product.name}${product.id}`}
          openDetails={openDetails}
          product={{ ...product }}
        />
      ))
    }
    if (search.isSearching && filter.isFiltering) {
      return search.searchResult.map((product: Product) => (
        <ProductCard
          key={`${product.name}${product.id}`}
          openDetails={openDetails}
          product={{ ...product }}
        />
      ))
    }
    if (search.isSearching && search.searchResult.length > 0) {
      return search.searchResult.map((product: Product) => (
        <ProductCard
          key={`${product.name}${product.id}`}
          openDetails={openDetails}
          product={{ ...product }}
        />
      ))
    }
    if (filter.isFiltering && filter.filteredProducts.all.length > 0) {
      return filter.filteredProducts.all.map((product: Product) => (
        <ProductCard
          key={`${product.name}${product.id}`}
          openDetails={openDetails}
          product={{ ...product }}
        />
      ))
    }
  }
  return (
    <div className="w-full">
      {/* Background overlay applied when the datails or the filter are expanded */}
      <div
        className={`absolute bg-overlay w-screen h-screen top-0 left-0 z-10 ${
          filterIsOpen || details.detailsOpen ? 'visible' : 'hidden'
        }`}></div>
      <Details details={{ ...details }} closeDetails={closeDetails} />
      <SearchField search={search} setSearch={setSearch} />
      <Filter
        filterOpen={filterIsOpen}
        toggleFilter={toggleFilter}
        filter={filter}
        setFilter={setFilter}
      />
      {/* Products container */}
      <div className="relative grid gap-8 w-11/12 max-h-[70vh] p-2 pb-20 m-auto overflow-y-scroll">
        {!products.isLoading ? showProducts() : <h2>Loading</h2>}
      </div>
    </div>
  )
}

export default ProductsView
