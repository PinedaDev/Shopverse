import { useSelector } from 'react-redux'

import { Product } from '../../../types'
import { RootState } from '../../../redux/store'
import { useForm } from '../../../hooks/useForm'

import Form from '../../global/form/Form'
import ProductRow from './ProductRow'
import TableHeader from '../TableHeader'
import CreateProduct from './CreateProduct'

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
    variantsHandler,
    deleteVariantHandler,
    submitHandler,
    createHandler,
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
      <CreateProduct action={() => openForm(form.id)} />
      <Form
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
        createHandler={createHandler}
        variantsHandler={variantsHandler}
        deleteVariantHandler={deleteVariantHandler}
      />
    </div>
  )
}

export default DashProducts
