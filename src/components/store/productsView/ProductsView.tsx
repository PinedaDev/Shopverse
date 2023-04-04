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

// Type and initial value of details window UI for the products
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
  //State of the filter window UI
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false)
  //State of the details window UI
  const [details, setDetails] = useState<DetailsState>(initialDetails)

  const toggleFilter = () => {
    setFilterIsOpen((prev) => !prev)
  }
  // Controls for the details window UI
  const openDetails = (productID: number) => {
    setDetails({ productID, detailsOpen: true })
  }
  const closeDetails = () => {
    setDetails({ ...details, detailsOpen: false })
  }
  // Show the store products according to the filter state if filtering or searching
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
        className={`absolute bg-overlay w-screen h-screen duration-300 ease-in-out top-0 left-0 z-10 
        ${details.detailsOpen ? 'z-30' : ''}
        ${
          filterIsOpen || details.detailsOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}></div>
      {/* Details window */}
      <Details detailsState={{ ...details }} closeDetails={closeDetails} />
      <SearchField search={search} setSearch={setSearch} />
      <Filter
        filterOpen={filterIsOpen}
        toggleFilter={toggleFilter}
        filter={filter}
        setFilter={setFilter}
      />
      {/* Products container */}
      <div
        className="relative grid gap-8 w-11/12 max-h-[70vh] p-2 pb-20 m-auto overflow-y-scroll
      md:w-4/5 lg:w-[96%] lg:mt-24 lg:grid-cols-4 ">
        {!products.isLoading ? showProducts() : <h2>Loading</h2>}
      </div>
    </div>
  )
}

export default ProductsView
