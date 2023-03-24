import Icon from '@mdi/react'
import { mdiTune } from '@mdi/js'
import { useState } from 'react'

import { useFilter } from '../../../hooks/useFilter'

const Filter = () => {
  const [price, setPrice] = useState<number>(0)

  const { filteredProducts, handleFilters } = useFilter({ price })

  const priceHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPrice(Number(event.currentTarget.value))
  }

  function handleApply() {
    handleFilters()
  }

  return (
    <div>
      <span>Filter</span>
      <Icon className="text-gray-50" path={mdiTune} size={2} />
      {/* Filters */}
      <div>
        <input value={price} onChange={priceHandler} type="number" />
        <button onClick={() => handleApply()}>Apply</button>
      </div>
      {/* Products */}
    </div>
  )
}

export default Filter
