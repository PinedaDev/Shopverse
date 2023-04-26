import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

import { Product } from '../../types'
import { FilterStateProps } from '../../hooks/useFilter'

import Price from './Price'
import Icon from '../global/Icon'
import Selector from './Selector'

type FilterProps = {
  filter: FilterStateProps
  setFilter: ({ ...props }: FilterStateProps) => void
  filterOpen: boolean
  applyFilters: () => void
  toggleFilter: () => void
}

const Filter = ({ filter, setFilter, filterOpen, toggleFilter, applyFilters }: FilterProps) => {
  const { products } = useSelector((state: RootState) => state)
  const filters = {
    categories: ['sports', 'running', 'sneaker'],
    colors: ['white', 'black', 'blue', 'green', 'red', 'violet']
  }
  const minPrice = Math.min(...products.all.map((product: Product) => product.price))

  const clearFilter = () => {
    setFilter({
      isFiltering: false,
      criteria: {
        price: minPrice,
        tags: []
      },
      filteredProducts: {
        byTag: [],
        byPrice: [],
        all: []
      }
    })
  }
  return (
    <div
      className={`relative w-3/4 m-auto   backdrop-blur-xl p-3 mt-8 mb-8 
          rounded-lg lg:w-1/5 lg:absolute lg:top-14 lg:left-10 duration-300 ease-in-out  ${
            !filterOpen ? 'backdrop-brightness-125' : 'backdrop-brightness-[5]'
          } z-20`}>
      <div onClick={toggleFilter} className="relative flex items-center justify-between">
        <span
          className={` text-xl ${filter.isFiltering ? 'text-accent font-bold' : 'text-gray-400'}`}>
          {filter.isFiltering ? 'Filtering!' : 'Filter'}
        </span>
        <Icon iconRef={`${filterOpen ? 'mdi-close' : 'mdi-tune'}`} />
      </div>
      {/* Filters */}
      <div className={`${filterOpen ? 'visible' : 'hidden'}`}>
        <hr className="mt-2 mb-2" />
        <Price filter={filter} setFilter={setFilter} />
        <Selector
          options={filters.categories}
          filter={filter}
          setFilter={setFilter}
          title="Categories"
        />
        <div className="text-gray-300 grid place-items-center gap-3">
          <button
            className=" rounded-lg p-1 min-w-[6rem] mt-3 duration-300 ease-in-out bg-gray-900 hover:bg-black"
            onClick={applyFilters}>
            Apply
          </button>
          <button
            className="bg-gray-900 rounded-lg p-1 min-w-[6rem] mb-3 duration-300 ease-in-out hover:bg-black"
            onClick={clearFilter}>
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filter
