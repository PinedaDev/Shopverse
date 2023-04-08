import { GoogleOAuthProvider } from '@react-oauth/google'
import { Outlet } from 'react-router'
const App = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <div className="App">
        <div id="signInDiv"></div>
        <Outlet />
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
