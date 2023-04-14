import { FilterStateProps } from '../../hooks/useFilter'

type SelectorProps = {
  setFilter: ({ ...props }: FilterStateProps) => void
  title: string
  criterias: string[] | number[]
}

const Selector = ({ criterias, setFilter, title }: SelectorProps) => {
  const showOptions = () =>
    criterias.map((criteria) => (
      <li key={criteria} className="flex flex-row-reverse justify-end ">
        <label className="cursor-pointer" htmlFor={`filterSelector${criteria}`}>
          {criteria}
        </label>
        <input
          className="mx-3 cursor-pointer"
          type="checkbox"
          id={`filterSelector${criteria}`}
          value={criteria}
        />
      </li>
    ))
  return (
    <div className="text-white w-3/4 m-auto ">
      <h3>{title}</h3>
      <ul>{showOptions()}</ul>
    </div>
  )
}

export default Selector
