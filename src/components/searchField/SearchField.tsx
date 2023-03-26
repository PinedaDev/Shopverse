import Icon from '@mdi/react'
import { mdiMagnify } from '@mdi/js'
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
    <div className="relative flex border-4 border-gray-400 w-4/5 rounded-full m-auto">
      <Icon className="text-gray-400" path={mdiMagnify} size={2} />
      <input
        className="bg-transparent text-gray-200 text-center focus-visible:border-none"
        type="text"
        value={search.searchValue}
        onChange={searchHandler}
      />
    </div>
  )
}

export default SearchField
