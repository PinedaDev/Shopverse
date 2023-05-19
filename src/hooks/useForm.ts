import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Product } from '../types'
import { AppDispatch, RootState } from '../redux/store'
import { createProductThunk, updateProductThunk } from '../redux/actions/products'

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

export function useForm() {
  const [form, setForm] = useState<Product>(initialFormValues)
  const [formIsOpen, setEditState] = useState({ formIsOpen: false, id: '' })

  const { products } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()

  const openForm = (id: string) => {
    !id ? (id = '') : id
    setEditState({ formIsOpen: true, id: id })
  }
  const closeForm = () => {
    setEditState({ formIsOpen: false, id: '' })
    setForm(initialFormValues)
  }

  // form handlers
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
  const targetHandler = (id: string) => {
    const target = products.all.find((product: Product) => product.id === id)
    setForm({ ...target })
  }
  const closeHandler = () => {
    closeForm()
  }
  const updateHandler = () => {
    dispatch(updateProductThunk(form.id, form))
  }
  const createHandler = () => {
    dispatch(createProductThunk(form))
  }
  return {
    form,
    formIsOpen,
    openForm,
    closeForm,
    targetHandler,
    nameHandler,
    priceHandler,
    descriptionHandler,
    submitHandler,
    closeHandler,
    createHandler,
    updateHandler
  }
}
