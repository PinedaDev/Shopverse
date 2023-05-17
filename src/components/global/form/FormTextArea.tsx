import React from 'react'

type TextAreaProps = {
  id: string
  text: string
  onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void
}

const FormTextArea = ({ text, id, onChange }: TextAreaProps) => {
  const labelName = id
  labelName.charAt(0).toLocaleUpperCase
  return (
    <>
      <label className="font-bold my-2" htmlFor={id}>
        {labelName} :
      </label>
      <textarea
        className="p-3 text-accent bg-main"
        id={id}
        placeholder="Product Description"
        value={text}
        onChange={onChange}
      />
    </>
  )
}

export default FormTextArea
