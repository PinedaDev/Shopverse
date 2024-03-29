import { Link } from 'react-router-dom'

import Icon from '../components/global/Icon'
import Signin from './Signin'

const Login = () => {
  // Local - Google login implementation
  // const dispatch = useDispatch<AppDispatch>()
  // const navigate = useNavigate()
  // const handleResponse = (response: any) => {
  //   if (response.credential) {
  //     localStorage.setItem('token', response.credential)
  //     const userDecoded: GoogleUser = jwtDecode(response.credential)
  //     dispatch(login(userDecoded))
  //     navigate('/')
  //   }
  // }
  return (
    <div className="absolute grid place-items-center bg-overlay top-0 left-0 h-screen w-full duration-300 z-50">
      <div className="relative text-white text-2xl backdrop-blur-xl backdrop-brightness-[3] h-2/4 w-9/12 lg:w-[40%] lg:h-[40%] text-center p-3 rounded-xl">
        <span className="absolute top-4 left-[90%]">
          <Link to="/">
            <Icon iconRef="mdi-close" />
          </Link>
        </span>
        <div className="grid absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
          {/* Local auth implementation */}
          <Signin />
          {/* <GoogleLogin
            onSuccess={(credentialResponse) => {
              handleResponse(credentialResponse)
            }}
            onError={() => {
              console.log('Login Failed')
            }}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Login
