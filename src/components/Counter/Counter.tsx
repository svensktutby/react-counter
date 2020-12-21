import React, { FC } from 'react'
import s from './Counter.module.css'
import { Scoreboard } from '../Scoreboard'
import { Button } from '../Button'
import { StateType } from '../../bus/reducer'

type CounterPropsType = {
  className?: string
  state: StateType
  increaseCounter: () => void
  resetCounter: () => void
}

export const Counter: FC<CounterPropsType> = ({
  className,
  state,
  increaseCounter,
  resetCounter,
}) => {
  const { counter, minCounter, maxCounter } = state

  const counterClassName = `${s.counter} jumbotron ${
    className ? className : ''
  }`

  return (
    <div className={counterClassName}>
      <Scoreboard alarm={counter >= maxCounter}>{counter}</Scoreboard>
      <hr className="my-4" />
      <div className={`btn-group btn-group-lg ${s.btnGroup}`}>
        <Button
          className={`btn-info ${s.halfSize}`}
          disabled={counter >= maxCounter}
          clickHandler={increaseCounter}
        >
          Increment
        </Button>
        <Button
          className={`btn-info ${s.halfSize}`}
          disabled={counter === minCounter}
          clickHandler={resetCounter}
        >
          Reset
        </Button>
      </div>
    </div>
  )
}
