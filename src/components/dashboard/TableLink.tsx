import React from 'react'
import { NavLink } from 'react-router-dom'
type TableLink = {
  path: string
  tableName: string
}
const TableLink = ({ path, tableName }: TableLink) => {
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? styles.active
            : 'bg-secondary text-accent font-bold p-2 px-5 rounded-sm text-xl  hover:text-white duration-300'
        }
        end>
        {tableName}
      </NavLink>
    </>
  )
}

const styles = {
  active: 'bg-accent text-white font-bold p-2 px-5 rounded-sm text-xl'
}

export default TableLink
