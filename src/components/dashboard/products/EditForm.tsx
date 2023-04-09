import React, { useEffect, useState } from 'react'
import { Product } from '../../../types'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

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
  console.log(isEditing)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }
  return (
    <div
      className={`${
        isEditing ? 'block' : 'hidden'
      } absolute bg-main top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4
      w-[30%] p-5 border-2 border-solid duration-300 `}>
      <form className="grid  m-auto" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="p-3 text-black"
          value={form.name}
          type="text"
          id="name"
          placeholder="Product Name"
        />
        <label htmlFor="name">Price</label>
        <input className="p-3 text-black" type="number" id="price" value={target && form.price} />
        <label htmlFor="name">Description</label>
        <textarea
          className="p-3 text-black"
          id="description"
          placeholder="Product Description"
          value={form.description}
        />
        <div className="flex justify-around">
          <button className="my-5 hover:text-cyan-400">Update</button>
          <button onClick={closeEdit} className="my-5 hover:text-red-400">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditForm
