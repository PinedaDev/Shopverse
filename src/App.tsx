import { Outlet } from 'react-router'
const App = () => {
  return (
    <div className="App">
      <div id="signInDiv"></div>
      <Outlet />
    </div>
  )
}

export default App
