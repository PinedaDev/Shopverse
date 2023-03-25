import { Outlet } from 'react-router'
const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Outlet />
    </div>
  )
}

export default App
