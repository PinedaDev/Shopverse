import { GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import { Link, useNavigate } from 'react-router-dom'
import { AppDispatch } from '../redux/store'
import { useDispatch } from 'react-redux'

import Icon from '../components/global/Icon'
import { GoogleUser } from '../types'
import { login } from '../redux/actions/user'

const Login = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const handleResponse = (response: any) => {
    if (response.credential) {
      localStorage.setItem('token', response.credential)
      const userDecoded: GoogleUser = jwtDecode(response.credential)
      console.log(userDecoded)
      dispatch(login(userDecoded))
      navigate('/')
    }
  }
  return (
    <div className="absolute grid place-items-center bg-overlay top-0 left-0 h-screen w-full duration-300 z-50">
      <div className="relative text-white text-2xl backdrop-blur-xl backdrop-brightness-[3] h-2/4 w-9/12 text-center p-3 rounded-xl">
        Login
        <span className="absolute top-4 left-[90%]">
          <Link to="/">
            <Icon iconRef="mdi-close" />
          </Link>
        </span>
        <div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              handleResponse(credentialResponse)
            }}
            onError={() => {
              console.log('Login Failed')
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
