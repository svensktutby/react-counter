import React, { FC, memo } from 'react';

import s from './Counter.module.css';
import { Button } from '../common/Button';
import { Scoreboard } from '../Scoreboard';
import * as actions from '../../bll/actions';
import { StateType } from '../../bll/counterReducer';

type CounterPropsType = {
  className?: string;
  state: StateType;
  dispatch: (props: actions.CounterActionsType) => void;
};

export const Counter: FC<CounterPropsType> = memo(
  ({ className, state, dispatch }) => {
    const { isSetterActive, error, counter, minCounter, maxCounter } = state;

    const increaseCounter = (value: number) => {
      dispatch(actions.increment(value));
    };

    const resetCounter = () => {
      dispatch(actions.reset());
    };

    const showSetter = () => {
      dispatch(actions.activateSetter());
    };

    const counterClassName = `${s.counter} jumbotron p-4 ${
      className ? className : ''
    }`;

    return (
      <div className={counterClassName}>
        <div className="mb-auto">
          <Scoreboard
            alarm={counter >= maxCounter}
            isCounterActive={!isSetterActive}
            error={error}
          >
            {counter}
          </Scoreboard>
        </div>
        <hr className="my-4 w-100" />
        <div className="btn-group btn-group-lg w-100">
          <Button
            className="btn-info w-50"
            disabled={counter >= maxCounter || isSetterActive}
            onClick={() => increaseCounter(1)}
          >
            Inc
          </Button>
          <Button
            className="btn-info w-50"
            disabled={counter === minCounter || isSetterActive}
            onClick={() => resetCounter()}
          >
            Reset
          </Button>
          <Button className="btn-info w-50" onClick={showSetter}>
            Set
          </Button>
        </div>
      </div>
    );
  },
);

Counter.displayName = 'Counter';
