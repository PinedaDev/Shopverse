import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-around bg-secondary p-3">
      <input type="text" />
      <Link to="/">back</Link>
    </div>
  )
}

export default Header
