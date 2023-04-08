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
        }>
        {tableName}
      </NavLink>
    </>
  )
}

const styles = {
  active: 'text-cyan-300',
  pending: ''
}

export default TableLink
