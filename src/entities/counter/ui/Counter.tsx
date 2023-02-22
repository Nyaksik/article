import { type FC } from 'react'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from 'entities/counter/model/slice/counterSlice'
import { getCounterValue } from 'entities/counter/model/selectors/getCounterValue/getCounterValue'

interface ICounterProps {
  className?: string
}

export const Counter: FC<ICounterProps> = ({ className }) => {
  const dispatch = useDispatch()
  const value = useSelector(getCounterValue)

  const inc = () => {
    dispatch(counterActions.increment())
  }

  const dec = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid="value">{value}</h1>

      <Button data-testid="inc" theme={ButtonTheme.OUTLINED} onClick={inc}>+</Button>
      <Button data-testid="dec" theme={ButtonTheme.OUTLINED} onClick={dec}>-</Button>
    </div>
  )
}
