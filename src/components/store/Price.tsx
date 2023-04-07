import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FilterStateProps } from '../../hooks/useFilter'
import { RootState } from '../../redux/store'
import { Product } from '../../types'

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
    <div className="text-gray-300 w-3/4 m-auto">
      <span>Prices</span>
      <br />
      <input
        className="appearance-none w-full h-[8px] rounded-lg bg-black "
        value={filter.criteria.price > maxPrice ? minPrice : filter.criteria.price}
        onChange={priceHandler}
        type="range"
        min={minPrice}
        max={maxPrice}
      />
      <br />
      <span className="block text-center">
        {filter.criteria.price > maxPrice ? minPrice : filter.criteria.price}.00 €
      </span>
    </div>
  )
}

export default Price
