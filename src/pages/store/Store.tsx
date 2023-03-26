import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { AppDispatch } from '../../redux/store'

import { fetchProducts } from '../../redux/actions/products'
import NavBar from '../../components/navigation/navBar/NavBar'
import ProductsView from '../../components/store/productsView/ProductsView'

const Store = () => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <div className="relative bg-[url(./assets/bg.webp)] font-montserrat min-h-screen bg-center bg-cover">
      <NavBar />
      <ProductsView />
    </div>
  )
}

export default Store
