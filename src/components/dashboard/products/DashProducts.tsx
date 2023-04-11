import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Product } from '../../../types'
import { RootState } from '../../../redux/store'

import ProductRow from './ProductRow'
import EditForm from './EditForm'
import TableHeader from '../TableHeader'

const DashProducts = () => {
  const { products } = useSelector((state: RootState) => state)
  const [editState, setEditState] = useState({ isEditing: false, id: 0 })
  const openEditForm = (id: number) => {
    setEditState({ isEditing: true, id: id })
  }
  const closeEditForm = () => {
    setEditState({ isEditing: false, id: 0 })
  }
  const headers = ['Id', 'Name', 'Categories', 'Price', 'Colors', 'Sizes', 'Controls']
  return (
    <div>
      <TableHeader headers={headers} />
      {products.all.length > 0 &&
        products.all.map((product: Product) => (
          <ProductRow key={product.id} {...product} edit={openEditForm} />
        ))}
      <EditForm {...editState} closeEdit={closeEditForm} />
    </div>
  )
}

export default DashProducts
