type VariantSelectorProps = {
  title: string
  variants: string[] | number[]
  variantState: string | number
  handleVariant: (event: React.FormEvent<HTMLSelectElement>) => void
}

const VariantSelector = ({
  title,
  variants,
  variantState,
  handleVariant
}: VariantSelectorProps) => {
  const showOptions = () => {
    return variants?.map((variant: string | number, i) => (
      <option className="text-black md:text-xl lg:text-2xl" key={i} value={variant}>
        {variant}
      </option>
    ))
  }
  return (
    <div>
      <label className="md:text-xl lg:text-3xl" htmlFor={`${title} select`}>
        {title}:
      </label>{' '}
      <br />
      <select
        value={variantState}
        onChange={handleVariant}
        className="bg-transparent before:bg-transparent after:bg-transparent"
        id={`${title} select`}>
        {showOptions()}
      </select>
    </div>
  )
}

export default VariantSelector
