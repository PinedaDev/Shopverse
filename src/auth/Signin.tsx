import { useState } from 'react'
import { z, ZodType } from 'zod'
import { Link, useNavigate } from 'react-router-dom'
import { signinUserThunk } from '../redux/actions/user'
import { useDispatch } from 'react-redux'
import Icon from '../components/global/Icon'
import { AppDispatch, RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import Spinner from '../components/global/Spinner'

type SigninData = {
  username: string
  password: string
}

const Signin = () => {
  const schema: ZodType<SigninData> = z.object({
    username: z.string().min(4),
    password: z.string().min(8)
  })

  const navigate = useNavigate()

  const { user } = useSelector((state: RootState) => state)

  const dispatch = useDispatch<AppDispatch>()
  const [request, setRequest] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const usernameHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  }

  const passwordHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const results = schema.safeParse({ username, password })

    const sentRequest = async () => {
      setRequest(true)
      await signinUserThunk({ username, password })(dispatch)
      setRequest(false)
      navigate('/')
    }

    if (!results.success) {
      alert('Invalit form data')
    } else {
      sentRequest()
    }
  }

  return (
    <div className="absolute grid place-items-center top-0 left-0 h-screen w-full duration-300 z-50 lg:bg-overlay">
      <div className="absolute text-white top-[10%]">{request === true && <Spinner />}</div>
      <form
        className="relative grid place-items-center text-white text-2xl backdrop-blur-xl backdrop-brightness-[3] text-center p-3 rounded-xl"
        onSubmit={submitHandler}>
        <span className="absolute top-4 left-[90%]">
          <Link to="/">
            <Icon iconRef="mdi-close" />
          </Link>
        </span>
        <label htmlFor="username">Username</label>
        <input
          className="text-accent my-2 p-2 rounded-xl text-center max-w-[95%] bg-[rgba(0,0,0,.5)] lg:max-w-[80%]"
          onChange={usernameHandler}
          value={username}
          type="text"
          autoComplete="off"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          className="text-accent my-2 p-2 rounded-xl text-center max-w-[95%] bg-[rgba(0,0,0,.5)] lg:max-w-[80%]"
          onChange={passwordHandler}
          value={password}
          type="password"
          id="password"
        />
        <input
          className="duration-300 bg-[rgba(0,0,0,.5)] font-bold text-gray-500 p-2 mb-2 px-4 rounded-lg hover:cursor-pointer hover:text-accent"
          type="submit"
          value="Signin"
        />
      </form>
    </div>
  )
}

export default Signin
