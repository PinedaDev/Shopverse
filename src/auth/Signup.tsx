import React, { ReactHTML, useState } from 'react'
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

  const usernameHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  }

  const passwordHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }
  const signupUser = (data: SignupData) => async () => {
    try {
      const req = await axios.post(`${import.meta.env.VITE_BASE_API_URL}signup`, data)
      const res = req.data
      if (req.status != 201) throw res
      alert('User created')
    } catch (error) {
      console.log(error)
    }
  }
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
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
        className="relative text-white text-2xl backdrop-blur-xl backdrop-brightness-[3] h-2/4 w-9/12 lg:w-[20%] lg:h-[20%] text-center p-3 rounded-xl"
        onSubmit={submitHandler}>
        <span className="absolute top-4 left-[90%]">
          <Link to="/">
            <Icon iconRef="mdi-close" />
          </Link>
        </span>
        <label htmlFor="username">Username</label>
        <input
          className="text-black"
          onChange={usernameHandler}
          value={username}
          type="text"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          className="text-black"
          onChange={passwordHandler}
          value={password}
          type="password"
          id="password"
        />
        <input
          className="hover:cursor-pointer hover:text-accent duration-300"
          type="submit"
          value="Signup"
        />
      </form>
    </div>
  )
}

export default Signup
