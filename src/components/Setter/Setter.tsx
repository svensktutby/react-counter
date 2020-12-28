import React, { FC, useEffect } from 'react'
import { Input } from '../Input'
import { Button } from '../Button'
import { StateType } from '../../bus/reducer'
import s from './Setter.module.css'
import {
  setCounterAC,
  setErrorAC,
  setMaxCounterAC,
  setMinCounterAC,
} from '../../bus/action'
import { ActionTypes } from '../../bus/types'

type SetterPropsType = {
  className?: string
  state: StateType
  dispatch: (props: ActionTypes) => void
}

export const Setter: FC<SetterPropsType> = ({ className, state, dispatch }) => {
  const { setterActive, error, minCounter, maxCounter } = state

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(state))
  }, [state])

  useEffect(() => {
    if (minCounter < 0 || minCounter >= maxCounter) {
      dispatch(setErrorAC(true))
    } else {
      dispatch(setErrorAC(false))
    }
  }, [minCounter, maxCounter, dispatch])

  const setMinCounter = (payload: string) => {
    dispatch(setMinCounterAC(payload))
  }

  const setMaxCounter = (payload: string) => {
    dispatch(setMaxCounterAC(payload))
  }

  const setCounter = () => {
    dispatch(setCounterAC())
  }

  const setterClassName = `${s.setter} jumbotron p-4 ${
    className ? className : ''
  }`

  return (
    <div className={setterClassName}>
      <div className="mb-auto">
        <Input
          type="number"
          title="max value:"
          onChangeText={setMaxCounter}
          value={maxCounter}
          error={error}
        />
        <Input
          type="number"
          title="start value:"
          onChangeText={setMinCounter}
          value={minCounter}
          error={error}
        />
      </div>
      <hr className="my-4 w-100" />
      <div className="btn-group btn-group-lg w-100">
        <Button
          className="btn-info w-50"
          disabled={!setterActive || error}
          onClick={setCounter}
        >
          Set
        </Button>
      </div>
    </div>
  )
}
