import Icon from '../global/Icon'

import { FilterStateProps } from '../../hooks/useFilter'
import Price from './Price'

type FilterProps = {
  filter: FilterStateProps
  setFilter: ({ ...props }: FilterStateProps) => void
  filterOpen: boolean
  toggleFilter: () => void
}

const Filter = ({ filter, setFilter, filterOpen, toggleFilter }: FilterProps) => {
  const applyFilter = () => {
    setFilter({ ...filter, isFiltering: true })
  }

  const clearFilter = () => {
    setFilter({
      isFiltering: false,
      criteria: {
        price: 0
      },
      filteredProducts: {
        byPrice: [],
        all: []
      }
    })
  }
  return (
    <div
      className={`relative w-3/4 m-auto   backdrop-blur-xl p-3 mt-8 mb-8 
          rounded-lg lg:w-1/5 lg:absolute lg:top-14 lg:left-10 duration-300 ease-in-out  ${
            !filterOpen ? 'backdrop-brightness-125' : 'backdrop-brightness-[3]'
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
        <div className="text-gray-300 grid place-items-center gap-3">
          <button
            className=" rounded-lg p-1 min-w-[6rem] mt-3 duration-300 ease-in-out bg-gray-900 hover:bg-black"
            onClick={applyFilter}>
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
