import { Order } from '../../../types'

const OrdersRow = ({ orderId, user, products, issuedAt, status }: Order) => {
  const issueDate = new Date(issuedAt).toUTCString()
  console.log(issueDate)
  const showInfo = () => {
    return (
      <>
        <span className="text-accent">{orderId}</span>
        <span className="text-center">{user.id}</span>
        <span className="text-accent">{user.username}</span>
        <span>{issueDate}</span>
        <span className="text-accent">{status}</span>
      </>
    )
  }
  return (
    <div
      className="grid grid-cols-[1fr_repeat(4,_1fr)] 
        p-3 list-none border-t-2 border-b-2 border-secondary
        text-third place-items-center font-bold">
      {showInfo()}
    </div>
  )
}

export default OrdersRow
