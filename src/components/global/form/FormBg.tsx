import React, { ReactNode } from 'react'

interface FormBgProps {
  children: ReactNode
  formIsOpen: boolean
}

const FormBg: React.FC<FormBgProps> = ({ children, formIsOpen }) => {
  return (
    <div
      className={`${
        formIsOpen ? 'block' : 'hidden'
      } absolute bg-secondary top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4
      w-[30%] p-5 border-2 border-solid border-main duration-300 max-h-[80vh] overflow-auto text-white `}>
      {children}
    </div>
  )
}

export default FormBg
