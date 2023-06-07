import { useEffect, useState } from 'react'

import { Order } from '../../../types'

import TableHeader from '../TableHeader'
import OrdersRow from './OrdersRow'
import Spinner from '../../global/Spinner'
import axios from 'axios'
import { orderConfig } from '../../../utils/axiosConfig'

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
  const headers = ['Id', 'User Id', 'Username', 'Issued at', 'Status']

  const [orders, setOrders] = useState<OrdersState>(initialOrders)
  const showOrders = () => {
    if (orders.all) {
      return orders.all.map((order) => {
        return <OrdersRow key={order.orderId} {...order} />
      })
    }
  }

  useEffect(() => {
    const getOrders = async () => {
      try {
        setOrders({ ...orders, isLoading: true })
        const req = await axios.get(orderConfig.url, orderConfig.config)
        const res = req.data
        setOrders({ ...orders, isLoading: false })
        console.log(req.status)
        console.log(res)
        if (req.status !== 200) throw res
        setOrders({ ...orders, isLoading: false, all: res })
      } catch (error) {
        setOrders({ ...orders, isLoading: false, error: 'Something is wrong' })
      }
    }
    getOrders()
  }, [])

  return (
    <div className="relative">
      <TableHeader headers={headers} />
      {orders.isLoading && <Spinner />}
      {!orders.isLoading && showOrders()}
    </div>
  )
}

export default DashOrders
