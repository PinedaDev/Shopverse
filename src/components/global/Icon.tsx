import React from 'react'

type IconProps = {
  iconRef: string
}

const Icon = ({ iconRef }: IconProps) => {
  return (
    <span className={`mdi ${iconRef} text-2xl text-white duration-300 hover:text-cyan-500`}></span>
  )
}

export default Icon
