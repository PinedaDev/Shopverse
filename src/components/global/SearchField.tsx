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
      className="relative flex border-2 border-gray-400 w-4/5 rounded-full 
      m-auto md:absolute md:top-4 md:left-2/4 md:-translate-x-2/4 lg:w-4/12 ">
      <span className="absolute top-2/4 -translate-y-2/4 translate-x-2/4">
        <Icon iconRef="mdi-magnify" />
      </span>
      <input
        className="bg-transparent min-h-[2.5rem] text-gray-200 text-center w-full rounded-full"
        type="text"
        value={search.searchValue}
        onChange={searchHandler}
      />
    </div>
  )
}

export default SearchField
