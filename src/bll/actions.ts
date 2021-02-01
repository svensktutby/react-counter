import { ActionType } from './types';

// Sync
export function increment(value: number) {
  return { type: ActionType.INCREMENT, payload: value } as const;
}

export function reset() {
  return { type: ActionType.RESET } as const;
}

export function setMinCounter(value: string) {
  return { type: ActionType.SET_MIN_COUNTER, payload: value } as const;
}

export function setMaxCounter(value: string) {
  return { type: ActionType.SET_MAX_COUNTER, payload: value } as const;
}

export function setCounter() {
  return { type: ActionType.SET_COUNTER } as const;
}

export function setError(error: boolean) {
  return { type: ActionType.SET_ERROR, error } as const;
}

export function activateSetter() {
  return { type: ActionType.ACTIVATE_SETTER } as const;
}

export type CounterActionsType =
  | ReturnType<typeof increment>
  | ReturnType<typeof reset>
  | ReturnType<typeof setMinCounter>
  | ReturnType<typeof setMaxCounter>
  | ReturnType<typeof setCounter>
  | ReturnType<typeof setError>
  | ReturnType<typeof activateSetter>;
