import React from 'react'

type SearchField = {
  searchValue: string
  handleSearch: (event: React.FormEvent<HTMLInputElement>) => void
}

const SearchField = ({ searchValue, handleSearch }: SearchField) => {
  return (
    <>
      <input type="text" value={searchValue} onChange={handleSearch} />
    </>
  )
}

export default SearchField
