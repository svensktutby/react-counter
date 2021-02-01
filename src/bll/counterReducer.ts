import { ActionType } from './types';
import * as actions from './actions';

export const initialState = {
  isSetterActive: false,
  error: false,
  counter: 0,
  minCounter: 0,
  maxCounter: 5,
};

export type StateType = typeof initialState;

export const counterReducer = (
  state = initialState,
  action: actions.CounterActionsType,
): StateType => {
  switch (action.type) {
    case ActionType.INCREMENT: {
      let increase = state.counter;
      if (state.counter < state.maxCounter) {
        increase = state.counter + action.payload;
        if (increase > state.maxCounter) increase = state.maxCounter;
      }
      return { ...state, counter: increase };
    }

    case ActionType.RESET:
      return { ...state, counter: state.minCounter };

    case ActionType.SET_MIN_COUNTER:
      return {
        ...state,
        minCounter: +action.payload,
      };

    case ActionType.SET_MAX_COUNTER:
      return {
        ...state,
        maxCounter: +action.payload,
      };

    case ActionType.SET_COUNTER:
      return { ...state, counter: state.minCounter, isSetterActive: false };

    case ActionType.SET_ERROR:
      return { ...state, error: action.error };

    case ActionType.ACTIVATE_SETTER:
      return { ...state, isSetterActive: true };

    default:
      return state;
  }
};
