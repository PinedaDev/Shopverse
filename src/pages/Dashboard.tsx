import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useNavigate } from 'react-router'

const Dashboard = () => {
  const { user } = useSelector((state: RootState) => state)
  const navigate = useNavigate()

  if (!user.info) {
    navigate('/')
  } else {
    user.info.role !== 'ADMIN' ? navigate('/') : ''
  }
  return <div>Dashboard</div>
}

export default Dashboard
