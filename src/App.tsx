import { GoogleOAuthProvider } from '@react-oauth/google'
import { Outlet } from 'react-router'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { fetchProducts } from './redux/actions/products'
import { AppDispatch } from './redux/store'

const App = () => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchProducts())
    localStorage.clear()
    sessionStorage.clear()
  }, [])
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <div className="App">
        <Outlet />
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
