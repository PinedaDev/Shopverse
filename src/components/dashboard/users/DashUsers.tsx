import { useEffect, useState } from 'react'
import TableHeader from '../TableHeader'
import { Order } from '../../../types'

type UsersState = {
  isLoading: boolean
  error: null | string
  all: Order[] | undefined
}

const initialUsers = {
  isLoading: false,
  error: null,
  all: []
}

const DashUsers = () => {
  const headers = ['Id', 'Name', 'Email', 'Orders']

  const [users, setUsers] = useState<UsersState>(initialUsers)

  useEffect(() => {
    const getUsers = async () => {
      try {
        setUsers({ ...users, isLoading: true })
        const req = await fetch('../users.json')
        const res = await req.json()
        const data = res.data
        if (!req.ok) throw data
        setUsers({ ...users, isLoading: false, all: data })
      } catch (error) {
        setUsers({ ...users, isLoading: false, error: 'Something is wrong' })
      }
    }
    getUsers()
  }, [])
  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <div className="relative">
      <TableHeader headers={headers} />
    </div>
  )
}

export default DashUsers
