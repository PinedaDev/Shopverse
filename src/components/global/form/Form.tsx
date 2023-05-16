import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Product } from '../../../types'
import { AppDispatch, RootState } from '../../../redux/store'
import { handleProductUpdate } from '../../../redux/actions/products'
import FormBg from './FormBg'
import FormEntry from './FormEntry'

type FormProps = {
  isEditing: boolean
  closeEdit: () => void
  id: string
}

const initialFormValues: Product = {
  id: '',
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

const Form = ({ isEditing, closeEdit, id }: FormProps) => {
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
    <FormBg isEditing={isEditing}>
      <h1 className="text-2xl text-center font-bold">Product Info</h1>
      <form className="grid  m-auto" onSubmit={submitHandler}>
        <FormEntry
          id="name"
          placeHolder="Product Name"
          type="text"
          inputValue={form.name}
          handler={nameHandler}
        />
        <FormEntry
          id="price"
          placeHolder="Product Price"
          type="number"
          inputValue={form.price}
          handler={priceHandler}
        />
        <textarea
          className="p-3 text-accent bg-main"
          id="description"
          placeholder="Product Description"
          value={form.description}
          onChange={descriptionHandler}
        />
      </form>
    </FormBg>
  )
}

export default Form
