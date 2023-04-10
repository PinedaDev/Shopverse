import { useEffect, useState } from 'react'
import TableHeader from '../TableHeader'
import { Order } from '../../../types'

type OrdersState = {
  isLoading: boolean
  error: null | string
  all: Order[] | undefined
}

const initialOrders = {
  isLoading: false,
  error: null,
  all: []
}

const DashOrders = () => {
  const headers = ['Id', 'User Id', "Product's Id", 'Total Invoice']

  const [orders, setOrders] = useState<OrdersState>(initialOrders)

  useEffect(() => {
    const getOrders = async () => {
      try {
        setOrders({ ...orders, isLoading: true })
        const req = await fetch('../orders.json')
        const res = await req.json()
        const data = res.data
        if (!req.ok) throw data
        setOrders({ ...orders, isLoading: false, all: data })
      } catch (error) {
        setOrders({ ...orders, isLoading: false, error: 'Something is wrong' })
      }
    }
    getOrders()
  }, [])

  return (
    <div className="relative">
      <TableHeader headers={headers} />
    </div>
  )
}

export default DashOrders
