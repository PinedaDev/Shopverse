import Icon from '@mdi/react'
import { mdiCreditCardOutline } from '@mdi/js'

const BuyBtn = () => {
  return (
    <button>
      <span>Buy</span>
      <Icon className="text-gray-300" path={mdiCreditCardOutline} size={2} />
    </button>
  )
}

export default BuyBtn
