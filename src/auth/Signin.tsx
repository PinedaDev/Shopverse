import { useState } from 'react'
import { z, ZodType } from 'zod'
import { Link } from 'react-router-dom'
import { signinUserThunk } from '../redux/actions/user'
import { useDispatch } from 'react-redux'
import Icon from '../components/global/Icon'
import { AppDispatch } from '../redux/store'

type SigninData = {
  username: string
  password: string
}

const Signin = () => {
  const schema: ZodType<SigninData> = z.object({
    username: z.string().min(4),
    password: z.string().min(8)
  })

  const dispatch = useDispatch<AppDispatch>()

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

    if (!results.success) {
      alert('Invalit form data')
    } else {
      signinUserThunk({ username, password })(dispatch)
    }
  }

  return (
    <div className="absolute grid place-items-center bg-overlay top-0 left-0 h-screen w-full duration-300 z-50">
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
