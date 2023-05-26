import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const Header = () => {
  const { user } = useSelector((state: RootState) => state)
  return (
    <div className="flex justify-between bg-secondary p-3">
      <div className="flex space-x-2 items-center text-2xl font-bold text-white">
        <span>{user?.username}</span>
      </div>
      <Link to="/">
        <div className="flex duration-300 bg-main text-2xl px-3 py-2 rounded-sm text-accent items-center min-w-[4rem] hover:text-white hover:bg-accent">
          <span className="mr-3">Back</span>
          <span className="mdi mdi-store"></span>
        </div>
      </Link>
    </div>
  )
}

export default Header
