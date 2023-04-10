const TableHeader = ({ headers }: { headers: string[] }) => {
  return (
    <div
      style={{ gridTemplateColumns: `1fr repeat(${headers.length - 1}, 1fr)` }}
      className={`grid grid-cols  p-3 list-none border-t-2 border-b-2 border-secondary
        text-third place-items-center`}>
      {headers.map((header) => {
        return (
          <div className="grid place-items-center font-bold text-2xl" key={header}>
            {header}
          </div>
        )
      })}
    </div>
  )
}

export default TableHeader
