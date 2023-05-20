import React from 'react'

type InputProps = {
  id: string
  placeHolder: string
  type: string
  inputValue: string | number
  handler: (event: React.FormEvent<HTMLInputElement>) => void
}

const FormEntry = ({ id, placeHolder, type, inputValue, handler }: InputProps) => {
  const labelName = id
  id.charAt(0).toLocaleUpperCase
  return (
    <>
      <label className="font-bold my-2" htmlFor={type}>
        {labelName} :
      </label>
      <input
        className="p-3 text-accent bg-main"
        type={type}
        id={id}
        placeholder={placeHolder}
        value={inputValue}
        onChange={handler}
      />
    </>
  )
}

export default FormEntry
