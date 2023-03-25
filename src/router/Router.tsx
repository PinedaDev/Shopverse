import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useRouteError
} from 'react-router-dom'

import App from '../App'
import Store from '../pages/store/Store'
import Page404 from '../pages/page404/Page404'

const ErrorBoundary = () => {
  const error = useRouteError()
  console.error(error)
  // Uncaught ReferenceError: path is not defined
  return <Page404 />
}

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<ErrorBoundary />}>
      <Route index path="/" element={<Store />} />
    </Route>
  )
)

export default Router
