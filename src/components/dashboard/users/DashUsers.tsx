import { useEffect, useState } from 'react'

import { User } from '../../../types'

import UsersRow from './UsersRow'
import TableHeader from '../TableHeader'
import axios from 'axios'
import { userConfig } from '../../../utils/axiosConfig'

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
  const headers = ['Id', 'Username', 'Role', 'Controls']

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
        const req = await axios.get(userConfig.url, userConfig.config)
        const res = await req.data
        if (req.status != 200) throw req
        setUsers({ ...users, isLoading: false, all: res })
      } catch (error) {
        setUsers({ ...users, isLoading: false, error: 'Something is wrong' })
      }
    }
    getUsers()
  }, [])

  return (
    <div className="relative">
      <TableHeader headers={headers} />
      {users.isLoading && <h1>Loading Data</h1>}
      {!users.isLoading && showUsers()}
    </div>
  )
}

export default DashUsers
