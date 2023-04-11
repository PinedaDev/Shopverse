import { Order } from '../../../types'

const OrdersRow = ({ id, userId, orderItems, totalInvoice }: Order) => {
  const showInfo = () => {
    return (
      <>
        <span className="text-accent">{id}</span>
        <span>{userId}</span>
        <span>
          {orderItems.map(
            (item, index) =>
              `${index !== orderItems.length - 1 ? `${item.productId}, ` : `${item.productId}`}`
          )}
        </span>
        <span className="text-accent">{totalInvoice}.00€</span>
      </>
    )
  }
  return (
    <div
      className="grid grid-cols-[1fr_repeat(3,_1fr)] 
        p-3 list-none border-t-2 border-b-2 border-secondary
        text-third place-items-center font-bold">
      {showInfo()}
    </div>
  )
}

export default OrdersRow
