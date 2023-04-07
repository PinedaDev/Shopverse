import React from 'react'

type IconProps = {
  iconRef: string
}

const Icon = ({ iconRef }: IconProps) => {
  return <span className={`mdi ${iconRef} text-2xl text-white`}></span>
}

export default Icon
