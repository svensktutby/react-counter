import {
  ActionTypes,
  INCREMENT,
  RESET,
  SET_COUNTER,
  SET_ERROR,
  SET_MAX_COUNTER,
  SET_MIN_COUNTER,
} from './types'

export function incrementAC(payload: number): ActionTypes {
  return { type: INCREMENT, payload } as const
}

export function resetAC(): ActionTypes {
  return { type: RESET } as const
}

export function setMinCounterAC(payload: string): ActionTypes {
  return { type: SET_MIN_COUNTER, payload } as const
}

export function setMaxCounterAC(payload: string): ActionTypes {
  return { type: SET_MAX_COUNTER, payload } as const
}

export function setCounterAC(): ActionTypes {
  return { type: SET_COUNTER } as const
}

export function setErrorAC(error: boolean): ActionTypes {
  return { type: SET_ERROR, error } as const
}
