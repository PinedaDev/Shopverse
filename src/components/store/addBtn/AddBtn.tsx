import Icon from '@mdi/react'
import { mdiCartPlus } from '@mdi/js'

const AddBtn = () => {
  return (
    <button>
      <span>Cart</span>
      <Icon className="text-gray-300" path={mdiCartPlus} size={2} />
    </button>
  )
}

export default AddBtn
