import {
  ActionTypes,
  ACTIVATE_SETTER,
  INCREMENT,
  RESET,
  SET_COUNTER,
  SET_ERROR,
  SET_MAX_COUNTER,
  SET_MIN_COUNTER,
} from './types'

export const initialState = {
  isSetterActive: false,
  error: false,
  counter: 0,
  minCounter: 0,
  maxCounter: 5,
}

export type StateType = typeof initialState

export const reducer = (
  state = initialState,
  action: ActionTypes,
): StateType => {
  switch (action.type) {
    case INCREMENT: {
      let increase = state.counter
      if (state.counter < state.maxCounter) {
        increase = state.counter + action.payload
        if (increase > state.maxCounter) increase = state.maxCounter
      }
      return { ...state, counter: increase }
    }

    case RESET:
      return { ...state, counter: state.minCounter }

    case SET_MIN_COUNTER:
      return {
        ...state,
        minCounter: +action.payload,
      }

    case SET_MAX_COUNTER:
      return {
        ...state,
        maxCounter: +action.payload,
      }

    case SET_COUNTER:
      return { ...state, counter: state.minCounter, isSetterActive: false }

    case SET_ERROR:
      return { ...state, error: action.error }

    case ACTIVATE_SETTER:
      return { ...state, isSetterActive: true }

    default:
      return state
  }
}
