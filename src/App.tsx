import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router'

import { AppDispatch } from './redux/store'
import { fetchProducts } from './redux/actions/products'

const App = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App
