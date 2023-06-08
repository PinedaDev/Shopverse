import { User } from '../../../types'

const UsersRow = ({ id, username, role }: User) => {
  const showInfo = () => {
    return (
      <>
        <span className="text-accent">{id}</span>
        <span>{username}</span>
        <span>{role}</span>
        <button
          className="flex space-x-2 items-center text-xl 
        bg-secondary py-2 px-4 rounded-sm duration-300 hover:text-red-500">
          <span className="mdi mdi-account-lock" />
          <span>Ban User</span>
        </button>
      </>
    )
  }
  return (
    <div
      className="grid grid-cols-[1fr_repeat(3,_1fr)] 
        p-3 list-none border-t-2 border-b-2 border-secondary
        text-third place-items-center font-bold">
      {showInfo()}
    </div>
  )
}

export default UsersRow
