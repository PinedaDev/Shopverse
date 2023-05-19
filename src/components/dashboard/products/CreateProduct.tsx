import React from 'react'
import Icon from '../../global/Icon'

const CreateProduct = ({ action }: { action: () => void }) => {
  return (
    <div onClick={action}>
      <div>
        <Icon iconRef="mdi-plus" />
      </div>
      <span>Create Product</span>
    </div>
  )
}

export default CreateProduct
