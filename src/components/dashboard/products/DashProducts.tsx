import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import ProductRow from './ProductRow'
import { Product } from '../../../types'
import { useState } from 'react'
import EditForm from './EditForm'

const DashProducts = () => {
  const { products } = useSelector((state: RootState) => state)
  const [editState, setEditState] = useState({ isEditing: false, id: 0 })
  const openEditForm = (id: number) => {
    setEditState({ isEditing: true, id: id })
  }
  const closeEditForm = () => {
    setEditState({ isEditing: false, id: 0 })
  }
  return (
    <div className="relative">
      {products.all.length > 0 &&
        products.all.map((product: Product) => (
          <ProductRow key={product.id} {...product} edit={openEditForm} />
        ))}
      <EditForm {...editState} closeEdit={closeEditForm} />
    </div>
  )
}

export default DashProducts
