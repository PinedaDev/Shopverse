import React from 'react'

type VariantSelectorProps = {
  title: string
  variants: string[] | number[]
}

const VariantSelector = ({ title, variants }: VariantSelectorProps) => {
  const showOptions = () => {
    return variants.map((variant: string | number, i) => (
      <option className="text-black md:text-xl lg:text-2xl" key={i} value={variant}>
        {variant}
      </option>
    ))
  }
  return (
    <div>
      <label className="md:text-xl lg:text-3xl" htmlFor={`${title} select`}>
        {title}:
      </label>{' '}
      <br />
      <select
        className="bg-transparent before:bg-transparent after:bg-transparent"
        id={`${title} select`}>
        {showOptions()}
      </select>
    </div>
  )
}

export default VariantSelector
