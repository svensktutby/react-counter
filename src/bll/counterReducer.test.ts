import { counterReducer, StateType } from './counterReducer';
import * as actions from './actions';

describe('counter testing', () => {
  let state: StateType;

  beforeEach(() => {
    state = {
      isSetterActive: false,
      error: false,
      counter: 0,
      minCounter: 0,
      maxCounter: 5,
    };
  });

  test('should handle increment', () => {
    // 1. data

    // 2. action
    const newState = counterReducer(state, actions.increment(1));

    // 3. expectation
    expect(newState.counter).toBe(1);
  });

  test('should handle reset', () => {
    const newState1 = counterReducer(state, actions.increment(1));
    const newState2 = counterReducer(newState1, actions.reset());

    expect(newState1.counter).toBe(1);
    expect(newState2.counter).toBe(0);
  });

  test('should handle setMinCounter', () => {
    const newState = counterReducer(state, actions.setMinCounter('3'));

    expect(newState.minCounter).toBe(3);
  });

  test('should handle setMaxCounter', () => {
    const newState = counterReducer(state, actions.setMaxCounter('8'));

    expect(newState.maxCounter).toBe(8);
  });

  test('should handle setCounter', () => {
    const newState1 = counterReducer(state, actions.setMinCounter('3'));
    const newState2 = counterReducer(newState1, actions.setCounter());

    expect(newState1.minCounter).toBe(3);
    expect(newState1.counter).toBe(0);
    expect(newState2.counter).toBe(3);
  });

  test('should handle setError', () => {
    const newState = counterReducer(state, actions.setError(true));

    expect(newState.error).toBeTruthy();
  });

  test('should handle activateSetter', () => {
    const newState = counterReducer(state, actions.activateSetter());

    expect(newState.isSetterActive).toBeTruthy();
  });
});
