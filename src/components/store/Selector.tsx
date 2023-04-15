import { useEffect, useState } from 'react'
import { FilterStateProps } from '../../hooks/useFilter'

type SelectorProps = {
  setFilter: ({ ...props }: FilterStateProps) => void
  filter: FilterStateProps
  title: string
  options: string[] | number[]
}

const Selector = ({ options, filter, setFilter, title }: SelectorProps) => {
  const [selector, setSelector] = useState<string[]>([])
  const selectionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value
    selector?.includes(target)
      ? setSelector(selector.filter((option) => (option === target ? '' : true)))
      : setSelector([...selector, target])
  }

  useEffect(() => {
    setFilter({
      ...filter,
      criteria: {
        ...filter.criteria,
        categories: selector
      }
    })
  }, [selector])
  const showOptions = () =>
    options.map((option) => (
      <li key={option} className="flex flex-row-reverse justify-end ">
        <label className="cursor-pointer" htmlFor={`filterSelector${option}`}>
          {option}
        </label>
        <input
          onChange={selectionHandler}
          className="mx-3 cursor-pointer"
          type="checkbox"
          id={`filterSelector${option}`}
          value={option}
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
