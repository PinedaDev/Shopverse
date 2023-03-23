import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useRouteError
} from 'react-router-dom'

import App from '../App'
import Store from './routes/Store'
import Cart from './routes/Cart'
import Page404 from './routes/Page404'

const ErrorBoundary = () => {
  const error = useRouteError()
  console.error(error)
  // Uncaught ReferenceError: path is not defined
  return <Page404 />
}

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorBoundary />}>
      <Route index path="/" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
)

export default Router
