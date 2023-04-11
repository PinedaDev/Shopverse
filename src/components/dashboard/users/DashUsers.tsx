import { useEffect, useState } from 'react'

import { User } from '../../../types'

import UsersRow from './UsersRow'
import TableHeader from '../TableHeader'

type UsersState = {
  isLoading: boolean
  error: null | string
  all: User[] | undefined
}

const initialUsers = {
  isLoading: false,
  error: null,
  all: []
}

const DashUsers = () => {
  const headers = ['Id', 'Name', 'Email', 'Orders', 'Controls']

  const [users, setUsers] = useState<UsersState>(initialUsers)
  const showUsers = () => {
    if (users.all) {
      return users.all.map((user) => {
        return <UsersRow key={user.id} {...user} />
      })
    }
  }
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
      {users.isLoading && <h1>Loading Data</h1>}
      {!users.isLoading && showUsers()}
    </div>
  )
}

export default DashUsers
