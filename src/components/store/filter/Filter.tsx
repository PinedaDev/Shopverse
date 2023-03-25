import Icon from '@mdi/react'
import { mdiTune } from '@mdi/js'

import { FilterStateProps } from '../../../hooks/useFilter'
import Price from './price/Price'

type FilterProps = {
  filter: FilterStateProps
  setFilter: ({ ...props }: FilterStateProps) => void
}

const Filter = ({ filter, setFilter }: FilterProps) => {
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
      <span>Filter</span>
      <Icon className="text-gray-50" path={mdiTune} size={2} />
      {/* Filters */}
      <Price filter={filter} setFilter={setFilter} />
      <div className="text-gray-300">
        <button onClick={applyFilter}>Apply</button>
        <button onClick={clearFilter}>Clear</button>
      </div>
    </div>
  )
}

export default Filter
