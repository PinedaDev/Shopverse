import { useEffect } from 'react'

import FormBg from './FormBg'
import FormEntry from './FormEntry'
import DashVariantSelector from '../../dashboard/products/DashVariantSelector'
import FormBtn from './FormBtn'
import FormTextArea from './FormTextArea'
import { Product } from '../../../types'

type EditFormProps = {
  id: string
  form: Product
  formIsOpen: boolean
  closeForm: () => void
  targetHandler: (id: string) => void
  nameHandler: (event: React.FormEvent<HTMLInputElement>) => void
  priceHandler: (event: React.FormEvent<HTMLInputElement>) => void
  descriptionHandler: (event: React.FormEvent<HTMLTextAreaElement>) => void
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void
  closeHandler: () => void
  updateHandler: () => void
}

const Form = ({
  formIsOpen,
  id,
  closeHandler,
  form,
  nameHandler,
  priceHandler,
  descriptionHandler,
  submitHandler,
  updateHandler,
  targetHandler
}: EditFormProps) => {
  useEffect(() => {
    if (id != '') {
      targetHandler(id)
      console.log(id)
    }
  }, [id])
  return (
    <FormBg formIsOpen={formIsOpen}>
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
        <FormTextArea id="description" text={form.description} onChange={descriptionHandler} />
        <div className="my-2">
          <DashVariantSelector title="Categories" variants={form.categories} />
          <DashVariantSelector title="Colors" variants={form.colors} />
          <DashVariantSelector title="Sizes" variants={form.sizes} />
        </div>
        <div className="flex justify-around ">
          <FormBtn btnName="Update" colorVariant="cyan" action={updateHandler} />
          <FormBtn btnName="Close" colorVariant="red" action={closeHandler} />
        </div>
      </form>
    </FormBg>
  )
}

export default Form
