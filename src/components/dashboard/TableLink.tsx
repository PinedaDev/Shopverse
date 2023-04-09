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
        className={({ isActive, isPending }) =>
          isPending ? styles.pending : isActive ? styles.active : ''
        }
        end>
        {tableName}
      </NavLink>
    </>
  )
}

const styles = {
  active: 'bg-cyan-300 text-black',
  pending: ''
}

export default TableLink
