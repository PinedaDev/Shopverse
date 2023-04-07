import Icon from './Icon'
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
    <div
      className="relative flex border-4 border-gray-400 w-4/5 rounded-full 
      m-auto md:absolute md:top-4 md:left-2/4 md:-translate-x-2/4 lg:w-4/12 ">
      <Icon iconRef="mdi-magnify" />
      <input
        className="bg-transparent text-gray-200 text-center w-full rounded-full"
        type="text"
        value={search.searchValue}
        onChange={searchHandler}
      />
    </div>
  )
}

export default SearchField