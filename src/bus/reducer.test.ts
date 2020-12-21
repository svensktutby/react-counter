import { reducer, StateType } from './reducer'
import { INCREMENT, RESET } from './types'

describe('counter testing', () => {
  test('counter should be 1', () => {
    // data
    const state: StateType = {
      counter: 0,
      minCounter: 0,
      maxCounter: 5,
    }

    // action
    const newState = reducer(state, { type: INCREMENT, payload: 1 })

    // expectation
    expect(newState.counter).toBe(1)
  })

  test('counter should be 0', () => {
    // data
    const state: StateType = {
      counter: 1,
      minCounter: 0,
      maxCounter: 5,
    }

    // action
    const newState = reducer(state, { type: RESET })

    // expectation
    expect(newState.counter).toBe(0)
    expect(newState.counter).not.toBe(1)
  })
})
