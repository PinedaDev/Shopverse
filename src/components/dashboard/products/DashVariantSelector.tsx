import { useState } from 'react'
import Icon from '../../global/Icon'

type DashVariantSelectorProps = {
  title: string
  variants: string[] | number[]
  handler: (variant: string, input: string | number) => void
  deleteHandler: (variantCategory: string, value: string | number) => void
}

type SelectorState = {
  input: string | number
}

const DashVariantSelector = ({
  title,
  variants,
  handler,
  deleteHandler
}: DashVariantSelectorProps) => {
  const [selectorState, setSelectorState] = useState<SelectorState>({ input: '' })
  const variantName = title.toLowerCase()
  const inputHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setSelectorState({ input: event.currentTarget.value })
  }
  const handleDelete = (variant: string, value: string | number) => {
    deleteHandler(title.toLowerCase(), value)
    console.log(typeof variant)
  }
  const showOptions = () => {
    return variants?.map((variant, i) => (
      <div
        key={i}
        className="flex space-x-2 p-1 text-accent bg-main border-2 border-accent items-center w-fit my-1 cursor-pointer">
        <span>{variant}</span>
        <i
          className="mdi mdi-close text-2xl text-white hover:text-red-500"
          onClick={() => handleDelete(title, variant)}></i>
      </div>
    ))
  }
  return (
    <details>
      <summary className="cursor-pointer text-xl font-bold">{title}</summary>
      <input
        className="p-3 text-accent bg-main text-center"
        type={title === 'Price' ? 'number' : 'text'}
        placeholder="Something new ?"
        onChange={inputHandler}
      />
      <button
        className="mx-3 bg-main text-accent items-center w-fit py-2 px-4 cursor-pointer duration-300 hover:shadow-lg hover:text-white"
        onClick={() => handler(variantName, selectorState.input)}>
        Add
      </button>
      <div className="flex space-x-3 flex-wrap">{showOptions()}</div>
    </details>
  )
}

export default DashVariantSelector
