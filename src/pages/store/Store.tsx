import NavBar from '../../components/navigation/navBar/NavBar'
import ProductsView from '../../components/store/productsView/ProductsView'

const Store = () => {
  return (
    <div className="App bg-[url(./assets/bg.webp)] font-montserrat min-h-screen bg-center bg-cover">
      <NavBar />
      <ProductsView />
    </div>
  )
}

export default Store
