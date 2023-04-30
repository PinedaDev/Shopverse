import { useEffect, useState } from 'react'
import { FilterStateProps } from '../../hooks/useFilter'

type SelectorProps = {
  setFilter: ({ ...props }: FilterStateProps) => void
  filter: FilterStateProps
  title: string
  options: string[]
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
    if (selector.length !== 0) {
      setFilter({
        ...filter,
        criteria: {
          ...filter.criteria,
          tags: selector
        }
      })
    }
  }, [selector])

  useEffect(() => {
    if (filter.criteria.tags.length === 0) {
      setSelector((prev) => (prev = []))
    }
  }, [filter.criteria.tags])

  const showOptions = () =>
    options.map((option, i) => (
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
          checked={selector.includes(option) ? true : false}
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
