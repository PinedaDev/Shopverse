import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Product } from '../../../types'
import { AppDispatch, RootState } from '../../../redux/store'
import { updateProduct } from '../../../redux/actions/products'

type EditFormProps = {
  isEditing: boolean
  closeEdit: () => void
  id: number
}

const initialFormValues = {
  name: '',
  price: 0,
  description: ''
}

const EditForm = ({ isEditing, closeEdit, id }: EditFormProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { products } = useSelector((state: RootState) => state)
  const target = products.all.find((product: Product) => product.id === id)
  const [form, setForm] = useState(initialFormValues)
  useEffect(() => {
    if (target) {
      setForm({
        name: target.name,
        price: target.price,
        description: target.description
      })
    }
  }, [id])

  const nameHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form, name: event.currentTarget.value })
  }
  const priceHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form, price: Number(event.currentTarget.value) })
  }
  const descriptionHandler = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, description: event.currentTarget.value })
  }
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }
  return (
    <div
      className={`${
        isEditing ? 'block' : 'hidden'
      } absolute bg-main top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4
      w-[30%] p-5 border-2 border-solid duration-300 `}>
      <form className="grid  m-auto" onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          className="p-3 text-black"
          type="text"
          id="name"
          placeholder="Product Name"
          value={form.name}
          onChange={nameHandler}
        />
        <label htmlFor="name">Price</label>
        <input
          className="p-3 text-black"
          type="number"
          id="price"
          value={form.price}
          onChange={priceHandler}
        />
        <label htmlFor="name">Description</label>
        <textarea
          className="p-3 text-black"
          id="description"
          placeholder="Product Description"
          value={form.description}
          onChange={descriptionHandler}
        />
        <div className="flex justify-around text-white">
          <button
            className="my-5 hover:text-cyan-400"
            onClick={() => dispatch(updateProduct({ id, changes: form }))}>
            Update
          </button>
          <button className="my-5 hover:text-red-400" onClick={closeEdit}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditForm
