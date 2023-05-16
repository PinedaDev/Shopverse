import { useDispatch } from 'react-redux'
import Icon from '../global/Icon'

import { handleIncreaseAmount } from '../../redux/actions/cart'
import { handleDecreaseAmount } from '../../redux/actions/cart'
import { AppDispatch } from '../../redux/store'
const Amount = ({ value, id }: { value: number; id: string }) => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="flex items-center justify-around">
      <button onClick={() => dispatch(handleIncreaseAmount(id))}>
        <Icon iconRef="mdi-plus-box" />
      </button>
      <span className="mx-3">{value}</span>
      <button onClick={() => dispatch(handleDecreaseAmount(id))}>
        <Icon iconRef="mdi-minus-box" />
      </button>
    </div>
  )
}

export default Amount
