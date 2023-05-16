import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Product } from '../../../types'
import { RootState } from '../../../redux/store'

import ProductRow from './ProductRow'
import EditForm from './EditForm'
import Form from '../../global/form/Form'
import TableHeader from '../TableHeader'
import { useForm } from '../../../hooks/useForm'

const DashProducts = () => {
  const { products } = useSelector((state: RootState) => state)
  const { editState, openEditForm, closeEditForm } = useForm()
  const headers = ['Id', 'Name', 'Categories', 'Price', 'Colors', 'Sizes', 'Controls']
  return (
    <div>
      <TableHeader headers={headers} />
      {products.all.length > 0 &&
        products.all.map((product: Product) => (
          <ProductRow key={product.id} {...product} edit={openEditForm} />
        ))}
      <Form {...editState} closeEdit={closeEditForm} />
    </div>
  )
}

export default DashProducts
