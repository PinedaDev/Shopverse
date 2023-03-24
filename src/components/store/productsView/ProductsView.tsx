import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { fetchProducts } from '../../../redux/actions/products'
import Filter from '../filter/Filter'

const ProductsView = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { products } = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <div className="grid gap-2 overflow-y-scroll w-full h-[80vh]">
      {!products.isLoading ? <Filter /> : <h2>Loading</h2>}
    </div>
  )
}

export default ProductsView
