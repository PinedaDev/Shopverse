import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useRouteError
} from 'react-router-dom'

import App from '../App'
import Store from '../pages/Store'
import Page404 from '../pages/Page404'
import Login from '../auth/Login'
import Dashboard from '../pages/Dashboard'
import DashProducts from '../components/dashboard/products/DashProducts'

const ErrorBoundary = () => {
  const error = useRouteError()
  console.error(error)
  // Uncaught ReferenceError: path is not defined
  return <Page404 />
}
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<ErrorBoundary />}>
      <Route path="/" element={<Store />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="products" element={<DashProducts />} />
      </Route>
    </Route>
  )
)

export default Router
