import Icon from '@mdi/react'
import { mdiTune } from '@mdi/js'

import { FilterStateProps } from '../../../hooks/useFilter'
import Price from './price/Price'
import { useState } from 'react'

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
      onClick={toggleFilter}
      className={`relative flex items-center justify-between p-3 w-3/4 m-auto mt-8 mb-8 
        rounded-lg z-20 backdrop-blur-xl ${
          !filterOpen ? 'backdrop-brightness-125' : 'backdrop-brightness-200'
        }`}>
      <span className="text-gray-400 text-xl">Filter</span>
      <Icon className="text-gray-50" path={mdiTune} size={1} />

      {/* Filters */}
      <div className={`${filterOpen ? 'visible' : 'hidden'}`}>
        <Price filter={filter} setFilter={setFilter} />
        <div className="text-gray-300">
          <button onClick={applyFilter}>Apply</button>
          <button onClick={clearFilter}>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
