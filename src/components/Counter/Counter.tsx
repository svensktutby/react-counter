import React, { FC } from 'react'
import { Scoreboard } from '../Scoreboard'
import { Button } from '../Button'
import { StateType } from '../../bus/reducer'
import s from './Counter.module.css'
import { ActionTypes } from '../../bus/types'
import { incrementAC, resetAC } from '../../bus/action'

type CounterPropsType = {
  className?: string
  state: StateType
  dispatch: (props: ActionTypes) => void
}

export const Counter: FC<CounterPropsType> = ({
  className,
  state,
  dispatch,
}) => {
  const { setterActive, error, counter, minCounter, maxCounter } = state

  const increaseCounter = (payload: number) => {
    dispatch(incrementAC(payload))
  }

  const resetCounter = () => {
    dispatch(resetAC())
  }

  const counterClassName = `${s.counter} jumbotron p-4 ${
    className ? className : ''
  }`

  return (
    <div className={counterClassName}>
      <div className="mb-auto">
        <Scoreboard
          alarm={counter >= maxCounter}
          activeCounter={!setterActive}
          error={error}
        >
          {counter}
        </Scoreboard>
      </div>
      <hr className="my-4 w-100" />
      <div className="btn-group btn-group-lg w-100">
        <Button
          className="btn-info w-50"
          disabled={counter >= maxCounter || setterActive}
          onClick={() => increaseCounter(1)}
        >
          Increment
        </Button>
        <Button
          className="btn-info w-50"
          disabled={counter === minCounter || setterActive}
          onClick={() => resetCounter()}
        >
          Reset
        </Button>
      </div>
    </div>
  )
}
