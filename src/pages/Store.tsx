import NavBar from '../components/navigation/NavBar'
import Cart from './Cart'
import ProductsView from '../components/store/ProductsView'
import { Outlet } from 'react-router'

const Store = () => {
  return (
    <div className="relative bg-[url(./assets/bg.webp)] font-montserrat overflow-hidden h-screen bg-center bg-cover">
      <NavBar />
      <Cart />
      <ProductsView />
      <Outlet />
    </div>
  )
}

export default Store
