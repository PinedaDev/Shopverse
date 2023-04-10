import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AppDispatch, RootState } from '../redux/store'
import { Outlet, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/actions/products'
import Header from '../components/dashboard/Header'
import TableLink from '../components/dashboard/TableLink'

const Dashboard = () => {
  const tables = ['Products', 'Orders', 'Users']

  const { user } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/dashboard/products')
    if (!user.info) {
      navigate('/')
    } else {
      user.info.role !== 'ADMIN' ? navigate('/') : ''
    }
  }, [])

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
      <div className="flex space-x-10 ml-3 mt-3">{showTableLinks()}</div>
      <Outlet />
    </div>
  )
}

export default Dashboard
