export const INCREMENT = 'INCREMENT'
type IncrementAction = {
  type: typeof INCREMENT
  payload: number
}

export const RESET = 'RESET'
type ResetAction = {
  type: typeof RESET
}

export type ActionTypes = IncrementAction | ResetAction
