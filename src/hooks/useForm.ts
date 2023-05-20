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
  sizes: [],
  colors: [],
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
  const variantsHandler = (variantName: string, input: string | number): void => {
    switch (variantName) {
      case 'categories': {
        setForm({ ...form, categories: [...form.categories, String(input)] })
        break
      }
      case 'colors': {
        setForm({ ...form, colors: [...form.colors, String(input)] })
        break
      }
      case 'sizes': {
        setForm({ ...form, sizes: [...form.sizes, Number(input)] })
        break
      }
      default:
        break
    }
  }
  const deleteVariantHandler = (variantCategory: string, value: string | number): void => {
    switch (variantCategory) {
      case 'categories': {
        setForm((prev) => ({
          ...prev,
          categories: prev.categories.filter((category: string) => (category !== value ? true : ''))
        }))
        break
      }
      case 'colors': {
        setForm((prev) => ({
          ...prev,
          colors: prev.colors.filter((color: string) => (color !== value ? true : ''))
        }))
        break
      }
      case 'sizes': {
        setForm((prev) => ({
          ...prev,
          sizes: prev.sizes.filter((size: number) => (size !== value ? true : ''))
        }))
        break
      }
      default:
        break
    }
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
    variantsHandler,
    deleteVariantHandler,
    submitHandler,
    closeHandler,
    createHandler,
    updateHandler
  }
}
