import React from 'react'
import Icon from '../../global/Icon'

const CreateProduct = ({ action }: { action: () => void }) => {
  return (
    <div className="absolute top-[90%] left-[90%] flex items-center justify-center">
      <button
        className="flex text-white font-bold space-x-2 items-center text-xl 
          bg-secondary py-2 px-4 rounded-sm duration-300 hover:text-accent"
        onClick={action}>
        <Icon iconRef="mdi-plus-thick" />
        <span>Add</span>
      </button>
    </div>
  )
}

export default CreateProduct
