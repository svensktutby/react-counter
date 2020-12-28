import { reducer, StateType } from './reducer'
import { INCREMENT, RESET } from './types'
import { incrementAC, resetAC, setMinCounterAC } from './action'

describe('counter testing', () => {
  test('counter should be 1', () => {
    // data
    const state: StateType = {
      setterActive: false,
      error: false,
      counter: 0,
      minCounter: 0,
      maxCounter: 5,
    }

    // action
    const newState = reducer(state, incrementAC(1))

    // expectation
    expect(newState.counter).toBe(1)
  })

  test('counter should be 0', () => {
    // data
    const state: StateType = {
      setterActive: false,
      error: false,
      counter: 1,
      minCounter: 0,
      maxCounter: 5,
    }

    // action
    const newState = reducer(state, resetAC())

    // expectation
    expect(newState.counter).toBe(0)
    expect(newState.counter).not.toBe(1)
  })

  test('minCounter should be 3', () => {
    // data
    const state: StateType = {
      setterActive: false,
      error: false,
      counter: 1,
      minCounter: 0,
      maxCounter: 5,
    }

    // action
    const newState = reducer(state, setMinCounterAC('3'))

    // expectation
    expect(newState.minCounter).toBe(3)
    expect(newState.minCounter).not.toBe(0)
  })
})
