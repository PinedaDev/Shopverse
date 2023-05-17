import { useSelector } from 'react-redux'

import { Product } from '../../../types'
import { RootState } from '../../../redux/store'

import ProductRow from './ProductRow'
import EditForm from './EditForm'
import TableHeader from '../TableHeader'
import { useForm } from '../../../hooks/useForm'

const DashProducts = () => {
  const { products } = useSelector((state: RootState) => state)
  const {
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
    updateHandler
  } = useForm()
  const headers = ['Id', 'Name', 'Categories', 'Price', 'Colors', 'Sizes', 'Controls']
  return (
    <div>
      <TableHeader headers={headers} />
      {products.all.length > 0 &&
        products.all.map((product: Product) => (
          <ProductRow key={product.id} {...product} edit={openForm} />
        ))}
      <EditForm
        {...formIsOpen}
        form={form}
        closeForm={closeForm}
        targetHandler={targetHandler}
        nameHandler={nameHandler}
        priceHandler={priceHandler}
        descriptionHandler={descriptionHandler}
        submitHandler={submitHandler}
        closeHandler={closeHandler}
        updateHandler={updateHandler}
      />
    </div>
  )
}

export default DashProducts
