import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../global/Icon'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const Header = () => {
  const { user } = useSelector((state: RootState) => state)
  return (
    <div className="flex justify-around bg-secondary p-3">
      <div className="flex space-x-2 items-center text-2xl font-bold text-white">
        <img className="rounded-full max-w-[40px]" src={user?.info?.picture} alt="" />
        <span>{user?.info?.name}</span>
      </div>
      <Link to="/">
        <div className="flex border-2 border-solid text-white border-gray-300 items-center min-w-[4rem] hover:text-black hover:bg-cyan-300">
          <span className="mx-3">back</span>
          <Icon iconRef="mdi-arrow-left-circle" />
        </div>
      </Link>
    </div>
  )
}

export default Header
