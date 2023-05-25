import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'

import { RootState } from '../redux/store'

import Header from '../components/dashboard/Header'
import TableLink from '../components/dashboard/TableLink'

const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/dashboard/products')
  }, [])

  const tables = ['Products', 'Orders', 'Users']
  const showTableLinks = () =>
    tables.map((tableLink, i) => (
      <TableLink
        key={tableLink + i}
        path={`/dashboard/${tableLink.toLowerCase()}`}
        tableName={tableLink}
      />
    ))
  return (
    <div className="bg-main min-h-screen font-montserrat">
      <Header />
      <div className="flex space-x-10 ml-3 my-3">{showTableLinks()}</div>
      <Outlet />
    </div>
  )
}

export default Dashboard
