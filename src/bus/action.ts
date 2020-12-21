import { ActionTypes, INCREMENT, RESET } from './types'

export function incrementAC(payload: number): ActionTypes {
  return { type: INCREMENT, payload }
}

export function resetAC(): ActionTypes {
  return { type: RESET }
}
