import { useEffect, useState } from 'react'

import { Order } from '../../../types'

import TableHeader from '../TableHeader'
import OrdersRow from './OrdersRow'

type OrdersState = {
  isLoading: boolean
  error: null | string
  all: Order[] | undefined
}

const initialOrders = {
  isLoading: true,
  error: null,
  all: []
}

const DashOrders = () => {
  const headers = ['Id', 'User Id', "Product's Id", 'Total Invoice']

  const [orders, setOrders] = useState<OrdersState>(initialOrders)
  const showOrders = () => {
    if (orders.all) {
      return orders.all.map((order) => {
        return <OrdersRow key={order.id} {...order} />
      })
    }
  }

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
      {orders.isLoading && <h1>Loading Data</h1>}
      {!orders.isLoading && showOrders()}
    </div>
  )
}

export default DashOrders
