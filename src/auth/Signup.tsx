import { useState } from 'react'
import { z, ZodType } from 'zod'
import { Link } from 'react-router-dom'
import Icon from '../components/global/Icon'
import axios from 'axios'

type SignupData = {
  username: string
  password: string
}

const Signup = () => {
  const schema: ZodType<SignupData> = z.object({
    username: z.string().min(4),
    password: z.string().min(8)
  })

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const usernameHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  }

  const passwordHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }
  const password2Handler = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword2(event.currentTarget.value)
  }
  const signupUser = (data: SignupData) => async () => {
    try {
      const req = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/api/v1/users/signup`, data)
      const res = req.data
      console.log(req.status)
      if (req.status !== 200) throw req
      alert('User created')
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (password !== password2) {
      alert('Password dont match')
      return
    }

    const results = schema.safeParse({ username, password })

    if (!results.success) {
      alert('Invalit form data')
    } else {
      signupUser({ username, password })()
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
        <label className="mt-2" htmlFor="username">
          Username
        </label>
        <input
          className="text-accent my-2 p-2 rounded-xl text-center max-w-[95%] bg-[rgba(0,0,0,.5)] lg:max-w-[80%]"
          onChange={usernameHandler}
          autoComplete="off"
          value={username}
          type="text"
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
        <label className="text-xl" htmlFor="password">
          Confirm password
        </label>
        <input
          className="text-accent my-2 p-2 rounded-xl text-center max-w-[95%] bg-[rgba(0,0,0,.5)] lg:max-w-[80%]"
          onChange={password2Handler}
          value={password2}
          type="password"
          id="password"
        />
        <input
          className="duration-300 bg-[rgba(0,0,0,.5)] font-bold text-gray-500 p-2 mb-2 px-4 rounded-lg hover:cursor-pointer hover:text-accent"
          type="submit"
          value="Signup"
        />
      </form>
    </div>
  )
}

export default Signup
