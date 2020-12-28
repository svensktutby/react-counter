import React, { FC, memo } from 'react'
import s from './Counter.module.css'
import { ButtonWithMemo } from '../Button'
import { Scoreboard } from '../Scoreboard'
import { StateType } from '../../bus/reducer'
import { ActionTypes } from '../../bus/types'
import { activateSetterAC, incrementAC, resetAC } from '../../bus/action'

type CounterPropsType = {
  className?: string
  state: StateType
  dispatch: (props: ActionTypes) => void
}

export const Counter: FC<CounterPropsType> = memo(
  ({ className, state, dispatch }) => {
    const { isSetterActive, error, counter, minCounter, maxCounter } = state

    const increaseCounter = (payload: number) => {
      dispatch(incrementAC(payload))
    }

    const resetCounter = () => {
      dispatch(resetAC())
    }

    const showSetter = () => {
      dispatch(activateSetterAC())
    }

    const counterClassName = `${s.counter} jumbotron p-4 ${
      className ? className : ''
    }`

    return (
      <div className={counterClassName}>
        <div className="mb-auto">
          <Scoreboard
            alarm={counter >= maxCounter}
            isCounterActive={!isSetterActive}
            error={error}
          >
            {counter}
          </Scoreboard>
        </div>
        <hr className="my-4 w-100" />
        <div className="btn-group btn-group-lg w-100">
          <ButtonWithMemo
            className="btn-info w-50"
            disabled={counter >= maxCounter || isSetterActive}
            onClick={() => increaseCounter(1)}
          >
            Inc
          </ButtonWithMemo>
          <ButtonWithMemo
            className="btn-info w-50"
            disabled={counter === minCounter || isSetterActive}
            onClick={() => resetCounter()}
          >
            Reset
          </ButtonWithMemo>
          <ButtonWithMemo className="btn-info w-50" onClick={showSetter}>
            Set
          </ButtonWithMemo>
        </div>
      </div>
    )
  },
)
