import Icon from '../../global/Icon'

type DashVariantSelectorProps = {
  title: string
  variants: string[] | number[]
}

const DashVariantSelector = ({ title, variants }: DashVariantSelectorProps) => {
  const showOptions = () => {
    return variants?.map((variant, i) => (
      <div
        key={i}
        className="flex space-x-2 p-1 text-accent bg-main border-2 border-accent items-center w-fit my-1 cursor-pointer">
        <span>{variant}</span>
        <Icon iconRef="mdi-close" />
      </div>
    ))
  }
  return (
    <details>
      <summary className="cursor-pointer text-xl font-bold">{title}</summary>
      <input
        className="p-3 text-accent bg-main text-center"
        type={typeof variants[0] !== 'string' ? 'number' : 'text'}
      />
      <button className="mx-3 bg-main text-accent items-center w-fit py-2 px-4 cursor-pointer duration-300 hover:shadow-lg hover:text-white">
        Add
      </button>
      <div className="flex space-x-3 flex-wrap">{showOptions()}</div>
    </details>
  )
}

export default DashVariantSelector
