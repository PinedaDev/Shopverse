import Icon from '@mdi/react'
import { mdiTune } from '@mdi/js'
import { mdiClose } from '@mdi/js'

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
      className={`relative duration-75 w-3/4 m-auto   backdrop-blur-xl p-3 mt-8 mb-8 
          rounded-lg  ${!filterOpen ? 'backdrop-brightness-125' : 'backdrop-brightness-200'} z-20`}>
      <div onClick={toggleFilter} className={`relative flex items-center justify-between `}>
        <span className="text-gray-400 text-xl">Filter</span>
        <Icon className="text-gray-50" path={filterOpen ? mdiClose : mdiTune} size={1} />
      </div>
      {/* Filters */}
      <div className={`${filterOpen ? 'visible' : 'hidden'}`}>
        <hr className="mt-2 mb-2" />
        <Price filter={filter} setFilter={setFilter} />
        <div className="text-gray-300 grid place-items-center">
          <button onClick={applyFilter}>Apply</button>
          <button onClick={clearFilter}>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
