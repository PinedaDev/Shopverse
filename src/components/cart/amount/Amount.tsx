import { useDispatch } from 'react-redux'
import Icon from '@mdi/react'
import { mdiPlusBox, mdiMinusBox } from '@mdi/js'

import { handleIncreaseAmount } from '../../../redux/actions/cart'
import { handleDecreaseAmount } from '../../../redux/actions/cart'
import { AppDispatch } from '../../../redux/store'
const Amount = ({ value, id }: { value: number; id: number }) => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="flex items-center justify-around">
      <button onClick={() => dispatch(handleIncreaseAmount(id))}>
        <Icon path={mdiPlusBox} size={1} />
      </button>
      <span className="mx-3">{value}</span>
      <button onClick={() => dispatch(handleDecreaseAmount(id))}>
        <Icon path={mdiMinusBox} size={1} />
      </button>
    </div>
  )
}

export default Amount
