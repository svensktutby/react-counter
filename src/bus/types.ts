export const INCREMENT = 'INCREMENT'
type IncrementAction = {
  type: typeof INCREMENT
  payload: number
}

export const RESET = 'RESET'
type ResetAction = {
  type: typeof RESET
}

export const SET_MIN_COUNTER = 'SET_MIN_COUNTER'
type SetMinCounterAction = {
  type: typeof SET_MIN_COUNTER
  payload: string
}

export const SET_MAX_COUNTER = 'SET_MAX_COUNTER'
type SetMaxCounterAction = {
  type: typeof SET_MAX_COUNTER
  payload: string
}

export const SET_COUNTER = 'SET_COUNTER'
type SetCounterAction = {
  type: typeof SET_COUNTER
}

export const SET_ERROR = 'SET_ERROR'
type SetErrorAction = {
  type: typeof SET_ERROR
  error: boolean
}

export const ACTIVATE_SETTER = 'ACTIVATE_SETTER'
type ActivateSetterAction = {
  type: typeof ACTIVATE_SETTER
}

export type ActionTypes =
  | IncrementAction
  | ResetAction
  | SetMinCounterAction
  | SetMaxCounterAction
  | SetCounterAction
  | SetErrorAction
  | ActivateSetterAction
