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
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
)

export default Router
