import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import s from './Counter.module.css';
import { Button } from '../common/Button';
import { Scoreboard } from '../Scoreboard';
import { CounterType } from '../../store/counterStore';

type CounterPropsType = {
  className?: string;
  state: CounterType;
};

export const Counter: FC<CounterPropsType> = observer(
  ({ className, state }) => {
    const {
      isSetterActive,
      error,
      count,
      minCounter,
      maxCounter,
      increment,
      reset,
      activateSetter,
    } = state;

    const counterClassName = `${s.counter} jumbotron p-4 ${
      className ? className : ''
    }`;

    return (
      <div className={counterClassName}>
        <div className="mb-auto">
          <Scoreboard
            alarm={count >= maxCounter}
            isCounterActive={!isSetterActive}
            error={error}
          >
            {count}
          </Scoreboard>
        </div>
        <hr className="my-4 w-100" />
        <div className="btn-group btn-group-lg w-100">
          <Button
            className="btn-info w-50"
            disabled={count >= maxCounter || isSetterActive}
            onClick={() => increment(1)}
          >
            Inc
          </Button>
          <Button
            className="btn-info w-50"
            disabled={count === minCounter || isSetterActive}
            onClick={reset}
          >
            Reset
          </Button>
          <Button className="btn-info w-50" onClick={activateSetter}>
            Set
          </Button>
        </div>
      </div>
    );
  },
);
