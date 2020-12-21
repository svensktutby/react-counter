import { ActionTypes, INCREMENT, RESET } from './types'

export type StateType = {
  counter: number
  minCounter: number
  maxCounter: number
}

export const initialState: StateType = {
  counter: 0,
  minCounter: 0,
  maxCounter: 5,
}

export const reducer = (
  state = initialState,
  action: ActionTypes,
): StateType => {
  switch (action.type) {
    case INCREMENT:
      let increase = state.counter
      if (state.counter < state.maxCounter) {
        increase = state.counter + action.payload
        if (increase > state.maxCounter) increase = state.maxCounter
      }
      return { ...state, counter: increase }

    case RESET:
      return { ...state, counter: 0 }

    default:
      return state
  }
}
