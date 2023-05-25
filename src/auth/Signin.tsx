import React, { ReactHTML, useState } from 'react'
import { z, ZodType } from 'zod'
import { Link } from 'react-router-dom'
import Icon from '../components/global/Icon'
import axios from 'axios'

type SigninData = {
  username: string
  password: string
}

const Signin = () => {
  const schema: ZodType<SigninData> = z.object({
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
  const signinUser = (data: SigninData) => async () => {
    try {
      const req = await axios.post(`${import.meta.env.VITE_BASE_API_URL}signin`, data)
      const res = req.data
      if (req.status != 200) throw res
      console.log(res)
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
      signinUser({ username, password })()
    }
  }

  return (
    <form className="relative grid text-white text-2xl" onSubmit={submitHandler}>
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
        value="Signin"
      />
    </form>
  )
}

export default Signin
