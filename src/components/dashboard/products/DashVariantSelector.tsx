import Icon from '../../global/Icon'

type DashVariantSelectorProps = {
  title: string
  variants: string[] | number[]
}

const DashVariantSelector = ({ title, variants }: DashVariantSelectorProps) => {
  const showOptions = () => {
    return variants?.map((variant, i) => (
      <div key={i} className="flex space-x-2 p-1 border-2 items-center w-fit my-1 cursor-pointer">
        <span>{variant}</span>
        <Icon iconRef="mdi-close" />
      </div>
    ))
  }
  return (
    <details>
      <summary className="cursor-pointer text-xl">{title}</summary>
      <input
        className="text-black text-center"
        type={typeof variants[0] !== 'string' ? 'number' : 'text'}
      />
      <button className="mx-3  border-2 items-center w-fit py-2 px-4 cursor-pointer">Add</button>
      <div className="flex space-x-3 flex-wrap">{showOptions()}</div>
    </details>
  )
}

export default DashVariantSelector
