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
import DashOrders from '../components/dashboard/orders/DashOrders'
import DashUsers from '../components/dashboard/users/DashUsers'
import Signup from '../auth/Signup'

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
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="products" element={<DashProducts />} />
        <Route path="orders" element={<DashOrders />} />
        <Route path="users" element={<DashUsers />} />
      </Route>
    </Route>
  )
)

export default Router
