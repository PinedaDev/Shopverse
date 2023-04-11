import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Product } from '../../../types'
import { AppDispatch, RootState } from '../../../redux/store'
import { updateProduct } from '../../../redux/actions/products'
import DashVariantSelector from './DashVariantSelector'

type EditFormProps = {
  isEditing: boolean
  closeEdit: () => void
  id: number
}

const initialFormValues: Product = {
  id: 0,
  name: '',
  img: '',
  description: '',
  categories: [],
  sizes: [0],
  colors: [''],
  price: 0,
  reviews: 0,
  stars: 0
}

const EditForm = ({ isEditing, closeEdit, id }: EditFormProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { products } = useSelector((state: RootState) => state)
  const target: Product = products.all.find((product: Product) => product.id === id)
  const [form, setForm] = useState<Product>(initialFormValues)
  useEffect(() => {
    if (target) {
      setForm({ ...target })
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
      } absolute bg-secondary top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4
      w-[30%] p-5 border-2 border-solid border-main duration-300 max-h-[80vh] overflow-auto text-white `}>
      <h1 className="text-2xl text-center font-bold">Product Info</h1>
      <form className="grid  m-auto" onSubmit={submitHandler}>
        <label className="font-bold my-2" htmlFor="name">
          Name :
        </label>
        <input
          className="p-3 text-accent bg-main"
          type="text"
          id="name"
          placeholder="Product Name"
          value={form.name}
          onChange={nameHandler}
        />
        <label className="font-bold my-2" htmlFor="name">
          Price :
        </label>
        <input
          className="p-3 text-accent bg-main"
          type="number"
          id="price"
          value={form.price}
          onChange={priceHandler}
        />
        <label className="font-bold my-2" htmlFor="name">
          Description :
        </label>
        <textarea
          className="p-3 text-accent bg-main"
          id="description"
          placeholder="Product Description"
          value={form.description}
          onChange={descriptionHandler}
        />
        <div className="my-2">
          <DashVariantSelector title="Categories" variants={form.categories} />
          <DashVariantSelector title="Colors" variants={form.colors} />
          <DashVariantSelector title="Sizes" variants={form.sizes} />
        </div>
        <div className="flex justify-around ">
          <button
            className="my-5 py-2 px-4 duration-300 bg-main text-accent border-gray-300 hover:text-cyan-400"
            onClick={() => dispatch(updateProduct({ id, changes: form }))}>
            Update
          </button>
          <button
            className="my-5 py-2 px-4 duration-300 bg-main text-accent border-gray-300 hover:text-red-400"
            onClick={closeEdit}>
            Close
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditForm
