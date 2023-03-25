import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FilterStateProps } from '../../../../hooks/useFilter'
import { RootState } from '../../../../redux/store'
import { Product } from '../../../../types'

type PriceProps = {
  filter: FilterStateProps
  setFilter: ({ ...props }: FilterStateProps) => void
}

const Price = ({ filter, setFilter }: PriceProps) => {
  const { products } = useSelector((state: RootState) => state)

  const minPrice = Math.min(...products.all.map((product: Product) => product.price))
  const maxPrice = Math.max(...products.all.map((product: Product) => product.price))

  useEffect(() => {
    setFilter({ ...filter, criteria: { price: minPrice } })
  }, [])

  const priceHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setFilter({ ...filter, criteria: { price: Number(event.currentTarget.value) } })
  }
  return (
    <div>
      <input
        value={filter.criteria.price > maxPrice ? minPrice : filter.criteria.price}
        onChange={priceHandler}
        type="range"
        min={minPrice}
        max={maxPrice}
      />
      <span>price: {filter.criteria.price > maxPrice ? minPrice : filter.criteria.price}</span>
    </div>
  )
}

export default Price
