import React from 'react'

type FormBtnProps = {
  btnName: string
  colorVariant: 'cyan' | 'red'
  action: () => void
}

const FormBtn = ({ btnName, colorVariant, action }: FormBtnProps) => {
  const blueBtn =
    'my-5 py-2 px-4 duration-300 bg-main text-accent border-gray-300 hover:text-cyan-400'
  const redBtn =
    'my-5 py-2 px-4 duration-300 bg-main text-accent border-gray-300 hover:text-red-400'

  return (
    <button className={colorVariant === 'cyan' ? blueBtn : redBtn} onClick={action}>
      {btnName}
    </button>
  )
}
export default FormBtn
