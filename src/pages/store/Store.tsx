import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { AppDispatch } from '../../redux/store'

import { fetchProducts } from '../../redux/actions/products'
import NavBar from '../../components/navigation/navBar/NavBar'
import Cart from '../cart/Cart'
import ProductsView from '../../components/store/productsView/ProductsView'
import Login from '../login/Login'

const Store = () => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <div className="relative bg-[url(./assets/bg.webp)] font-montserrat overflow-hidden h-screen bg-center bg-cover">
      <NavBar />
      <Cart />
      <ProductsView />
      <Login />
    </div>
  )
}

export default Store
