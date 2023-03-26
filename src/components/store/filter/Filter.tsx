import Icon from '@mdi/react'
import { mdiTune } from '@mdi/js'

import { FilterStateProps } from '../../../hooks/useFilter'
import Price from './price/Price'
import { useState } from 'react'

type FilterProps = {
  filter: FilterStateProps
  setFilter: ({ ...props }: FilterStateProps) => void
}

const Filter = ({ filter, setFilter }: FilterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openFilter = () => {
    setIsOpen((prev) => !prev)
  }

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
    <div>
      <div
        className={`absolute bg-overlay w-screen h-screen top-0 left-0 ${
          isOpen ? 'visible' : 'hidden'
        }`}></div>
      <div
        onClick={openFilter}
        className="flex items-center justify-between p-3 w-3/4 m-auto mt-8 mb-8 backdrop-blur-xl backdrop-brightness-125 rounded-lg">
        <span className="text-gray-400 text-xl">Filter</span>
        <Icon className="text-gray-50" path={mdiTune} size={1} />
      </div>
      {/* Filters */}
      <div className={`${isOpen ? 'visible' : 'hidden'}`}>
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
