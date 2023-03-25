import { SearchStateProps } from '../../hooks/useSearch'

type SearchField = {
  search: SearchStateProps
  setSearch: ({ ...props }: SearchStateProps) => void
}

const SearchField = ({ search, setSearch }: SearchField) => {
  const searchHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setSearch({ ...search, searchValue: event.currentTarget.value })
  }
  return (
    <>
      <input type="text" value={search.searchValue} onChange={searchHandler} />
    </>
  )
}

export default SearchField
